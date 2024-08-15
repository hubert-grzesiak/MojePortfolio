import Image from "next/image";
import Navbar from "../components/Navbar";
import Typography from "../components/Typography";
import copyImage from "../../../public/images/copy.png";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="bg-white-800 w-full px-4 pb-[75px] pt-9">
      <div className="mx-auto w-full max-w-[1270px]">
        <Navbar />
        <div className="mt-[54px] flex w-full gap-[54px]">
          <div className="w-full max-w-[580px]">
            <Typography
              as="h2"
              className="text-primary-light mb-[17px] text-[20px] font-semibold leading-[26px] tracking-[5px]"
            >
              HI, I AM HUBERT
            </Typography>
            <Typography
              as="h1"
              className="text-black-200 mb-[10px] max-w-[446px] text-[56px] font-bold leading-[64px] tracking-tighter"
            >
              Professional <br /> Web Developer based in Poland
            </Typography>
            <Typography className="text-white-500 mb-[30px] max-w-[510px]">
              Transforming the web one line of code at a time: Crafting
              cutting-edge digital experiences with precision, passion, and a
              profound commitment to excellence
            </Typography>
            <div className="flex w-full gap-[18px]">
              <Link href="/case-studies">
                <Typography className="text-white-900 bg-primary-light h-[69px] w-[186px] gap-2.5 rounded-[9000px] px-3 py-5 text-center font-semibold">
                  My Work
                </Typography>
              </Link>
              <Typography className="text-white-500 bg-white-900 flex h-[69px] items-center gap-[18px] rounded-[9000px] px-6 py-5 font-semibold">
                hubertgrzesiak.dev@gmail.com
                <Image
                  src={copyImage}
                  alt="contact button"
                  className="h-[21px] w-[21px] shrink-0 hover:cursor-pointer"
                />
              </Typography>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
