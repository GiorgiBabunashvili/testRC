import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedtext] = useState(false);

  const handleTextChange = () => {
    setChangedtext(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={handleTextChange}>Change Text!</button>
    </div>
  );
};

export default Greeting;
