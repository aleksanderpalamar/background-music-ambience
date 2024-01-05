"use client";

import { Input } from "@/components/ui/input";

export const YouTubeVolume = () => {
  return (
    <div className="tooltip" data-tip="YouTube Video Volume">
      <Input type="range" min="0" max="100" value="5" id="playerVolumeSlider" />
    </div>
  );
}