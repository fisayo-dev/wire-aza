import Image from "next/image";
import Link from "next/link";

const AllBusinessesPage = () => {
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
      id: 1,
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
  return (
    <div className="py-4 px-4 sm:px-6 lg:px-8 xl:px-12 lg:max-w-5xl md:max-w-4xl sm:max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
        Explore All Businesses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {/* Grid card */}
        {sampleBusinesses.map((business, index) => (
          <div
            key={index}
            className="p-4 sm:p-6 rounded-2xl overflow-hidden border bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="grid gap-3 sm:gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Image
                    alt={business.name}
                    height={40}
                    width={40}
                    src="/assets/google.svg"
                    className="rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                  />
                  <div className="flex flex-col min-w-0 flex-1">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                      {business.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                      {business.description.length > 60
                        ? `${business.description.substring(0, 57)}...`
                        : business.description}
                    </p>
                  </div>
                </div>
                <Image
                  alt={business.owner.name}
                  height={28}
                  width={28}
                  title={business.owner.name}
                  src="/assets/google.svg"
                  className="rounded-full w-7 h-7 sm:w-8 sm:h-8 shrink-0"
                />
              </div>

              <div className="border rounded-2xl overflow-hidden p-3 sm:p-4 bg-gray-50">
                <div className="grid gap-2 sm:gap-3">
                  {business.azas.map((aza, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 sm:space-x-3"
                    >
                      <Image
                        alt={aza.account_name}
                        height={32}
                        width={32}
                        src="/assets/google.svg"
                        className="rounded-full w-6 h-6 sm:w-8 sm:h-8 shrink-0"
                      />
                      <div className="flex flex-col min-w-0 flex-1">
                        <h2 className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                          {aza.account_name}
                        </h2>
                        <p className="text-xs text-gray-600">
                          {aza.account_number}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href={`/businesses/${business.id}`}
                className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 hover:underline font-medium"
              >
                See more about{" "}
                <strong className="truncate block">
                  {business.name.length > 25
                    ? `${business.name.substring(0, 22)}...`
                    : business.name}
                </strong>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBusinessesPage;
