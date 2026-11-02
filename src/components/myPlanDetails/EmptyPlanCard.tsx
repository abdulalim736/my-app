import Link from 'next/link';


const EmptyPlanCard = () => {
    return (
        <div className='space-y-2 bg-[#111111]'>
            <h2 className='text-4xl text-amber-50'>NOTHING YET HERE</h2>
            <p className="text-amber-50">Browse the library and add a lift to get to day moving</p>
            <Link href={"Worksout"}> <button className='border rounded-3xl text-amber-50 bg-[#C2F800] p-2'> Go to worksout</button> </Link>
        </div>
    );
};

export default EmptyPlanCard;