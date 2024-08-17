import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const [feedback, setFeedback] = useState({
    message: '',
    type: '', // 'success' or 'error'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_251z94c', // Your service ID
      'template_p6400m3', // Your template ID
      {
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        message: formData.message,
      },
      'pDgbAvMDREm3pq_pg' // Your public key
    ).then((result) => {
        console.log(result.text);
        setFeedback({
          message: 'Message sent successfully!',
          type: 'success',
        });
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          message: '',
        }); // Clear form data
      }, (error) => {
        console.log(error.text);
        setFeedback({
          message: 'Failed to send message.',
          type: 'error',
        });
      });
  };

  return (
    <div style={styles.container}>
      {feedback.message && (
        <div style={feedback.type === 'success' ? styles.successBox : styles.errorBox}>
          <span style={styles.icon}>{feedback.type === 'success' ? '✔️' : '❌'}</span>
          {feedback.message}
        </div>
      )}
      <h2 style={styles.heading}>Contact Me</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Contact Number:
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
        </label>
        <button type="submit" style={styles.button}>
          Send Details
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    boxSizing: 'border-box',
  },
  heading: {
    color: '#fff',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '500px',
  },
  label: {
    marginBottom: '10px',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff',
  },
  input: {
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
  },
  textarea: {
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
    minHeight: '100px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    alignSelf: 'center',
  },
  successBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  errorBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#dc3545',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  icon: {
    marginRight: '10px',
  },
};

export default ContactPage;
