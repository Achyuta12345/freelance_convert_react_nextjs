'use client';
import React from "react";
import { useReducer } from "react";

interface Props {
  property1?: "variant-2" | "default"; // Make property1 optional
}

interface State {
  property1: "variant-2" | "default";
}

type Action = { type: "mouse_enter" } | { type: "mouse_leave" }; // Define action types

export const Frame = ({ property1 = "default" }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, { property1 });

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-5 py-[9px] h-[35px] justify-center relative ${
        state.property1 === "variant-2" ? "bg-black" : "bg-[#e6e6e6]"
      }`}
      onMouseLeave={() => {
        dispatch({ type: "mouse_leave" });
      }}
      onMouseEnter={() => {
        dispatch({ type: "mouse_enter" });
      }}
    >
      <div
        className={`[font-family:'Proxima_Nova-Semibold',Helvetica] w-fit tracking-[1.00px] text-xs font-normal text-center whitespace-nowrap leading-[normal] relative ${
          state.property1 === "variant-2" ? "text-white" : "text-black"
        }`}
      >
        View All Updates
      </div>
    </div>
  );
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "mouse_enter":
      return { ...state, property1: "variant-2" };

    case "mouse_leave":
      return { ...state, property1: "default" };

    default:
      return state;
  }
}
