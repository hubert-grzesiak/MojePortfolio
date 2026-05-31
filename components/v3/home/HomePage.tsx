import ContactPrompt from "@components/v3/home/ContactPrompt";
import LazyVideo from "@components/v3/home/LazyVideo";
import Reveal from "@components/v3/home/Reveal";
import { skillsIcons } from "@components/icons";
import {
  ArrowUpRight,
  Bot,
  Code2,
  Gauge,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import V3Navbar from "@components/v3/shared/V3Navbar";
import { Instrument_Serif } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import restlyImage from "../../../public/images/projects/restly.png";
import restlyMobileImage from "../../../public/images/projects/restly-mobile.png";
import emilyPhoto from "../../../public/images/opinions/emily.webp";
import kacperPhoto from "../../../public/images/opinions/kacper.webp";
import szymonPhoto from "../../../public/images/opinions/szymon.webp";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const cloudinaryVideo = (path: string, width = 1400) =>
  `https://res.cloudinary.com/dibzgjsiw/video/upload/f_auto,q_auto:eco,vc_auto,w_${width}/${path}.mp4`;

const videos = {
  hero: cloudinaryVideo("v1780251815/hero_wxbcu9", 1920),
  journey: cloudinaryVideo("v1780251698/journey_tcbbsr", 1600),
  reading: cloudinaryVideo("v1780251695/reading_btzyaz", 1100),
  work: cloudinaryVideo("v1780251693/work_udoefh", 1100),
  flowers: cloudinaryVideo("v1780251687/flowers_iib85i", 1100),
};

const services = [
  {
    title: "Frontend and Fullstack Apps",
    tag: "Product build",
    description:
      "Responsive React and Next.js applications with polished interfaces, practical backend integrations, and clean production architecture.",
    icon: Code2,
    video: videos.work,
  },
  {
    title: "SEO and Web Optimization",
    tag: "Growth",
    description:
      "Core Web Vitals, technical SEO, loading strategy, analytics, and content structure improvements that help websites rank and convert.",
    icon: Gauge,
    video: videos.reading,
  },
  {
    title: "AI Automations",
    tag: "Automation",
    description:
      "Useful AI workflows for websites and teams: auto-generated blog systems, chatbots, intelligent search, and custom content tools.",
    icon: Bot,
    video: videos.flowers,
  },
];

const experience = [
  {
    company: "Certifier",
    role: "Frontend Developer",
    period: "August 2025 - Now",
    description:
      "Building product interfaces with attention to performance, accessibility, and maintainable frontend architecture.",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "January 2025 - July 2025",
    description:
      "Delivered websites and applications for clients using React, Next.js, Tailwind CSS, and pragmatic backend integrations.",
  },
  {
    company: "Helpfind",
    role: "Frontend Developer",
    period: "January 2023 - January 2025",
    description:
      "Worked on user-facing web experiences, reusable UI, and frontend delivery in a collaborative product environment.",
  },
  {
    company: "University of Kalisz",
    role: "IT Student",
    period: "September 2021 - March 2025",
    description:
      "Studied information technology while sharpening web development, computer science, and project fundamentals.",
  },
];

const opinions: Array<{
  name: string;
  role: string;
  quote: string;
  image: StaticImageData;
}> = [
  {
    name: "Szymon",
    role: "Full Stack Developer",
    quote:
      "Hubert consistently delivers high-quality code and brings strong React, Next.js, TypeScript, Tailwind CSS, and Git skills to the team.",
    image: szymonPhoto,
  },
  {
    name: "Emily",
    role: "Frontend Developer",
    quote:
      "His expertise in modern frontend technologies and responsive design is second to none. He brings creativity and precision to every project.",
    image: emilyPhoto,
  },
  {
    name: "Kacper",
    role: "Frontend Developer",
    quote:
      "Hubert has excellent problem-solving skills and deep React and Next.js knowledge, which makes him a strong collaborator on any frontend team.",
    image: kacperPhoto,
  },
];

const GlassVideo = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => (
  <div
    className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] ${className ?? ""}`}
  >
    <LazyVideo
      className="h-full w-full object-cover"
      src={src}
      preload="none"
    />
  </div>
);

const HomePage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
        <LazyVideo
          className="absolute -top-[4svh] left-0 h-[110%] w-full translate-y-[5svh] object-cover object-bottom opacity-70 sm:-top-[6svh] sm:h-[114%] sm:translate-y-[7svh]"
          src={videos.hero}
          eager
          preload="metadata"
        />

        <V3Navbar inHero />

        <Reveal className="relative z-10 mx-auto flex w-full max-w-[1120px] flex-1 -translate-y-[4svh] flex-col items-center justify-center px-5 py-10 text-center sm:-translate-y-[5svh] sm:py-14 lg:-translate-y-[6svh]">
          <p className="mb-5 text-[12px] leading-none font-semibold tracking-[0.22em] text-white/55 uppercase">
            Frontend developer based in Poland
          </p>
          <h1
            className={`${instrumentSerif.className} max-w-[900px] text-[56px] leading-[0.92] font-normal text-white sm:text-[82px] lg:text-[118px]`}
          >
            Web products that feel <em className="text-white/62">fast</em>.
          </h1>
          <ContactPrompt />
          <p className="mt-5 max-w-[610px] text-[14px] leading-7 text-white/76 sm:text-[16px]">
            I design and build clean, production-ready websites and applications
            with React, Next.js, TypeScript, and a practical eye for
            performance.
          </p>
        </Reveal>

        <Reveal
          delay={0.08}
          className="relative z-10 flex justify-center gap-3 pb-8"
          aria-label="Social links"
        >
          {[
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/hubertgrzesiakjs/",
              icon: Linkedin,
            },
            {
              label: "GitHub",
              href: "https://github.com/hubert-grzesiak",
              icon: Github,
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/habincjusz/",
              icon: Instagram,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <a
                className="liquid-glass grid h-12 w-12 place-items-center rounded-full text-white/78 transition-colors hover:bg-white/[0.05] hover:text-white"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                key={item.label}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            );
          })}
        </Reveal>
      </section>

      <section
        className="relative bg-black px-5 py-16 sm:px-6 lg:pt-24 lg:pb-10"
        id="about"
      >
        <Reveal className="mx-auto max-w-[1120px]">
          <p className="mb-6 text-[12px] leading-none font-semibold tracking-[0.22em] text-white/38 uppercase">
            About
          </p>
          <h2 className="max-w-[1020px] text-[40px] leading-[1.08] font-normal text-white sm:text-[32px] lg:text-[40px]">
            I turn ideas into focused web experiences that are easy to use,
            simple to maintain, and built with the details users actually feel.
          </h2>
        </Reveal>
      </section>

      <section
        className="bg-black px-5 pb-16 sm:px-6 lg:pb-24"
        aria-labelledby="approach-title"
      >
        <Reveal className="mx-auto max-w-[1120px]">
          <GlassVideo src={videos.journey} className="aspect-video" />
          <div className="mt-6 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[24px] border border-white/12 bg-white/[0.04] p-6 backdrop-blur-md">
              <p className="mb-3 text-[12px] leading-none font-semibold tracking-[0.18em] text-white/42 uppercase">
                Approach
              </p>
              <h2
                className={`${instrumentSerif.className} text-[42px] leading-none font-normal text-white`}
                id="approach-title"
              >
                Clean craft, fast feedback.
              </h2>
            </div>
            <p className="max-w-[720px] self-center text-[16px] leading-8 text-white/66">
              I like projects where strategy and implementation stay close
              together: understand the problem, ship a clean first version,
              measure what matters, and keep improving the experience.
            </p>
          </div>
        </Reveal>
      </section>

      <section
        className="bg-black px-5 py-16 sm:px-6 lg:py-24"
        aria-labelledby="skills-title"
      >
        <Reveal className="mx-auto max-w-[1120px]">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2
              className="text-[34px] leading-tight font-medium sm:text-[48px]"
              id="skills-title"
            >
              Skills I use to ship.
            </h2>
            <p className="max-w-[420px] text-[14px] leading-6 text-white/52">
              A practical stack for modern products, from interface work to
              backend integrations and iteration.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-7">
            {skillsIcons.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  className="flex aspect-square min-h-[92px] flex-col items-center justify-center gap-3 rounded-[20px] border border-white/10 bg-white/[0.035] p-4 text-center text-white/68 transition-colors hover:bg-white/[0.07] hover:text-white"
                  key={skill.name}
                >
                  <Icon className="h-7 w-7" />
                  <span className="text-[11px] leading-4 font-medium">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="bg-black px-5 py-16 sm:px-6 lg:py-24" id="services">
        <Reveal className="mx-auto max-w-[1120px]">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-[34px] leading-tight font-medium sm:text-[48px]">
              What I do
            </h2>
            <span className="text-[14px] font-medium text-white/42">
              Three focused services
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal
                  className="h-full"
                  delay={index * 0.06}
                  key={service.title}
                >
                  <article className="h-full overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.035] transition-transform hover:-translate-y-1 hover:bg-white/[0.055]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <LazyVideo
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        src={service.video}
                        preload="none"
                        rootMargin="360px 0px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/54 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <span className="text-[12px] leading-none font-semibold tracking-[0.18em] text-white/42 uppercase">
                          {service.tag}
                        </span>
                        <span className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/[0.05]">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mb-3 text-[22px] leading-tight font-medium">
                        {service.title}
                      </h3>
                      <p className="text-[14px] leading-7 text-white/54">
                        {service.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="bg-black px-5 py-16 sm:px-6 lg:py-24" id="work">
        <Reveal className="mx-auto max-w-[1120px]">
          <div className="mb-10 grid gap-4 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <h2 className="text-[34px] leading-tight font-medium sm:text-[48px]">
              Work experience, aligned.
            </h2>
            <p className="max-w-[620px] text-[15px] leading-7 text-white/58">
              A clean view of roles and milestones without animated layout
              shifts, built for quick scanning.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {experience.map((item, index) => (
              <article
                className="grid min-h-[220px] grid-rows-[auto_1fr] rounded-[24px] border border-white/12 bg-white/[0.035] p-6"
                key={item.company}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-[12px] leading-none font-semibold tracking-[0.18em] text-white/38 uppercase">
                      0{index + 1}
                    </p>
                    <h3 className="text-[24px] leading-tight font-medium">
                      {item.company}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/12 px-3 py-1 text-[12px] text-white/52">
                    {item.period}
                  </span>
                </div>
                <div className="self-end">
                  <p className="mb-3 text-[15px] font-semibold text-white/82">
                    {item.role}
                  </p>
                  <p className="text-[14px] leading-7 text-white/56">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section
        className="bg-black px-5 py-16 sm:px-6 lg:py-24"
        aria-labelledby="case-study-title"
      >
        <Reveal className="mx-auto max-w-[1120px]">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2
              className="text-[34px] leading-tight font-medium sm:text-[48px]"
              id="case-study-title"
            >
              Featured case study
            </h2>
            <Link
              className="liquid-glass inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[14px] font-semibold text-white/76 transition-colors hover:bg-white/[0.05] hover:text-white"
              href="/case-studies"
            >
              View all
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <Link
            className="liquid-glass group relative grid rounded-[30px] bg-white/[0.012] transition-transform hover:-translate-y-1 hover:bg-white/[0.025] lg:grid-cols-[0.88fr_1.12fr]"
            href="/case-studies/restly"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_82%,rgba(65,108,234,0.32),transparent_34%),radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.08),transparent_32%)]" />
            <div className="relative z-[1] flex flex-col justify-between gap-8 p-7 sm:p-10 lg:p-11">
              <div>
                <p className="mb-4 text-[12px] leading-none font-semibold tracking-[0.18em] text-white/48 uppercase">
                  Restly
                </p>
                <h3 className="max-w-[480px] text-[38px] leading-[1.08] font-medium text-white sm:text-[32px]">
                  A stay booking app with maps, listings, and secure payments.
                </h3>
              </div>
              <div>
                <div className="mb-6 flex flex-wrap gap-2">
                  {["Next.js", "Tailwind CSS", "Node.js", "MongoDB"].map(
                    (tech) => (
                      <span
                        className="liquid-glass rounded-full px-3 py-2 text-[12px] font-medium text-white/82"
                        key={tech}
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
                <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-white">
                  See Case Study
                  <ArrowUpRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </div>
            <div className="relative z-[1] flex items-end justify-center overflow-hidden p-6 sm:p-10">
              <div className="liquid-glass absolute top-10 right-8 bottom-8 left-8 rounded-[24px] opacity-70" />
              <Image
                src={restlyImage}
                alt="Restly desktop interface"
                className="relative z-[2] h-auto w-[76%] max-w-[560px] translate-y-2 drop-shadow-2xl"
                priority={false}
              />
              <Image
                src={restlyMobileImage}
                alt="Restly mobile interface"
                className="relative z-[3] h-auto w-[22%] max-w-[140px] -translate-x-8 translate-y-2 drop-shadow-2xl"
                priority={false}
              />
            </div>
          </Link>
        </Reveal>
      </section>

      <section
        className="bg-black px-5 py-16 sm:px-6 lg:py-24"
        aria-labelledby="opinions-title"
      >
        <Reveal className="mx-auto max-w-[1120px]">
          <h2
            className="mb-10 text-[34px] leading-tight font-medium sm:text-[48px]"
            id="opinions-title"
          >
            What they say
          </h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {opinions.map((opinion) => (
              <article
                className="flex min-h-[300px] flex-col justify-between rounded-[24px] border border-white/12 bg-white/[0.035] p-6"
                key={opinion.name}
              >
                <p className="text-[15px] leading-8 text-white/66">
                  &quot;{opinion.quote}&quot;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src={opinion.image}
                    alt={opinion.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="leading-5 font-semibold text-white">
                      {opinion.name}
                    </p>
                    <p className="text-[13px] leading-5 text-white/46">
                      {opinion.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default HomePage;
