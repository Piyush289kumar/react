import React, { useState } from "react";

function ColorChanger() {
    const [color, setColor] = useState("#000000");
    const [colorType, setColorType] = useState("rgb");

    const changeColorType = (colorTypeAsProps) => {
        if (colorTypeAsProps === "rgb") {
            colorTypeAsProps == colorType
                ? setColorType("hex")
                : setColorType(colorTypeAsProps);
        } else {
            colorTypeAsProps == colorType
                ? setColorType("rgb")
                : setColorType(colorTypeAsProps);
        }
    };

    const changerBg = () => {
        // #123456
        // rgb(12, 34, 56)

        const randomColorCode = (len) => {
            return Math.floor(Math.random() * len + 1);
        };

        if (colorType === "rgb") {
            const rgbColorCode = `rgb(${randomColorCode(255)},${randomColorCode(
                255
            )},${randomColorCode(255)})`;
            setColor(rgbColorCode);
        } else {
            const hexColorCode = `#${randomColorCode(9)}${randomColorCode(
                9
            )}${randomColorCode(9)}${randomColorCode(9)}${randomColorCode(
                9
            )}${randomColorCode(9)}`;
            setColor(hexColorCode);
        }
    };

    return (
        <div
            className="w-full h-screen flex justify-center items-center flex-col"
            style={{ background: color }}
        >
            <button
                className="bg-violet-500 text-white font-bold text-2xl px-5 py-3 rounded-lg w-45 mb-5"
                onClick={() => changeColorType("hex")}
            >
                HEX {colorType === "hex" ? "Enable" : "Disable"}
            </button>

            <button
                className="bg-violet-500 text-white font-bold text-2xl px-5 py-3 rounded-lg w-45 mb-5"
                onClick={() => changeColorType("rgb")}
            >
                RGB {colorType === "rgb" ? "Enable" : "Disable"}
            </button>

            <button
                className="bg-violet-500 text-white font-bold text-2xl px-5 py-3 rounded-lg w-45 mb-5"
                onClick={changerBg}
            >
                Change
            </button>

            <h1 className="text-white font-bold text-5xl mt-5">
                {colorType === "rgb" ? `RGB : ${color}` : `HEX : ${color}`}
            </h1>
        </div>
    );
}

export default ColorChanger;
