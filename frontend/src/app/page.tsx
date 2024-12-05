import { Button } from "../components/ui/button";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-blue-900">
      <header>
        <div className="flex justify-between bg-white text-black font-semibold text-xl px-6 py-4">
          <div className="">
            <Sparkles />
            <p>DevStars</p>
            <span className="font-light text-sm">Academy</span>
          </div>
          <div className="">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>

              <li>
                <Button>Entrar</Button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
