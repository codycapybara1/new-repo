import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import { scenes } from "./Experience";
import React from 'react';

export const slideAtom = atom(0);

export const Overlay = () => {
  const [slide, setSlide] = useAtom(slideAtom);
  const [displaySlide, setDisplaySlide] = useState(slide);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      setDisplaySlide(slide);
      setVisible(true);
    }, 2600);
  }, [slide]);
  return (
    <>
      <div
        className={`fixed z-10 top-0 left-0 bottom-0 right-0 flex flex-col justify-between pointer-events-none text-black ${
          visible ? "" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <svg
          className="w-40 mx-auto mt-8"
          viewBox="0 0 342 35"
          xmlns="http://www.w3.org/2000/svg"
        >


                <path               
                strokeLinecap="round"
              strokeLinejoin="round"
               d="M900 1462 c-42 -21 -60 -61 -41 -94 7 -13 62 -61 121 -108 l108 -85 -377 -5 c-258 -3 -382 -9 -396 -17 -36 -20 -57 -51 -62 -92 -5 -36 -2 -44 30 -76 
               l35 -35 193 0 193 0 -193 -142 c-461 -341 -476 -352 -493 -388 -43 -88 3 -160 100 -160 48 0 77 19 269 178 89 72 164 132 167 132 3 0 6 -24 6 -53 0 -134
                104 -305 243 -399 332 -226 809 -106 965 243 78 173 63 357 -42 518 -56 86 -65 94 -376 332 -384 295 -374 289 -450 251z m473 -525 c84 -41 146 -102 181
                 -177 16 -34 21 -65 21 -125 -1 -104 -27 -165 -101 -235 -161 -152 -404 -154 -564 -4 -73 68 -105 140 -105 234 0 155 92 273 260 333 38 13 73 17 141 14 82 -3 99 -7 167 -40z" /> 
                <path              
                 strokeLinecap="round"
              strokeLinejoin="round"
              d="M1122 845 c-121 -37 -184 -160 -139 -268 30 -71 121 -127 207 -127 86 0 177 56 207 127 46 110 -19 231 -143 269 -57 17 -76 17 -132 -1z" />
        </svg>
        
        <div className="absolute top-0 bottom-0 left-0 right-0 flex-1 flex items-center justify-between p-4">
          <svg
            onClick={() =>
              setSlide((prev) => (prev > 0 ? prev - 1 : scenes.length - 1))
            }
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 pointer-events-auto hover:opacity-60 transition-opacity cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 pointer-events-auto hover:opacity-60 transition-opacity cursor-pointer"
            onClick={() =>
              setSlide((prev) => (prev < scenes.length - 1 ? prev + 1 : 0))
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
        <div className="bg-gradient-to-t from-white/90 pt-20 pb-10 p-4 flex items-center flex-col text-center">
          <h1 className="text-5xl font-extrabold">
            {scenes[displaySlide].name}
          </h1>
          <p className="text-opacity-60 italic">
            {scenes[displaySlide].description}
          </p>
          <div className="flex items-center gap-12 mt-10">
            <div className="flex flex-col items-center">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                  />
                </svg>
                <p className="font-semibold text-3xl">
                  {scenes[displaySlide].price.toLocaleString()} hours
                </p>
              </div>
              <p className="text-sm opacity-80">Time Spent</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
                <p className="font-semibold text-3xl">
                  ${scenes[displaySlide].range}
                </p>
              </div>
              <p className="text-sm opacity-80">Money made</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
