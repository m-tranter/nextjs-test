'use client'
import { useState } from 'react';
export default function Click() {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(prev => prev + 1)
  }
  return (
    <>
      <h2>Counter</h2>
      <button onClick={inc} type="button" >{count}</button>
    </>
  );
}
