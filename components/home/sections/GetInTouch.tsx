import { Button } from "@components/ui/button";
import Typography from "../components/Typography";
import ctaImage from "../../../public/images/CTA.png";
import Image from "next/image";
import { ButtonArrow } from "../components/icons";

const GetInTouch = () => {
  return (
    <section className="w-full bg-white-900 py-[72px] dark:bg-black-200 md:px-[30px]">
      <div className="relative mx-auto w-full max-w-[1400px] md:px-[36px] md:py-[56px] lg:px-[70px] lg:py-[82px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={ctaImage}
            alt="Get in touch"
            fill
            className="max-w-[1399px]:max-w-[1064px] rounded-[20px] object-cover lg:max-w-[1400px]"
          />
        </div>
        <div className="relative z-10 flex h-full w-full items-end justify-between">
          <Typography
            as="h2"
            variant={"h2"}
            className="!text-left !font-bold text-black-200 md:text-[44px] md:leading-[50px] lg:text-[48px] lg:leading-[55px]"
          >
            Have a project in <br /> mind that requires <br /> technical
            expertise?
          </Typography>
          <Button className="bottom-0 h-[69px] w-full max-w-[323px] rounded-full bg-primary-light px-3 py-5 hover:bg-primary-light/90">
            <Typography className="flex items-center gap-2.5 text-center text-[18px] font-semibold leading-[29px] text-white-900">
              Get in Touch with Me <ButtonArrow />
            </Typography>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
