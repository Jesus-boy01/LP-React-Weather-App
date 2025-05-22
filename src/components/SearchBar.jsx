import { useState } from "react";
import SearchButton from "./SearchButton";
import Main from "./Main";

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [weatherResult, setWeatherResult] = useState(null);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = async () => {
        try {
            const response = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${searchQuery}`
            );
            const result = await response.json();
            if (searchQuery.trim()) {
                setWeatherResult(result);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setWeatherResult(null);
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
            <Main data={weatherResult} />
        </>
    );
};

export default SearchBar;
