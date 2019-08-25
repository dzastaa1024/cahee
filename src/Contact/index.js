import React, {Component} from 'react';
import "./style.scss";


class Blog extends Component  {

  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <section className="section-contact" id="contact">
        <h2 className='heading-primary center'>Contact</h2>
        <p className='paragraph paragraph--center'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <div className='row'>
          <div className='col'>
            <form className='form'> 
              <input className='form__field' name='name' type="text" placeholder='Your name...' value={this.state.name} onChange={this.handleChange}/>
              <input className='form__field' name='email' type="email" placeholder='Your email address...' value={this.state.email} onChange={this.handleChange}/>
              <input className='form__field' name='phone' type="phone" placeholder='Your phone number...' value={this.state.phone} onChange={this.handleChange}/>
              <textarea rows={7} className='form__field form__textarea' name='message' placeholder='Your message...' value={this.state.message} onChange={this.handleChange}></textarea>
            </form>
          </div>
          <div className='col'>
            <div>
              <p className='paragraph'>
                <strong>Name: </strong>
                {this.state.name}
              </p>
              <p className='paragraph'>
                <strong>E-mail: </strong>
                {this.state.email}
              </p>
              <p className='paragraph'>
                <strong>Phone: </strong>
                {this.state.phone}
              </p>
             
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;