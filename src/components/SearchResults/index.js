import SearchResult from "../SearchResult";

const SearchResults = ({ items }) => {
    return (
        <>
            {items.length} results found
            {items &&
                items.map((item) => (
                    <SearchResult name={item.name} score={item.score} />
                ))}
        </>
    );
};

export default SearchResults;
