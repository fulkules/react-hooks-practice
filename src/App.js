/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from "react";
import "./App.css";
import { Hello } from "./Hello";
import { Square } from "./Square";

const App = () => {
  // const [count, setCount] = useState(10);
  // const [count2, setCount2] = useState(10);
  // const [values, handleChange] = useForm({
  //   email: "",
  //   password: "",
  //   firstName: ""
  // });

  // const inputRef = useRef();
  // const hello = useRef(() => console.log("hello"));

  // const [showHello, setShowHello] = useState(true);

  // const [rect, inputRef2] = useMeasure([]);

  // useLayoutEffect(() => {
  //   console.log(inputRef.current.getBoundingClientRect())
  // }, [])

  // useEffect is new way to use lifecycle hooks
  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  // can have multiple -- they will fire in order top-->bottom
  // useEffect(() => {
  //   console.log("mount1");
  // });

  // useEffect(() => {
  //   console.log("mount2");
  // });

  // return (
  //   <div className="App">

  /* <button
        onClick={() => {
          setCount(c => c + 1);
          setCount2(c => c + 2);
        }}
      >
        +
      </button>
      <div>Count 1: {count}</div>
      <div>Count 2: {count2}</div> */

  /* <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      {showHello && <Hello />}
      <input
        ref={inputRef}
        name="email"
        placeholder="email"
        type="text"
        value={values.email}
        onChange={handleChange}
      />
      <input
        ref={inputRef2}
        name="firstName"
        placeholder="First Name"
        type="text"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
          hello.current();
        }}
      > */

  /* Focus
      </button>
    </div>
  ); */

  /* ---------------- UseCallback ------------------ */

  const [count, setCount] = useState(0);
  const favNums = [3, 7, 11, 13, 33];
  const increment = useCallback(
    n => {
      setCount(c => c + n);
    },
    [setCount]
  );

  return (
    <div>
      <Hello increment={increment} />
      <div>Count: {count}</div>
      {favNums.map(n => {
        return <Square increment={increment} n={n} key={n} />;
      })}
    </div>
  );
};

export default App;
