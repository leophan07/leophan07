import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Website",
      category: "Web Development",
      image: "/images/portfolio-1.jpg",
    },
    {
      title: "Mobile App UI",
      category: "UI/UX Design",
      image: "/images/portfolio-2.jpg",
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "/images/portfolio-3.jpg",
    },
    {
      title: "Marketing Campaign",
      category: "Digital Marketing",
      image: "/images/portfolio-4.jpg",
    },
    {
      title: "Web Application",
      category: "Development",
      image: "/images/portfolio-5.jpg",
    },
    {
      title: "Mobile App Design",
      category: "UI/UX Design",
      image: "/images/portfolio-6.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">My Portfolio</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Showcasing some of my best work from various projects and clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
