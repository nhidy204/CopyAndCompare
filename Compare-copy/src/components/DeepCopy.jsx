import { useState } from "react";
import Child from "./Child";

export default function DeepCopyCorrect() {
  const [user, setUser] = useState({
    name: "Nhi",
    info: { age: 22 }
  });

  const increaseAge = () => {
    setUser({
      ...user,
      info: {
        ...user.info,
        age: user.info.age + 1
      }
    });
  };

  return (
    <section>
      <h2>Deep Copy - Correct</h2>
      <p>Age in Parent: {user.info.age}</p>
      <Child info={user.info} />
      <button onClick={increaseAge}>Increase age</button>
    </section>
  );
}
