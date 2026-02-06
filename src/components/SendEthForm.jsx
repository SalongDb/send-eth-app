function SendEthForm() {

    return <div className="flex items-center justify-center flex-col p-20 w-full h-full">
        <div className="flex flex-col items-center gap-3 border-1 rounded-sm px-10 py-5">
            <div className="text-xl flex flex-col gap-2">
                <input className="bg-gray-300 px-3 rounded-sm" placeholder="To"></input>
                <input className="bg-gray-300 px-3 rounded-sm" placeholder="Amount"></input>
            </div>
            <div>
                <button className="bg-gray-800 text-white px-3 rounded-sm">Send</button>
            </div>
        </div>
    </div>
}

export default SendEthForm;