import { memo, useState } from "react";

const Child = memo(({ user }) => {
  console.log("ShallowCompare Child render");
  return <p>User: {user.name}</p>;
});

export default function ShallowCompare() {
  const [count, setCount] = useState(0);

  const user = { name: "Nhi" }; 

  return (
    <section>
      <h2>1 Shallow Compare</h2>
      <button onClick={() => setCount(count + 1)}>
        Re-render Parent ({count})
      </button>
      <Child user={user} />
    </section>
  );
}
