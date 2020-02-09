import React, { Component } from 'react';
import States from './States';

class Checkout extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    isResidential: ''
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [name]: value
    })
  }

  render() {
    const { items } = this.props;
    const {
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      isResidential
    } = this.state;

    const done =
      firstName &&
      lastName &&
      email &&
      street &&
      city &&
      state;

    return (
      <div className="Checkout">
        <p>You are buying {items.length}</p>
        <form>
          <div className="field-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}/>
          </div>
          <div className="field-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}/>
          </div>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}/>
          </div>
          <div className="field-group">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              value={street}
              onChange={this.handleChange}/>
          </div>
          <div className="field-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={this.handleChange}/>
          </div>
          <div className="field-group">
            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              value={state}
              onChange={this.handleChange}
            >
              <option value="">-- Pick a State --</option>
              <States />
            </select>
          </div>
          <div className="field-group">
            <label htmlFor="isResidential">Is this a residential address?</label>
            <input
              type="checkbox"
              id="isResidential"
              name="isResidential"
              checked={isResidential}
              onChange={this.handleChange}/>
          </div>
        </form>
        <section>
          <h3>Confirm Shipping Info</h3>
          {done ? (
            <>
              <div>
                {firstName} {lastName}
              </div>
              <div>{street}</div>
              <div>
                {city}, {state}
              </div>
              <br />
              {email}
              <br />
              <div>
                {isResidential
                  ? 'residential'
                  : 'commercial'}
              </div>
            </>
          ) : (
            'Complete form....'
          )}
        </section>
      </div>
    );
  }
};

export default Checkout;
