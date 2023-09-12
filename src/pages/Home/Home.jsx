import Hero from "../../components/HomeComponents/Hero";
import Leader from "../../components/HomeComponents/Leader";
import Impact from "../../components/HomeComponents/Impact";
import HighLight from "../../components/HomeComponents/HighLight";
import "./style.css";

function Home() {
  return (
    <main>
      <Hero />
      <Leader />
      <Impact />
      <HighLight />
    </main>
  );
}

export default Home;
