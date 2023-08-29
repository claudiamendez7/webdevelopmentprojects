import { useState } from "react";

export default function useToggle() {
  const [toggle, setToggle] = useState(false);
  const switchToggle = () => {
    setToggle((prev) => !prev);
  };

  return [toggle, switchToggle];
}