import { useState, useEffect, useRef } from "react";

const useOutsideClick = (initialValue) => {
  const [isActive, setIsActive] = useState(initialValue);
  const ref = useRef(null);
  const bol = useRef(null);

  const handleClick = (e) => {
    if (ref.current && !bol.current.contains(e.target)) {
      setIsActive(!isActive);
      console.log(1)
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return { ref, bol, isActive, setIsActive };
};

export default useOutsideClick;
