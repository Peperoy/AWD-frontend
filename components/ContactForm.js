import { useState } from 'react';
import styles from '../styles/Contact.module.css';

const INTEREST_OPTIONS = [
  'Custom Web Development',
  'Digital Strategy',
  'UI/UX Design',
  'Maintenance & Support',
  'Other',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interestedIn: '',
    projectDescription: '',
    ndaRequired: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      interestedIn: '',
      projectDescription: '',
      ndaRequired: false,
    });
  };

  if (submitted) {
    return (
      <section className={styles.section}>
        <div className={styles.formSection}>
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              background: 'rgba(23, 84, 207, 0.1)',
              borderRadius: 8,
              border: '1px solid rgba(23, 84, 207, 0.25)',
            }}
          >
            <h2 style={{ marginBottom: '0.5rem', color: '#e8e8ed' }}>
              Inquiry sent!
            </h2>
            <p style={{ color: '#a0a0b0' }}>
              We&apos;ll respond within 24-48 hours. Thank you.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.formSection}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className={styles.input}
              placeholder="Your name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              className={styles.input}
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className={styles.input}
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="interestedIn">Interested In</label>
            <select
              id="interestedIn"
              name="interestedIn"
              className={styles.select}
              value={formData.interestedIn}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              {INTEREST_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="projectDescription">Project Description</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              className={styles.textarea}
              placeholder="Tell us about your project..."
              value={formData.projectDescription}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.checkboxGroup}>
            <input
              id="ndaRequired"
              name="ndaRequired"
              type="checkbox"
              checked={formData.ndaRequired}
              onChange={handleChange}
            />
            <label htmlFor="ndaRequired">
              I would like a signed NDA before sharing more details.
            </label>
          </div>
          <button type="submit" className={styles.btn}>
            Launch Inquiry
          </button>
          <p className={styles.footerNote}>
            By submitting, you agree to our Privacy Policy and Terms of Service.
          </p>
        </form>
      </div>
    </section>
  );
}
