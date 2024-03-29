/* eslint-disable @next/next/no-img-element */
import CEvent from "@lib/types/CEvent";
import { AnchorHTMLAttributes } from "react";

const Link = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className="underline" {...props} target="_blank" rel="noreferrer noopener">
    {props.children}
  </a>
);

const events: CEvent[] = [
  {
    name: "Lynbrook High School Student-Led Ecofeminism Protest Speech",
    media: <img src="/media.png" alt="Protest images" />,
    description: (
      <>
        All photos taken by{" "}
        <Link href="https://instagram.com/srutielangovanphoto">
          Sruti Elangovan
        </Link>{" "}
        on May 18, 2022
      </>
    ),
    type: "previous",
  },
  {
    name: "East meets West Talk - Caring for our Common Home",
    description: <>July 16, 2021</>,
    media: (
      <iframe
        src="https://www.youtube.com/embed/53LbDXQ5Mfk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    ),
    type: "previous",
  },
];

export default events;
