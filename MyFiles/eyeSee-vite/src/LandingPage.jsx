import { useState } from "react";
import styles from "./styles/LandingPage.module.scss";
import logo from "./assets/LOGO.png";

function LandingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim()) {
      setShowPopup(true);
      setFormData({ name: "", email: "" });
    }
  };

  const handleClosePopup = () => setShowPopup(false);

  return (
    <>
      <div className={styles.confetti}></div>
      <main className={styles.landingFun}>
        <div className={styles.funCard}>
          <div className={styles.emojiBubble}>👁️‍🗨️</div>
          <h1 className={styles.title}>
            Join our <span className="vipText">VIP</span> List
          </h1>
          <p className={styles.subtitle}>
            For fresh stories and app news.<br />
            <span className={styles.colorfulText}>📥 Straight to your inbox! 📥</span>
          </p>
          <form className={styles.subscribeForm} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your cool name 😎"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <button type="submit">
              <i className="fa-solid fa-bolt"></i> Count me in!
            </button>
          </form>
          <p className={styles.privacyNote}>✨ No spam, only friendly updates!</p>
        </div>

        <div className={styles.strongPoints}>
          <h2>
            Why You'll Love <img src={logo} alt="logo" className={styles.logo} />
          </h2>
          <div className={styles.pointsList}>
            <div className={styles.point}>
              <span className={styles.icon}>👫</span>
              <h4>Make New Friends</h4>
              <p>Connect with awesome people from around the world.</p>
            </div>
            <div className={styles.point}>
              <span className={styles.icon}>📸</span>
              <h4>Share Life’s Moments</h4>
              <p>Post photos, stories, and updates in a snap.</p>
            </div>
            <div className={styles.point}>
              <span className={styles.icon}>🎉</span>
              <h4>Join Fun Groups</h4>
              <p>Discover your tribe and enjoy shared interests together.</p>
            </div>
            <div className={styles.point}>
              <span className={styles.icon}>🔒</span>
              <h4>Privacy First</h4>
              <p>Your data stays yours, always safe and secure.</p>
            </div>
          </div>
        </div>

        <section className={styles.testimonialsSection}>
          <h2>What our users say</h2>
          <div className={styles.testimonials}>
            <blockquote>
              <p>“Made a new best friend here. Love the vibe! 💛”</p>
              <span>- Jane D.</span>
            </blockquote>
            <blockquote>
              <p>“Super easy to use, and I love the groups!”</p>
              <span>- Alex P.</span>
            </blockquote>
            <blockquote>
              <p>“Finally found friends who get my memes 😂 ”</p>
              <span>- David S.</span>
            </blockquote>
          </div>
        </section>
      </main>

      {showPopup && (
        <div className={`${styles.popup}`}>
          <div className={styles.popupContent}>
            <p>
              📬 We've sent you an email confirmation,<br />
              please check your inbox.
            </p>
            <button id="closePopup" onClick={handleClosePopup}>
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LandingPage;
