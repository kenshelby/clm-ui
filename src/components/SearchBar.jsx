import { useRef } from "react";

const SearchBar = () => {

    const searchText = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchText.current.value);
    }
    return (
        <div className="search-bar">
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" className="search-input" ref={searchText} placeholder="Search"></input>
            </form>
        </div>
    )
}

export default SearchBar;