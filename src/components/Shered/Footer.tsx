import logo from '@/assets/logo.png';
import Image from 'next/image';


const Footer = () => {
    return (
        <div className = "container mx-auto px-12 py-6 bg-[#111111] text-white text-center flex justify-between items-center">

            
            <div className='flex gap-2 items-center justify-center'>
                <Image src={logo} width={20} height={20} alt="Logo" /> <span> FITLOG</span>
            </div>
                

           <div>
            © 2026 FitLog- Workout Library. Train hard, log honest.
           </div>
            

        </div>
    );
};

export default Footer;