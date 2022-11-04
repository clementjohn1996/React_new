import React, { useState } from "react"

export default function Example() {
  const [clickCount, setClickCount] = useState(0)
  return (
    <div className="example-component" onClick={() => setClickCount(prev => prev + 1)}>
    <h1>Hello from React!</h1>
   <h2><p>You have clicked on this component {clickCount} times.</p></h2>
  </div>
  )
}
