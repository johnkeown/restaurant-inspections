import { useState } from "react";
import SearchResults from "../components/SearchResults";

const Search = () => {
    const [searchResults, setSearchResults] = useState([
        { name: "ABC Pizza Company", score: "97" },
        { name: "ABC Pizza Company 2", score: "98" },
        { name: "ABC Pizza Company 3", score: "99" },
    ]);
    return <SearchResults items={searchResults} />;
};

export default Search;
