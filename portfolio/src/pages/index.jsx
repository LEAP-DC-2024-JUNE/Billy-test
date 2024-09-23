import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Introduction,
  Skills,
  WorkHistory,
} from "@/components";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:max-w-[1280px]">
        {/* Header section */}
        <Header />
        {/* Introduction section */}
        <Introduction />
        {/* About me section*/}
        <About />
        {/* Skills section*/}
        <Skills />
        {/* Experience */}
        <Experience />
        {/* Work section*/}
        <WorkHistory />
        {/* Contact section*/}
        <Contact />
        {/* Footer section*/}
        <Footer />
      </div>
    </div>
  );
}
