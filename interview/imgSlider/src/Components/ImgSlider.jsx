import React, { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function ImgSlider({ url, limit = 5, page = 1 }) {
    const [images, setImages] = useState([]);
    const [currentSilder, setCurrentSilder] = useState(0);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    function handelValuedecrement() {
        let tempVal = currentSilder;
        tempVal = tempVal - 1;

        if (tempVal !== -1) {
            setCurrentSilder(tempVal);
        } else {
            setCurrentSilder(images.length - 1);
        }
    }

    function handelValueIncrement() {
        let tempVal = currentSilder;
        tempVal = tempVal + 1;

        if (tempVal > images.length - 1) {
            setCurrentSilder(0);
        } else {
            setCurrentSilder(tempVal);
        }
    }

    async function fetchImges(getUrl) {
        try {
            setLoading(true);

            fetch(`${getUrl}?page=${page}&limit=${limit}`)
                .then((res) => res.json())
                .then((data) => {
                    setImages(data);
                    setLoading(false);
                });
        } catch (error) {
            setLoading(false);
            setErrorMsg(error.message);
        }
    }

    useEffect(() => {
        if (url !== "") {
            fetchImges(url);
        }
    }, [url]);

    if (loading) {
        return <div>Loading Please wait....!</div>;
    }

    if (errorMsg) {
        return <div>{`Error Occurs : ${errorMsg}`}</div>;
    }

    return (
        <div className="bg-violet-600 h-screen w-full grid place-content-center">
            {images && images.length
                ? images.map((img) => (
                    <div key={img.id}>
                        {" "}
                        {currentSilder == parseInt(img.id) ? (
                            <div>
                                <h1 className="text-white font-bold text-2xl text-center mt-4">
                                    Image Index : {parseInt(img.id) + 1}
                                </h1>
                                <img
                                    key={img.id}
                                    src={img.download_url}
                                    alt={img.author}
                                    className="w-52 rounded-md mt-5"
                                />
                            </div>
                        ) : null}
                    </div>
                ))
                : null}

            <div className=" w-full flex justify-center text-white my-5">
                <FaArrowAltCircleLeft
                    onClick={handelValuedecrement}
                    size={40}
                    className="mx-4"
                />
                <FaArrowAltCircleRight
                    onClick={handelValueIncrement}
                    size={40}
                    className="mx-4"
                />
            </div>
        </div>
    );
}

export default ImgSlider;
