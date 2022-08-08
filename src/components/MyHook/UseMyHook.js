import { useState } from "react";

// separate ui hook

const useMyHook = () => {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  };

  const min = () => {
    setCounter(counter - 1);
  };

  return {
    counter,
    add,
    min,
  };
};

export default useMyHook;
