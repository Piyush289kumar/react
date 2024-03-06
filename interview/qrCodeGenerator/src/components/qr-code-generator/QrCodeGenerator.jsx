import React, { useState } from 'react'
import QRCode from "react-qr-code";

function QrCodeGenerator() {

    const [intputText, setIntputText] = useState('')
    const [qrCodeInput, setQrCodeInput] = useState('')

    const handleQrCodeGenerato = () => {
        setQrCodeInput(intputText)
        setIntputText('')
    }

    console.log(qrCodeInput);

    return (
        <div className='w-full h-screen bg-violet-500 text-white flex flex-col gap-y-14 justify-center items-center'>
            <h1 className='uppercase text-4xl font-bold'>Qr code Generator</h1>

            <div className='bg-green-500 rounded-xl'>
                <input type="text" value={intputText} onChange={(ev) => setIntputText(ev.target.value)} className='p-2 rounded-s-xl text-zinc-900' />
                <button onClick={handleQrCodeGenerato} className='px-4 font-bold text-xl'>Generator</button>
            </div>

            <div className='rounded-lg overflow-hidden'>
                <QRCode value={qrCodeInput} />
            </div>
        </div>
    )
}

export default QrCodeGenerator