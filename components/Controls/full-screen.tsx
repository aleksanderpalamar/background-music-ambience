"use client";

import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

export const FullScreen = () => {
  return (
    <div className="tooltip" data-tip="Full Screen">
      <Button className="bg-transparent border-none hover:bg-transparent">
        <ArrowUpDown className="text-2xl" />
      </Button>
    </div>
  );
};
