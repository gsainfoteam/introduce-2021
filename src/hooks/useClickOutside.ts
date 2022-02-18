import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const useClickOutside = (
  ref: React.MutableRefObject<HTMLElement | null>,
  listener?: (e: MouseEvent) => any
) => {
  useEffect(() => {
    const handleClick: (this: Document, event: MouseEvent) => any = (event) => {
      const element = event.target;
      const refNode = ReactDOM.findDOMNode(ref.current);

      if (
        !(refNode && element instanceof Node && refNode.contains(element)) &&
        listener
      ) {
        listener(event);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, listener]);
};

export default useClickOutside;
