import { memo, useState } from "react";

const deepCompare = (a, b) =>
  JSON.stringify(a) === JSON.stringify(b);

const Child = memo(
  ({ user }) => {
    console.log("DeepCompare Child render");
    return <p>User: {user.name}</p>;
  },
  (prev, next) => deepCompare(prev.user, next.user)
);

export default function DeepCompare() {
  const [count, setCount] = useState(0);

  const user = { name: "Nhi" };

  return (
    <section>
      <h2>2 Deep Compare</h2>
      <button onClick={() => setCount(count + 1)}>
        Re-render Parent ({count})
      </button>
      <Child user={user} />
    </section>
  );
}
