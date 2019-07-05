import React, { useState } from "react";
import "./App.css";
import { useForm } from "./useForm";

function App() {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(10);
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(c => c + 1);
          setCount2(c => c + 2);
        }}
      >
        +
      </button>
      <div>Count 1: {count}</div>
      <div>Count 2: {count2}</div>
      <input
        name="email"
        placeholder="email"
        type="text"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
