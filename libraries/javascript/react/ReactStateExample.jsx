// libraries/javascript/react/ReactStateExample.jsx
import React, { useState, useEffect } from "react";

export function ReactStateExample() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Mock fetch operation
    const timer = setTimeout(() => {
      setData({ status: "success", version: "19.1.0" });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="react-card">
      <h3>React component loaded</h3>
      <p>Click Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {data ? (
        <p className="status">React version: {data.version}</p>
      ) : (
        <p className="loading">Loading state...</p>
      )}
    </div>
  );
}
