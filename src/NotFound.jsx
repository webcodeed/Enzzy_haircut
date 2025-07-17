import { Link } from "react-router";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6 text-center">
      <h1 className="text-7xl font-extrabold text-yellow-400">404</h1>
      <p className="mt-4 text-2xl font-semibold">This page didn’t make the cut.</p>
      <p className="mt-2 text-gray-400">
        It looks like the page you're looking for is out of style or no longer exists.
      </p>

      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 text-black hover:bg-gradient-to-b hover:from-yellow-300 hover:via-yellow-500 hover:to-yellow-600 bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-800hover:bg-yellow-600 bg-yellow-500 px-6 py-3 rounded-full font-medium  transition duration-300"
      >
        <MoveLeft className="w-5 h-5" />
        Back to Home
      </Link>

      <p className="mt-6 text-sm text-gray-500 italic">
        “Complete Hair Transformation” starts on the right page - not this one 😉
      </p>
    </div>
  );
}