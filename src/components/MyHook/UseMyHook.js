import { useState } from "react";
import UseAsync from "../../shared/UseAsync";
import { useDeps } from "../../context/depContext";
// separate ui hook

const useMyHook = () => {
  const [result, setResult] = useState("");

  const [counter, setCounter] = useState(0);

  const { moreEffectService } = useDeps();

  const { execute, status, value, error } = UseAsync();

  // console.log("Deps", useDeps());
  // console.log("more effect service", moreEffectServices);

  const add = () => {
    console.log(counter);
    setCounter(counter + 1);
    onExec();
    setResult(value);
  };

  const min = () => {
    setCounter(counter - 1);
    onExec();
    setResult(value);
  };

  const onExec = async () => {
    if (counter !== null) {
      await execute(() => moreEffectService.doPrint(counter));
    }
  };

  return {
    result,
    status,
    add,
    min,
  };
};

export default useMyHook;
