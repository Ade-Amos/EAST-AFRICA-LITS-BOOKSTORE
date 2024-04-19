import React, { useState, useEffect } from "react";
import MarkDown from "react-markdown";
import readmePath from "../data/README.md";

const About = () => {
  const [markDownText, setMarkDownText] = useState("");
  useEffect(() => {
    fetch(readmePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        setMarkDownText(text);
      });

    document.title = "About || React BookStore App";
  }, []);

  return (
    <div class="card container border-0">
      <div class="card-body">
        <div className="top-content text-center">
          <h1 className="display-4">Hello, Interested People Of East Africa</h1>
          <p className="lead">
            This is a East Africa Lits bookstore cart application Helping to improve our literature skills.
            📚 Welcome, Literature Enthusiasts of East Africa! 📚

Introducing the East Africa Lits Bookstore Cart - your gateway to enhancing literary skills and exploring the vibrant world of literature.

Browse our extensive collection curated to celebrate the rich tapestry of East African culture, history, and creativity. From compelling fiction to insightful non-fiction, we offer a diverse array of titles that capture the essence of our region.

Immerse yourself in the captivating narratives penned by talented East African authors, each offering a unique perspective and a compelling voice. Whether you seek to delve into the complexities of our society, embark on thrilling adventures, or simply lose yourself in the beauty of poetic prose, our bookstore cart has something for everyone.

Discover hidden gems and timeless classics that showcase the depth and breadth of East African literature. Engage with thought-provoking themes, engage in lively discussions, and expand your horizons with every turn of the page.

Join us on this literary journey as we celebrate the power of storytelling and the beauty of language. Let's ignite our imaginations, foster a love for reading, and embrace the magic of literature together.

Happy reading!
            
          </p>
          <hr className="my-4" />
        </div>
        
      </div>
      <div class="card-footer">
        <h5 className="display-5 text-center">
          A East Africa Lits By &copy;{" "}
          <a
            href=""
            rel="noopener noreferrer"
            target="_blank"
          >
            exam
          </a>
        </h5>
      </div>
    </div>
  );
};

export default About;
