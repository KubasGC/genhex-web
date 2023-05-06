import { FunctionComponent, useState } from "react";

const items = [
  {
    name: "Redfall",
    img: "https://cdn2.unrealengine.com/egs-redfall-carousel-desktop-1248x702-bf6c0a319751.jpg?h=720&quality=medium&resize=1&w=1280",
    thumb:
      "https://cdn2.unrealengine.com/egs-redfall-carousel-thumb-1200x1600-b12229d2011a.jpg?h=128&quality=medium&resize=1&w=96",
  },

  {
    name: "STAR WARS Jedi",
    img: "https://cdn2.unrealengine.com/egs-jedi-survivor-carousel-desktop-1280x702-e064efcb1338.jpg?h=720&quality=medium&resize=1&w=1280",
    thumb:
      "https://cdn2.unrealengine.com/egs-jedi-survivor-carousel-thumb-1200x1600-39ccbedd37be.jpg?h=128&quality=medium&resize=1&w=96",
  },

  {
    name: "Age of Wonders 4",
    img: "https://cdn2.unrealengine.com/egs-age-of-wonders-4-carousel-desktop-1248x702-7945383e39ed.png?h=720&quality=medium&resize=1&w=1280",
    thumb:
      "https://cdn2.unrealengine.com/egs-age-of-wonders-4-carousel-thumb-1200x1600-e82c88452246.png?h=128&quality=medium&resize=1&w=96",
  },

  {
    name: "Square Enix",
    img: "https://cdn2.unrealengine.com/square-enix-golden-desktop-1920x1080-98222f0fd52e.jpg?h=720&quality=medium&resize=1&w=1280",
    thumb:
      "https://cdn2.unrealengine.com/square-enix-golden-thumb-1200x1600-5e182738d369.png?h=128&quality=medium&resize=1&w=96",
  },

  {
    name: "Ravenlok",
    img: "https://cdn2.unrealengine.com/egs-ravenlok-carousel-desktop-1248x702-fcf580440db0.jpg?h=720&quality=medium&resize=1&w=1280",
    thumb:
      "https://cdn2.unrealengine.com/egs-ravenlok-carousel-thumb-1200x1600-e1d2fd8a3cac.jpg?h=128&quality=medium&resize=1&w=96",
  },
];

const CarouselDiscoverPage: FunctionComponent = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="mt-6 mb-4 text-lg text-white/75 uppercase">Our Games</div>
      <div className="relative w-full grid gap-3 grid-cols-12">
        <div className="col-span-10">
          {items.map((item, index) => {
            if (index !== active) {
              return null;
            }

            return <CarouselImageItem key={index} src={item.img} />;
          })}
        </div>
        <div className="col-span-2 flex flex-col gap-1 justify-between">
          {items.map((item, index) => (
            <CarouselInfoItem
              onClick={() => setActive(index)}
              active={index === active}
              src={item.thumb}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselDiscoverPage;

const CarouselImageItem = ({ src }: any) => {
  return <img className="rounded-xl w-full h-[455px]" src={src} />;
};

const CarouselInfoItem = ({ src, name, active, onClick }: any) => {
  let css =
    "w-full rounded-xl p-3 flex gap-3 items-center transition cursor-pointer";

  if (active) {
    css += " bg-white/20";
  } else {
    css += " hover:bg-white/20";
  }
  return (
    <div onClick={onClick} className={css}>
      <img className="w-[40px]" src={src} />
      <div className="text-sm">{name}</div>
    </div>
  );
};
