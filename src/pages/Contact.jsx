import { useState } from 'react';

export default function Contact() {
  const [btnText, setBtnText] = useState('TRANSMIT_DATA');
  const [btnState, setBtnState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject') || 'Message from Portfolio';
    const message = formData.get('message');

    const bodyText = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:satyamchaturvedibbk@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

    window.location.href = mailtoLink;

    setBtnText('TRANSMISSION_COMPLETE');
    setBtnState('success');

    setTimeout(() => {
      setBtnText('TRANSMIT_DATA');
      setBtnState('idle');
      e.target.reset();
    }, 3000);
  };

  return (
    <div className="container">
      <div className="contact-section">
        <div className="contact-header">
          <h1>CONNECT_USER</h1>
          <p className="contact-meta">LOCATION: 127.0.0.1 // PORT: 8080</p>
          <p className="contact-meta" style={{ marginTop: '8px' }}>
            EMAIL: <a href="mailto:satyamchaturvedibbk@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>satyamchaturvedibbk@gmail.com</a>
          </p>
          <div className="contact-status">
            <div className="status-item">
              <span className="status-value">98.4%</span>
              <span className="status-label">Signal</span>
            </div>
            <div className="status-item">
              <span className="status-value">12MS</span>
              <span className="status-label">Latency</span>
            </div>
          </div>
          <div className="contact-logs">
            <p>&gt; KERNEL: SECURE_SOCKET_OPEN</p>
            <p>&gt; HANDSHAKE: COMPLETED</p>
            <p>&gt; ENCRYPTION: AES-256_ACTIVE</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">IDENTIFICATION</label>
            <input type="text" id="userName" name="name" placeholder="Enter your name..." required />
          </div>
          <div className="form-group">
            <label htmlFor="userEmail">COMM_CHANNEL</label>
            <input type="email" id="userEmail" name="email" placeholder="Enter your email..." required />
          </div>
          <div className="form-group">
            <label htmlFor="userSubject">SUBJECT_LINE</label>
            <input type="text" id="userSubject" name="subject" placeholder="Subject of transmission..." />
          </div>
          <div className="form-group">
            <label htmlFor="userMessage">DATA_PACKET</label>
            <textarea id="userMessage" name="message" placeholder="Enter your message..." required></textarea>
          </div>
          <button 
            type="submit" 
            className="form-submit" 
            disabled={btnState === 'success'}
            style={{
              background: btnState === 'success' ? 'var(--surface-container-highest)' : '',
              color: btnState === 'success' ? 'var(--primary)' : ''
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              {btnState === 'success' ? 'check_circle' : 'send'}
            </span>
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
}
