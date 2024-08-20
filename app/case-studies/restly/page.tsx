import ProjectDate from "@components/case-studies/sections/ProjectDate";
import ProjectHero from "@components/case-studies/sections/ProjectHero";
import ProjectTechStack from "@components/case-studies/sections/ProjectTechStack";
import React from "react";
import { technologies } from "./data";
import GetInTouch from "@components/shared/sections/GetInTouch";
import Typography from "@components/shared/Typography";
import ProjectProblemStatement from "@components/case-studies/sections/ProjectProblemStatement";
import ProjectProcess from "@components/case-studies/sections/ProjectProcess";
import ProjectChallangesLearnings from "@components/case-studies/sections/ProjectChallengesLearnings";
import { challenges } from "./data";
import { learnings } from "./data";
import ProjectOtherCaseStudies from "@components/case-studies/sections/ProjectOtherCaseStudies";

function Page() {
  return (
    <main>
      <ProjectHero />
      <ProjectDate />
      <ProjectTechStack technologies={technologies} />
      <section className="w-full bg-white-800 px-6 py-9 dark:bg-black-300 md:py-[72px]">
        <Typography
          className="mx-auto flex max-w-[880px] flex-col gap-6 text-white-500 dark:text-white-800"
          variant={"p-regular"}
          as="div"
        >
          <p>
            The Restly platform is built around the goal of providing travelers
            with exceptional, budget-friendly accommodation options across the
            globe. It connects hosts and guests, offering more than just a place
            to stay—it&apos;s about creating memorable travel experiences.
            Whether travelers are looking for urban apartments or remote cabins
            in the mountains, Restly offers something to suit every journey.
          </p>
          <p>
            Through the app, both registered members and guests can explore a
            global selection of available accommodations. The homepage displays
            properties ready for rent, and users can refine their search through
            filters and an interactive map highlighting the listings. If a user
            finds a property of interest but isn&apos;t ready to book, they can
            &quot;like&quot; it to save for future consideration.
          </p>
          <p>
            Property owners can showcase their vacation homes using a dedicated
            listing tool. They must include a title, photos, and a description
            of the amenities. Each listing provides a detailed overview with
            images to help guests visualize the property. An integral part of
            the listing is a booking calendar with customizable pricing,
            allowing guests to book stays for up to two weeks. Payments are
            processed securely through an external provider (Stripe), ensuring
            seamless transactions.
          </p>
          <p>
            Hosts communicate with guests through a text-based messaging system,
            ensuring that all necessary details are provided. After their stay,
            guests are encouraged to leave reviews and ratings. If a review
            contains problematic content, it can be flagged, prompting an
            administrator to assess whether it violates the platform&apos;s
            guidelines.
          </p>
        </Typography>
      </section>
      <ProjectProblemStatement />
      <ProjectProcess />
      <ProjectChallangesLearnings
        challenges={challenges}
        learnings={learnings}
      />
      <ProjectOtherCaseStudies />
      <GetInTouch />
    </main>
  );
}

export default Page;
