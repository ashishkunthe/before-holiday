function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Contact Info Section */}
        <div>
          <h1 className="text-xl font-bold mb-6">Contact Info</h1>
          <p className="text-lg mb-2">
            Phone: +91 96540 30331 <br /> +91 93155 71456
          </p>
          <p className="text-lg mb-2">
            Email:{" "}
            <a href="mailto:hello@b4holiday.com" className="text-blue-400">
              hello@b4holiday.com
            </a>
          </p>
          <p className="text-lg mb-2">
            Address: D 247 / 4A, B Block, Sector 63, Noida, Uttar Pradesh 201301
          </p>
        </div>

        {/* Major Brand Affiliations Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Major Brand Affiliations
          </h3>
          <div className="flex flex-wrap justify-start gap-6">
            <img
              src="./logo-iata2.png"
              alt="IATA Logo"
              className="w-32 h-32 object-contain"
            />
            <img
              src="./mmtLogoWhite.png"
              alt="MMT Logo"
              className="w-32 h-32 object-contain"
            />
            <img
              src="./owl.png"
              alt="Owl Logo"
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>

        {/* Airline Partners Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Our Airline Partners</h3>
          <div className="flex flex-wrap justify-start gap-6">
            <img
              src="./Indigologo.png"
              alt="Indigo Logo"
              className="w-72 h-32 object-contain"
            />
            <img
              src="./air-india-logo.png"
              alt="Air India Logo"
              className="w-72 h-32 object-contain"
            />
            <img
              src="./go-first-logo.png"
              alt="Go First Logo"
              className="w-72 h-32 object-contain"
            />
            <img
              src="./spicejet-flights.png"
              alt="SpiceJet Logo"
              className="w-72 h-32 object-contain"
            />
            <img
              src="./vistara-logo.png"
              alt="Vistara Logo"
              className="w-72 h-32 object-contain"
            />
          </div>
        </div>

        {/* Google Map Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Find Us Here</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d28020.145950734986!2d77.378501!3d28.614226000000002!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1733307206934!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
