import about from "../assets/aboutImg.webp";

export default function About() {
  return (
    <>
      <h2 className="span style-divider">A little bit about me</h2>
      <div className="About-container">
        <div className="grid-About-content">
          <div className="grid-About-content">
            <img src={about} alt="me sitting and smiling"></img>
          </div>
          <div>
            <h2 className="about-name">Kalle Pettersson</h2>
            <p className="About-me">
              I am a joy spreader who is 38 years old and see myself as a future
              developer, and i am a current student to be a front end developer.
              with a great interest in making beautiful and user-friendly
              projects. I am a father and a man with great interest in family.
              If I have some time to spare, I like to go to the gym or play a
              game on the computer with some friends, or laze on the sofa with a
              bag of sweets and a good movie. I have previous experience in
              warehouse jobs but not in IT, so i am excited to change career
              direction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/*This is just one page about me*/
