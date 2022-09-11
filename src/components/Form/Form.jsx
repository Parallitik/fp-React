import style from './Form.module.scss';

export const Form = ({ addNewMessage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewMessage({
      title: 'Your message',
      text: e.target.elements.text.value,
      author: e.target.elements.author.value,
    });
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          name="text"
          type="text"
          placeholder="Message"
        />
        <input
          className={style.input}
          name="author"
          type="text"
          placeholder="Author"
        />
        <button className={style.btn}>Send message</button>
      </form>
    </>
  );
};
