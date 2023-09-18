import { useState } from "react";

const useToggleVisibility = (i) => {
  const [visible, setVisible] = useState(i);

  return {
    visible,
    toggle: () => setVisible(!visible),
  };
};

export default useToggleVisibility;
