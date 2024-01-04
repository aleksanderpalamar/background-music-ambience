import Link from "next/link";
import Image from "next/image";

import { Dialog } from "@/components/Controls/Dialog/dialog";
import { AmbientSounds } from "@/components/Controls/ambient-sound";
import { ChangeVideo } from "@/components/Controls/change-video";
import { FitScreen } from "@/components/Controls/fit-screen";
import { FullScreen } from "@/components/Controls/full-screen";
import { PlayPause } from "@/components/Controls/play-pause";
import { StopAllSounds } from "@/components/Controls/stop-all-sounds";
import { Volume } from "@/components/Controls/volume";
import { AmbientSoundVolume } from "@/components/Controls/volumeControls/ambient-sound-volume";
import { YouTubeVolume } from "@/components/Controls/volumeControls/youtube-volume";
import { YouTubePlayer } from "@/components/video";

export default function Home() {
  return (
    <div className="flex m-0 p-0 h-full w-full">
      <div className="container flex flex-col h-full w-full mx-auto justify-center items-center">
        <div className="fixed bottom-5 right-4 z-50 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 backdrop-saturate-100 backdrop-contrast-100 rounded-lg p-1 hover:scale-105 cursor-pointer transition ease-in-out duration-300">
          <Link href="https://palamardev.vercel.app" target="_blank">
            <Image src="/images/favicon.png" width={100} height={100} alt="" className="w-12 h-12" />
          </Link>
        </div>
        <YouTubePlayer />
        <div
          id="controls"
          className="fixed flex items-center mx-auto gap-12 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 backdrop-saturate-100 backdrop-contrast-100 rounded-full p-4 bottom-5"
        >
          <ChangeVideo />
          <PlayPause />
          <StopAllSounds />
          <Volume />

          <div
            id="volumeControls"
            className="absolute top-[-80px] right-0 z-50 left-0 bg-gray-500 bg-clip-padding backdrop-filter 
            backdrop-blur bg-opacity-50 backdrop-saturate-100 backdrop-contrast-100 rounded-full 
            p-4 justify-center items-center gap-4 hidden"
          >
            <YouTubeVolume />
            <AmbientSoundVolume />
          </div>

          <AmbientSounds />
          <FitScreen />
          <FullScreen />

          <Dialog />
        </div>
      </div>
    </div>
  );
}
