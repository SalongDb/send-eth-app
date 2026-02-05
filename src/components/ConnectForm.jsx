
function ConnectForm() {

    return <div className="flex items-center justify-center flex-col p-20 w-full h-full">
        <div className="flex flex-col gap-3 border-1 rounded-sm px-10 py-3">
            <div className="text-2xl flex justify-center">
                <p>Connect Wallet</p>
            </div>
            <div className="flex flex-col">
                <button>Metamask</button>
                <button>Phantom</button>
                <button>Bagpack</button>
            </div>
        </div>
    </div>
}

export default ConnectForm;