export default function Home() {
  return (
    <div>
      <h1 className="home-headline">Hi, I&apos;m Irakli Todua.</h1>
      <p className="home-bio">
        I write about the things I&apos;m building, learning, and thinking through — mostly
        software, sometimes life in between. This is my little corner of the internet.
      </p>
      <div className="link-row">
        <a href="mailto:irakli@example.com" className="pill-link solid">
          Email
        </a>
        <a href="#" className="pill-link outline">
          Twitter / X
        </a>
        <a href="#" className="pill-link outline">
          GitHub
        </a>
        <a href="#" className="pill-link outline">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
