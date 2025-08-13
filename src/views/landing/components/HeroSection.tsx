import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="section-padding pb-0 px-0 relative bg-foreground overflow-hidden flex justify-center"
    >
      <Image src="/images/hero.png" alt="Hero" width={1920} height={1080} />
    </section>
  );
};

export default HeroSection;
