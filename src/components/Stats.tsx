export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-accent mb-2">5+</h3>
            <p className="text-secondary">Years of Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-accent mb-2">100+</h3>
            <p className="text-secondary">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-accent mb-2">50+</h3>
            <p className="text-secondary">Happy Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-accent mb-2">10+</h3>
            <p className="text-secondary">Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
}
