import { useState, useEffect } from "react";

export function Async() {
  const [isButtonInvisible, setIsButtonInvisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonInvisible(true);
    }, 1000);
  }, []);

  return (
    <div>
      <p>Hello World</p>
      {!isButtonInvisible && <button>Button</button>}
    </div>
  );
}
