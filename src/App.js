import { useState } from "react";
import Button from "./Button";
import "./styles.css";

export default function App() {
  const [form, setForm] = useState("dark");

  const changeForm = (parameter) => {
    switch (parameter) {
      case "dark":
        setForm("dark");
        break;
      case "light":
        setForm("light");
        break;
      case "outline":
        setForm("outline");
        break;
      default:
        return;
    }
  };
  return (
    <div>
      <Button type={form} />
      <div>
        <button onClick={() => changeForm("dark")}>dark</button>
        <button onClick={() => changeForm("light")}>light</button>
        <button onClick={() => changeForm("outline")}>outline</button>
      </div>
    </div>
  );
}
