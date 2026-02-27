import styles from '../styles/Contact.module.css';
import Link from 'next/link';

export default function ContactHero() {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <h1>Let&apos;s build something extraordinary together.</h1>
        <p>
          Ready to scale your digital presence? Our team is standing by to help
          you map out your strategy and develop high-performance web solutions.
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}><span className="material-icons">email</span></div>
            <h3>Email us</h3>
            <p>
              <a href="mailto:atlaswebdev.pro@gmail.com">atlaswebdev.pro@gmail.com</a>
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}><span className="material-icons">schedule</span></div>
            <h3>Rapid Response</h3>
            <p>
              We typically respond to all project inquiries within 24-48 hours.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}><span className="material-icons">location_on</span></div>
            <h3>Global Reach</h3>
            <p>Headquartered in Chicago. Serving clients worldwide.</p>
          </div>
        </div>
      </div>
      <div className={styles.trusted}>
        <h2>Trusted by Industry Leaders</h2>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link href="/contact" className={styles.btn}>
          Go to Contact Form →
        </Link>
      </div>
    </section>
  );
}
