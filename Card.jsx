function Card() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-600">

            <div className="w-[800px] rounded-lg border-3 border-slate-800 bg-white p-3 shadow-4xl">

                <div className="overflow-hidden rounded-md">

                    <div className="bg-gradient-to-r from-pink-500 via-yellow-500 to-red-500 py-10 text-center">
                        <h1 className="text-5xl font-bold text-white">
                            News you can Trust.
                        </h1>
                    </div>

                    <div className="px-10 py-8 text-center">

                        <h2 className="text-3xl font-bold text-blue-900">
                            Stay up to date with the Latest!
                        </h2>

                        <p className="mt-2 text-lg text-gray-800">
                            Subscribe to our newsletter for the latest news straight into your inbox
                        </p>

                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="mt-5 w-80 rounded-full bg-slate-200 px-4 py-3 text-center text-gray-700 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 "
                        />

                        <button
                            className="mt-3 w-80 rounded-full  px-6 py-3 text-lg font-medium text-white transition hover:bg-blue-600 bg-gradient-to-r from-cyan-500 via-green-500 to-blue-500"
                        >
                            Subscribe Now
                        </button>

                        <p className="mt-6 text-lg text-gray-800">
                            We value your privacy
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Card;