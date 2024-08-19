import Posts from "@components/blog/Posts";

const Page = () => {
  return (
    <main className="mx-auto mt-10 w-full max-w-[1270px] rounded-lg bg-white/40 p-10 px-6 shadow-md backdrop-blur-[32px]">
      <p className="mb-12 mt-12 text-center text-3xl">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Hubert</span>.
        </span>
      </p>
      <Posts />
    </main>
  );
};

export default Page;
