import Typography from "../components/Typography";
import Link from "next/link";
import CopyButton from "../components/CopyButton";
import Image from "next/image";
import heroImage from "../../../public/images/hero-image.png";
import { cn } from "@lib/utils";

const Hero = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "w-full overflow-hidden bg-white-800 dark:bg-black-300",
        className,
      )}
    >
      <div className="relative mx-auto flex w-full max-w-[1400px] items-center md:mb-[37px] md:pl-[30px] md:pt-[114px] lg:mb-[43px] lg:pt-[119px]">
        <div className="w-full max-w-[580px]">
          <Typography
            as="h2"
            className="text-[20px] font-semibold leading-[26px] tracking-[6px] text-[#fea92e] md:mb-[17px] lg:mb-[27px]"
          >
            HI, I AM HUBERT
          </Typography>
          <Typography
            as="h1"
            className="mb-[10px] w-full !font-bold text-black-200 dark:text-white-900 md:max-w-[455px] md:text-[56px] md:leading-[64px] lg:max-w-[534px] lg:text-[64px] lg:leading-[84px]"
          >
            Seasoned <br />
            <span className="highlighted-text">Web Developer</span> <br />
            based in Poland
          </Typography>
          <Typography className="max-w-[510px] text-white-500 md:mb-[30px] lg:mb-[36px]">
            Transforming the web one line of code at a time: Crafting
            cutting-edge digital experiences with precision, passion, and a
            profound commitment to excellence
          </Typography>
          <div className="flex w-full gap-[18px]">
            <Link href="/case-studies">
              <Typography className="h-[69px] w-[186px] gap-2.5 rounded-[9000px] bg-[#fea92e] px-3 py-5 text-center font-semibold text-white-900 md:text-[16px] lg:text-[18px]">
                My Work
              </Typography>
            </Link>
            <CopyButton />
          </div>
        </div>
        <div className="relative w-full shrink-0 md:ml-[55px] md:h-[489px] md:w-[489px] lg:ml-[127px] lg:h-[632px] lg:w-[632px]">
          <div className="mainPhotoLightDim dark:mainPhotoDarkDim absolute md:-bottom-[23px] md:-left-[23px] md:h-[400px] md:w-[126px] lg:-left-[30px] lg:bottom-[30px] lg:h-[516px] lg:w-[163px]" />
          <Image
            src={heroImage}
            alt="hero image"
            className="shrink-0 md:h-[489px] md:w-[489px] lg:h-[632px] lg:w-[632px]"
          />
          <div className="mainPhotoLightDim dark:mainPhotoDarkDim md: absolute rotate-180 md:h-[400px] md:w-[126px] lg:-right-[39px] lg:bottom-[30px] lg:h-[516px] lg:w-[163px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
