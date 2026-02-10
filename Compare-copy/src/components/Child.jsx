import { memo } from "react";

const Child = memo(({ info }) => {
  console.log("Child render");
  return <p>Age in Child: {info.age}</p>;
});

export default Child;
