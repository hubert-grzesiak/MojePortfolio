import HomePage from "@components/v3/home/HomePage";

const Page = () => {
  return (
    <>
      <HomePage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Hubert Grzesiak",
            url: "https://hubertgrzesiak.com",
            jobTitle: "Frontend Developer",
            sameAs: [
              "https://www.linkedin.com/in/hubert-grzesiak",
              "https://github.com/HubertGrzesiak",
            ],
          }),
        }}
      />
    </>
  );
};

export default Page;
