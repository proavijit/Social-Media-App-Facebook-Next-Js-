import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATER */}
      <Image
        src="https://images.pexels.com/photos/28271465/pexels-photo-28271465/free-photo-of-a-church-tower-with-a-clock-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className=" flex-1">
        {/* TEXT INPUT */}
        <div className="flex ">
          <textarea
            className="bg-slate-100 rounded-lg flex-1 p-2"
            name=""
            placeholder="What's on your mind?"
            id=""
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-4 h-4 sef cursor-pointer"
          />
        </div>
        {/* POST OPTION */}
        <div className="flex items-center gap-4 mt-4 to-gray-400 flex-wrap">
          <div className="flex items-center gap-2  cursor-pointer ">
            <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
              <Image
                src="/addimage.png"
                alt="addPhoto"
                width={20}
                height={20}
              />
              Photo
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
            <Image src="/addVideo.png" alt="addPhoto" width={20} height={20} />
            Video
          </div>

          <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
            <Image src="/poll.png" alt="addPhoto" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
            <Image src="/addevent.png" alt="addevent" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
