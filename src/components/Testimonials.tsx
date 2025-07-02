import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, Tech Corp",
      image: "/images/testimonial-1.jpg",
      text: "Working with Kristina was an absolute pleasure. Her attention to detail and creative solutions helped us achieve our goals.",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "/images/testimonial-2.jpg",
      text: "Kristina's expertise in web development and design transformed our online presence. Highly recommended!",
    },
    {
      name: "Michael Brown",
      role: "Startup Founder",
      image: "/images/testimonial-3.jpg",
      text: "Outstanding work! Kristina delivered exactly what we needed, on time and within budget.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Testimonials</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            What my clients say about working with me.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="60px"
                    className="rounded-full object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-secondary">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-secondary">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
