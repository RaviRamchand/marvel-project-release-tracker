import {useLocation } from "react-router-dom";

const DateToWords = ({ date }) => {
    const formattedDate = new Date(date);

    const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Toronto'  };
    const dateString = new Intl.DateTimeFormat('en-US', options).format(formattedDate);

    return (
        <div>
            <p className="text-base mt-2">{dateString}</p>
        </div>
    );
};

function Info() {
    const location = useLocation(); // Access the location object
    const { props } = location.state || {}; // Destructure the passed props object

    const { title, poster, release_date, backdrop, summary} = props;

    return (
        <div>
            <div className="relative">
                <img src={backdrop} className="h-96 w-full opacity-40" alt="backdrop"/>
            </div>
            <div className="absolute top-44 left-1/2 -translate-x-1/2">
                <p className="text-sm md:text-3xl border-2 border-black bg-white p-3 text-center drop-shadow-lg">{title}</p>
            </div>

            <div className="flex column-flex justify-center mt-3">
                <img src={poster} className="w-80 border-2 border-white" alt="poster" />
            </div>


            <p className="text-center text-slate-400">{<DateToWords date={release_date} />}</p>



            <div className="flex justify-center">

                <p className="mt-2 text-white text-center w-96 mb-5">{summary}</p>
            </div>
        </div>
    );
}

export default Info;