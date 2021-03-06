import React, { useState } from 'react'

function Banner() {

    const [movie, setMovie] =useState([]);

    useState(() => {
        async function fetchData(){

        }
        fetchData();
    }, []);

    return (
        <header> {/* <<< Background image */}
        {/* title */}
        {/* div > 2 buttons */}
        {/* description */}
        </header>
    )
}

export default Banner
