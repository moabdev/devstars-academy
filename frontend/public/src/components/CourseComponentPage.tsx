"use client";

import Image from "next/image";
import { CourseComponentList } from "./CourseComponentList";

export const CourseComponentClass = () => {
  return (
    <div className="mt-4">
      <div className="flex gap-6 mb-10 p-4">
        <div className="w-8/12">
          <Image
            src="/Leonardo_Phoenix_create_a_cover_featuring_a_darkthemed_backgro_3.jpg"
            className="rounded-lg"
            alt=""
            width={400}
            height={300}
          />
        </div>
        <div className="w-8/12">
          <h1 className="text-3xl font-medium">
            Bootcamp de Engenharia de Software
          </h1>
          <CourseComponentList />
        </div>
      </div>
    </div>
  );
};

// Fonte -> Fonte mais moderna e mais clean. Fonte mais bold nos títulos.
// Link da aula no discreto sem botão, com um ícone de play.
