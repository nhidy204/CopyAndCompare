import ShallowCompare from "./components/ShallowCompare";
import DeepCompare from "./components/DeepCompare";
import ShallowCopy from "./components/ShallowCopy";
import DeepCopy from "./components/DeepCopy";

export default function App() {
  return (
    <div className="container">
      <h1>Copy and Compare</h1>
      <ShallowCompare />
      <DeepCompare />
      <ShallowCopy />
      <DeepCopy />
    </div>
  );
}
