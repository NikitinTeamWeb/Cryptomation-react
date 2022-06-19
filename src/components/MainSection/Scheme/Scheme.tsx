import { useState, useEffect } from 'react';
import styles from './scheme.module.scss';

import GreyLines from './GreyLines/GreyLines';
import Logos from './Logos/Logos';
// import LogosSm from './LogosSm/LogosSm';
import CenterBlock from './CenterBlock/CenterBlock';

const Scheme = () => {
  const [isAnimate, setIsAnimate] = useState(false);

  return (
    <>
      <svg
        width="1350"
        height="395"
        viewBox="0 0 1350 395"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.container}
      >
        <mask
          id="mask0_0_1213"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1350"
          height="395"
        >
          <rect width="1350" height="395" fill="white" />
        </mask>

        <g id="center-block">
          <g filter="url(#filter1_b_0_1213)">
            <rect
              x="584"
              y="94"
              width="182"
              height="63"
              rx="31.5"
              fill="#86266E"
              fill-opacity="0.65"
            />
          </g>
          <mask
            id="mask2_0_1213"
            maskUnits="userSpaceOnUse"
            x="652"
            y="109"
            width="46"
            height="33"
          >
            <rect x="652" y="109" width="46" height="33" fill="white" />
          </mask>
          <g mask="url(#mask2_0_1213)" fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M657.097 111.257V123.64H662.404C662.746 123.64 663.041 123.516 663.288 123.269C663.536 123.021 663.66 122.72 663.66 122.366V112.531C663.66 112.177 663.536 111.876 663.288 111.629C663.041 111.381 662.746 111.257 662.404 111.257H657.097ZM661.395 121.995H658.742V112.902H661.395C661.561 112.902 661.708 112.964 661.838 113.088C661.967 113.212 662.032 113.362 662.032 113.539V121.358C662.032 121.535 661.967 121.685 661.838 121.809C661.708 121.933 661.561 121.995 661.395 121.995Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M666.627 111.275L664.133 123.658H665.778L666.221 121.34H668.573L669.051 123.658H670.696L668.237 111.275H666.627ZM668.29 119.713H666.539L667.441 115.308L668.29 119.713Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M671.523 111.257V123.64H673.168V117.608H676.83C677.172 117.608 677.47 117.484 677.724 117.236C677.977 116.989 678.104 116.688 678.104 116.334V112.531C678.104 112.177 677.977 111.876 677.724 111.629C677.47 111.381 677.172 111.257 676.83 111.257H671.523ZM675.822 115.963H673.168V112.902H675.822C675.999 112.902 676.149 112.964 676.273 113.088C676.397 113.212 676.459 113.356 676.459 113.521V115.326C676.459 115.503 676.397 115.653 676.273 115.777C676.149 115.901 675.999 115.963 675.822 115.963Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M678.931 111.257V123.64H680.576V117.608H684.238C684.58 117.608 684.878 117.484 685.131 117.236C685.385 116.989 685.512 116.688 685.512 116.334V112.531C685.512 112.177 685.385 111.876 685.131 111.629C684.878 111.381 684.58 111.257 684.238 111.257H678.931ZM683.23 115.963H680.576V112.902H683.23C683.407 112.902 683.557 112.964 683.681 113.088C683.805 113.212 683.867 113.356 683.867 113.521V115.326C683.867 115.503 683.805 115.653 683.681 115.777C683.557 115.901 683.407 115.963 683.23 115.963Z"
            />
            <path d="M687.577 123.64C687.223 123.64 686.923 123.516 686.675 123.269C686.427 123.021 686.304 122.72 686.304 122.366V119.624L687.949 119.996V121.358C687.949 121.535 688.011 121.685 688.135 121.809C688.258 121.933 688.403 121.995 688.568 121.995H690.585C690.761 121.995 690.912 121.933 691.036 121.809C691.159 121.685 691.221 121.535 691.221 121.358V118.245C691.221 118.068 691.159 117.917 691.036 117.794C690.912 117.67 690.761 117.608 690.585 117.608H687.577C687.223 117.608 686.923 117.484 686.675 117.236C686.427 116.989 686.304 116.688 686.304 116.334V112.531C686.304 112.177 686.427 111.876 686.675 111.629C686.923 111.381 687.223 111.257 687.577 111.257H691.593C691.947 111.257 692.247 111.381 692.495 111.629C692.743 111.876 692.867 112.177 692.867 112.531V114.441L691.221 114.052V113.539C691.221 113.362 691.159 113.212 691.036 113.088C690.912 112.964 690.761 112.902 690.585 112.902H688.568C688.403 112.902 688.258 112.964 688.135 113.088C688.011 113.212 687.949 113.362 687.949 113.539V115.326C687.949 115.503 688.011 115.653 688.135 115.777C688.258 115.901 688.403 115.963 688.568 115.963H691.593C691.947 115.963 692.247 116.086 692.495 116.334C692.743 116.582 692.867 116.883 692.867 117.236V122.366C692.867 122.72 692.743 123.021 692.495 123.269C692.247 123.516 691.947 123.64 691.593 123.64H687.577Z" />
            <path d="M659.374 138.89L656.951 126.507H658.596L660.241 134.874L661.886 126.507H663.532L665.159 134.874L666.804 126.507H668.449L666.026 138.89H664.31L662.7 130.682L661.09 138.89H659.374Z" />
            <path d="M669.1 138.89V126.507H675.68V128.135H670.745V131.213H674.035L673.664 132.858H670.745V137.245H675.68V138.89H669.1Z" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M677.357 138.89V126.49H681.85C682.216 126.49 682.522 126.616 682.77 126.87C683.017 127.123 683.141 127.421 683.141 127.763V131.283C683.377 131.366 683.572 131.519 683.725 131.743C683.878 131.968 683.955 132.209 683.955 132.469V137.599C683.955 137.964 683.831 138.271 683.584 138.519C683.336 138.766 683.035 138.89 682.681 138.89H677.357ZM679.02 131.213H680.842C681.019 131.213 681.172 131.148 681.302 131.018C681.431 130.888 681.496 130.741 681.496 130.576V128.772C681.496 128.595 681.431 128.444 681.302 128.32C681.172 128.197 681.019 128.135 680.842 128.135H679.02V131.213ZM681.691 137.245H679.02V132.84H681.691C681.856 132.84 682 132.905 682.124 133.035C682.248 133.165 682.31 133.312 682.31 133.477V136.59C682.31 136.779 682.248 136.935 682.124 137.059C682 137.183 681.856 137.245 681.691 137.245Z"
            />
            <path d="M687.082 138.89C686.728 138.89 686.427 138.766 686.18 138.519C685.932 138.271 685.808 137.97 685.808 137.616V135.299L687.453 135.688V136.608C687.453 136.785 687.515 136.935 687.639 137.059C687.763 137.183 687.913 137.245 688.09 137.245H690.107C690.272 137.245 690.419 137.183 690.549 137.059C690.679 136.935 690.744 136.785 690.744 136.608V133.495C690.744 133.318 690.679 133.167 690.549 133.044C690.419 132.92 690.272 132.858 690.107 132.858H688.479L688.851 131.213H690.107C690.272 131.213 690.419 131.151 690.549 131.027C690.679 130.903 690.744 130.753 690.744 130.576V128.771C690.744 128.606 690.679 128.462 690.549 128.338C690.419 128.214 690.272 128.152 690.107 128.152H688.037V128.135C687.872 128.146 687.733 128.214 687.621 128.338C687.509 128.462 687.453 128.606 687.453 128.771V130.452L685.808 130.08V127.763C685.808 127.421 685.932 127.126 686.18 126.879C686.427 126.631 686.728 126.507 687.082 126.507H691.115C691.457 126.507 691.752 126.631 692 126.879C692.247 127.126 692.371 127.421 692.371 127.763V131.584C692.371 131.761 692.348 131.914 692.3 132.044C692.348 132.174 692.371 132.321 692.371 132.486V137.616C692.371 137.97 692.247 138.271 692 138.519C691.752 138.766 691.457 138.89 691.115 138.89H687.082Z" />
            <animate
              attributeType="CSS"
              attributeName="fill"
              to="#FFCF5E"
              values="#ffffff; #FFCF5E;#FFCF5E; #ffffff"
              keyTimes="0; 0.5; 0.7; 1"
              dur="5s"
              begin="startButton.click + 8s"
            />
          </g>
          <mask
            id="mask3_0_1213"
            maskUnits="userSpaceOnUse"
            x="604"
            y="109"
            width="33"
            height="33"
          >
            <rect x="604" y="109" width="33" height="33" fill="white" />
          </mask>
          <g mask="url(#mask3_0_1213)" fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M626.283 109.626C626.283 111.221 625.595 112.817 624.624 113.966C623.592 115.241 621.808 116.188 620.39 116.188C620.227 116.188 620.065 116.166 619.965 116.147C619.946 116.07 619.905 115.826 619.905 115.583C619.905 113.966 620.737 112.371 621.627 111.362C622.761 110.05 624.642 109.059 626.223 109C626.264 109.181 626.283 109.405 626.283 109.626ZM631.857 119.674C631.896 119.648 631.923 119.631 631.935 119.621C629.829 116.612 626.63 116.531 625.739 116.531C624.377 116.531 623.157 117.012 622.132 117.417C621.39 117.711 620.749 117.964 620.23 117.964C619.657 117.964 619.001 117.7 618.268 117.405C617.344 117.033 616.299 116.612 615.147 116.612C611.26 116.612 607.31 119.824 607.31 125.881C607.31 129.657 608.769 133.636 610.575 136.197C612.134 138.378 613.491 140.154 615.434 140.154C616.356 140.154 617.031 139.868 617.742 139.567C618.53 139.234 619.361 138.883 620.618 138.883C621.888 138.883 622.647 139.213 623.379 139.531C624.06 139.827 624.718 140.113 625.742 140.113C627.867 140.113 629.264 138.197 630.601 136.278C632.101 134.097 632.729 131.956 632.748 131.857C632.626 131.816 628.554 130.181 628.554 125.557C628.554 121.834 631.33 120.019 631.857 119.674Z"
            />
            <animate
              attributeType="CSS"
              attributeName="fill"
              to="#FFCF5E"
              values="#ffffff; #FFCF5E;#FFCF5E; #ffffff"
              keyTimes="0; 0.5; 0.7; 1"
              dur="5s"
              begin="startButton.click + 8s"
            />
          </g>
          <mask
            id="mask4_0_1213"
            maskUnits="userSpaceOnUse"
            x="713"
            y="109"
            width="33"
            height="33"
          >
            <rect x="713" y="109" width="33" height="33" fill="white" />
          </mask>
          <g mask="url(#mask4_0_1213)" fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M734.918 110.447L733.636 112.845C734.924 113.517 735.954 114.453 736.725 115.655C737.496 116.858 737.881 118.173 737.881 119.601H721.17C721.17 118.172 721.556 116.858 722.327 115.655C723.097 114.453 724.133 113.517 725.434 112.845L724.151 110.447C724.067 110.289 724.097 110.167 724.241 110.081C724.398 110.008 724.518 110.045 724.603 110.191L725.903 112.608C727.047 112.095 728.258 111.838 729.535 111.838C730.811 111.838 732.022 112.095 733.166 112.608L734.467 110.191C734.551 110.045 734.672 110.007 734.828 110.081C734.973 110.167 735.003 110.289 734.918 110.447ZM725.722 116.544C725.915 116.544 726.081 116.473 726.219 116.333C726.357 116.192 726.427 116.025 726.427 115.829C726.427 115.634 726.358 115.467 726.219 115.326C726.081 115.186 725.915 115.116 725.722 115.116C725.53 115.116 725.367 115.186 725.235 115.326C725.102 115.467 725.036 115.634 725.036 115.829C725.036 116.025 725.102 116.192 725.235 116.333C725.367 116.473 725.529 116.544 725.722 116.544ZM733.834 116.333C733.702 116.473 733.539 116.544 733.347 116.544C733.154 116.544 732.988 116.473 732.849 116.333C732.711 116.192 732.642 116.025 732.642 115.829C732.642 115.634 732.711 115.467 732.849 115.326C732.988 115.186 733.154 115.116 733.347 115.116C733.539 115.116 733.701 115.186 733.834 115.326C733.967 115.467 734.033 115.634 734.033 115.829C734.033 116.025 733.967 116.192 733.834 116.333ZM717.358 120.46C717.719 120.094 718.158 119.911 718.676 119.911C719.182 119.911 719.616 120.094 719.977 120.46C720.339 120.827 720.519 121.266 720.519 121.778V129.65C720.519 130.176 720.341 130.621 719.986 130.987C719.631 131.353 719.194 131.536 718.676 131.536C718.158 131.536 717.719 131.353 717.358 130.987C716.996 130.621 716.816 130.176 716.816 129.65V121.778C716.816 121.266 716.996 120.827 717.358 120.46ZM721.242 132.451C721.242 133.013 721.434 133.488 721.82 133.879C722.205 134.269 722.675 134.464 723.229 134.464H724.566L724.584 138.62C724.584 139.145 724.765 139.591 725.126 139.957C725.487 140.323 725.921 140.506 726.427 140.506C726.945 140.506 727.384 140.323 727.746 139.957C728.107 139.591 728.288 139.145 728.288 138.62V134.465H730.781V138.62C730.781 139.145 730.961 139.591 731.323 139.957C731.684 140.323 732.123 140.506 732.641 140.506C733.159 140.506 733.599 140.323 733.96 139.957C734.321 139.591 734.502 139.145 734.502 138.62V134.465H735.857C736.399 134.465 736.862 134.27 737.248 133.879C737.633 133.489 737.826 133.013 737.826 132.451V120.259H721.242V132.451ZM739.092 120.451C739.453 120.092 739.887 119.911 740.393 119.911C740.91 119.911 741.35 120.092 741.711 120.451C742.073 120.812 742.253 121.254 742.253 121.778V129.65C742.253 130.176 742.073 130.621 741.711 130.987C741.35 131.353 740.91 131.536 740.393 131.536C739.887 131.536 739.453 131.353 739.092 130.987C738.73 130.621 738.55 130.176 738.55 129.65V121.778C738.55 121.254 738.73 120.812 739.092 120.451Z"
            />

            <animate
              attributeType="CSS"
              attributeName="fill"
              to="#FFCF5E"
              values="#ffffff; #FFCF5E;#FFCF5E; #ffffff"
              keyTimes="0; 0.5; 0.7; 1"
              dur="5s"
              begin="startButton.click + 8s"
            />
          </g>
        </g>
        <g id="lines-center">
          <path
            d="M675 213C680.857 215.568 720.636 190.827 722 155.5"
            stroke="url(#paint0_linear_0_1213)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="4"
            className={styles.line}
          />
          <path
            d="M675 212.816C669.143 215.398 629.364 190.521 628 155"
            stroke="url(#paint1_linear_0_1213)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="4"
            className={styles.line}
          />
          <path
            d="M675.5 213V153"
            stroke="url(#paint2_linear_0_1213)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="4"
            className={styles.line}
          />
          <circle cx="675" cy="214" r="4" fill="#250A2C" stroke="white" />
        </g>
        <GreyLines />

        <Logos isAnimate={isAnimate} />

        <CenterBlock />

        <defs>
          <filter
            id="filter0_b_0_1213"
            x="556.514"
            y="149.514"
            width="236.972"
            height="236.972"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="32.7429" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1213"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_b_0_1213"
            x="543.226"
            y="53.2258"
            width="263.548"
            height="144.548"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="20.3871" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1213"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_f_0_1213"
            x="1075.76"
            y="135.761"
            width="231.478"
            height="231.478"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="32.6194"
              result="effect1_foregroundBlur_0_1213"
            />
          </filter>
          <filter
            id="filter3_dd_0_1213"
            x="1119.5"
            y="183.5"
            width="106"
            height="105"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-6" dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.495809 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1213"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.172549 0 0 0 0 0.490196 0 0 0 0 0.968627 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_0_1213"
              result="effect2_dropShadow_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_0_1213"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_b_0_1213"
            x="1111.82"
            y="171.817"
            width="123.366"
            height="123.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1213"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_f_0_1213"
            x="926.761"
            y="170.761"
            width="231.478"
            height="231.478"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="32.6194"
              result="effect1_foregroundBlur_0_1213"
            />
          </filter>
          <filter
            id="filter6_dd_0_1213"
            x="970.5"
            y="218.5"
            width="106"
            height="105"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-6" dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.495809 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1213"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.253852 0 0 0 0 0.810884 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_0_1213"
              result="effect2_dropShadow_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_0_1213"
              result="shape"
            />
          </filter>
          <filter
            id="filter7_b_0_1213"
            x="962.817"
            y="205.817"
            width="123.366"
            height="123.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1213"
              result="shape"
            />
          </filter>
          <filter
            id="filter8_f_0_1213"
            x="966.761"
            y="41.7612"
            width="231.478"
            height="231.478"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="32.6194"
              result="effect1_foregroundBlur_0_1213"
            />
          </filter>
          <filter
            id="filter9_dd_0_1213"
            x="1010.5"
            y="89.5"
            width="106"
            height="105"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-6" dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.495809 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1213"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_0_1213"
              result="effect2_dropShadow_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_0_1213"
              result="shape"
            />
          </filter>
          <filter
            id="filter10_dd_0_1213"
            x="1159.5"
            y="49.5"
            width="106"
            height="105"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-6" dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.495809 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1213"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.968627 0 0 0 0 0.576471 0 0 0 0 0.101961 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_0_1213"
              result="effect2_dropShadow_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_0_1213"
              result="shape"
            />
          </filter>
          <filter
            id="filter11_b_0_1213"
            x="1151.82"
            y="36.8172"
            width="123.366"
            height="123.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1213"
              result="shape"
            />
          </filter>
          <filter
            id="filter12_f_0_1213"
            x="78.7612"
            y="135.761"
            width="231.478"
            height="231.478"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="32.6194"
              result="effect1_foregroundBlur_0_1213"
            />
          </filter>
          <filter
            id="filter13_dd_0_1213"
            x="124.5"
            y="183.5"
            width="106"
            height="105"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="6" dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.495809 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1213"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.952941 0 0 0 0 0.729412 0 0 0 0 0.184314 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_0_1213"
              result="effect2_dropShadow_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_0_1213"
              result="shape"
            />
          </filter>
          <filter
            id="filter14_b_0_1213"
            x="114.817"
            y="172.817"
            width="123.366"
            height="123.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1213"
              result="shape"
            />
          </filter>
          <filter
            id="filter15_f_0_1213"
            x="227.761"
            y="170.761"
            width="231.478"
            height="231.478"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="32.6194"
              result="effect1_foregroundBlur_0_1213"
            />
          </filter>
          <filter
            id="filter16_dd_0_1213"
            x="273.5"
            y="218.5"
            width="106"
            height="105"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="6" dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.495809 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1213"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.952941 0 0 0 0 0.729412 0 0 0 0 0.184314 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_0_1213"
              result="effect2_dropShadow_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_0_1213"
              result="shape"
            />
          </filter>
          <filter
            id="filter17_b_0_1213"
            x="263.817"
            y="206.817"
            width="123.366"
            height="123.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1213"
              result="shape"
            />
          </filter>
          <filter
            id="filter18_f_0_1213"
            x="187.761"
            y="41.7612"
            width="231.478"
            height="231.478"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="32.6194"
              result="effect1_foregroundBlur_0_1213"
            />
          </filter>
          <filter
            id="filter19_dd_0_1213"
            x="233.5"
            y="89.5"
            width="106"
            height="105"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="6" dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.495809 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1213"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_0_1213"
              result="effect2_dropShadow_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_0_1213"
              result="shape"
            />
          </filter>
          <filter
            id="filter20_b_0_1213"
            x="223.817"
            y="77.8172"
            width="123.366"
            height="123.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1213"
              result="shape"
            />
          </filter>
          <filter
            id="filter21_f_0_1213"
            x="38.7612"
            y="1.76124"
            width="231.478"
            height="231.478"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="32.6194"
              result="effect1_foregroundBlur_0_1213"
            />
          </filter>
          <filter
            id="filter22_dd_0_1213"
            x="84.5"
            y="49.5"
            width="106"
            height="105"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="6" dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.106979 0 0 0 0 0 0 0 0 0 0.286485 0 0 0 0.495809 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1213"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.743037 0 0 0 0 0.589898 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_0_1213"
              result="effect2_dropShadow_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_0_1213"
              result="shape"
            />
          </filter>
          <filter
            id="filter23_b_0_1213"
            x="74.8172"
            y="37.8172"
            width="123.366"
            height="123.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1213"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_1213"
            x1="669"
            y1="212"
            x2="669"
            y2="153"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop
              offset="0.514733"
              stop-color="white"
              stop-opacity="0.903398"
            />
            <stop offset="1" stop-color="#390B34" stop-opacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_1213"
            x1="680"
            y1="212"
            x2="680"
            y2="153"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop
              offset="0.514733"
              stop-color="white"
              stop-opacity="0.903398"
            />
            <stop offset="1" stop-color="#390B34" stop-opacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_0_1213"
            x1="674.5"
            y1="210"
            x2="674.5"
            y2="165"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop
              offset="0.514733"
              stop-color="white"
              stop-opacity="0.903398"
            />
            <stop offset="1" stop-color="#390B34" stop-opacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default Scheme;
