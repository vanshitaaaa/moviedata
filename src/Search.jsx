import { useGlobalContext } from "./Context";
import React from "react";


const Search = ()=>{
    const {query , setQuery , isError} = useGlobalContext();
    return (
    <section className="search-section">
        <h2>Search Your Movie</h2>
        <form action="#" onSubmit={(e)=> e.preventDefault()}>
            <div>
                <input
                type="text"
                placeholder="Search Here"
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
                />
            </div>
        </form>
        <div className="card-error">
            <p>{isError.show && isError.msg}</p>
        </div>
    </section>
    );
};

export default Search;