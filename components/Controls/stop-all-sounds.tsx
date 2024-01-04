"use client";

import { StopCircle } from "lucide-react";
import { Button } from "../ui/button";

export const StopAllSounds = () => {
  return (
    <div className="tooltip" data-tip="Stop all Sounds">
      <Button className="bg-transparent border-none hover:bg-transparent">
        <StopCircle className="text-2xl" />
      </Button>
    </div>
  );
};
