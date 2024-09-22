import { User } from "@prisma/client";
import { Suspense } from "react";
import Ad from "../Ad";
import UserMediaCard from "./UserMediaCard";
import Birthday from "./Birthday";
import FriendRequest from "./FriendRequest";
import UserInfoCard from "./UserInfoCard";

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequest />
      <Birthday />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
