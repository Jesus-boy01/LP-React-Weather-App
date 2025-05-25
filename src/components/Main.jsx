const Main = ({ data, error }) => {
    const defaultUI = (
        <div className="text-white mt-28 text-center">
            <h2 className="text-5xl font-bold mb-8">Welcome to LawPavilion Weather App</h2>
            <p className="text-xl">Search for a city to get the current weather.</p>
        </div>
    );
    

    const errorUI = (
        <div className="text-red-500 mt-28 text-center">
            <h2 className="text-3xl font-bold mb-4">Oops!</h2>
            <p className="text-xl">{error}</p>
        </div>
    );

    if(error) return errorUI;
    if (!data) return defaultUI;
    return (
        <div className="sm:flex justify-between items-center sm:w-3/4 mt-14">
            <div className="sm:order-2">
                <img
                    className="w-40"
                    src={data.current.condition.icon}
                    alt="weather icon"
                />
            </div>
            <div className="text-white">
                <div className="mb-10">
                    <h2 className="text-5xl font-bold mb-4">
                        {data.location.name}
                    </h2>
                    <p>{data.current.condition.text}</p>
                    <p>Last Updated: {data.current.last_updated}</p>
                </div>
                <p className="text-3xl font-bold">{data.current.temp_c}°C</p>
            </div>
        </div>
    );
};

export default Main;
