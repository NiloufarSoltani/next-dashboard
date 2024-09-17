import React from "react";
import { KeyType } from "./types";
import { BackspaceIcon } from "@heroicons/react/24/outline";

export const keys: KeyType[] = [
  { key: "AC", type: "operator" },
  { key: "+/-", type: "operator" },
  { key: "%", type: "operator" },
  { key: "/", type: "operator" },
  { key: 1, type: "number" },
  { key: 2, type: "number" },
  { key: 3, type: "number" },
  { key: "*", type: "operator" },
  { key: 4, type: "number" },
  { key: 5, type: "number" },
  { key: 6, type: "number" },
  { key: "-", type: "operator" },
  { key: 7, type: "number" },
  { key: 8, type: "number" },
  { key: 9, type: "number" },
  { key: "+", type: "operator" },
  { key: 0, type: "number" },
  { key: ".", type: "operator" },
  {
    key: "backspace",
    icon: <BackspaceIcon className="w-6" />,
    type: "operator",
  },
  { key: "=", type: "operator" },
];
