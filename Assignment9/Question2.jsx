// useState is one of the built-in hooks in React. It allows functional components to have stateful logic. With useState, you can add state variables to functional components, enabling them to store and update data over time.

import React, { useState } from 'react';

export default function ExampleComponent() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1); // This updates the 'count' state.
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
