import Card from "../components/Main/Card";
import GithubApi from "../components/Main/GithubApi";

export default function Projects() {
  return (
    <>
      <div className="RepositoriApi-card">
        <h2 className="span style-divider">All my repositories on github</h2>
        <GithubApi />
        <a
          href="https://github.com/MrKalleP"
          target="_blank"
          className="btn btn-api-github"
          rel="noopener noreferrer"
        >
          Link to repository
        </a>
      </div>
      {<Card />}
    </>
  );
}

/*I am using GithubApi component to link my work from my github repositories and put my component card for showing my work*/
