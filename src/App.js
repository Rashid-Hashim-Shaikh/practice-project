import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const onSubmitHandler = () => {
    setList([...list, input]);
    setInput("");
  };
  const removeItem = (index) => {
    const filteredList = list.filter((_item, i) => i !== index);
    setList(filteredList);
  };

  return (
    <div className="App">
      <input value={input} onChange={inputHandler}></input>
      <button onClick={onSubmitHandler}>Add</button>
      {list.map((item, i) => {
        return (
          <div onClick={() => removeItem(i)} key={i}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
