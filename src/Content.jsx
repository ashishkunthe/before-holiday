import { FaPlaneDeparture } from "react-icons/fa";

function Content() {
  return (
    <div className="px-8">
      <div className="flex justify-between items-start">
        {/* Left Section */}
        <div className="text-left mr-12 w-1/2">
          <h1 className="text-5xl font-bold mb-4">
            Thousands of happy families <br /> have travelled with us!
          </h1>
          <p className="text-base leading-relaxed text-gray-700">
            Nurtured from the seed of a single great idea – to create a happy
            travelling experience for travellers – Before Holiday | Online
            Travel Agency started empowering Indian travellers by providing a
            wide range of world-class travel services at reliable and reasonable
            prices so that all people can enjoy travelling. Packages for couples
            are designed as if they feel they have married once again. Utmost
            quality for Honeymoon Couples with special freebies. Perfect
            planning & execution for our Corporate Partners Events. We create
            unforgettable memories for a lifetime with friends, family &
            Colleagues. Thousands of happy families have travelled with us since
            2016 & we are committed to provide the same experience in all the
            future trips as well.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/3 p-4 rounded-md shadow-md  mr-14 ">
          <h3 className="text-2xl font-bold mb-4">
            Check Flights For Your Trip
          </h3>
          <form className="space-y-4 ">
            <div>
              <label className="block font-medium mb-1 text-sm" htmlFor="from">
                From
              </label>
              <input
                id="from"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-sm" htmlFor="to">
                To
              </label>
              <input
                id="to"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex items-center space-x-4  ">
              <div>
                <input id="return" type="radio" name="trip-type" />
                <label className="ml-2" htmlFor="return">
                  Return
                </label>
              </div>
              <div>
                <input id="one-way" type="radio" name="trip-type" />
                <label className="ml-2" htmlFor="one-way">
                  One Way
                </label>
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="depart">
                Depart
              </label>
              <input
                id="depart"
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="returnDate">
                Return
              </label>
              <input
                id="returnDate"
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-center items-center mt-6">
              <button className="flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
                Search Flight <FaPlaneDeparture />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Content;
