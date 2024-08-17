"use client";
import { useCounterStore } from "@app/store";
import ExperienceDescriptionCard from "../components/ExperienceDescriptionCard";
import JobCard from "../components/JobCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@components/ui/tabs";

const WorkExperience = () => {
  const value = useCounterStore((state) => state.count);
  const setCount = useCounterStore((state) => state.setCount);

  return (
    <section className="w-full bg-white-900 py-[72px]">
      <div className="mx-auto w-full max-w-[1400px]">
        <Tabs
          value={value.toString()}
          onValueChange={(val) => setCount(parseInt(val))}
          className="flex w-full gap-[26px]"
        >
          <div className="w-1/2">
            <TabsContent value="0">
              <ExperienceDescriptionCard
                value="0"
                secondDescription="From coding in the late hours to collaborating with talented teams, my career has been a dynamic adventure filled with growth and innovation."
              />
            </TabsContent>
            <TabsContent value="1">
              <ExperienceDescriptionCard
                value="1"
                title="Helpfind Developer"
                description="I am responsible for creating websites and web applications. I work with technologies such as React.js, Next.js, and Tailwind CSS."
              />
            </TabsContent>
            <TabsContent value="2">
              <ExperienceDescriptionCard
                value="2"
                title="IT Student"
                description="I am currently studying Information Technology at the University of Kalisz. I am learning about web development and computer science."
              />
            </TabsContent>
          </div>
          <TabsList className="flex h-auto w-1/2 flex-col gap-[35px] bg-transparent">
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
