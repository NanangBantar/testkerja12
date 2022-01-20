const Smilesvg = ({ location }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
        stroke={location === "/" ? "white" : "#3E2E83"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17.5C10 17.5 11.875 20 15 20C18.125 20 20 17.5 20 17.5"
        stroke={location === "/" ? "white" : "#3E2E83"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 11.25H11.2625"
        stroke={location === "/" ? "white" : "#3E2E83"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 11.25H18.7625"
        stroke={location === "/" ? "white" : "#3E2E83"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Smilesvg;
