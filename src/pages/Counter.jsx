import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, fiveDecrement, fiveIncrement, increment } from '../store/storSlice';

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  
  function onIncrement(){
    dispatch(increment(1))
  }
  function onDecrement(){
    dispatch(decrement(1))
  }
  function onFiveIncrement(){
    dispatch(fiveIncrement())
  }
  function onFiveDecrement(){
    dispatch(fiveDecrement())
  }
  return (
    <div>
      <div className="container">
        <h1 className='text-center text-[60px]'>{counter}</h1>
        <div className="flex justify-around">
          <button className='p-2 border-2 border-black rounded-md bg-slate-200' onClick={onIncrement}>Increment</button>
          <button className='p-2 border-2 border-black rounded-md bg-slate-200'  onClick={onDecrement}>Decrement</button>
          <button className='p-2 border-2 border-black rounded-md bg-slate-200'  onClick={onFiveIncrement}>FiveIncrement</button>
          <button className='p-2 border-2 border-black rounded-md bg-slate-200'  onClick={onFiveDecrement}>FiveDecrement</button>
        </div>
      </div>
    </div>
  )
}

export default Counter