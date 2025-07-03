import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-[200px] pb-[130px] text-secondary relative"
    >
      <div className="container flex flex-wrap gap-x-[50px] gap-y-[16px] min-h-[556px] xl:flex-nowrap">
        <div className="flex flex-col grow">
          <div className="flex gap-4 mb-4 max-sm:justify-center">
            <Image src="/images/hey.svg" alt="Hey" width={30} height={30} />
            <span>Hey, My name is</span>
          </div>
          <h1 className="font-bold text-[10vw] leading-[1em] font-display xl:text-[5vw] max-sm:text-[15vw] max-sm:text-center max-sm:mb-10">
            Leo Phan
          </h1>
          <Link className="relative mt-auto ml-auto" href="/#about">
            <Image
              src="/images/scroll_down.png"
              alt="Scroll Down"
              width={150}
              height={150}
              className="animate-[spin_20000ms_linear_infinite]"
            />
            <Image
              src="/images/arrow_down.svg"
              alt="Scroll Down"
              width={22}
              height={30}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </Link>
        </div>
        <div className="relative w-full max-w-[360px] min-w-[360px] min-h-[556px] max-sm:mx-auto">
          <Image
            src="/images/avatar_hero.png"
            alt="Leo Phan"
            fill
            className="object-cover rounded-[200px]"
          />
        </div>
        <div className="flex flex-col self-end w-full xl:max-w-[410px] lg:max-w-[100%]">
          <p className="mb-2">I am a</p>
          <h2 className="font-display text-[52px] leading-[1.3em] font-bold">
            Web{" "}
            <span className="bg-[url('/images/underline.svg')] bg-no-repeat bg-[50%_100%]">
              developer
            </span>
          </h2>
          <p className="mb-12">
            and I&apos;m very passionate and dedicated to my work with 7 years
            experience.
          </p>
          <p>
            Crafting high-performance, user-friendly web experiences that bring
            ideas to life—one line of clean, efficient code at a time.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-[-1] opacity-40">
        <video
          width="100%"
          height="100%"
          muted
          playsInline
          preload="none"
          autoPlay
          loop
          className="object-cover h-full w-full"
          poster="/images/bg-video-hero.jpg"
        >
          <source src="/images/video-poster.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
