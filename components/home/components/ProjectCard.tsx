import { cn } from "@lib/utils";
import Image from "next/image";
import Typography from "./Typography";
import restlyImage from "../../../public/images/projects/restly.png";
import Link from "next/link";
interface Props extends React.ComponentPropsWithoutRef<"div"> {
  title?: string;
  technologies?: string[];
  desktopImage?: string;
  mobileImage?: string;
  href?: string;
  variant?: "main" | "secondary";
}

const ProjectCard: React.FC<Props> = ({
  title,
  technologies = [],
  desktopImage,
  mobileImage,
  href = "/",
  className,
  variant = "main",
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex rounded-[20px] md:gap-1 md:py-[52px] lg:gap-9 lg:pb-[52px] lg:pt-[62px]",
        variant === "main"
          ? "md:pl-[36px] lg:pl-[108px]"
          : "md:pr-[36px] lg:pr-[70px]",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[27px]">
          <Typography
            className="!font-bold tracking-[-0.44px] text-white-900 md:text-[44px] md:leading-[50px] lg:text-[44px] lg:leading-[50px]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="flex gap-2.5">
            {technologies.map((tech: string) => (
              <Typography
                as="div"
                variant={"small-regular"}
                className="rounded-[6px] bg-white/20 p-2.5 text-white-900"
                key={tech}
              >
                {tech}
              </Typography>
            ))}
          </div>
        </div>
        <Link href={href}>
          <Typography
            as="span"
            className="flex items-center gap-[5px] text-[18px] font-semibold leading-[29px] text-white-900"
          >
            See Case Study
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="8"
              viewBox="0 0 36 8"
              fill="none"
            >
              <path
                d="M35.3536 4.35356C35.5488 4.15829 35.5488 3.84171 35.3536 3.64645L32.1716 0.464469C31.9763 0.269207 31.6597 0.269207 31.4645 0.464469C31.2692 0.659731 31.2692 0.976313 31.4645 1.17158L34.2929 4L31.4645 6.82843C31.2692 7.02369 31.2692 7.34027 31.4645 7.53554C31.6597 7.7308 31.9763 7.7308 32.1716 7.53554L35.3536 4.35356ZM-4.37114e-08 4.5L35 4.5L35 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                fill="white"
              />
            </svg>
          </Typography>
        </Link>
      </div>
      <div className="flex items-end gap-4">
        <Image
          src={restlyImage}
          alt="restly-desktop"
          className="md:h-[230px] md:w-[437px] lg:h-[330px] lg:w-[564px]"
        />
        {/* <Image src={restlyImage} alt="restly-mobile" className="w-[142px]" /> */}
        <div className="bg-black md:h-[10px] md:w-[10px] lg:h-[280px] lg:w-[142px]" />
      </div>
    </div>
  );
};

export default ProjectCard;
