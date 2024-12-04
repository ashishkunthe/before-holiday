import { CiCircleCheck } from "react-icons/ci";

function Content1() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-10 h-[700px]">
      {/* First Column */}
      <div className=" p-6 rounded-lg shadow-lg h-[700px] flex items-center justify-center">
        <div>
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Why Book with Us
          </h1>
          <p className="text-lg text-center">
            We are well known that Travelling gives us the opportunity to
            disconnect from our regular life. We create unforgettable memories
            for a lifetime with friends and family.
          </p>
        </div>
      </div>

      {/* Second Column */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-[700px] flex items-center justify-center">
        <div>
          <h3 className="text-3xl font-semibold mb-4">
            <CiCircleCheck />
            TripAdvisor Multiple Award Winning Company
          </h3>
          <p className="text-lg mb-4">
            We've received the Certificate of Excellence award from TripAdvisor,
            the world's largest travel website.
          </p>
          <h3 className="text-3xl font-semibold mb-4">
            <CiCircleCheck /> Local Experts. Middle-man Free Pricing
          </h3>
          <p className="text-lg mb-4">
            We're a local travel agency. When you book with us, you get the best
            possible price, which is middle-man free.
          </p>
          <h3 className="text-3xl font-semibold mb-4">
            {" "}
            <CiCircleCheck />
            What You See Is What You Get
          </h3>
          <p className="text-lg mb-4">
            We provide a trip perfection guarantee in which the same hotels &
            services offered to you in the final quotation will be provided.
          </p>
        </div>
      </div>

      {/* Third Column */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-[700px] flex items-center justify-center">
        <div>
          <h3 className="text-3xl font-semibold mb-4">
            <CiCircleCheck />
            High Quality Hotels & Services
          </h3>
          <p className="text-lg mb-4">
            We provide best quality Hotels & Services in all the budget
            segments. Under no condition your trip quality be compromised.
          </p>
          <h3 className="text-3xl font-semibold mb-4">
            <CiCircleCheck /> No Hidden Charges
          </h3>
          <p className="text-lg mb-4">
            We don't add hidden extras cost. All trips include travel permit,
            lodging and fooding. There are no surprises with hidden costs.
          </p>
          <h3 className="text-3xl font-semibold mb-4">
            {" "}
            <CiCircleCheck />
            100% Customizable
          </h3>
          <p className="text-lg mb-4">
            Tell us about your trip requirement. We'll work together to
            customize your trip to meet your exact requirement so that you have
            a memorable trip.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content1;
