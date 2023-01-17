import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>01. Counter</h1>
      <button onClick={() => setCount(count + 1)}>
        <span>Clicks: {count}</span>
      </button>
    </div>
  );
}
