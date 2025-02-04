import FooterApp from "@/components/common/FooterApp";
import HeaderApp from "@/components/common/HeaderApp";
import Bannier from "@/components/home/Bannier";
import Services from "./(main)/services/page";
import AboutUs from "./(main)/about-us/page";
import RessentWork from "@/components/home/RessentWork";
import GetInTouch from "@/components/home/GetInTouch";

export default function Home() {
  return (
    <>
      <HeaderApp />

      <Bannier />

      <AboutUs />

      <RessentWork />

      <Services />

      <GetInTouch />

      <FooterApp />
    </>
  );
}
