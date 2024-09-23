import { auth } from "@clerk/nextjs/server";
import { Post as PostType, User } from "@prisma/client";
import Image from "next/image";
import Comments from "../feed/Comments";
import PostInteraction from "./PostInteraction";

type FeedPostType = PostType & { user: User } & {
  likes: [{ userId: string }];
} & {
  _count: { comments: number };
};

const Post = ({ post }: { post: FeedPostType }) => {
  const { userId } = auth();
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avater || "/noAvatar.png"}
            alt="user"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover "
          />
          <span className="font-medium">
            {post.user.name && post.user.surname
              ? post.user.name + " " + post.user.surname
              : post.user.username}
          </span>
        </div>
        <Image src="/more.png" alt="user" width={16} height={16} />
      </div>
      {/* DESCRIPTION */}
      <div className="flex flex-col gap-4 mt-4">
        {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              alt="Woman sitting on a tree branch with a guitar" // Descriptive alt text
              src={post.img}
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}
        <p>{post.desc}</p>
      </div>
      {/* iNTERACTION */}
      <PostInteraction
        postId={post.id}
        likes={post.likes.map((like) => like.userId)}
        commentNumber={post._count.comments}
      />
      <div className="">
        <Comments postId={post.id} />
      </div>
    </div>
  );
};

export default Post;
