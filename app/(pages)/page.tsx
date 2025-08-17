import Container from "@/globalComponents/container";
import HomeHero from "./components/hero";
import { auth0 } from "@/lib/auth0";

const Home = async () => {
  const session = await auth0.getSession();
  return (
    <>
      <HomeHero />
      <Container>Welcome to booking services</Container>
      {session && `Hello, ${session.user.name}`}
    </>
  );
};

export default Home;
