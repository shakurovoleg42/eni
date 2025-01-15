import React from "react";

function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <span className="font-bold">Поиск товаров...</span>
      <svg width="100" height="100" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="0"
          fill="none"
          stroke="rgba(254, 211, 0, 1)"
          strokeWidth="4"
        >
          <animate
            attributeName="r"
            from="0"
            to="100"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="100"
          cy="100"
          r="0"
          fill="none"
          stroke="rgba(254, 211, 0, 1)"
          strokeWidth="4"
        >
          <animate
            attributeName="r"
            from="0"
            to="100"
            dur="2s"
            begin="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="2s"
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

export default Spinner;
