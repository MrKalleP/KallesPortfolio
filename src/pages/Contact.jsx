export default function Contact() {
  return (
    <>
      <h2 className="span style-divider">Contact me and explore my Github!</h2>
      <div className="contact-link">
        <div className="link-element-wrapper">
          <p className="Text-link-p-explanation">
            Press contact me to get there!
          </p>
          <a
            className="link-contact-a"
            href="https://www.linkedin.com/in/kalle-pettersson-b74724294 "
            rel="noopener noreferrer"
          >
            Contact me
          </a>

          <p className="Text-link-p">
            I hope you like what I do and see that I have the qualities you
            need. If it should happen that you want to get in touch with me, I
            have linked my Linkedin where you can send me a message.
          </p>
        </div>
        <div className="link-element-wrapper">
          <p className="Text-link-p-explanation">Press Github to get there!</p>
          <a
            className="link-contact-a"
            href="https://github.com/MrKalleP"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <p className="plink Text-link-p">
            if you want to see the latest I've done in front end developing, I'm
            working on a project that might be interesting to explore. You can
            check out my Github.
          </p>
        </div>
      </div>
    </>
  );
}

/*This page is made to be able to contact me through the link to my linkedin and a link to my github to see if I have done any new projects*/
