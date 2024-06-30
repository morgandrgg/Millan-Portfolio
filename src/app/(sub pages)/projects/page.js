import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";
// import PhotoMenuButton from "@/components/projects/PhotoMenu";
import PhotoGallery from "@/components/projects/PhotoGallery";
// import HatModel from "@/components/models/HatModel";
const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold mt-10  text-6xl xs:text-7xl sm:text-8xl  lg:text-9xl text-accent">
            Some of My Design Creations
          </h1>
          <p className="font-light text-foreground text-lg">
            This is a visual presentation of my cool works
          </p>
        </div>
      </div>

      <PhotoGallery />

      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
      {/* <PhotoMenuButton /> */}
    </>
  );
}
