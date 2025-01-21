import { useState, useEffect, useMemo } from "react";
import Upcoming from "./Upcoming";
import Banner from "./Banner";

function Home() {
    
    const [data, setData] = useState([]);
    const supabaseUrl = process.env.REACT_APP_SUPABASE;
    const apiKey = process.env.REACT_APP_APIKEY;

    console.log(supabaseUrl)

    const headers = useMemo(() => ({
        'Content-Type': 'application/json',
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,

    }), [apiKey]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${supabaseUrl}/rest/v1/movie_show_release?order=release_date.asc`, {
                    method: 'GET',
                    headers: headers,
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [headers, supabaseUrl]); // Dependency array corrected

    const upcoming = data.map((d) => <Upcoming key={d.id} {...d} />)
    const banner = data.map((d) => <Banner key={d.id} date={d.release_date} backdrop={d.backdrop} title={d.title} items = {[d.backdrop, d.release_date]}/>)

    return (
        <div>
            <p>{banner}</p>

            <p className="text-2xl mt-6 text-white text-center mb-7 font-thin">2025 Marvel Projects:</p>
            <p className="grid sm:grid-cols-1 gap-6 px-6 md:grid-cols-4 mb-5 place-items-center h-screen">{upcoming}</p>
        </div>
    );
}

export default Home; 