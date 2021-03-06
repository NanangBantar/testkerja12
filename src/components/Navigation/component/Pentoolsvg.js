const Pentoolsvg = ({ location }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 23.75L23.75 15L27.5 18.75L18.75 27.5L15 23.75Z"
        stroke={location === "/visi" ? "white" : "#3E2E83"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 16.25L20.625 6.875L2.5 2.5L6.875 20.625L16.25 22.5L22.5 16.25Z"
        stroke={location === "/visi" ? "white" : "#3E2E83"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 2.5L11.9822 11.9822"
        stroke={location === "/visi" ? "white" : "#3E2E83"}
        strokeWidth="2"
      />
      <circle
        cx="13.75"
        cy="13.75"
        r="2.5"
        stroke={location === "/visi" ? "white" : "#3E2E83"}
        strokeWidth="2"
      />
    </svg>
  );
};

export default Pentoolsvg;
