import { FunctionComponent } from "react";

interface WhyUsProps {}

const WhyUs: FunctionComponent<WhyUsProps> = () => {
  return (
    <div className="mt-10 bg-white/10 p-3 rounded-lg">
      <div className="text-lg mb-4 uppercase text-white/75">Why Us?</div>
      <div className="">
        <p>
          At GenHex, we understand that the world of gaming is constantly
          evolving, and we strive to stay ahead of the curve. Here's why we
          believe that you should choose us for all your gaming needs:
        </p>
        <ol className="list-decimal ml-10 my-3">
          <li>
            Experience: Our team has years of experience in the gaming industry,
            including designing and developing games for various platforms. We
            understand the nuances of game development and what it takes to
            create engaging, immersive experiences.
          </li>
          <li>
            Innovation: Our game engine, GenHex Engine, is a cutting-edge tool
            that enables game developers to bring their ideas to life in
            exciting new ways. Whether you're a seasoned developer or a newcomer
            to game design, our tools will enable you to create games that are
            truly unique.
          </li>
          <li>
            Accessibility: We believe that everyone should be able to enjoy the
            thrill of game development, regardless of their technical skills.
            That's why we've created tools like GenHex Game Maker and GenHex
            Game Creator, which enable even those without programming experience
            to create amazing games.
          </li>
          <li>
            Flexibility: Our tools are designed to be flexible and customizable,
            allowing developers to create games that are tailored to their
            specific needs. With our wizards and blueprints, you can quickly and
            easily create complex game mechanics and systems without any coding.
          </li>
          <li>
            Support: We're here to help you every step of the way. Our team is
            dedicated to providing top-notch support to our users, whether
            you're just starting out or have been using our tools for years.
            We're always available to answer questions, provide guidance, and
            help you overcome any obstacles you may encounter.
          </li>
        </ol>
        <p>
          In short, at GenHex, we're passionate about gaming and game
          development. We're committed to providing the tools and support that
          game developers need to create incredible experiences that will
          captivate and entertain players around the world. Join us and unleash
          your creativity with GenHex!
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
