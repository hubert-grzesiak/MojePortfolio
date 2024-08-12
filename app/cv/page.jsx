import React from "react";
import "@styles/cv.css";
import Image from "next/image";
import Post from "@components/post/Post";
import Divider from "@components/Divider";

const CV = () => {
  return (
    <div className="kontener text-sm lg:text-base mx-auto">
      <div className="links">
        <div className="left-links">
          <div className="lg:w-[72px] lg:h-[72px] relative h-[60px] w-[60px]">
            <Image
              src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690395297/assets/facebook-icon_h5ycdi.png"
              alt="facebook"
              fill
            />
          </div>
          <div className="loupe-job">
            <div className="lg:w-[30px] lg:h-[30px] relative h-[24px] w-[24px]">
              <Image
                fill
                src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690395297/assets/loupe_jwz11k.png"
                alt="loupe"
              />
            </div>
            <span className="job-title">Web Dev</span>
          </div>
        </div>

        <div className="right-links gap-2 lg:gap-10 lg:w-full">
          <div className="img-with-name">
            <div className="w-[50px] h-[50px] relative rounded-full">
              <Image
                src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1723471058/portfolio/3D402557-DD54-4F55-87A2-4194940B68FC_1_201_a_fz9tge.jpg"
                fill
                alt="picture"
                className="object-cover shrink-0 rounded-full"
              />
            </div>
            <span className="name min-[500px]:block hidden">Hubert</span>
          </div>
          <div className="flex items-center lg:gap-4 gap-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.linkedin.com/in/hubertgrzesiakjs/"}
              className="relative lg:w-[38px] lg:h-[38px] w-[30px] h-[30px]">
              <Image
                src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690395297/assets/linkedin-icon_an5fd5.png"
                fill
                alt="linkedin"></Image>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/hubert-grzesiak"}
              className="relative lg:w-[38px] lg:h-[38px] w-[30px] h-[30px]">
              <Image
                src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690395297/assets/github-icon_ym79e7.png"
                fill
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="content flex justify-between flex-col-reverse lg:flex-row lg:gap-4 ">
        <div className="whole-left-content-container">
          <div className="left-content">
            <div className="left-content-main-text">Programming Languages</div>
            <div className="languages">
              <p>JavaScript / TypeScript</p>
              <p>Java</p>
              <p>HTML / CSS / SQL</p>
            </div>
            <Divider className={"my-[25px]"} />
            <div className="left-content-main-text">Technologies</div>
            <div className="languages">
              <p>React</p>
              <p>Next.js</p>
              <p>Tailwind CSS</p>
              <p>Storybook</p>
              <p>MongoDB</p>
              <p>Microsoft SQL Server</p>
            </div>
          </div>
          <div className="left-content">
            <div className="left-content-main-text">Soft Skills</div>
            <div className="languages">
              <p>Humility</p>
              <p>Teamwork</p>
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="personal-data">
            <div className="flex items-center mb-3 gap-3">
              <div className="w-[70px] h-[70px] relative rounded-full shrink-0">
                <Image
                  src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1723471058/portfolio/3D402557-DD54-4F55-87A2-4194940B68FC_1_201_a_fz9tge.jpg"
                  fill
                  alt="picture"
                  className="object-cover shrink-0 rounded-full"
                />
              </div>
              <div className="full-name lg:text-[24px] text-lg">
                Hubert Grzesiak
              </div>
            </div>
            <Divider />
            <div className="contact text-sm lg:text-base">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.pl/maps/place/62-800+Kalisz/@51.74729,17.9936581,12z/data=!3m1!4b1!4m6!3m5!1s0x471ac5913393e6a7:0x719f8f40ae38aad3!8m2!3d51.7672799!4d18.0853462!16zL20vMGp4NnY?entry=ttu"
                className="city lg:flex hidden">
                <Image
                  src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690401584/image_2_xkpupn.png"
                  width={38}
                  height={37}
                  alt="pointer"
                />
                <span>Kalisz</span>
              </a>
              <div className="phone lg:flex hidden">
                <Image
                  src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690401584/smartphone_hutrxc.png"
                  width={29}
                  height={29}
                  alt="phone"
                />
                <span>734 667 ***</span>
              </div>
              <a href="mailto: hubertgrzesiak.dev@gmail.com" className="email ">
                <img
                  src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690401584/email_1_xycgv6.png"
                  alt="email"
                  className="lg:w-[38px] lg:h-[39px] w-[30px] h-[30px]"
                />
                <p>hubertgrzesiak.dev@gmail.com</p>
              </a>
            </div>
          </div>
          <Post
            company="Helpfind Odszkodowania"
            location="Ostrów Wlkp."
            jobTitle="Junior Frontend Developer"
            date="2024 - now"
            description="I am responsible for creating websites and web applications. I work with technologies such as React.js, Next.js, and Tailwind CSS. I am also responsible for creating the company's website and implementing new functionalities."
            image="https://res.cloudinary.com/dev6yhoh3/image/upload/v1723475223/portfolio/helpfind-logo_trnuzu.jpg"
            imageClassName="rounded-full"
          />
          <Post
            company="Helpfind Odszkodowania"
            location="Ostrów Wlkp."
            jobTitle="Intern Frontend Developer"
            date="2023 - 2024"
            description="I was responsible for creating websites and web applications. I worked with technologies such as React.js, Next.js, and Tailwind CSS. I was also responsible for creating the company's website and implementing new functionalities."
            image="https://res.cloudinary.com/dev6yhoh3/image/upload/v1723475223/portfolio/helpfind-logo_trnuzu.jpg"
            imageClassName="rounded-full"
          />
          <div className="education">
            <p className="education-title">Education</p>
            <div className="education-data">
              <p>Akademia Kaliska im. Prezydenta Stanisława Wojciechowskiego</p>
              <p>Computer science, polytechnic faculty, engineering studies</p>
              <p>2021 - now</p>
            </div>
          </div>
          <div className="education">
            <p className="education-title">Hobby</p>
            <div className="education-data">
              <p>
                I am interested in creating websites with the latest
                technologies such as Next.js. I spend my free time learning new
                things to always be up to date. Apart from programming, I love
                calisthenics and cooking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CV;
