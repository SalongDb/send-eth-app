function TransactionStatus() {

    return <div className="flex items-center justify-center flex-col p-20 w-full h-full">
        <div className="flex flex-col items-center gap-3 border-1 rounded-sm px-10 py-5">
            <div className="text-xl flex flex-col gap-2">
                <p className="bg-gray-300 px-3 rounded-sm w-100">Hash :</p>
                <p className="bg-gray-300 px-3 rounded-sm">Status :</p>
            </div>
        </div>
    </div>
}

export default TransactionStatus;