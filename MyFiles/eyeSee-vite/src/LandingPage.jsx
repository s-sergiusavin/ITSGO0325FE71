import styles from "./styles/LandingPage.module.scss";
import logo from "./assets/LOGO.png";
import background from "./assets/background.PNG";

function LandingPage() {
  return (
    <div className={styles.landingPage} style={{ backgroundImage: `url(${background})` }}>
      <header className={styles.header}>
        <img src={logo} alt="EyeSee Logo" className={styles.logo} />
        <nav className={styles.nav}>
          <a href="/login">Login</a>
          <a href="/feed">Feed</a>
          <a href="/profile">Profile</a>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.intro}>
          <h1>Welcome to EyeSee</h1>
          <p>Your place to connect, share, and explore.</p>
          <a href="/login" className={styles.ctaButton}>Get Started</a>
        </section>

        <section className={styles.features}>
          <div>
            <h2>💬 Connect</h2>
            <p>Stay in touch with friends, leave comments, and react to posts.</p>
          </div>
          <div>
            <h2>📸 Share</h2>
            <p>Post images, videos, and memories from your day-to-day life.</p>
          </div>
          <div>
            <h2>🌟 Discover</h2>
            <p>Explore what others are doing and stay inspired.</p>
          </div>
        </section>

        <section className={styles.testimonials}>
          <h2>What people are saying</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <p>"Love how simple and vibrant this platform is!"</p>
              <span>- Alexandra Predoiu</span>
            </div>
            <div className={styles.card}>
              <p>"Finally, a social app that feels like *me*. 💜"</p>
              <span>- Mihai</span>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} EyeSee Social. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
