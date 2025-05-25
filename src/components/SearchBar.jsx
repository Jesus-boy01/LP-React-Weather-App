import { useState } from "react";
import SearchButton from "./SearchButton";
import Main from "./Main";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [weatherResult, setWeatherResult] = useState(null);
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        setError("");
    };

    const handleSearchClick = async () => {  
        if(!searchQuery.trim()) return;

        try {
            const response = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${searchQuery}`
            );
            if(!response.ok){
                if (response.status === 400) {
                    throw new Error('Invalid location: Please try a new location.');
                } else {
                    throw new Error('Something went wrong. Please try again')
                }
            }
            const result = await response.json();
            setWeatherResult(result);
            setError("");
        } catch (error) {
            setWeatherResult(null);
            setError(error.message);
        }
        
    };

    return (
        <>
            <div className="flex justify-between items-center">
                <div className="w-9/12">
                    <input
                        className="text-white bg-slate-800 w-full outline-none rounded px-4 py-2.5"
                        type="text"
                        name="searchbar"
                        id="searchbar"
                        placeholder="Search for location"
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                </div>
                <SearchButton onSearch={handleSearchClick} />
            </div>
            <Main data={weatherResult} error={error}/>
        </>
    );
};

export default SearchBar;
