import Image from "next/image";
import prisma from "../lib/client";

const Stories = async () => {
  const stories = await prisma.story;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll  text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* STory */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            width={80}
            height={80}
            src="https://images.pexels.com/photos/21833106/pexels-photo-21833106/free-photo-of-bike-with-wicker-basket-pinned-to-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>

        {/* STory */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            width={80}
            height={80}
            src="https://images.pexels.com/photos/21833106/pexels-photo-21833106/free-photo-of-bike-with-wicker-basket-pinned-to-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>

        {/* STory */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            width={80}
            height={80}
            src="https://images.pexels.com/photos/21833106/pexels-photo-21833106/free-photo-of-bike-with-wicker-basket-pinned-to-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>

        {/* STory */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            width={80}
            height={80}
            src="https://images.pexels.com/photos/21833106/pexels-photo-21833106/free-photo-of-bike-with-wicker-basket-pinned-to-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>

        {/* STory */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            width={80}
            height={80}
            src="https://images.pexels.com/photos/21833106/pexels-photo-21833106/free-photo-of-bike-with-wicker-basket-pinned-to-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* STory */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            width={80}
            height={80}
            src="https://images.pexels.com/photos/21833106/pexels-photo-21833106/free-photo-of-bike-with-wicker-basket-pinned-to-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* STory */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            width={80}
            height={80}
            src="https://images.pexels.com/photos/21833106/pexels-photo-21833106/free-photo-of-bike-with-wicker-basket-pinned-to-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* STory */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            width={80}
            height={80}
            src="https://images.pexels.com/photos/21833106/pexels-photo-21833106/free-photo-of-bike-with-wicker-basket-pinned-to-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* STory */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            width={80}
            height={80}
            src="https://images.pexels.com/photos/21833106/pexels-photo-21833106/free-photo-of-bike-with-wicker-basket-pinned-to-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* STory */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            width={80}
            height={80}
            src="https://images.pexels.com/photos/21833106/pexels-photo-21833106/free-photo-of-bike-with-wicker-basket-pinned-to-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* STory */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            width={80}
            height={80}
            src="https://images.pexels.com/photos/21833106/pexels-photo-21833106/free-photo-of-bike-with-wicker-basket-pinned-to-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* STory */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            width={80}
            height={80}
            src="https://images.pexels.com/photos/21833106/pexels-photo-21833106/free-photo-of-bike-with-wicker-basket-pinned-to-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
