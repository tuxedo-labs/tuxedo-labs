import { HeroSectionType } from "@/types/fragments/HeroSection";
import Link from "next/link";

export default function HeroSection({ title, description, buttonLink, image }: HeroSectionType) {
  return (
    <section>
      <div className="relative container mx-auto flex flex-col lg:flex-row justify-evenly items-center px-6 py-12 lg:py-24">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {title}
          </h1>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0">
            {description}
          </p>
          <Link href={buttonLink} className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            Let's Go
          </Link>
        </div>
        <div>
          <img
            src={image}
            alt={title}
            className="w-[300px] h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}

