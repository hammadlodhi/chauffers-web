import AboutUs from "@/components/AppComponents/AboutUs/AboutUs";
import Galley from "@/components/AppComponents/Gallery/Galley";
import HomePage from "@/components/AppComponents/Home/Home";
import OurServices from "@/components/AppComponents/OurServices/OurServices";

export default function Home() {
  return (
    <div>
      <HomePage />
      <AboutUs />
      <OurServices />
      <Galley/>
    </div>
  );
}
