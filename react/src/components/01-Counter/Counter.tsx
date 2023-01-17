import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>01. Counter</h2>
      <button onClick={() => setCount(count + 1)}>
        <span>Clicks: {count}</span>
      </button>
    </div>
  );
}
