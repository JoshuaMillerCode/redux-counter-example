// 1. IMPORT USEDISPATCH IN ORDER TO DISPATCH ACTION CREATORS
import { useDispatch, useSelector } from "react-redux";
import { useRef } from 'react'

import { increment, decrement, reset, abracadabraFn, paypalFn, step } from "../../features/counter/counterSlice";

const Counter = function () {

  // CREATE A DISPATCH FUNCTION
  const dispatch = useDispatch();
  const inputRef = useRef(null)

  const { count } = useSelector((state) => {
    return state.counter;
  });

  const incrementCount = function() {
    // Create the aciton with the action creator (increment func)
    const action = increment("This is the payload ")
    dispatch(action);
  }

  const decrementCount = function() {
    dispatch(decrement());
  }

  const resetCount = function() {
    dispatch(reset());
  }

  const abracadabraFn = function() {
    dispatch(abracadabraFn());
  }

  const paypalHandler = function() {
    dispatch(paypalFn());
  }

  const handleStepCount = function() {
    dispatch(step(inputRef.current.value))
  }

  return (
    <div className="counter-container">
      <h2>Counter</h2>
      <p>{count}</p>
      <div className="btn-container">
        <button className="btn" onClick={decrementCount}>-1</button>
        <button className="btn" onClick={incrementCount}>+1</button>
      </div>
      <div className="input-component">
        <input
          ref={inputRef}
          type="number"
          min="1"
          step="1"
          className="input-tag"
          aria-label="Set increment amount"
        />
        <button className="step-btn" onClick={handleStepCount}>Step</button>
      </div>
      <div className="reset-container">
        <button className="reset-btn" onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;