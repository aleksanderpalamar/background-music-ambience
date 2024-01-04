"use client";

import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

import {
  Dialog as DialogShadcnUI,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";

export const Dialog = () => {
  return (
    <DialogShadcnUI open>
      <div className="modal-box flex flex-col p-2 rounded-lg gap-2 shadow-[0px_20px_207px_10px_rgba(218,_215,_215,_0.37)]">
        <label className="text-base font-bold text-zinc-300">Enter YouTube Video URL </label>

        <div className="flex gap-4 align-center">
          <Input
            className="w-full rounded-md pl-2"
            type="text"
            id="videoURL"
            placeholder="https://www.youtube.com/watch?v=4xDzrJKXOOY"
          />

          <Button
            className="bg-transparent border-none hover:bg-transparent"           
          >
            <Play className="text-2xl" />  
          </Button>          
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <Button className="bg-transparent border-none hover:bg-transparent">
          <X className="text-2xl" />
        </Button>
      </form>
    </DialogShadcnUI>
  );
};
