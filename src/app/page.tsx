export default function Home() {
  return (
    <div>
      <h1 className="home-headline">Hi, I&apos;m Irakli Todua.</h1>
      <p className="home-bio">
        I write about the things I&apos;m building, learning, and thinking through — mostly
        software, sometimes life in between. This is my little corner of the internet, so
        it feels good to finally have a place to put my thoughts.
      </p>
      <div className="link-row">
        {/* Email */}
        <a href="mailto:itoodua@gmail.com" className="pill-link solid">
          Email
        </a>
        {/* Twitter */}
        <a href="#" className="pill-link outline">
          Twitter / X
        </a>
        {/* github */}
        <a href="#" className="pill-link outline">
          GitHub
        </a>
        {/* Linked */}
        <a href="#" className="pill-link outline">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
