import { useEffect, useState } from "react";
import axios from "axios";

export const useDataFetch = (url) => {
    useEffect(() => {
        if (url) {
        let ignore = false;
        setLoading(true)
            axios.get(url)
                .then(response => response.json())
                .then(json => {
                    if (!ignore) {
                        setLoading(false)
                        setData(json);
                        }
                        console.log(json)
                    });
            // cleanup function, in case url changes before complete
            return () => {
                ignore = true;
            };
        }
    }, [url]); 
   
    return [data];
}