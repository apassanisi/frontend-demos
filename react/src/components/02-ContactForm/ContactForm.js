import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const submit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div>
      <h1>02. Contact Form</h1>
      <form method="post" onSubmit={submit}>
        <div>
          <label htmlFor="name">Name </label>
          <input
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name} />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email} />
        </div>
        <div>
          <label htmlFor="message">Message </label>
          <textarea
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            id="message"
            name="message"
            value={formData.message}></textarea>
        </div>
        <button
          type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
