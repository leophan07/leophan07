export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Creating custom websites with modern technologies and best practices.",
      icon: "🖥️",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing beautiful and functional user interfaces and experiences.",
      icon: "🎨",
    },
    {
      title: "Mobile Development",
      description: "Building responsive and native mobile applications.",
      icon: "📱",
    },
    {
      title: "Digital Marketing",
      description: "Helping businesses grow their online presence and reach.",
      icon: "📈",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">My Services</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            I provide high-quality services that help businesses and individuals
            achieve their goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
