import React from "react";
import "@styles/cv.css";
import Image from "next/image";
import Post from "@components/Post";
import Divider from "@components/Divider";
const CV = () => {
  return (
    <div className="kontener">
      <div className="links">
        <div className="left-links">
          <Image
            width={72}
            height={72}
            src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690395297/assets/facebook-icon_h5ycdi.png"
            alt="facebook"
          />
          <div className="loupe-job">
            <Image
              width={30}
              height={30}
              src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690395297/assets/loupe_jwz11k.png"
              alt="loupe"
            />
            <span className="job-title">Web Dev</span>
          </div>
        </div>

        <div className="right-links">
          <div className="img-with-name">
            <Image
              src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690450401/317331699_1661013097626700_5292683595309159309_n_usawg8.jpg"
              alt="picture"
              width={47}
              height={47}
              className="myPicture"
            />
            <span className="name">Hubert</span>
          </div>
          <div className="top-right-links">
            <Image
              src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690395297/assets/linkedin-icon_an5fd5.png"
              width={38}
              height={38}
              alt="linkedin"
            />
            <Image
              src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690395297/assets/github-icon_ym79e7.png"
              width={38}
              height={38}
              alt="github"
            />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="whole-left-content-container">
          <div className="left-content">
            <div className="left-content-main-text">Programming Languages</div>
            <div className="languages">
              <p>JavaScript / TypeScript</p>
              <p>Java</p>
              <p>HTML / CSS / SQL</p>
            </div>
            <svg
              className="divider"
              xmlns="http://www.w3.org/2000/svg"
              width="218"
              height="3"
              viewBox="0 0 218 3"
              fill="none">
              <path
                opacity="0.18"
                d="M0.5 1.5H217.5"
                stroke="#707070"
                stroke-width="2"
              />
            </svg>
            <div className="left-content-main-text">Technologies</div>
            <div className="languages">
              <p>React</p>
              <p>Redux</p>
              <p>Next.js</p>
              <p>Mongo</p>
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
            <div className="img-name">
              <Image
                src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690450401/317331699_1661013097626700_5292683595309159309_n_usawg8.jpg"
                width={84}
                height={84}
                alt="picture"
                className="myPicture"
              />
              <div className="full-name">Hubert Grzesiak</div>
            </div>
            <Divider />
            <div className="contact">
              <div className="city">
                <Image
                  src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690401584/image_2_xkpupn.png"
                  width={38}
                  height={37}
                  alt="pointer"
                />
                <span>Sieroszewice</span>
              </div>
              <div className="phone">
                <Image
                  src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690401584/smartphone_hutrxc.png"
                  width={29}
                  height={29}
                  alt="phone"
                />
                <span>734 667 ***</span>
              </div>
              <div className="email">
                <Image
                  src="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690401584/email_1_xycgv6.png"
                  width={38}
                  height={39}
                  alt="email"
                />
                <span>hubertgrzesiak.dev@gmail.com</span>
              </div>
            </div>
          </div>
          <Post
            company="Microsoft"
            location="LA"
            jobTitle="WebDev"
            date="2023"
            description="Ut aut pelit ea vid untotatior seratin imperit omnihilibus endi te cones eos perchil evendion consequ assinventias dolorei cipsae in recus debis nest am nectum quam ipiciet hiliquis aribusciunt.
Lupta diciendest unt aturiatior ad ma doles ut dolorrum volupta qui cus, officab oritibus.
Da inimil in comnis il es a nitiunde ni ommolorerum volut et idisqui omnietur, nem resed molenimus eari corioreiur sin numet velesequi verspietur."
            image="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690401583/microsoft-5_wsmtot.svg"
          />
          <Post
            company="AirBnb"
            location="LA"
            jobTitle="WebDev"
            date="2023"
            description="Ut aut pelit ea vid untotatior seratin imperit omnihilibus endi te cones eos perchil evendion consequ assinventias dolorei cipsae in recus debis nest am nectum quam ipiciet hiliquis aribusciunt.
Lupta diciendest unt aturiatior ad ma doles ut dolorrum volupta qui cus, officab oritibus.
Da inimil in comnis il es a nitiunde ni ommolorerum volut et idisqui omnietur, nem resed molenimus eari corioreiur sin numet velesequi verspietur."
            image="https://res.cloudinary.com/dev6yhoh3/image/upload/v1690401583/airbnb-1_fjn7ci.svg"
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
