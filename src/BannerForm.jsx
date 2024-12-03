const destinations = [
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
  { id: 1, name: "Bali" },
  { id: 2, name: "Singapore" },
  { id: 3, name: "Malaysia" },
  { id: 4, name: "Dubai" },
  { id: 5, name: "Thailand" },
  { id: 6, name: "Maldives" },
  { id: 7, name: "Seychelles" },
];

function BannerForm() {
  return (
    <>
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
      <div>
        <h1>Search for a trip</h1>
        <div></div>
      </div>
    </>
  );
}

export default BannerForm;
