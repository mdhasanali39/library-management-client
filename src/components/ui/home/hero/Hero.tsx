import { Link } from "react-router";
import bookImg from "../../../../assets/images/9269778.png"
const Hero = () => {
    return (
      <div className="flex md:items-center flex-col lg:flex-row bg-green-200 max-w-7xl mx-auto min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-160px)] px-5">
        <div className="w-full lg:w-2/4 sm:pl-8 space-y-2 mt-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Book{" "}
            <span className="text-green-500">That is your real friend</span>
          </h2>
          <p className="text-3xl md:text-4xl font-bold leading-relaxed mb-10">
            No cheating, make you{" "}
            <span className="text-green-500">happy and cry</span> <br /> But,
            That is your <span className="text-green-500">real friend</span>
          </p>

          <Link
            to="/books"
            className="bg-green-500 cursor-pointer font-medium md:text-lg text-white px-4 py-2  rounded"
          >
            See all Books
          </Link>
        </div>
        <div className="h-[300px] lg:h-[500px] w-auto lg:w-2/4 hidden lg:block">
          <img src={bookImg} alt="" className="h-full w-3/4 mx-auto" />
        </div>
      </div>
    );
};

export default Hero;