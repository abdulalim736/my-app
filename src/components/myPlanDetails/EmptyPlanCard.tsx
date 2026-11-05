
import Link from 'next/link';

const EmptyPlanCard = () => {
    return (
        <div className="
            container max-w-7xl mx-auto
            px-4 sm:px-6 md:px-10 lg:px-12
            py-10 sm:py-12 md:py-16
            bg-[#111111]
            text-center
            space-y-4 sm:space-y-5
            rounded-xl
        ">
            <h2 className="
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                font-bold
                text-amber-50
            ">
                NOTHING YET HERE
            </h2>

            <p className="
                text-sm sm:text-base md:text-lg
                text-amber-50
                max-w-xl mx-auto
                leading-relaxed
            ">
                Browse the library and add a lift to get your day moving.
            </p>

            <Link href="/Worksout">
                <button className="
                    border border-[#C2F800]
                    rounded-3xl
                    text-black
                    bg-[#C2F800]
                    px-5 sm:px-7
                    py-2.5 sm:py-3
                    text-sm sm:text-base
                    font-semibold
                    transition-all duration-300
                    hover:bg-transparent
                    hover:text-[#C2F800]
                ">
                    Go to Workouts
                </button>
            </Link>
        </div>
    );
};

export default EmptyPlanCard;
