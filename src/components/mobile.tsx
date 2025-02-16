import { FaServer, FaCode, FaPaintBrush, FaDatabase, FaPenNib, FaBullhorn, FaVideo, FaWordpress, FaUsers } from "react-icons/fa";

export default function ServicesMobile() {
  const services = [
    { icon: <FaServer size={24} />, title: "SaaS", desc: "We create SaaS-based products and partner with driven individuals to provide software solutions!" },
    { icon: <FaCode size={24} />, title: "Website Development", desc: "Create fully responsive and customizable websites." },
    { icon: <FaPaintBrush size={24} />, title: "UI/UX Design", desc: "Create beautiful UI/UX designs for your dream website or application." },
    { icon: <FaDatabase size={24} />, title: "Migration Services", desc: "Migrate from your old server or database to a new one seamlessly." },
    { icon: <FaPenNib size={24} />, title: "Graphics Design", desc: "Create beautiful designs and posts for your business." },
    { icon: <FaBullhorn size={24} />, title: "Social Media & Digital Marketing", desc: "Manage social media handles and run ads for your business." },
    { icon: <FaVideo size={24} />, title: "Video Content Creation & Editing", desc: "Get top-quality video content and editing services." },
    { icon: <FaWordpress size={24} />, title: "WordPress & Shopify Solutions", desc: "Quick and easy website solutions for your business." },
    { icon: <FaUsers size={24} />, title: "Hiring & HR Solutions", desc: "Optimize recruitment and retention with our HR solutions." }
  ];

  return (
    <div className="bg-white text-black p-6">
      <h2 className="text-xl font-bold mb-4 text-center">Our Services</h2>
      <div className="flex flex-col space-y-6">
        {services.map((service, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="text-gray-800">{service.icon}</div>
            <div>
              <h3 className="font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
