import { Button } from "@components/ui/button";
import ProjectCard from "../components/ProjectCard";
import Typography from "../components/Typography";
import ctaImage from "../../../public/images/CTA.png";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <section className="w-full bg-white-900 py-[72px]">
      <div className="relative mx-auto w-full max-w-[1400px] px-[70px] py-[82px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={ctaImage}
            alt="Get in touch"
            fill
            className="rounded-[20px] object-cover"
          />
        </div>
        <div className="relative z-10 flex h-full w-full items-end justify-between">
          <Typography
            as="h2"
            variant={"h2"}
            className="!text-left !font-bold text-black-200"
          >
            Have a project in <br /> mind that requires <br /> technical
            expertise?
          </Typography>
          <Button className="bottom-0 h-[69px] w-full max-w-[323px] rounded-full bg-primary-light px-3 py-5 hover:bg-primary-light/90">
            <Typography className="text-center text-[18px] font-semibold leading-[29px] text-white-900">
              See more case studies
            </Typography>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
