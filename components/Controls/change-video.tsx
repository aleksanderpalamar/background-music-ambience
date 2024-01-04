"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { YoutubeIcon } from "lucide-react";

export const ChangeVideo = () => { 

  return (
    <div className="tooltip" data-tip="Change Video">
      <Button 
        className="bg-transparent border-none hover:bg-transparent"
        onClick={() => {}}
      >
        <YoutubeIcon role="button" className="text-2xl"/>        
      </Button>
    </div>
  );
};
