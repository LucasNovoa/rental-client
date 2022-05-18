import Header from "../components/Header/Header";

import about3 from "../assets/images/about-us3.jpg";
import about4 from "../assets/images/about-us4.jpg";
import about5 from "../assets/images/about-us5.jpg";
import about6 from "../assets/images/about-us6.jpg";

import Footer from "../components/Footer/Footer";

import "../scss/About.scss";

function About() {
  return (
    <>
      <Header />
      <main className="About">
        <section className="About__Us">
          <article>
            <h1>Sobre Nosotros</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              adipisci eligendi saepe dolor maxime assumenda quod facere
              doloribus eveniet harum?
            </p>
          </article>
        </section>
        <section className="About__Text">
          <article>
            <h2>Como empezamos</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              quos, doloribus perspiciatis nemo ratione ipsum numquam tempora
              magnam in maiores rerum adipisci laudantium quam praesentium
              temporibus minima?
            </p>
          </article>
          <article>
            <h2>Nuestra historia</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              quos, doloribus perspiciatis nemo ratione ipsum numquam tempora
              magnam in maiores rerum adipisci laudantium quam praesentium
              temporibus minima?
            </p>
          </article>
        </section>
        <div className="About__Images">
          <div className="left">
            <img src={about3} alt="" />
          </div>
          <div className="right">
            <img src={about4} alt="" />
            <img src={about5} alt="" />
            <img src={about6} alt="" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export { About };
