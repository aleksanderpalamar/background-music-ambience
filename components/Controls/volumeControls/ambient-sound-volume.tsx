"use client";

export const AmbientSoundVolume = () => {
  return (
    <div className="tooltip" data-tip="Ambient Sound Volume">
      <input type="range" min="0" max="100" value="5" id="soundVolumeSlider" />
    </div>
  );
};
