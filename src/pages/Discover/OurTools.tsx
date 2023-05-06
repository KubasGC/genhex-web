import { FunctionComponent } from "react";
import GenHexEngine from "../../assets/genhex-engine-white.png";
import GenHexMaker from "../../assets/genhex-maker-white.png";
import GenHexCreator from "../../assets/genhex-creator-white.png";

interface OurToolsProps {}

const OurTools: FunctionComponent<OurToolsProps> = () => {
  return (
    <div>
      <div className="mt-6 mb-4 text-lg text-white/75 uppercase">Our Tools</div>
      <p>
        At GenHex, we provide a suite of tools designed to help you create
        amazing games quickly and easily. Here's a brief overview of our tools
        and what they can do:
      </p>

      <div className="w-full flex flex-wrap items-start justify-between gap-3 my-4">
        <Tool
          name="GenHex Engine"
          desc="Our game engine is a powerful tool that allows you to create complex games for various platforms, including desktop and mobile. With advanced features such as real-time rendering, physics simulation, and AI, GenHex Engine gives you the freedom to create games that are truly unique."
          image={GenHexEngine}
        />
        <Tool
          name="GenHex Game Maker"
          image={GenHexMaker}
          desc="This tool is perfect for those who want to create games but don't have the technical skills required for programming. GenHex Game Maker provides a user-friendly interface that allows you to create games using simple drag-and-drop tools. You can create game mechanics, characters, and even entire levels without writing a single line of code."
        />
        <Tool
          name="GenHex Game Creator"
          image={GenHexCreator}
          desc="Our wizard-based tool lets you create fully personalized games using simple wizards without the need for technical knowledge. With GenHex Game Creator, you can create games in a matter of minutes by selecting the type of game you want to create, customizing its features, and generating your game files."
        />
      </div>
    </div>
  );
};

export default OurTools;

const Tool = ({ desc, image }: any) => {
  return (
    <div className="w-[300px] min-h-[360px] p-4 bg-white/10 rounded-lg">
      <div className="h-[75px] w-full">
        <img className="text-center my-3" src={image} />
      </div>
      <div>{desc}</div>
    </div>
  );
};
