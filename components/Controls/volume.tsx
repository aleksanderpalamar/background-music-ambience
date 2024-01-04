"use client";

import { Volume1Icon } from "lucide-react";
import { Button } from "../ui/button";

export const Volume = () => {
  return (
    <div className="tooltip" data-tip="Volume">
      <Button className="bg-transparent border-none hover:bg-transparent">
        <Volume1Icon className="text-2xl" />
      </Button>
    </div>
  );
};
