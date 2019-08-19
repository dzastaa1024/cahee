import React, {Component} from  'react';
import Button from '../components/Button';
import "./style.scss";

class Subscribe extends Component  {
  state = {
    subscribe: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <section className="section-subscribe">
        <div className='row'>
          <div className='col'>
            <h2 className='heading-primary'>Subscribe To Us</h2>
            <p className='paragraph'>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <form className="form">
              <input
                className='form__field'
                name='subscribe'
                type='emial'
                placeholder='Your email adress...'
                value={this.state.subscribe}
                onChange={this.handleChange}
              />
              <Button text="Get free now"/>
            </form>
          </div>
          <div className='col'>
            <div className='picture' />
          </div>
        </div>
      </section>
    );
  }
}

export default Subscribe;