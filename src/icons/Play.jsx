import React from "react";

function Play({ white }) {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 93.64 115.24"
      className={`size-8 md:size-12 ${white && "fill-white"}`}
    >
      <g id="Layer_1-2" data-name="Layer 1">
        <path d="M87.22,45.64L22.39,2.42c-2.41-1.61-5.19-2.42-7.99-2.42-2.33,0-4.67.56-6.8,1.71C2.92,4.21,0,9.09,0,14.41v86.43c0,5.32,2.92,10.19,7.61,12.7,2.13,1.15,4.47,1.71,6.8,1.71,2.79,0,5.58-.81,8-2.42l64.82-43.22c4-2.67,6.41-7.17,6.41-11.99s-2.41-9.31-6.42-11.99Z" />
      </g>
    </svg>
  );
}

export default Play;
