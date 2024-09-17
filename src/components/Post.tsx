import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/28407813/pexels-photo-28407813/free-photo-of-blackletes.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt="user"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover "
          />
          <span className="font-medium">Jack McBride</span>
        </div>
        <Image src="/more.png" alt="user" width={16} height={16} />
      </div>
      {/* DESCRIPTION */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="w-full min-h-96 relative">
          <Image
            alt="Woman sitting on a tree branch with a guitar" // Descriptive alt text
            src="https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          impedit, dignissimos sapiente natus eveniet fugiat fugit hic voluptas,
          veniam ipsum, illum aut officia. Asperiores quisquam officia fugiat
          maxime, dolore quia.
        </p>
      </div>
      {/* iNTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8 ">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              alt="like"
              src="/like.png"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              500 <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              alt="like"
              src="/comment.png"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              500 <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              alt="like"
              src="/share.png"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              11 <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <Comments />
      </div>
    </div>
  );
};

export default Post;
