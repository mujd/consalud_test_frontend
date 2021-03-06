function RiCloseLine(props) {
   return (
      <svg
         stroke="currentColor"
         fill="currentColor"
         strokeWidth={0}
         viewBox="0 0 24 24"
         height="1em"
         width="1em"
         {...props}>
         <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
         </g>
      </svg>
   );
}

export default RiCloseLine;
