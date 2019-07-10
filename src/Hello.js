import React from "react";
import { useCountRenders } from "./useCountRenders";

export const Hello = React.memo(({ increment }) => {
  // useEffect(() => {
  //   console.log("render");

  //   return () => {
  //     console.log('unmount')
  //   }
  // }, []);

  // const [count, setCount] = useState(() =>
  //   JSON.parse(localStorage.getItem("count"))
  // );
  // const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  // useEffect(() => {
  //   localStorage.setItem("count", JSON.stringify(count));
  // }, [count]);

  // const renders = useRef(0);

  // console.log("Hello renders: ", renders.current++);

  // const [rect, divRef] = useMeasure([data]);

  // return (
  //   <div>
  //     <div style={{ display: "flex" }}>
  //       <div ref={divRef}>{!data ? "Loading..." : data}</div>
  //     </div>
  //     <pre>{JSON.stringify(rect, null, 2)}</pre>
  //     <div>count: {count}</div>
  //     <button onClick={() => setCount(c => c + 1)}>Increment</button>
  //   </div>
  // );

  /*----------UseCallback------------*/
  // useCountRenders();

  return (
    <div>
      Hello Component
      <button onClick={() => increment(5)}>hello</button>
    </div>
  );
});
