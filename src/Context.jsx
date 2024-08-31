import { useContext, useEffect, useState } from "react"
import React from "react";

//context(warehouse)
//provider
//consumer /(useContext())
export const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`

const AppContext = React.createContext();


const AppProvider = ({children}) => {   
    const [isLoading , setIsLoading] = useState(true);
    const [movie , setMovie] = useState([]);
    const [isError , setIsError] = useState({show:"false" ,msg: "" });
    const [query , setQuery] = useState("titanic")
    const getMovies = async(url)=>{
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            if(data.Response === "True"){
                setIsLoading(false);
                setIsError({
                    show: false,
                    msg: "",
                });
                setMovie(data.Search);
            }else{
                setIsError({
                    show:true,
                    msg: data.Error,
                });

            }
            
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        let timerOut = setTimeout(()=> {
            getMovies(`${API_URL}&s=${query}`);
        } , 800);
        return ()=> clearTimeout(timerOut);
        
    } , [query]);

    return (
    <AppContext.Provider value={{isLoading , isError ,movie, query , setQuery }}> 
    {children} 
    </AppContext.Provider>
    );
};


const useGlobalContext = ()=>{
    return useContext(AppContext);
};

export {AppContext , AppProvider , useGlobalContext};