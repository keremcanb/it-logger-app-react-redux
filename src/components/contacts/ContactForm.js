import { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, updateContact, clearCurrent, current } = contactContext;
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });
  const { name, email, phone, type } = contact;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const onChangeHandler = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h2 className="text-primary">{current ? 'Edit Contact' : 'Add Contact'}</h2>
      <input type="text" placeholder="Name" name="name" value={name} onChange={onChangeHandler} />
      <input type="email" placeholder="Email" name="email" value={email} onChange={onChangeHandler} />
      <input type="text" placeholder="Phone" name="phone" value={phone} onChange={onChangeHandler} />
      <h5>Contact Type</h5>
      <input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChangeHandler} />{' '}
      Personal{' '}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === 'professional'}
        onChange={onChangeHandler}
      />{' '}
      Professional
      <div>
        <input type="submit" value={current ? 'Update Contact' : 'Add Contact'} className="btn btn-primary btn-block" />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearCurrent()}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
