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
        "flex gap-9 rounded-[20px] py-[50px]",
        variant === "main" ? "pl-[108px]" : "pr-[70px]",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[27px]">
          <Typography
            className="text-[44px] !font-bold leading-[50px] tracking-[-0.44px] text-white-900"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="flex gap-2.5">
            {technologies.map((tech: string) => (
              <Typography
                as="div"
                variant={"small-regular"}
                className="rounded-[6px] bg-white/20 p-2.5 text-white-900"
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
        <Image src={restlyImage} alt="restly-desktop" />
        {/* <Image src={restlyImage} alt="restly-mobile" className="w-[142px]" /> */}
        <div className="h-[280px] w-[142px] bg-black" />
      </div>
    </div>
  );
};

export default ProjectCard;
