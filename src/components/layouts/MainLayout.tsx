import Header from "./Header";
import WelcomeSection from "./sections/section.welcome";
import AboutMeSection from "./sections/section.aboutMe";
import PortfolioSection from "./sections/section.portfolio";
import ContactSection from "./sections/section.contact";

export default function MainLayout() {
  return (
    <>
      <Header />

      {/* welcoming section */}
      <WelcomeSection />

      {/* about section */}
      <AboutMeSection />

      {/* portfolio section */}
      <PortfolioSection />

      {/* contact section */}
      <ContactSection />
    </>
  );
}
