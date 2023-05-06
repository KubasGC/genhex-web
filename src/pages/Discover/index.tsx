import { FunctionComponent } from "react";
import CarouselDiscoverPage from "./Carousel";
import WhyUs from "./WhyUs";
import OurTools from "./OurTools";
import OurMission from "./OurMission";

const DiscoverPage: FunctionComponent = () => {
  return (
    <>
      <CarouselDiscoverPage />
      <WhyUs />
      <OurTools />
      <OurMission />
    </>
  );
};

export default DiscoverPage;
