import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";

const images = [
  "/src/assets/img51.png",
  "/src/assets/img50.png",
  "/src/assets/img6.svg",
  "/src/assets/img.jpg",
  "/src/assets/img2.png",
];
const imageMap: Record<string, string> = {
  Exterior: "/src/assets/img51.png",
  Interior: "/src/assets/img50.png",
  Safety: "/src/assets/img53.png",
  Essentiols: "/src/assets/img54.png",
  Adas: "/src/assets/img.jpg",
};
const bottomImages: Record<string, string> = {
  Exterior: "/src/assets/img21.svg",
  Interior: "/src/assets/img7.svg",
  Safety: "/src/assets/img22.svg",
  Adas: "/src/assets/img100.png",
};

export function CarouselDemo() {
  const [activeimg, setActiveImage] = useState(imageMap.Exterior);
  return (
    <div>
      <Carousel className=" h-full overflow-hidden ">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="p-0">
                <Card className="py-0">
                  <CardContent className=" flex h-full w-full items-center justify-center  p-0">
                    <div className="relative ">
                      <img
                        src={activeimg}
                        alt="car"
                        className="h-full w-full object-cover "
                      />
                      <div className="text-sm md:text-sm  lg: grid grid-cols-1 absolute top-5  -left-1/5 -translate-x-1/2 lg:font-bold  gap-2 md:gap-6 lg:gap-8 ">
                        {Object.keys(imageMap).map((btn, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveImage(imageMap[btn])}
                            className={`${
                              activeimg === imageMap[btn]
                                ? "bg-red-700 px-3 py-1 rounded-sm text-white cursor-pointer "
                                : "cursor-pointer"
                            }`}
                          >
                            {btn}
                          </button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 py-10">
        {Object.keys(bottomImages).map((key) => (
          <img
            key={key}
            src={bottomImages[key]}
            alt={key}
            onClick={() => setActiveImage(imageMap[key])}
            className={`cursor-pointer transition-all duration-300
        ${
          activeimg === imageMap[key]
            ? ""
            : "hover:border-4 hover:border-red-600"
        }`}
          />
        ))}
      </div>
    </div>
  );
}
