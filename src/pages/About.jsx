import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>About | Kenpalt Kenya</title>
        <meta
          name="description"
          content="Learn about Kenpalt Kenya security solutions company."
        />
      </Helmet>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">About Us</h1>

        <p className="text-gray-300 leading-8 text-lg">
          Kenpalt Kenya is a trusted provider of modern security systems,
          surveillance solutions, access control, and alarm systems. We help
          businesses and homeowners stay protected with cutting-edge technology
          and professional installation services.
        </p>
      </section>
    </>
  );
}

export default About;
