import * as React from "react";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

export function CourseCard() {
  return (
    <Card className="w-[250px] overflow-hidden">
      <CardContent className="p-0">
        <Image
          src="/Leonardo_Phoenix_A_futuristic_hightech_illustration_of_a_softw_0.jpg"
          alt="ilustração futurista de um notebook, com um fundo de código fonte"
          width={1250}
          height={400}
        />
      </CardContent>
      <CardHeader>
        <CardTitle className="text-center">Engenharia de Software</CardTitle>
        <CardDescription className="text-center">
          Professor: Moab Macena
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
