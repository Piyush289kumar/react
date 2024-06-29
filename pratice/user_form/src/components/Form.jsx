import React from "react";

function htmlForm() {
  return (
    <>
      <div className="border border-zinc-500 rounded-2xl px-5 py-8 w-25 my-auto ">
        <form action="">
          <div className="mb-3 flex flex-col">
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="bg-transparent text-xl font-bold border border-zinc-500 rounded-xl px-2 py-1"
              placeholder="First Name"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="bg-transparent text-xl font-bold border border-zinc-500 rounded-xl px-2 py-1"
              placeholder="Last Name"
            />
          </div>
          <div className="w-full text-center">
          <button type="submit" className="bg-green-600 text-white rounded-2xl px-4 py-2 font-bold">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default htmlForm;
