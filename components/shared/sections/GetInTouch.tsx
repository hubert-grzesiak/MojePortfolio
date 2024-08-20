import { Button } from "@components/ui/button";
import Typography from "@components/shared/Typography";
import ctaImage from "../../../public/images/CTA.png";
import Image from "next/image";
import { ButtonArrow } from "@components/icons";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <section className="w-full bg-white-900 px-[24px] py-[48px] dark:bg-black-200 md:px-[30px] md:py-[72px]">
      <div className="relative mx-auto w-full max-w-[1270px] px-[18px] py-[78px] md:px-[36px] md:py-[56px] lg:px-[70px] lg:py-[82px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={ctaImage}
            alt="Get in touch"
            fill
            className="max-w-[1399px]:max-w-[1064px] rounded-[20px] object-cover lg:max-w-[1270px]"
          />
        </div>
        <div className="relative z-10 flex h-full w-full flex-col items-end justify-between md:flex-row">
          <Typography
            as="h2"
            className="w-full pb-6 !text-left text-[30px] !font-bold leading-[31px] text-black-200 md:pb-0 md:text-[44px] md:leading-[50px] lg:text-[48px] lg:leading-[55px]"
          >
            Have a project in <br /> mind that requires <br /> technical
            expertise?
          </Typography>
          <Link
            href="/contact"
            className="flex h-[47px] w-full justify-end md:h-auto"
          >
            <Button className="bottom-0 h-[47px] w-full rounded-full bg-primary-light px-2 py-[14px] hover:bg-primary-light/90 md:h-[69px] md:w-[310px] md:max-w-[323px] md:px-3 md:py-5">
              <Typography className="flex items-center gap-2.5 text-center text-[14px] font-semibold leading-[22px] text-white-900 md:text-[18px] md:leading-[29px]">
                Get in Touch with Me <ButtonArrow />
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
