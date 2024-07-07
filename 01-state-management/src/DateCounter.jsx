import { useReducer, useState } from "react";

function DateCounter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [step, setStep] = useState(1);

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return state + action.payload;

      case "decrease":
        return state - action.payload;
    }
  };
  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    dispatch({ type: "decrease", payload: -1 });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    dispatch({ type: "increase", payload: +1 });
  };

  const defineCount = function (e) {
    reducer(Number(e.target.value));
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  // const reset = function () {
  //   dispatch(0);
  //   setStep(1);
  // };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      {/* <div>
        <button onClick={reset}>Reset</button>
      </div> */}
    </div>
  );
}
export default DateCounter;
