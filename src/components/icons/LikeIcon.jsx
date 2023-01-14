import React from "react";

const LikeIcon = () => {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
    >
      <g filter="url(#filter0_i_1_44)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.29163 21.7708C2.29163 13.5441 8.96072 6.875 17.1875 6.875C21.191 6.875 24.8253 8.45583 27.5 11.0222C30.1746 8.45583 33.8089 6.875 37.8125 6.875C46.0392 6.875 52.7083 13.5441 52.7083 21.7708C52.7083 28.9532 48.5009 35.5194 43.5945 40.4743C38.6658 45.4517 32.6381 49.2062 28.2227 50.6735C27.7535 50.8294 27.2464 50.8294 26.7773 50.6735C22.3618 49.2062 16.3341 45.4517 11.4054 40.4743C6.49904 35.5194 2.29163 28.9532 2.29163 21.7708ZM17.1875 11.4583C11.492 11.4583 6.87496 16.0754 6.87496 21.7708C6.87496 27.1927 10.1155 32.6577 14.6622 37.2494C18.8937 41.5226 23.9177 44.6923 27.5 46.065C31.0822 44.6923 36.1063 41.5226 40.3377 37.2494C44.8845 32.6577 48.125 27.1927 48.125 21.7708C48.125 16.0754 43.5079 11.4583 37.8125 11.4583C34.3266 11.4583 31.2438 13.1858 29.3737 15.8415C28.9444 16.4511 28.2455 16.8137 27.5 16.8137C26.7544 16.8137 26.0555 16.4511 25.6263 15.8415C23.7561 13.1858 20.6734 11.4583 17.1875 11.4583Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1_44"
          x="0"
          y="0"
          width="55"
          height="59"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1_44"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LikeIcon;
