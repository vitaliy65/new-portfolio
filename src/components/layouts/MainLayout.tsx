import Header from "./Header";
import Footer from "./Footer";
import WelcomeSection from "./sections/section.welcome";
import AboutMeSection from "./sections/section.aboutMe";
import PortfolioSection from "./sections/section.portfolio";
import ContactSection from "./sections/section.contact";

export default function MainLayout() {
  return (
    <div className="full flex-col relative">
      <div className="fixed inset-0 bg-[url(/bg/InitialLoadBG.webp)] -z-10 backdrop-blur-sm bg-cover bg-center bg-opacity-50" />

      <Header />
      {/* welcoming section */}
      <WelcomeSection />

      {/* about section */}
      <AboutMeSection />

      {/* portfolio section */}
      <PortfolioSection />

      {/* contact section */}
      <ContactSection />
      <Footer />
    </div>
  );
}
