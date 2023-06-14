import { useState, FormEvent, useEffect } from 'react';
import Image from 'next/image';
import styles from './emailForm.module.scss';
import { submitEmail } from '@/services/API';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [referalLink, setReferalLink] = useState<string>(
    'https://ratepunk.com/referral'
  );
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const handleCopy = (): void => {
    navigator.clipboard.writeText(referalLink);
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    if (email.trim() === '') {
      setErrorMessage('Please enter your email address.');
      setIsValid(false);
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setIsValid(false);
    } else {
      setIsValid(true);
      try {
        const data = await submitEmail(email);
        if (data.record) {
          setSuccessMessage('Your email is confirmed!');
          setIsSuccess(true);
        } else {
          setErrorMessage('Failed to confirm your email.');
          setIsSuccess(false);
        }
        setTimeout(() => {
          setEmail('');
          setErrorMessage('');
          setSuccessMessage('');
          setIsSuccess(false);
        }, 5000);
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (email.trim() === '') {
      setErrorMessage('');
      setIsValid(false);
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setIsValid(false);
    } else {
      setErrorMessage('');
      setIsValid(true);
    }
  }, [email]);

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
          <div className={styles.message}>
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
            {successMessage && (
              <div className={styles.success}>
                <Image
                  src='/assets/success.svg'
                  alt='check'
                  width={32}
                  height={32}
                />
                <div>{successMessage}</div>
              </div>
            )}
          </div>
          <div className={styles.inputContainer}>
            {isSuccess && (
              <div className={styles.successInput}>
                <input
                  type='text'
                  id='referalLink'
                  placeholder={referalLink}
                  disabled
                />
                <button type='button' onClick={handleCopy}>
                  {isMobile ? 'Copy URL' : 'Copy'}
                </button>
              </div>
            )}
            {!isSuccess && (
              <div className={styles.inputWrapper}>
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
                    backgroundColor: 'white',
                  }}
                />
                <button
                  type='submit'
                  className={styles.button}
                  disabled={!isValid}>
                  Get Referral Link
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
      <p className={styles.footer}>Limits on max rewards apply.</p>
    </div>
  );
};

export default EmailForm;
