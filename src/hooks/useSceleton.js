import { useEffect, useState } from "react";

const useSceleton = (i) => {
  const [sceleton, setSceleton] = useState(i);

  useEffect(() => {
    const timerId = setTimeout(() => setSceleton(!sceleton), 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return { sceleton };
};

export default useSceleton;
