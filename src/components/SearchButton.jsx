const SearchButton = ({ onSearch }) => {
    return (
        <div className="w-2/12 text-end">
            <button
                className="text-white bg-sky-500 px-8 py-2.5 rounded-full"
                type="button"
                onClick={onSearch}
            >
                Search
            </button>
        </div>
    );
};

export default SearchButton;
