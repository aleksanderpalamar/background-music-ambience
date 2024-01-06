"use client";

import { DiscAlbumIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useAmbientSound } from "@/hooks/use-ambient-sound";

export const AmbientSounds = () => {
  const ambientSound = useAmbientSound();  

  return (
    <div className="tooltip" data-tip="Ambient Sounds">
      <Button className="bg-transparent border-none hover:bg-transparent">
        <DiscAlbumIcon role="button" onClick={ambientSound.onOpen} className="text-2xl" />
      </Button>
    </div>
  );
};
