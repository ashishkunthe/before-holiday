import { useState } from "react";
import ReactSlider from "react-slider";

const destinations = [
  { id: 0, name: "Destinations" },
  { id: 1, name: "Andaman Tour" },
  { id: 2, name: "Himachal" },
  { id: 4, name: "Kerala" },
  { id: 6, name: "Tamil Nadu" },
  { id: 9, name: "Goa" },
  { id: 10, name: "Sikkim" },
  { id: 11, name: "Darjeeling" },
  { id: 12, name: "Kashmir" },
  { id: 13, name: "Ladakh" },
  { id: 14, name: "Uttarakhand" },
  { id: 15, name: "Bali" },
  { id: 16, name: "Singapore" },
  { id: 17, name: "Malaysia" },
  { id: 18, name: "Dubai" },
  { id: 19, name: "Thailand" },
  { id: 20, name: "Maldives" },
  { id: 21, name: "Seychelles" },
];

function BannerForm() {
  const [values, setValues] = useState([1, 11]);

  return (
    <>
      {/* Banner Section */}
      <div
        className="bg-cover bg-center h-[450px] flex justify-center items-center text-center text-white px-4"
        style={{ backgroundImage: 'url("./garden.jpg")' }}
      >
        <div>
          <h1 className="text-7xl mb-6 shadow-lg">
            Plan Your Perfect <br /> Vacation
          </h1>
          <div className="flex justify-center items-center mt-20 w-full max-w-4xl mx-auto bg-white bg-opacity-20 p-4 rounded-md">
            <input
              type="text"
              placeholder="Search..."
              className="p-3 text-base rounded-md border-none mr-4 w-full max-w-lg"
            />
            <button className="p-3 px-6 text-base bg-green-600 text-white rounded-md cursor-pointer w-52">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Trip Search Section */}
      <div className="relative -top-20 bg-white bg-opacity-70 p-6 rounded-md mx-auto w-4/5 shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-left">
          Search for a Trip
        </h1>
        <div className="flex items-center gap-6">
          {/* Dropdown */}
          <div className="flex-1">
            <label
              htmlFor="destination"
              className="block text-gray-700 font-medium mb-2"
            >
              Choose a destination:
            </label>
            <select
              id="destination"
              name="destination"
              className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
            >
              {destinations.map((destination) => (
                <option key={destination.id} value={destination.name}>
                  {destination.name}
                </option>
              ))}
            </select>
          </div>

          {/* Range Input */}
          <div className="flex-1">
            <label
              htmlFor="range"
              className="block text-gray-700 font-medium mb-2"
            >
              Select range:
            </label>

            <ReactSlider
              className="custom-slider"
              thumbClassName="custom-thumb"
              trackClassName="custom-track"
              value={values}
              onChange={(newValues) => setValues(newValues)}
              min={1}
              max={11}
              step={1}
              minDistance={1}
            />

            <div className="flex justify-between text-sm text-gray-700 mt-2">
              <span>Start: {values[0]}</span>
              <span>End: {values[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerForm;
