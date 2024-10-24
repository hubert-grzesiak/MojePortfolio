import Typography from "@components/shared/Typography";
import Link from "next/link";
import CopyButton from "@components/v2/home/CopyButton";
import Image from "next/image";
import heroImage from "@//public/svgs/hero-image.svg";
import { cn } from "@lib/utils";
import GradientImage from "@//public/images/gradient-brutalism.png";

const Hero = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "shadow-brutalismLight relative w-full overflow-hidden rounded-2xl bg-white-800 px-6 pt-[120px] dark:bg-black-300 md:px-0 md:pt-0",
        className,
      )}
    >
      <Image src={GradientImage} fill alt="bg" className="rounded-[20px]" />
      <div className="relative mx-auto flex w-full max-w-[1270px] flex-col items-center md:mb-[37px] md:flex-row md:pl-[30px] md:pt-[114px] lg:mb-[43px] lg:pt-[119px]">
        <div className="w-full max-w-[580px]">
          <Typography
            as="h2"
            className="mb-5 text-[14px] font-semibold leading-[18px] tracking-[6px] text-[#fea92e] md:mb-[17px] md:text-[20px] md:leading-[26px] lg:mb-[27px]"
          >
            HI, I AM HUBERT
          </Typography>
          <Typography
            as="h1"
            className="mb-[14px] w-full text-[42px] !font-bold leading-[48px] dark:text-black-200 md:mb-[10px] md:max-w-[455px] md:text-[56px] md:leading-[64px] lg:max-w-[534px] lg:text-[64px] lg:!leading-[84px]"
          >
            Seasoned <br />
            <span className="highlighted-text">Web Developer</span> <br />
            based in Poland
          </Typography>
          <Typography className="mb-5 max-w-[510px] text-[12px] leading-[19px] text-white-500 md:mb-[30px] md:text-[18px] md:leading-[29px] lg:mb-[36px]">
            Transforming the web one line of code at a time: Crafting
            cutting-edge digital experiences with precision, passion, and a
            profound commitment to excellence
          </Typography>
          <div className="flex w-full flex-col gap-[14px] md:flex-row md:gap-[18px]">
            <Link href="/case-studies">
              <Typography className="brutalism h-[48px] w-full gap-2.5 rounded-[9000px] bg-[#fea92e] px-[8px] py-[13px] text-center text-[14px] font-semibold leading-[22px] text-white-900 md:h-[69px] md:w-[186px] md:px-3 md:py-5 md:text-[16px] lg:text-[18px]">
                My Work
              </Typography>
            </Link>
            <CopyButton />
          </div>
        </div>
        <div className="relative h-[345px] w-[345px] shrink-0 translate-y-[20px] md:ml-[55px] md:h-[489px] md:w-[489px] lg:ml-[40px] lg:h-[632px] lg:w-[632px]">
          <Image
            src={heroImage}
            alt="hero image"
            className="h-[345px] w-[345px] shrink-0 md:h-[489px] md:w-[489px] lg:h-[632px] lg:w-[632px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;