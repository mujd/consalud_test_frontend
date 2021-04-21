import * as React from 'react';

function BiUserPlus(props) {
   return (
      <svg
         stroke="currentColor"
         fill="currentColor"
         strokeWidth={0}
         viewBox="0 0 24 24"
         height="1em"
         width="1em"
         {...props}>
         <path
            fill="none"
            d="M6,8c0,1.178,0.822,2,2,2s2-0.822,2-2S9.178,6,8,6S6,6.822,6,8z"
         />
         <path d="M19 8L17 8 17 11 14 11 14 13 17 13 17 16 19 16 19 13 22 13 22 11 19 11zM4 8c0 2.28 1.72 4 4 4s4-1.72 4-4-1.72-4-4-4S4 5.72 4 8zM10 8c0 1.178-.822 2-2 2S6 9.178 6 8s.822-2 2-2S10 6.822 10 8zM4 18c0-1.654 1.346-3 3-3h2c1.654 0 3 1.346 3 3v1h2v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2V18z" />
      </svg>
   );
}

export default BiUserPlus;
