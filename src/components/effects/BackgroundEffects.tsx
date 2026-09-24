"use client";

import dynamic from "next/dynamic"; // "next/dynamic" is used to dynamically import components
// dynamic() : allows you to load a component lazily. This is useful when you want to load a component only when it's needed.
// ssr: false : disables server-side rendering for the dynamically imported component.
// This is useful for components that rely on browser-specific APIs or need to be rendered only on the client side.

const StarField = dynamic(() => import("./Starfield"), { ssr: false });
const Embers = dynamic(() => import("./Embers"), { ssr: false });
const Music = dynamic(() => import("./Music"), { ssr: false });

export default function BackgroundEffects() {
  return (
    <>
      <StarField />
      <Embers />
      {/* <Music /> */}
    </>
  );
}
