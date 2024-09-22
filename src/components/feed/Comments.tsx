import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/28455224/pexels-photo-28455224/free-photo-of-stylish-woman-in-denim-bucket-hat-fashion-portrait.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          width={32}
          alt="profile"
          height={32}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className=" flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            className="bg-transparent outline-none flex-1"
            type="text"
            placeholder="Write a comment..."
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer  w-4 h-4"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="flex gap-4 justify-between mt-6">
        {/* COMMENTS */}
        <div className="">
          {/* AVATER */}
          <Image
            src="https://images.pexels.com/photos/28455224/pexels-photo-28455224/free-photo-of-stylish-woman-in-denim-bucket-hat-fashion-portrait.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            width={40}
            alt="profile"
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        {/* DESC */}
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium">Bernice Spencer</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quasi repudiandae eos suscipit id sed provident magni doloremque
            numquam, sint, voluptates consequuntur similique? Eaque dolorem
            accusantium, doloribus ea ad est?
          </p>
          <div className="flex items-center gap-8 text-xs text-gray-500 mt-2 ">
            <div className="flex items-center gap-4">
              <Image
                src="/like.png"
                alt=""
                width={12}
                height={12}
                className="cursor-pointer w-3 h-3"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">123 Likes</span>
            </div>
            <div className="">Reply</div>
          </div>
        </div>
        {/* ICON */}
        <Image
          src="/more.png"
          alt=""
          width={16}
          height={16}
          className="cursor-pointer w-4 h-4"
        />
      </div>
    </div>
  );
};

export default Comments;
