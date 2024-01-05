"use client";

import { StopCircle } from "lucide-react";
import { Button } from "../ui/button";
import { useContext } from "react";
import { PlayerContext } from "@/context/player-context";

export const StopAllSounds = () => {
  const { stopAllSounds } = useContext(PlayerContext);  

  return (
    <div className="tooltip">
      <Button
        className="bg-transparent border-none hover:bg-zinc-900/10 rounded-full p-2"
        onClick={stopAllSounds}
      >
        <StopCircle className="text-2xl" />
      </Button>
    </div>
  );
};
