import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
function App() {
  const [length, setlength] = useState(8);
  const [nums, setNums] = useState(true);
  const [char, setChar] = useState(true);
  let [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password);
  }, [password]);
  // Password Generator Logic Block Start
  const passwordGenerator = useCallback(() => {
    let pwdStr = "";
    let strLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (nums) strLetters += "0123456789";
    if (char) strLetters += "@!#$%^&*_";
    for (let idx = 1; idx <= length; idx++) {
      let randomCharIdx = Math.floor(Math.random() * strLetters.length + 1);
      pwdStr += strLetters.charAt(randomCharIdx);
    }
    setPassword(pwdStr);
  }, [length, nums, char, setPassword]);
  // Password Generator Logic Block End
  // Password Generator Function Call Block Start
  // Password Show On UI Block Start
  useEffect(() => {
    passwordGenerator();
  }, [length, nums, char, passwordGenerator]);
  // Password Show On UI Block End
  // Password Generator Function Call Block End
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
              ref={passwordRef}
              className="bg-slate-100 text-orange-500 rounded-s-lg px-5 py-2 font-bold w-10/12"
            />
            <button
              onClick={copyPasswordToClipBoard}
              className="bg-sky-500 text-white rounded-s-sm px-5 py-2 font-bold border-none hover:bg-sky-600 uppercase"
            >
              Copy
            </button>
          </div>
          {/* Generator Button */}
          <div className="flex justify-center">
            <button
              onClick={passwordGenerator}
              className="bg-green-500 text-white rounded-lg mt-5 px-5 py-2 font-bold border-none hover:bg-green-600 uppercase">
              Generate New Password
            </button>
          </div>
          {/* Generator Button */}
          {/* Outputs */}
          {/* Controller  */}
          <div className="mt-6 flex justify-around items-center">
            <div className="px-5 flex justify-around items-center">
              <input
                type="range"
                id="length"
                min={4}
                max={12}
                value={length}
                onChange={(e) => setlength(e.target.value)}
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
                checked={nums}
                onChange={() => {
                  setNums((prev) => !prev);
                }}
              />
              <label htmlFor="numIn" className="px-2">
                Numbers
              </label>
            </div>
            <div className="px-5 flex justify-around items-center">
              <input
                type="checkbox"
                id="char"
                checked={char}
                className="cursor-pointer rounded-xl"
                onChange={() => {
                  setChar((prev) => !prev);
                }}
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
