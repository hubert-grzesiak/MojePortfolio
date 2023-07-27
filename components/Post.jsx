import React from "react";
import Image from "next/image";
import Divider from "./Divider";
import Head from "next/head";
const Post = ({ company, location, jobTitle, date, description, image }) => {
  return (
    <>
      <div className="post">
        <div className="post-top">
          <Image src={image} width={57} height={57} alt={company} />
          <div className="post-top-data">
            <p className="experience">Experience</p>
            <div className="job-data">
              {company} ∙ {location} ∙ {jobTitle} ∙ {date}{" "}
              <Image
                src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690402626/2231957_earth_globe_notification_icon_mqqrx7.png"
                width={32}
                height={32}
                alt="global"
              />
            </div>
          </div>
        </div>
        <Divider />
        <p className="description">{description}</p>
        <Divider />
        <div className="interactive">
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
        <Divider />
        <div className="post-bottom">
          <Image
            src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690450401/317331699_1661013097626700_5292683595309159309_n_usawg8.jpg"
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
