import './contact.css';

const Contact = () => {

  return (
    <section id="contact">

      <h3>Quick message</h3>
      <div className="container contact_container">
        <form action="">
          <div className="contact_form">

            <div className="contact_form_item">
              <input
                type='text'
                name='name'
                id='name'
                placeholder=' '
                required
              />
              <label for="name">Name</label>
            </div>

            <div className='contact_form_item'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder=' '
                required
              />
              <label for="email">Email</label>
            </div>

            <div className="contact_form_item">
              <textarea type='text' id='textarea' className='text_area' placeholder=' '></textarea>
              <label for='textarea'>Your message here...</label>
            </div>
            
            <div className='contact_form_item'>
              <input
                type='submit'
                name='submit'
                id='btn'
              />
            </div>

          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact