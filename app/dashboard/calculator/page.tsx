"use client";
import { useState } from "react";
import { keys } from "./keys";
import { KeyType } from "./types";

export default function Calculator() {
  const [input, setInput] = useState<string>("");
  const [displayValue, setDisplayValue] = useState<string>("");
  const [lastKey, setLastKey] = useState<string | number>("");

  const clickHandler = (key: KeyType) => {
    if (key.type === "number") {
      if (
        displayValue === "" ||
        /[+\-*/%]$/.test(displayValue.trim()) ||
        lastKey === "="
      ) {
        setInput(key.key.toString());
      } else {
        setInput((prev) => prev + key.key.toString());
      }
      if (displayValue == "0" || lastKey === "=") {
        setDisplayValue(key.key.toString());
      } else {
        setDisplayValue((prev) => prev + key.key.toString());
      }
      setLastKey(key.key);
    } else {
      if (key.key === "AC") {
        setInput("");
        setDisplayValue("");
        setLastKey("");
      } else if (key.key === "=") {
        if (/[+\-*/%]$/.test(displayValue.trim())) {
          setInput(displayValue.split(" ")[0]);
          setDisplayValue((prev) => prev.split(" ")[0]);
        } else if (displayValue === "") {
          return;
        } else {
          setInput(eval(displayValue).toString());
          setDisplayValue((prev) => eval(prev).toString());
        }
        setLastKey("=");
      } else if(key.key === '+/-'){
        if(typeof lastKey === 'number'){
          if (displayValue.indexOf(' ') !== -1){
            setInput(prev => (-1 * Number(prev)).toString());
            setDisplayValue(prev => prev.split(' ')[0] + prev.split(' ')[1] + (-1 * Number(prev.split(' ')[2])).toString());
          } else{
          setInput(prev => (-1 * Number(prev)).toString());
          setDisplayValue(prev => (-1 * Number(prev)).toString());}
        }
      } else if (key.key === "backspace") {
        if (input !== "" && typeof lastKey === "number") {
          setInput((prev) => prev.slice(0, -1));
          setDisplayValue((prev) => prev.slice(0, -1));
        } else return;
      } else if (key.key === ".") {
        if (typeof lastKey === "number" && input.indexOf(".") === -1) {
          setInput((prev) => prev + ".");
          setDisplayValue((prev) => prev + ".");
        } else {
          return;
        }
      } else if (key.key === "-" || "+" || "*" || "/" || "%") {
        if (displayValue === "") {
          return;
        } else if (/[+\-*/]$/.test(displayValue.trim())) {
          setDisplayValue((prev) => prev.split(" ")[0] + " " + key.key + " ");
        } else {
          setInput(eval(displayValue));
          setDisplayValue((prev) => eval(prev) + " " + key.key + " ");
        }
        setLastKey(key.key);
      }
    }
  };

  console.log(
    "updated",
    { input },
    "-",
    { displayValue },
    { lastKey },
    typeof lastKey
  );

  return (
    <div>
      <div
        id="display"
        className="w-52 h-[48px] border flex justify-end items-center px-1 text-sm"
      >
        {input == "" ? "0" : input}
        {/* {input} */}
      </div>
      <div className="flex w-52 flex-wrap justify-center">
        {keys.map((keyObj: KeyType) => (
          <button
            className="h-[48px] w-1/4 border flex justify-center items-center text-lg"
            onClick={() => clickHandler(keyObj)}
            key={keyObj.key}
          >
            {keyObj.icon ? keyObj.icon : keyObj.key}
          </button>
        ))}
      </div>
    </div>
  );
}
