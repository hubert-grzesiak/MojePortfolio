export const metadata = {
  title: "Hubert's Blog",
  description:
    "Welcome to my website! My name is Hubert Grzesiak, and I'm a passionate Frontend Developer. I specialize in technologies like React.js, Tailwind CSS, Next.js, and MongoDB. Explore my portfolio to see my projects and skills in action.",
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="text-black">{children}</div>
);

export default Layout;
