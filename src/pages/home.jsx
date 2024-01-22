import Hero from '../components/HomePage/HeroSection/Hero';
import ServiceRange from '../components/HomePage/ServiceRange/ServiceRange';
import Services from '../components/HomePage/ServicesSection/Services';

const Home = () => {
  // update document title
  useEffect(() => {
    document.title = "HEXPRESS | No.1 Trusted Logistics Company";
  }, []);

  return (
    <>
      <Hero />
      <ServiceRange />
      <Services />
    </>
  )
}
export default Home