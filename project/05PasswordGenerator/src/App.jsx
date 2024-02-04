import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setlength] = useState(9);
  const [nums, setNums] = useState(false);
  const [char, setChar] = useState(false);
  let [password, setPassword] = useState("");

  // Password Generator Logic Block Start
  const passwordGenerator = useCallback(
    () => {
      let pwdStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (nums) pwdStr += "0123456789";
      if (char) pwdStr += "@!#$%^&*_";

      for (let idx = 1; idx < length; idx++) {
        let randomCharIdx = Math.floor(Math.random() * pwdStr.length + 1);
        password += pwdStr.charAt(randomCharIdx);
      }

      setPassword(pwdStr);

    },
    [length, nums, char, setPassword]
  );
  // Password Generator Logic Block End

  // Password Generator Function Call Block Start

  // Password Generator Function Call Block End

  // Password Show On UI Block Start
  useEffect(() => {
    passwordGenerator();
  }, [length, nums, char, setPassword]);
  // Password Show On UI Block End

  return (
    <>
      <div className="w-screen h-screen bg-slate-900 grid place-content-center">
        <div className="bg-slate-600 h-auto p-5 rounded-xl w-[750px]">
          <div className="font-bold text-2xl text-white text-center">
            <p>Password Generator</p>
          </div>
          {/* Outputs */}
          <div className="mt-6 flex justify-center">
            <input
              type="text"
              id="PasswordOutput"
              value={password}
              readOnly
              className="bg-slate-100 text-orange-500 rounded-s-lg px-5 py-2 font-bold w-10/12"
            />
            <button className="bg-sky-500 text-white rounded-s-sm px-5 py-2 font-bold border-none hover:bg-sky-600 uppercase">
              Copy
            </button>
          </div>
          {/* Outputs */}

          {/* Controller  */}

          <div className="mt-6 flex justify-around items-center">
            <div className="px-5 flex justify-around items-center">
              <input
                type="range"
                id="length"
                min={0}
                max={20}
                value={length}
                onChange={(e)=>setlength(e.target.value)}
                className="cursor-pointer"
              />
              <label htmlFor="length" className="px-2">
                Length: {length}
              </label>
            </div>

            <div className="px-5 flex justify-around items-center">
              <input
                type="checkbox"
                id="numIn"
                className="cursor-pointer rounded-xl"
              />
              <label htmlFor="numIn" className="px-2">
                Numbers
              </label>
            </div>

            <div className="px-5 flex justify-around items-center">
              <input
                type="checkbox"
                id="char"
                className="cursor-pointer rounded-xl"
              />
              <label htmlFor="char" className="px-2">
                Special Character
              </label>
            </div>
          </div>

          {/* Controller  */}
        </div>
      </div>
    </>
  );
}

export default App;
