
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#111111] text-amber-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-3xl mx-auto text-center">

        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-3 mb-10">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={45}
            height={45}
            className="object-contain"
          />
          <span className="text-2xl font-extrabold tracking-wider">
            FIT<span className="text-[#C2F800]">LOG</span>
          </span>
        </Link>

        {/* 404 Number */}
        <div className="relative mb-6">
          <h1 className="text-[100px] sm:text-[150px] md:text-[200px] font-black leading-none tracking-tighter text-[#C2F800]">
            404
          </h1>

          <span className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl md:text-7xl">
            💪
          </span>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            OOPS! WRONG WORKOUT STATION.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Looks like you&apos;ve wandered off the training floor!
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">

          <Link
            href="/"
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#C2F800] text-black font-bold text-sm hover:bg-lime-400 transition-all duration-300 hover:scale-105"
          >
            GO TO HOMEPAGE
          </Link>

          <Link
            href="/Worksout"
            className="w-full sm:w-auto px-7 py-3 rounded-full border border-gray-700 text-amber-50 font-bold text-sm hover:border-[#C2F800] hover:text-[#C2F800] transition-all duration-300"
          >
            BROWSE WORKOUTS
          </Link>

        </div>

        {/* Footer */}
        <p className="mt-12 text-xs sm:text-sm text-gray-600">
          © 2026 FITLOG - TRAIN HARD, LOG HONEST.
        </p>

      </div>
    </main>
  );
};

export default NotFound;
