const SearchButton = ({ onSearch }) => {
    return (
        <div className="sm:w-2/12 w-1/5 text-center">
            <button
                className="text-white bg-sky-500 lg:px-8 md:px-4 py-2.5 rounded-full w-full"
                type="button"
                onClick={onSearch}
            >
                Search
            </button>
        </div>
    );
};

export default SearchButton;
