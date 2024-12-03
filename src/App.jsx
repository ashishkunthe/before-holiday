import {
  FaAngleDown,
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaTripadvisor,
  FaTumblr,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import BannerForm from "./BannerForm";

const destinationsIndia = [
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
];

const destinationsInternational = [
  { id: 1, name: "Bali" },
  { id: 2, name: "Singapore" },
  { id: 3, name: "Malaysia" },
  { id: 4, name: "Dubai" },
  { id: 5, name: "Thailand" },
  { id: 6, name: "Maldives" },
  { id: 7, name: "Seychelles" },
];

const activities = [
  { id: 1, name: "River Rafting" },
  { id: 2, name: "Paragliding" },
  { id: 3, name: "Road Cycling" },
  { id: 4, name: "Cultural Tours" },
  { id: 5, name: "Peak Climbing" },
  { id: 6, name: "Jungle Safari" },
  { id: 7, name: "Hiking" },
  { id: 8, name: "Kayaking" },
];

function App() {
  return (
    <div>
      <header
        className=" h-[40px] flex items-center px-8 shadow-md"
        style={{ backgroundColor: "#61CE70" }}
      >
        <a
          href="https://www.google.com/search?q=before-holiday"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl mx-4 hover:opacity-80 transition-opacity"
        >
          <FaGoogle />
        </a>
        <a
          href="https://www.facebook.com/Before.Holiday/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl mx-4 hover:opacity-80 transition-opacity"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/b4holidays/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl mx-4 hover:opacity-80 transition-opacity"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/BeforeHoliday"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl mx-4 hover:opacity-80 transition-opacity"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.youtube.com/channel/UCkIooCccputkch8k9UU8VFQ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl mx-4 hover:opacity-80 transition-opacity"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.tripadvisor.com/Attraction_Review-g644043-d23135869-Reviews-Before_Holiday_Online_Travel_Agency-Noida_Gautam_Buddha_Nagar_District_Uttar_Pra.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl mx-4 hover:opacity-80 transition-opacity"
        >
          <FaTripadvisor />
        </a>
        <a
          href="https://www.tumblr.com/before-holiday"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl mx-4 hover:opacity-80 transition-opacity"
        >
          <FaTumblr />
        </a>
      </header>
      <header className="h-[175px] flex items-center px-8  bg-white">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img
            src="./logo.png"
            alt="Logo"
            className="w-80 h-64 object-contain"
          />
        </div>

        {/* Contact Info Section */}
        <div className="ml-auto text-right">
          <p className="text-gray-600 text-lg font-medium mb-2">
            Call us, we are open 24/7
          </p>
          <h1 className="text-4xl font-bold text-green-600 hover:underline transition-all">
            (+91) 9654-030-331
          </h1>
        </div>
      </header>
      <header className="h-[75px] bg-white flex items-center px-8 border border-gray-300">
        <ul className="flex w-full justify-evenly text-lg font-medium text-gray-800 bg-white py-3 uppercase">
          <li className="hover:text-green-600 cursor-pointer transition-colors">
            Home
          </li>
          <li className="relative group hover:text-green-600 cursor-pointer transition-colors">
            India <FaAngleDown className="inline ml-2 text-sm" />
            {/* Dropdown */}
            <ul className="hidden group-hover:flex flex-col absolute top-full left-0 mt-1 w-60 bg-white border rounded shadow-lg z-10">
              {destinationsIndia.map((destinationI) => (
                <li
                  key={destinationI.id}
                  className="px-4 py-2 text-sm text-black hover:bg-green-100 cursor-pointer"
                >
                  {destinationI.name}
                </li>
              ))}
            </ul>
          </li>
          <li className="relative group hover:text-green-600 cursor-pointer transition-colors">
            International <FaAngleDown className="inline ml-2 text-sm" />
            <ul className="hidden group-hover:flex flex-col absolute top-full left-0 mt-1 w-60 bg-white border rounded shadow-lg z-10">
              {destinationsInternational.map((destinationInter) => (
                <li
                  key={destinationInter.id}
                  className="px-4 py-2 text-sm text-black hover:bg-green-100 cursor-pointer"
                >
                  {destinationInter.name}
                </li>
              ))}
            </ul>
          </li>

          <li className="relative group hover:text-green-600 cursor-pointer transition-colors">
            Activities
            <FaAngleDown className="inline ml-2 text-sm" />{" "}
            {/* Arrow for activities */}
            <ul className="hidden group-hover:flex flex-col absolute top-full left-0 mt-1 w-60 bg-white border rounded shadow-lg z-10">
              {activities.map((activity) => (
                <li
                  key={activity.id}
                  className="px-4 py-2 text-sm text-black hover:bg-green-100 cursor-pointer"
                >
                  {activity.name}
                </li>
              ))}
            </ul>
          </li>
          <li className="hover:text-green-600 cursor-pointer transition-colors">
            About Us
          </li>
          <li className="hover:text-green-600 cursor-pointer transition-colors">
            Reviews
          </li>
          <li className="hover:text-green-600 cursor-pointer transition-colors">
            Contact
          </li>
        </ul>
      </header>
      <BannerForm />
    </div>
  );
}

export default App;
