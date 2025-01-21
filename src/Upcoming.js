import { Link } from "react-router-dom";


const DateToWords = ({ date }) => {
    const formattedDate = new Date(date);

    const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Toronto'  };
    const dateString = new Intl.DateTimeFormat('en-US', options).format(formattedDate);

    return (
        <div>
            <p className="text-base mt-2">Coming: {dateString}</p>
        </div>
    );
};

function Upcoming(props) {
    return (
        <div class="max-w-xs bg-[#232323] border border-white text-white p-4 rounded-lg text-center h-svh w-full">
            <Link to={`/info/${props.id}`} state={{props}}><img src={props.poster} alt="" className="hover:scale-105"/></Link>

            <p class="mt-4 text-lg font-semibold">
                {props.title}
            </p>
            <p class="text-sm mt-1">
                {(props.type === "Series") ? <p className="text-xl">Stream on Disney+</p> : <p className="text-xl">Watch in Theaters</p>}
                <DateToWords date={props.release_date} />
            </p>
        </div>

    );
}
export default Upcoming;