import Image from "next/image";

const clients = [
  { id: 1, src: "/pic1.jpg", alt: "Client 1" },
  { id: 2, src: "/pic2.jpg", alt: "Client 2" },
  { id: 3, src: "/pic3.jpg", alt: "Client 3" },
];

export default function OurClients() {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Clients
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex justify-center transform transition-all duration-300 hover:scale-105"
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <Image
                src={client.src}
                alt={client.alt}
                width={250}
                height={250}
                className="rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}