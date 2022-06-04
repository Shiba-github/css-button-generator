import { Flex } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { increment, decrement, incrementByAmount } from "./counterSlice";

export const Counter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      <h1>count is... {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(40))}>
        incrementByAmount 40
      </button>
    </Flex>
  );
};
