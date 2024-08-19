"use client";
import { useCounterStore } from "@app/store";
import ExperienceDescriptionCard from "../ExperienceDescriptionCard";
import JobCard from "@components/home/JobCard";
import { Tabs, TabsList, TabsContent } from "@components/ui/tabs";

const WorkExperience = () => {
  const value = useCounterStore((state) => state.count);
  const setCount = useCounterStore((state) => state.setCount);

  return (
    <section className="w-full bg-white-900 px-[24px] py-[48px] dark:bg-black-200 md:py-[72px]">
      <div className="mx-auto w-full max-w-[1270px] md:px-[30px]">
        <Tabs
          value={value.toString()}
          onValueChange={(val) => setCount(parseInt(val))}
          className="flex w-full flex-col md:flex-row md:gap-5 lg:gap-[26px]"
        >
          <div className="mb-4 md:mb-0 md:w-1/2">
            <TabsContent value="0">
              <ExperienceDescriptionCard
                value="0"
                secondDescription="From coding in the late hours to collaborating with talented teams, my career has been a dynamic adventure filled with growth and innovation."
                shortDescription="Progress and milestones: A simple walkthrough of roles, projects, and achievements in my career."
              />
            </TabsContent>
            <TabsContent value="1">
              <ExperienceDescriptionCard
                value="1"
                title="Helpfind Developer"
                description="I am responsible for creating websites and web applications. I work with technologies such as React.js, Next.js, and Tailwind CSS."
                shortDescription="I develop websites and web apps using React.js, Next.js, and Tailwind CSS."
              />
            </TabsContent>
            <TabsContent value="2">
              <ExperienceDescriptionCard
                value="2"
                title="IT Student"
                description="I am currently studying Information Technology at the University of Kalisz. I am learning about web development and computer science."
                shortDescription="I am studying Information Technology at the University of Kalisz."
              />
            </TabsContent>
          </div>
          <TabsList className="flex h-auto flex-col gap-[35px] bg-transparent md:w-1/2">
            <JobCard
              value={"1"}
              iconUrl="https://res.cloudinary.com/dev6yhoh3/image/upload/v1723475223/portfolio/helpfind-logo_trnuzu.jpg"
            />
            <JobCard
              value={"2"}
              title="University of Kalisz"
              description="IT Student— September 2021 - Present"
              iconUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7b8LWsTGXsDD2DlHhKNbT1B4Jzx_CO9NAyg&s"
            />
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
};

export default WorkExperience;
