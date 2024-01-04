"use client";

import { FrameIcon } from "lucide-react";
import { Button } from "../ui/button";

export const FitScreen = () => {
  return (
    <div className="tooltip" data-tip="Fit Screen">
      <Button className="bg-transparent border-none hover:bg-transparent">
        <FrameIcon className="text-2xl" />
      </Button>
    </div>
  );
};
