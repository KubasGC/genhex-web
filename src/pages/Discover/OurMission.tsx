import { FunctionComponent } from "react";

interface OurMissionProps {}

const OurMission: FunctionComponent<OurMissionProps> = () => {
  return (
    <section className="bg-white/10 text-white py-12 my-10 rounded-lg">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
        <p className="text-lg mb-6">
          At GenHex, we believe that everyone should have the power to create
          their own games, regardless of their technical background or
          experience. Our mission is to empower game developers and creators
          with easy-to-use tools and resources that help them bring their ideas
          to life.
        </p>
        <p className="text-lg">
          We are dedicated to building high-quality software that not only meets
          the needs of our users, but exceeds their expectations. Whether you
          are an experienced game developer or just starting out, GenHex is here
          to help you make your game development dreams a reality.
        </p>
      </div>
    </section>
  );
};

export default OurMission;
