"use client";

import { StopCircle } from "lucide-react";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AudioContext } from "@/context/audio-context";

export const StopAllSounds = () => {
  const audioObjects = useContext(AudioContext);
  const { playingAudios, setPlayingAudios } = useContext(AudioContext);

  function stopAllSounds() {
    playingAudios.forEach((audio) => audio.pause());
    setPlayingAudios([]);

    console.log("stop all sounds");    
  }

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
