import React, { forwardRef } from "react";
import { ForwardedRef } from "react";

const Input = forwardRef(({ textarea, label, ...props }, ref) => {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500 ">
        {label}
      </label>
      {textarea ? (
        <textarea
          ref={ref}
          className="w-full p-1 border-b-2 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          {...props}
        ></textarea>
      ) : (
        <input
          ref={ref}
          className="w-full p-1 border-b-2 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          {...props}
        ></input>
      )}
    </p>
  );
});

export default Input;
