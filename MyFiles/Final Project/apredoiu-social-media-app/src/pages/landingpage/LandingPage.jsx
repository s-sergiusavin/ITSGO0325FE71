import styles from './LandingPage.module.scss';
import logo from '../../assets/images/logo.png';
import { useState } from 'react';

const LandingPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('eyeSEE_subscriber', JSON.stringify(formData));
    setSubscribed(true);
    setFormData({ name: '', email: '' });
  };

  return (
    <main className={styles.landingFun}>
      <section className={styles.funCard}>
        <div className={styles.emojiBubble}>👁️‍🗨️</div>
        <h1>
          Join our <span>VIP</span> List
        </h1>
        <p className={styles.subtitle}>
          For fresh stories and app news.<br />
          <span className={styles.colorfulText}>📥 Straight to your inbox! 📥</span>
        </p>
        <form className={styles.subscribeForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your cool name 😎"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit">
            Count me in!
          </button>
        </form>

        {subscribed && (
          <p className={styles.successMessage}>
            🎉 Welcome aboard, <strong>{formData.name || 'friend'}</strong>! You're in the VIP loop now.
          </p>
        )}

        <p className={styles.privacyNote}>✨ No spam, only friendly updates!</p>
      </section>

      <section className={styles.strongPoints}>
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
            <h4>Share Life's Moments</h4>
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
      </section>

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
  );
};

export default LandingPage;
