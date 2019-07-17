/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/about";
import { UserContext } from "./UserContext";

/*-----------------useMemo------------------*/
// const computeLongestWord = arr => {
//   if (!arr) {
//     return [];
//   }
//   console.log("Computing Longest Word");

//   let longestWord = "";

//   JSON.parse(arr).forEach(sentence =>
//     sentence.split(" ").forEach(word => {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     })
//   );

//   return longestWord;
// };

/*------------------useReducer------------------*/
// for complex nested objects & mutations look into useImmer on NPM/Github
// function reducer(state, action) {
//   switch (action.type) {
//     case "add-todo":
//       return {
//         todos: [...state.todos, { text: action.text, completed: false }],
//         todoCount: state.todoCount + 1
//       };
//     case "toggle-todo":
//       return {
//         todos: state.todos.map((t, i) =>
//           i === action.i ? { ...t, completed: !t.completed } : t
//         ),
//         todoCount: state.todoCount
//       };
//     default:
//       return state;
//   }
// }

// const App = () => {
//   const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
//     todos: [],
//     todoCount: 0
//   });
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <form
//         onSubmit={e => {
//           e.preventDefault();
//           dispatch({ type: "add-todo", text });
//           setText("");
//         }}
//       >
//         <input value={text} onChange={e => setText(e.target.value)} />
//       </form>
//       <div>number of todos: {todoCount}</div>
//       {todos.map((t, i) => (
//         <div
//           key={t.text}
//           onClick={() => dispatch({ type: "toggle-todo", i })}
//           style={{
//             textDecoration: t.completed ? "line-through" : "",
//             cursor: "pointer"
//           }}
//         >
//           {t.text}
//         </div>
//       ))}
//     </div>
//   );

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

//   const [count, setCount] = useState(0);
//   const favNums = [3, 7, 11, 13, 33];
//   const increment = useCallback(
//     n => {
//       setCount(c => c + n);
//     },
//     [setCount]
//   );

//   return (
//     <div>
//       <Hello increment={increment} />
//       <div>Count: {count}</div>
//       {favNums.map(n => {
//         return <Square increment={increment} n={n} key={n} />;
//       })}
//     </div>
//   );
// };

/*----------------------- UseMemo ----------------------*/

// const [count, setCount] = useState(0);
// const { data } = useFetch(
//   "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
// );

// const longestWord = useMemo(() => computeLongestWord(data), [data]);

// return (
//   <div>
//     <div>count: {count}</div>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//     <div>{longestWord}</div>
//   </div>
// );

function AppRouter() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={value}>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default AppRouter;
