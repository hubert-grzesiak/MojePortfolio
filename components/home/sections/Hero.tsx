import Navbar from "../components/Navbar";
import Typography from "../components/Typography";
import Link from "next/link";
import CopyButton from "../components/CopyButton";
import Image from "next/image";
import heroImage from "../../../public/svgs/hero-image.svg";
import { cn } from "@lib/utils";

const Hero = ({ className }: { className?: string }) => {
  return (
    <section className={cn("w-full bg-white-800 px-4", className)}>
      <div className="mx-auto w-full max-w-[1400px]">
        <Navbar className="pt-9" />
        <div className="flex w-full gap-[50px] pt-[90px]">
          <div className="w-full max-w-[580px]">
            <Typography
              as="h2"
              className="text=[#441549] mb-[17px] text-[20px] font-semibold leading-[26px] tracking-[5px]"
            >
              HI, I AM HUBERT
            </Typography>
            <Typography
              as="h1"
              className="mb-[10px] max-w-[534px] text-[64px] !font-bold leading-[84px] text-black-200"
            >
              Seasoned <br />
              <span className="highlighted-text">Web Developer</span> <br />
              based in Poland
            </Typography>
            <Typography className="mb-[30px] max-w-[510px] text-white-500">
              Transforming the web one line of code at a time: Crafting
              cutting-edge digital experiences with precision, passion, and a
              profound commitment to excellence
            </Typography>
            <div className="flex w-full gap-[18px]">
              <Link href="/case-studies">
                <Typography className="bg-gradient-custom h-[69px] w-[186px] gap-2.5 rounded-[9000px] px-3 py-5 text-center font-semibold text-white-900">
                  My Work
                </Typography>
              </Link>
              <CopyButton />
            </div>
          </div>
          <Image src={heroImage} alt="hero image" className="mb-2.5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
