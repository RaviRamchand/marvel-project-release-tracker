//TODO: Count down the next release instead of going back in forth between now showing and playing

function Banner(props) {
    var currentDate = new Date();
    currentDate = new Date(currentDate.toISOString().split("T")[0]);

    const itemDate = new Date(props.date);

    const differenceInDays = Math.ceil(
        (itemDate - currentDate) / (1000 * 60 * 60 * 24)
    );

    return (
        <div>
            <div className="relative h-full">

                {differenceInDays >= 0 && differenceInDays <= 20 && (
                    <img
                        src={props.backdrop}
                        className="sm:h-96 lg:h-dvh w-full opacity-85"
                        alt="banner"
                    />
                )}

                <div className="absolute hidden lg:block lg:top-96">
                    {differenceInDays >= 0 && differenceInDays <= 20 && <p className="text-xs md:text-3xl md:ms-5 border-2 border-black p-3 bg-[white] text-center">{props.title}<p className="text-xs md:text-xl text-center mt-2">In {differenceInDays} Days</p></p>}
                </div>

            </div>

            <div className="block lg:hidden">
                {differenceInDays >= 0 && differenceInDays <= 20 && <p className="text-xs md:text-3xl border-2 border-black p-2 bg-[white] text-center">{props.title}<p className="text-xs md:text-xl text-center mt-2">In {differenceInDays} Days</p></p>}

            </div>

        </div>
    );
}
export default Banner;