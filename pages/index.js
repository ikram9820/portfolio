import Head from "next/head";
import { useState } from "react";
import services from "@/data/services";
import images from "@/data/images";
import ServiceCard from "@/components/service-card";
import PortfolioImage from "@/components/portfolio-image";
import PortfolioText from "@/components/portfolio-text";
import ServiceText from "@/components/service-text";
import Navbar from "@/components/navbar";
import Profile from "@/components/profile";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ikram</title>
        <meta
          name="description"
          content="hey, this is Ikram. I am a software engineer. I can develop you a great quality of web app"
        />
        <link rel="icon" href="/profile.png" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Navbar onChangeMode={handleDarkMode} />
          <Profile />
        </section>

        <section>
          <ServiceText />
          <div className="lg:flex gap-10">
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </section>

        <section className="py-10">
          {/* <PortfolioText /> */}
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {images.map((img) => (
              <PortfolioImage key={img.id} img={img} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
