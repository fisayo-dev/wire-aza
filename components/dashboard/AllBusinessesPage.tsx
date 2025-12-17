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
    <div className="py-4 lg:max-w-3xl md:max-w-2xl mx-auto">
      <div className="grid grid-cols-1 gap-4">
        {/* Grid card */}
        {sampleBusinesses.map((business, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl overflow-hidden border bg-white shadow-md"
          >
            <div className="grid gap-2">
              <div className="flex items-center space-x-2">
                <Image
                  alt={business.name}
                  height={40}
                  width={40}
                  src="/assets/google.svg"
                />
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold">{business.name}</h2>
                  <p className="text-sm">
                    {business.description.length > 30
                      ? `${business.description.substring(0, 27)}...`
                      : business.description}
                  </p>
                </div>
              </div>
              <div className="border rounded-2xl overflow-hidden p-4">
                <div className="grid gap-2 my-2">
                  {business.azas.map((aza, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Image
                        alt={aza.account_name}
                        height={40}
                        width={40}
                        src="/assets/google.svg"
                      />
                      <div className="flex flex-col">
                        <h2 className="text font-bold">{aza.account_name}</h2>
                        <p className="text-sm">{aza.account_number}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href={`/business/${business.id}`}
                className="text-sm hover:underline"
              >
                See more about{" "}
                <strong>
                  {business.name.length > 30
                    ? `${business.name.substring(0, 27)}...`
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
