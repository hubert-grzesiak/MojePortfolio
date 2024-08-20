export const metadata = {
  title: "Hubert's Blog",
  description:
    "Welcome to my Blog. I'm Hubert Grzesiak, a passionate Frontend Developer specializing in React.js, Tailwind CSS, Next.js, and MongoDB.",
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="text-black">{children}</div>
);

export default Layout;
