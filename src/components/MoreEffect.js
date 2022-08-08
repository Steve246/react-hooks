import { useEffect, useState } from "react";
import MoreEffectService from "../service/moreEffectService";

const MoreEffect = () => {
  const { doPrint } = MoreEffectService();
  const [result, setResult] = useState();
  useEffect(() => {
    setResult(doPrint("1"));
    console.log("1");
  }, []);
  return (
    <>
      <h1> Print : {result} </h1>
    </>
  );
};

export default MoreEffect;
