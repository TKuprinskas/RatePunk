import React, { useState, FormEvent } from 'react';
import styles from './emailForm.module.scss';

const EmailFrom = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // TODO: Handle form submission
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Refer friends and get rewards</h2>
      <div className={styles.textContainer}>
        <p>
          Refer your friends to us and earn hotel booking vouchers. We&apos;ll
          give you 1 coin for each friend that installs our extension. Minimum
          cash-out at 20 coins.
        </p>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.messageContainer}>
            {message && <p className={styles.message}>{message}</p>}
          </div>
          <div className={styles.inputContainer}>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder='Enter your email address'
              required
              style={{
                backgroundImage: `url('/assets/email.svg')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '20px center',
                paddingLeft: '60px',
              }}
            />
          </div>
          <button type='submit' className={styles.button}>
            Get Referral Link
          </button>
        </form>
      </div>
      <p className={styles.footer}>Limits on max rewards apply.</p>
    </div>
  );
};

export default EmailFrom;
