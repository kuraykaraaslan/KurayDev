

function Custom404() {

    return (

        <div className="grid h-screen px-4 place-content-center">
            <div className="text-center">
                <h1 className="font-black text-gray-200 text-9xl">404</h1>

                <p className="text-2xl font-bold tracking-tight sm:text-4xl">
                    don't panic! 
                </p>

                <p className="mt-4">you don't have to be a rocket scientist to know that you're lost.</p>

                <a
                    href="/"
                    className="inline-block px-8 py-4 mt-8 text-lg font-semibold text-white transition duration-200 bg-gray-800 rounded shadow hover:bg-gray-700"
                >
                    go back home

                </a>
            </div>
        </div>
    );
}

Custom404.Layout = "Error";

export default Custom404;
