import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <section
          id="about"
          className="h-screen flex items-center justify-center"
        >
          <p className="font-display text-cream text-3xl">About section</p>
        </section>

        <section
          id="projects"
          className="h-screen flex items-center justify-center"
        >
          <p className="font-display text-cream text-3xl">Projects section</p>
        </section>

        <section
          id="skills"
          className="h-screen flex items-center justify-center"
        >
          <p className="font-display text-cream text-3xl">Skills section</p>
        </section>

        <section
          id="contact"
          className="h-screen flex items-center justify-center"
        >
          <p className="font-display text-cream text-3xl">Contact section</p>
        </section>
      </main>
    </>
  );
}
