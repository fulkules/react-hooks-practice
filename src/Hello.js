import React, { useRef, useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export const Hello = () => {
  // useEffect(() => {
  //   console.log("render");

  //   return () => {
  //     console.log('unmount')
  //   }
  // }, []);

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const renders = useRef(0);

  console.log("Hello renders: ", renders.current++);

  return (
    <div>
      <div>{!data ? "Loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
};
