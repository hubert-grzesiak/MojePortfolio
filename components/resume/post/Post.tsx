import React from "react";
import Image from "next/image";
import Divider from "@components/Divider";
import Interactions from "./Interactions";
import { cn } from "@lib/utils";

const Post = ({
  company,
  location,
  jobTitle,
  date,
  description,
  image,
  imageClassName,
}: {
  company: string;
  location: string;
  jobTitle: string;
  date: string;
  description: string;
  image: string;
  imageClassName?: string;
}) => {
  return (
    <>
      <div className="post text-sm lg:text-base">
        <div className="post-top">
          <div className="lg:w-[55px] lg:h-[55px] w-[50px] h-[50px] relative shrink-0">
            <Image
              src={image}
              width={57}
              height={57}
              alt={company}
              className={cn("shrink-0 object-cover", imageClassName)}
            />
          </div>
          <div className="post-top-data">
            <p className="experience">Experience</p>
            <div className="job-data">
              {company} ∙ {location} ∙ {jobTitle} ∙ {date}{" "}
              <Image
                src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690402626/2231957_earth_globe_notification_icon_mqqrx7.png"
                width={32}
                height={32}
                alt="global"
                className={imageClassName}
              />
            </div>
          </div>
        </div>
        <Divider className="mt-4 mb-2" />
        <p className="my-2.5 text-left">{description}</p>
        <Interactions />
        <div className="post-bottom">
          <Image
            src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1723471058/portfolio/3D402557-DD54-4F55-87A2-4194940B68FC_1_201_a_fz9tge.jpg"
            width={40}
            height={40}
            alt="profile-picture"
            className="myPicture"
          />
          <div className="write-comment">
            <p>Write a comment...</p>
            <Image
              src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690401583/smile-2_afpbm4.png"
              width={20}
              height={20}
              alt="emote"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
