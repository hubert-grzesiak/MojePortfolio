import Posts from "@components/blog/Posts";

const Page = () => {
  return (
    <main className="px-6 mx-auto max-w-[1400px] bg-white/40 backdrop-blur-[32px] w-full rounded-lg shadow-md p-10 mt-10">
      <p className="mt-12 mb-12 text-3xl text-center">
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
