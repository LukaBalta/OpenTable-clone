import React from "react";

export default function AuthModalInputs() {
  return (
    <div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          placeholder="First name"
          className="border rounded p-2 py-3 w-[49%]"
        />
        <input
          type="text"
          placeholder="Last name"
          className="border rounded p-2 py-3 w-[49%]"
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="email"
          placeholder="Email"
          className="border rounded p-2 py-3 w-full"
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          placeholder="Phone"
          className="border rounded p-2 py-3 w-[49%]"
        />
        <input
          type="text"
          placeholder="City"
          className="border rounded p-2 py-3 w-[49%]"
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          placeholder="Password"
          className="border rounded p-2 py-3 w-full"
        />
      </div>
    </div>
  );
}
