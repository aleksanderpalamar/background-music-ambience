"use client";

import { useEffect, useState } from "react";
import { AmbientSoundModal } from "../Modals/ambient-sound-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  
  return (
    <>
      <AmbientSoundModal />
    </>
  )
}