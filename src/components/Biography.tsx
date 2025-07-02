import Image from "next/image";

export default function Biography() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-display font-bold">Biography</h2>
            <p className="text-secondary">
              With 7+ years of experience, I have successfully delivered 10+
              large-scale projects, including two long-term ones (4 and 7
              years). I specialize in ReactJS, NextJS, TypeScript, RxDB, and
              Unit/Automation Testing, focusing on building high-performance,
              scalable applications with clean, maintainable code.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold">Name:</p>
                <p className="text-secondary">Leo Phan</p>
              </div>
              <div>
                <p className="font-bold">Email:</p>
                <p className="text-secondary">leophan2507@gmail.com</p>
              </div>
              <div>
                <p className="font-bold">From:</p>
                <p className="text-secondary">Viet Nam</p>
              </div>
              <div>
                <p className="font-bold">Phone:</p>
                <p className="text-secondary">+84 98 387 5782</p>
              </div>
            </div>
            <button className="button-primary">Download CV</button>
          </div>
          <div className="relative">
            <Image
              src="/images/avatar_hero.JPG"
              alt="Leo Phan"
              width={500}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
