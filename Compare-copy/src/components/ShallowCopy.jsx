import { useState } from "react";
import Child from "./Child";

export default function ShallowCopyBug() {
  const [user, setUser] = useState({
    name: "Nhi",
    info: { age: 22 }
  });

  const increaseAge = () => {
    const newUser = { ...user };  
    newUser.info.age += 1;         

    setUser(newUser);
  };

  return (
    <section>
      <h2>Shallow Copy - bug</h2>
      <p>Age in Parent: {user.info.age}</p>
      <Child info={user.info} />
      <button onClick={increaseAge}>Increase age</button>
    </section>
  );
}
