import React, { useState } from "react";
import axios from "axios";

function htmlForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitFormHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/form", { firstName, lastName })
      .then(() => {
        console.log("Data Inserted");
        setFirstName("");
        setLastName("");
      })
      .catch((error) => {
        console.log(error.message);
        setFirstName("");
        setLastName("");
      });
  };
  return (
    <>
      <div className="border border-zinc-500 rounded-2xl px-5 py-8 w-25 my-auto ">
        <form action="">
          <div className="mb-3 flex flex-col">
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-transparent text-xl text-zinc-200 font-bold border border-zinc-500 rounded-xl px-2 py-1"
              placeholder="First Name"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
              className="bg-transparent text-xl text-zinc-200 font-bold border border-zinc-500 rounded-xl px-2 py-1"
              placeholder="Last Name"
            />
          </div>
          <div className="w-full text-center">
            <button
              type="submit"
              onClick={submitFormHandler}
              className="bg-green-600 text-white rounded-2xl px-4 py-2 font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default htmlForm;
