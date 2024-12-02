import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaTripadvisor,
  FaTumblr,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

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
    </div>
  );
}

export default App;
