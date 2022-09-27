import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [com, setCom] = useState("");
  const [val, setVal] = useState();
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 2 || name.length > 15) {
      setErr(true);
    } else if (name && com) {
      alert(`Current state is {"author":"${name}", 
       "rating":"${val}". "${com}"}`);
    }
  };
  return (
    <>
      <form className="for" onSubmit={handleSubmit}>
        <h1 className="last"> Submit Comment</h1>
        <br />
        <div>
          <label>Rating</label>
          <br />
          <select onChange={(e) => setVal(e.target.value)}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <br />
        <div>
          <label> Your Name : </label>
          <br />
          <input
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {err && name.length < 2 ? (
          <span className="olas">Name should be greater than 2</span>
        ) : (
          ""
        )}
        {err && name.length > 15 ? (
          <span className="olas">Name should be lesser than 15</span>
        ) : (
          ""
        )}
        <br />
        <div>
          <label>Comment : </label>
          <br />
          <textarea onChange={(e) => setCom(e.target.value)}></textarea>
        </div>
        <br />
        <button className="btn">Submit</button>
        <br />
      </form>
    </>
  );
}
export default App;
