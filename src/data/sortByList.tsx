import SortByAlphaOutlinedIcon from "@mui/icons-material/SortByAlphaOutlined";

export const sortByList = [
  {
    id: 1,
    name: "Price: Low to High",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" className="sortByIcons">
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z" opacity="0.05"></path>
          <path
            d="M4 6.136h4.637v2.272H4.472l-.351 1.135h4.45a2.855 2.855 0 01-.772 1.44c-.51.514-1.177.81-1.888.836H5.91l-1.272-.002c-.25-.001-.377.305-.2.484l6.276 6.338 1.586-.002-5.706-5.76a3.92 3.92 0 002-1.092 3.984 3.984 0 001.119-2.242h2.311l.352-1.135H9.76V6.136h3.267V5H4v1.136zm12.626.733l1.249 1.265h-1.25V6.869zm-1.09-1.333v8.35c0 .3.232.557.548.557a.534.534 0 00.542-.547V9.184h2.414a.586.586 0 00.537-.143.53.53 0 00-.001-.773L16.48 5.161a.585.585 0 00-.62-.12.508.508 0 00-.326.495z"
            fill="#282C3F"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Price: High to Low ",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" className="sortByIcons">
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z" opacity="0.05"></path>
          <path
            d="M4 6.215h4.962v2.43H4.505L4.13 9.858h4.764a3.05 3.05 0 01-.827 1.539 2.99 2.99 0 01-2.022.895l-1.361-.003a.304.304 0 00-.214.519l6.717 6.779 1.697-.004-6.107-6.16a4.193 4.193 0 002.14-1.167 4.256 4.256 0 001.198-2.398h2.474l.376-1.215h-2.799v-2.43h3.496V5H4v1.215zm12.389 10.028h1.337l-1.337 1.354v-1.354zm-.818 3.309c.23.09.488.04.663-.127l3.312-3.326a.567.567 0 000-.828.627.627 0 00-.574-.152H16.39v-5.043a.571.571 0 00-.58-.585.587.587 0 00-.587.597v8.935c0 .237.12.439.35.529z"
            fill="#282C3F"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Ratings: High to Low",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="sortByIcons">
        <path
          d="M13.7441 7.76569L15.5512 4.25163C15.7206 3.91273 16.2062 3.91728 16.3711 4.25845L18.2794 8.20012L22.6123 8.86767C22.9864 8.92567 23.132 9.38625 22.859 9.64896L19.6975 12.6808L20.406 17.0046C20.4674 17.3776 20.0728 17.6596 19.7385 17.48L16.3074 15.516"
          stroke="#282C3F"
          stroke-width="1.13724"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.98042 5.62951L12.0297 9.8623L16.681 10.5776C17.0518 10.6345 17.1973 11.0939 16.9244 11.3544L13.5331 14.6091L14.2917 19.2502C14.3531 19.6209 13.9619 19.9007 13.6298 19.7233L9.48344 17.5023L5.3041 19.6607C4.96975 19.8325 4.58195 19.547 4.64905 19.1763L5.47923 14.5489L2.13576 11.2429C1.86737 10.9779 2.01976 10.5219 2.39277 10.4696L7.05317 9.82477L9.16615 5.62382C9.3356 5.2872 9.81665 5.29061 9.98042 5.62951Z"
          stroke="#282C3F"
          stroke-width="1.13724"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Name (Ascending)",
    icon: <SortByAlphaOutlinedIcon className="sortByIcons" />,
  },
];
