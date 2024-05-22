import image from '@/assets/images/image-profile.jpeg';
import Image from 'next/image';

const AboutUsView = () => {
  return (
    <main className="container mx-auto px-[6px] bg-white py-10">
      <div className="w-full lg:w-[900px] mx-auto">
        <h1 className="text-black text-2xl font-bold mb-10 text-center">
          Noble names is here to give people a relaxing safe experience with
          their family and loves ones
        </h1>

        <p className="text-black text-base font-normal mb-5">
          Noble names is a one-stop platform for all your rental needs.
          It&apos;s an eCommerce-based company that provides all kinds of
          available space, properties, smart transportation systems and other
          innovative services in an easy way from anywhere. With a wide range of
          products and services, Nagalay will help you with all your rental
          needs. From cars to heavy machinery and everything in between, we have
          it all. We are here to make your life easier and help you with all
          your rental needs.
        </p>

        <p className="text-black text-base font-normal mb-5">
          The system will provide a solution for the growing need for transport
          with their eCommerce-based service that will also provide people with
          renting services both online and physically. People can search for
          apartments, offices, travel areas, hotel booking, parking spaces or
          even searching for personal skill development in different areas
          (Business, Soft skills, Marketing, Design, Arts and Culture) right on
          one website.
        </p>

        <p className="text-black text-base font-normal mb-5">
          The company&apos;s goal is to make life easier and more efficient for
          those in need of space or property by providing them with all the
          required information about these things and a quick, easy way to rent
          whatever they may need. They also want to empower every person and
          organization under a roof to achieve more opportunities for growth and
          impact every corner of the world.
        </p>

        <p className="text-black text-base font-normal mb-5">
          Do you feel like you&apos;re spending your whole life looking for a
          place to rent, an office to rent, parking or a knowledge-sharing
          service? It&apos;s not just you - the world is changing rapidly and
          more and more people love renting rather than purchasing them.
        </p>

        <p className="text-black text-base font-normal mb-5">
          We want to make it easier for everyone to find the service that suits
          their needs where anyone can find information about all kinds of
          rental properties.
        </p>

        <h3 className="text-black text-xl font-bold text-center">
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
        </div>
      </div>
    </main>
  );
};

export default AboutUsView;
