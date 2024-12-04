import { FaClock, FaLocationArrow } from "react-icons/fa";

function Trip() {
  return (
    <div className="h-full p-6">
      <h1 className="text-3xl font-semibold mb-6">Featured Trips</h1>

      {/* Grid Layout for 3 Cards on Top and 3 Cards on the Bottom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Card */}
        <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden flex flex-col">
          <img
            src="./kerala_app.jpg"
            alt="Kerala Holiday Package"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex-grow">
            <h3 className="text-2xl font-semibold mb-2">
              5 Days Kerala Holiday Package
            </h3>
            <p className="text-lg mb-2">
              <FaLocationArrow /> Alleppey, India, Kerala, Munnar, Thekkady
            </p>
            <p className="text-lg mb-4">
              <FaClock /> 5 Days - 4 Nights
            </p>
            <div className="flex justify-center">
              <button className="w-auto border-2 border-green-600 text-green-600 py-2 px-6 rounded-full hover:bg-green-600 hover:text-white transition">
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* Second Card */}
        <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden flex flex-col">
          <img
            src="./manali.jpg"
            alt="Kerala Holiday Package"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex-grow">
            <h3 className="text-2xl font-semibold mb-2">
              Frozen Shimla-Manali
            </h3>
            <p className="text-lg mb-2">
              <FaLocationArrow />
              Himachal , India
            </p>
            <p className="text-lg mb-4">
              <FaClock /> 6 Days - 5 Nights
            </p>
            <div className="flex justify-center">
              <button className="w-auto border-2 border-green-600 text-green-600 py-2 px-6 rounded-full hover:bg-green-600 hover:text-white transition">
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* Third Card */}
        <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden flex flex-col">
          <img
            src="./Andaman_Islands.jpg"
            alt="Kerala Holiday Package"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex-grow">
            <h3 className="text-2xl font-semibold mb-2">
              Sikkim Darjeeling Honeymoon Package
            </h3>
            <p className="text-lg mb-2">
              <FaLocationArrow /> Darjeeling , Sikkim
            </p>
            <p className="text-lg mb-4">
              <FaClock /> 5 Days - 4 Nights
            </p>
            <div className="flex justify-center">
              <button className="w-auto border-2 border-green-600 text-green-600 py-2 px-6 rounded-full hover:bg-green-600 hover:text-white transition">
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* Fourth Card (Bottom Row) */}
        <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden flex flex-col">
          <img
            src="./goa.jpg"
            alt="Kerala Holiday Package"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex-grow">
            <h3 className="text-2xl font-semibold mb-2">Goa Honeymoon Tour</h3>
            <p className="text-lg mb-2">
              <FaLocationArrow /> Goa, India
            </p>
            <p className="text-lg mb-4">
              <FaClock /> 4 Days - 3 Nights
            </p>
            <div className="flex justify-center">
              <button className="w-auto border-2 border-green-600 text-green-600 py-2 px-6 rounded-full hover:bg-green-600 hover:text-white transition">
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* Fifth Card (Bottom Row) */}
        <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden flex flex-col">
          <img
            src="./Ooty.jpg"
            alt="Kerala Holiday Package"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex-grow">
            <h3 className="text-2xl font-semibold mb-2">
              Ooty – Kodaikanal Package India ,
            </h3>
            <p className="text-lg mb-2">
              <FaLocationArrow /> Kodaikanal , Ooty , Tamil Nadu
            </p>
            <p className="text-lg mb-4">
              <FaClock />5 Days - 4 Nights
            </p>
            <div className="flex justify-center">
              <button className="w-auto border-2 border-green-600 text-green-600 py-2 px-6 rounded-full hover:bg-green-600 hover:text-white transition">
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* Sixth Card (Bottom Row) */}
        <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden flex flex-col">
          <img
            src="./Andaman.jpg"
            alt="Kerala Holiday Package"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex-grow">
            <h3 className="text-2xl font-semibold mb-2">
              Andaman Tour Packages
            </h3>
            <p className="text-lg mb-2">
              <FaLocationArrow /> Andaman Tour
            </p>
            <p className="text-lg mb-4">
              <FaClock /> 6 Days - 5 Nights
            </p>
            <div className="flex justify-center">
              <button className="w-auto border-2 border-green-600 text-green-600 py-2 px-6 rounded-full hover:bg-green-600 hover:text-white transition">
                View Details
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="flex justify-center mt-6">
        <button className="border-2 border-green-600 text-green-600 py-3 px-6 rounded-md hover:bg-green-600 hover:text-white transition">
          View All Trips
        </button>
      </div>
    </div>
  );
}

export default Trip;
