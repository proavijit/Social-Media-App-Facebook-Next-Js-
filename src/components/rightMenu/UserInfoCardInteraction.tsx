"use client";

import { useOptimistic, useState } from "react";
import { switchBlock, switchFollow } from "../../lib/actions";

const UserInfoCardInteraction = ({
  userId,

  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;

  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followRequestsSent: isFollowingSent,
  });

  const follow = async () => {
    switchOptimisticState("follow");
    await switchFollow(userId);
    setUserState((prev) => ({
      ...prev,
      following: prev.following && false,
      followRequestsSent:
        !prev.following && !prev.followRequestsSent ? true : false,
    }));
    try {
    } catch (error) {}
  };

  const block = async () => {
    switchOptimisticState("block");
    try {
      await switchBlock(userId);
      setUserState((prev) => ({
        ...prev,
        blocked: !prev.blocked,
      }));
    } catch (error) {}
  };

  const [potimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...state,
            following: state.following && false,
            followRequestsSent:
              !state.following && !state.followRequestsSent ? true : false,
          }
        : { ...state, blocked: !state.blocked }
  );

  return (
    <>
      <form action={follow}>
        <button className="bg-blue-500 w-full text-white text-sm rounded-md p-2">
          {potimisticState.following
            ? "Following"
            : potimisticState.followRequestsSent
            ? "Friend Request Send"
            : "Follow"}
        </button>
      </form>
      <form action={block} className="self-end">
        <button>
          <span className="text-red-400  text-xs cursor-pointer">
            {potimisticState.blocked ? "Unblock User" : "Block User"}
          </span>
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
