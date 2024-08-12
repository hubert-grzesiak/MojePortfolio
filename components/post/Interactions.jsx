import React from "react";
import Divider from "@components/Divider";
import Image from "next/image";

const Interactions = () => {
  return (
    <div className="flex flex-col gap-3 my-5 ">
      <Divider className="h-[0.1px]" />
      <div className="flex justify-around">
        <div className="like">
          <Image
            src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690401583/like-3_1_hdpiis.png"
            width={22}
            height={22}
            alt="like"
          />
          <span>Like</span>
        </div>
        <div className="comment">
          <Image
            src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690401583/comente-1_hdqfyu.png"
            width={22}
            height={22}
            alt="comment"
          />
          <span>Comment</span>
        </div>
        <div className="share">
          <Image
            src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690401583/share-1_jgguxs.png"
            width={22}
            height={22}
            alt="share"
          />
          <span>Share</span>
        </div>
      </div>
      <Divider className="h-[0.1px]" />
    </div>
  );
};

export default Interactions;
