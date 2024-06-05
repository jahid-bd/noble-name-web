const AboutUsView = () => {
  return (
    <main className="container mx-auto px-[6px] bg-white py-10">
      <div className="w-full lg:w-[900px] mx-auto">
        <h1 className="text-black text-2xl font-bold mb-10 text-center">
          Welcome to Noble Names, your trusted companion on the journey of
          parenthood, dedicated to helping Muslim families around the world
          choose the perfect names for their children and navigate the sacred
          art of parenting. Our mission is to support you in shaping your
          child's identity from cradle and grounded in the profound traditions
          of Islam.
        </h1>

        <h3 className="text-lg font-semibold mb-1">Our Vision</h3>
        <p className="text-black text-base font-normal mb-5">
          At Noble Names, we understand that a name is more than just a word. In
          Islam, a name is a reflection of one’s essence, a beacon of one's
          identity, and a continuous source of inspiration throughout their
          life. It is a gift that carries the weight of tradition, the beauty of
          language, and the hope of a bright future. Our vision is to be the
          premier global resource for Muslim parents, providing guidance,
          knowledge, and inspiration in naming their children and raising them
          with values rooted in our rich heritage.
        </p>

        <h3 className="text-lg font-semibold mb-1">Our Mission</h3>
        <p className="text-black text-base font-normal mb-5">
          Our mission is twofold:
        </p>
        <ol className="ml-10 list-decimal">
          <li>
            <p className="text-black text-base font-normal mb-5">
              <span className="font-semibold">Empowerment Through Naming:</span>{' '}
              We aim to empower parents with the knowledge and significance of
              Islamic names, ensuring each name chosen resonates with meaning,
              virtue, and cultural pride. By understanding the importance of
              naming in Islam, parents can gift their children with a legacy
              that will inspire and guide them throughout their lives.
            </p>
          </li>

          <li>
            <p className="text-black text-base font-normal mb-5">
              <span className="font-semibold">Supportive Parenting:</span>{' '}
              Parenting is a journey filled with joy, challenges, and growth. We
              are committed to offering insightful articles, practical advice,
              and a community of support to help parents navigate this journey.
              Our content is created by Muslims, for Muslims, ensuring that
              every piece of advice and every story shared aligns with Islamic
              values and principles.
            </p>
          </li>
        </ol>

        <h3 className="text-lg font-semibold mb-1">Why Choose Noble Names?</h3>

        <ol className="ml-10 list-disc">
          <li>
            <p className="text-black text-base font-normal mb-5">
              <span className="font-semibold">Expert Guidance:</span> Our team
              comprises Islamic scholars, parenting experts, and seasoned
              writers who bring a wealth of knowledge and experience to our
              platform. We provide meticulously researched articles and
              resources to help you make informed decisions.
            </p>
          </li>

          <li>
            <p className="text-black text-base font-normal mb-5">
              <span className="font-semibold">Global Community:</span> We are a
              global company with a global vision. Our platform is designed to
              be a meeting place for Muslim parents from all corners of the
              world, fostering a sense of community and shared learning.
            </p>
          </li>

          <li>
            <p className="text-black text-base font-normal mb-5">
              <span className="font-semibold">
                Cultural and Religious Integrity:
              </span>{' '}
              Every name, every piece of advice, and every article is carefully
              curated to ensure it upholds the principles and values of Islam.
              We honour our traditions while embracing the diverse cultures
              within the Muslim world.
            </p>
          </li>
        </ol>

        <h3 className="text-lg font-semibold mb-1">Join Us on This Journey</h3>
        <p className="text-black text-base font-normal mb-5">
          At Noble Names, we are more than just a website; we are a community
          dedicated to nurturing the next generation of Muslims with love,
          knowledge, and faith. Join us on this sacred journey of naming and
          parenting, and together, let's create a future rooted in the noble
          values of Islam. Explore, learn, and connect with Noble Names – where
          every name tells a story, and every story shapes a future.
        </p>

        {/* <h3 className="text-black text-xl font-bold text-center">
          Our Board Of Directors
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 items-center">
          <div>
            <Image src={image} alt="image" className="w-full h-auto" />
            <p className="text-lg font-semibold text-black mt-2">
              Mr. Test User
            </p>
            <p>Founder & Chairman</p>
          </div>

          <div>
            <Image src={image} alt="image" className="w-full h-auto" />
            <p className="text-lg font-semibold text-black mt-2">
              Mr. Test User
            </p>
            <p>Co-Founder & Vice President</p>
          </div>

          <div>
            <Image src={image} alt="image" className="w-full h-auto" />
            <p className="text-lg font-semibold text-black mt-2">
              Mr. Test User
            </p>
            <p>Chief Executive Officer (CEO)</p>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default AboutUsView;
