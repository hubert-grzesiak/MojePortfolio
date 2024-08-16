import Navbar from "../components/Navbar";
import Typography from "../components/Typography";
import Link from "next/link";
import CopyButton from "../components/CopyButton";
const Hero = () => {
  return (
    <section className="w-full bg-white-800 px-4 pb-[75px] pt-9">
      <div className="mx-auto w-full max-w-[1270px]">
        <Navbar />
        <div className="mt-[54px] flex w-full gap-[54px]">
          <div className="w-full max-w-[580px]">
            <Typography
              as="h2"
              className="mb-[17px] text-[20px] font-semibold leading-[26px] tracking-[5px] text-primary-light"
            >
              HI, I AM HUBERT
            </Typography>
            <Typography
              as="h1"
              className="mb-[10px] max-w-[446px] text-[56px] !font-bold leading-[64px] tracking-tighter text-black-200"
            >
              Professional <br /> Web Developer based in Poland
            </Typography>
            <Typography className="mb-[30px] max-w-[510px] text-white-500">
              Transforming the web one line of code at a time: Crafting
              cutting-edge digital experiences with precision, passion, and a
              profound commitment to excellence
            </Typography>
            <div className="flex w-full gap-[18px]">
              <Link href="/case-studies">
                <Typography className="h-[69px] w-[186px] gap-2.5 rounded-[9000px] bg-primary-light px-3 py-5 text-center font-semibold text-white-900">
                  My Work
                </Typography>
              </Link>
              <CopyButton />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
