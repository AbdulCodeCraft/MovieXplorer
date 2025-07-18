    import React, { useEffect } from "react";
    import { useState } from "react";


    export const useFetch = ({ apiPath ,queryTerm=""}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(null);
    const key = import.meta.env.VITE_API_KEY;
    
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;
    
    console.log(url);
    useEffect(() => {
        const fetchMovies = async () => {
        setLoading(true);
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(`The Error Status ${response.status}`);
            }
            const json = await response.json();
            setData(json.results);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
        };
        fetchMovies();
    }, [url,queryTerm]);

    
    return {data,loading};
    };
