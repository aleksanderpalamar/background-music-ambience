"use client";

import { DiscAlbumIcon } from "lucide-react";
import { Button } from "../ui/button";

export const AmbientSounds = () => {
  return (
    <div className="tooltip" data-tip="Ambient Sounds">
      <Button className="bg-transparent border-none hover:bg-transparent">
        <DiscAlbumIcon className="text-2xl" />
      </Button>
    </div>
  );
};
