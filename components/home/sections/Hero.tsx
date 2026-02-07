import Typography from "../../shared/Typography";
import Link from "next/link";
import CopyButton from "@components/home/CopyButton";
import Image from "next/image";
import heroImage from "../../../public/svgs/hero-image.svg";
import { cn } from "@lib/utils";
import Lightning from "./Lightning"
import Ballpit from './Ballpit'
const Hero = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "w-full overflow-hidden bg-white-800 px-6 pt-[120px] pb-[60px] dark:bg-black-300 md:px-0 md:pt-0",
        className,
      )}
    >
   <div className="absolute overflow-hidden xl:max-h-[729px] w-full max-h-[563px] min-h-[563px] top-0 left-0 z-[1]" >
  <Ballpit
    count={100}
    gravity={0.01}
    friction={0.9975}
    wallBounce={0.95}
    followCursor={false}
    colors={["#ffae00","#000000","#ffffff"]}
className=""
  />
</div>
      <div className="relative mx-auto flex w-full max-w-[1270px] flex-col items-center md:mb-[37px] md:flex-row md:pl-[30px] md:pt-[114px] lg:mb-[43px] lg:pt-[119px] z-[2]">
        <div className="w-full max-w-[580px] mx-auto">
          <Typography
            as="p"
            className="mb-5 text-[14px] font-semibold leading-[18px] tracking-[6px] text-[#fea92e] md:mb-[17px] md:text-[20px] md:leading-[26px] lg:mb-[27px] text-center"
          >
            HI, I AM HUBERT
          </Typography>
          <Typography
            as="h1"
            className="mb-[14px] w-full text-[42px] !font-bold leading-[48px] text-black-200 dark:text-white-900 md:mb-[10px] md:max-w-[455px] md:text-[56px] md:leading-[64px] lg:max-w-[534px] lg:text-[64px] lg:!leading-[84px] text-center"
          >
            Seasoned <br />
            <span className="highlighted-text">Web Developer</span> <br />
            based in Poland
          </Typography>
          <Typography className="mb-5 max-w-[510px] text-[12px] leading-[19px] text-white-500 dark:text-white-800/70 md:mb-[30px] md:text-[18px] md:leading-[29px] lg:mb-[36px] text-center">
            Transforming the web one line of code at a time: Crafting
            cutting-edge digital experiences with precision, passion, and a
            profound commitment to excellence
          </Typography>
          <div className="flex w-full flex-col gap-[14px] md:flex-row md:gap-[18px]">
            <Link href="/case-studies">
              <Typography className="h-[48px] w-full gap-2.5 rounded-[9000px] bg-[#fea92e] px-[8px] py-[13px] text-center text-[14px] font-semibold leading-[22px] text-white-900 md:h-[69px] md:w-[186px] md:px-3 md:py-5 md:text-[16px] lg:text-[18px]">
                My Work
              </Typography>
            </Link>
            <CopyButton />
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Hero;
