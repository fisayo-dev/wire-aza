import Link from "next/link";

const AllBusinessesPage = ({ businesses }) => {
  const sampleBusinesses = [
    {
      id: 1,
      name: "Cowrywise",
      description:
        "Lorem ispum dor lo sit amet! Lorem ispum dor lo sit amet!Lorem ispum dor lo sit amet!",
      logo: "jsdkjskdjsk",
      owner: {
        name: "Fisayo Obadina",
        email: "olufisayobadina",
        avatar: "ddskldksjkds.com",
      },
      azas: [
        {
          bank_name: "Access Bank",
          bank_code: "040",
          account_number: 1913282943,
          account_name: "OBADINA OLUFISAYO ONIMSI",
        },
        {
          bank_name: "Access Bank",
          bank_code: "040",
          account_number: 1913282943,
          account_name: "OBADINA OLUFISAYO ONIMSI",
        },
      ],
    },
    {
      id: 2,
      name: "Piggyvest",
      description:
        "Lorem ispum dor lo sit amet! Lorem ispum dor lo sit amet!Lorem ispum dor lo sit amet!",
      logo: "jsdkjskdjsk",
      owner: {
        name: "Fisayo Obadina",
        email: "olufisayobadina",
        avatar: "ddskldksjkds.com",
      },
      azas: [
        {
          bank_name: "Access Bank",
          bank_code: "040",
          account_number: 1913282943,
          account_name: "OBADINA OLUFISAYO ONIMSI",
        },
        {
          bank_name: "Access Bank",
          bank_code: "040",
          account_number: 1913282943,
          account_name: "OBADINA OLUFISAYO ONIMSI",
        },
      ],
    },
  ];

  console.log("Businesses Data:", businesses);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className=" border-b border-gray-200">
        <div className="py-8 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto text-center">
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Discover businesses making a difference
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Explore All{" "}
            <span className="relative">
              Businesses
              <span className="absolute bottom-2 left-0 w-full h-1 bg-green-500"></span>
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with businesses and access their account details seamlessly
            and professionally.
          </p>
        </div>
      </div>

      {/* Businesses Grid */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 xl:px-12 :max-w-5xl xl:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {sampleBusinesses.map((business, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-green-500 transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center shrink-0 shadow-lg">
                      <span className="text-white text-xl font-bold">
                        {business.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-bold text-gray-900 truncate group-hover:text-green-600 transition-colors">
                        {business.name}
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        Financial Services
                      </p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 ml-3">
                    <span className="text-gray-600 text-xs font-semibold">
                      {business.owner.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {business.description}
                </p>
              </div>

              {/* Account Details Section */}
              <div className="p-6 bg-gray-50">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  Account Details
                </h3>
                <div className="space-y-3">
                  {business.azas.map((aza, azaIndex) => (
                    <div
                      key={azaIndex}
                      className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0">
                          <span className="text-white text-xs font-bold">
                            {aza.bank_name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 truncate">
                            {aza.account_name}
                          </p>
                          <p className="text-xs text-gray-600 font-mono mt-1">
                            {aza.account_number}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {aza.bank_name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 bg-white border-t border-gray-100">
                <Link
                  href={`/businesses/${business.id}`}
                  className="flex items-center justify-center w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 group-hover:shadow-lg"
                >
                  View Details
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBusinessesPage;
