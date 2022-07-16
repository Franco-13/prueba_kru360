import * as React from "react";

const ComunicationIcon = (props) => (
  <svg
    height={21}
    width={21}
    viewBox="0 0 21 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(3 3)"
    >
      <circle cx={7.5} cy={5.5} r={2} />
      <path d="M.5 3.5h1v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-1h-1M.5 7.5h1M.5 5.5h1M.5 9.5h1" />
      <path d="M10.5 10.5v-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z" />
    </g>
  </svg>
);

export default ComunicationIcon;
