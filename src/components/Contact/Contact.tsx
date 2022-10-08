import * as React from 'react';
import InnerWrapper from '@components/InnerWrapper';
import styles from './Contact.module.scss';
import Overlay from '@components/Overlay';
import Loader from '@components/Loader';
import Alert from '@components/Alert';

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [form, setForm] = React.useState({
    state: '',
    message: '',
  });

  const handleChange = (element) => {
    setInputs((prev) => ({
      ...prev,
      [element.target.id]: element.target.value,
    }));
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();

    if (inputs.name && inputs.email && inputs.message) {
      setForm({ state: 'loading', message: 'Loading.' });

      try {
        const res = await fetch('api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });

        const { error } = await res.json();

        if (error) {
          setForm({
            state: 'error',
            message: error,
          });
          return;
        }

        setForm({
          state: 'success',
          message: 'Your message was sent successfully',
        });
        setInputs({
          name: '',
          email: '',
          message: '',
        });
      } catch (error) {
        setForm({
          state: 'error',
          message: 'Something went wrong',
        });
      }
    }
  };

  return (
    <section className="section">
      <InnerWrapper>
        <div className={styles.container}>
          <p>Please get in touch to talk about, well, anything really.</p>

          <div className={styles.formContainer}>
            {form.state === 'loading' ? (
              <Overlay>
                <Loader>Sending</Loader>
              </Overlay>
            ) : form.state === 'error' ? (
              <Alert type="error">
                There was a problem sending your message, please try again. If the problem perists please email
                info@jace.info.
              </Alert>
            ) : (
              form.state === 'success' && <Alert type="success">Your message was sent successfully</Alert>
            )}

            <form onSubmit={(event) => onSubmitForm(event)} className={styles.form}>
              <div className={styles.row}>
                <label htmlFor="name" className={styles.label}>
                  Your name (required)
                </label>
                <input
                  id="name"
                  type="text"
                  value={inputs.name}
                  className={styles.input}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.row}>
                <label htmlFor="email" className={styles.label}>
                  Your email address (required)
                </label>
                <input
                  id="email"
                  type="email"
                  className={styles.input}
                  value={inputs.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.row}>
                <label htmlFor="message" className={styles.label}>
                  Your message (required)
                </label>
                <textarea
                  id="message"
                  className={styles.input}
                  value={inputs.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              <button className={styles.btn}>Send your message</button>
            </form>
          </div>
        </div>
      </InnerWrapper>
    </section>
  );
}
