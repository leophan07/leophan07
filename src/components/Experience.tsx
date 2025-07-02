export default function Experience() {
  const experiences = [
    {
      period: "2020 - Present",
      role: "Senior Web Developer",
      company: "Tech Solutions Inc.",
      description:
        "Lead developer for enterprise web applications and client projects.",
    },
    {
      period: "2018 - 2020",
      role: "Frontend Developer",
      company: "Digital Agency",
      description:
        "Developed responsive websites and implemented UI/UX designs.",
    },
    {
      period: "2016 - 2018",
      role: "UI/UX Designer",
      company: "Creative Studio",
      description:
        "Created user interfaces and experiences for mobile and web applications.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Experience</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            My professional journey and career highlights.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-8 relative pl-8 border-l-2 border-accent"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-accent rounded-full"></div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <span className="text-accent font-semibold">{exp.period}</span>
                <h3 className="text-xl font-bold mt-2">{exp.role}</h3>
                <p className="text-gray-600 font-medium">{exp.company}</p>
                <p className="text-secondary mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
