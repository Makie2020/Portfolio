import React, { Component } from 'react';
import emailjs from "@emailjs/browser";
import './ContactForm.css';
import { FaExclamationTriangle, FaUserAlt, FaEnvelope } from "react-icons/fa";

class ContactForm extends Component {
  state = {
    user_name: {
      value: '',
      errorMessage: '',
    },
    user_email: {
      value: '',
      errorMessage: '',
    },
    message: {
      value: '',
      errorMessage: '',
    },
    response: '',
  };

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value,
      }
    }));
  }

  validate = () => {
    let validFlag = true;

    if (this.state.user_name.value.trim() === '') {
      this.setState(prevState => ({
        user_name: {
          value: prevState.user_name.value.trim(),
          errorMessage: 'This field is required.'
        }
      }));

      validFlag = false;
    } else if (!/^[a-zA-Z ]{2,30}$/.test(this.state.user_name.value.trim())) {
      this.setState(prevState => ({
        user_name: {
          ...prevState.user_name,
          errorMessage: 'Must be between 2 & 30 characters long.'
        }
      }));

      validFlag = false;
    } else {
      this.setState(prevState => ({
        user_name: {
          ...prevState.user_name,
          errorMessage: ''
        }
      }));
    }

    if (this.state.user_email.value.trim() === '') {
      this.setState(prevState => ({
        user_email: {
          value: prevState.user_email.value.trim(),
          errorMessage: 'This field is required.'
        }
      }));

      validFlag = false;
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.user_email.value.trim())) {
      this.setState(prevState => ({
        user_email: {
          ...prevState.user_email,
          errorMessage: 'Please enter a valid email.'
        }
      }));

      validFlag = false;
    } else {
      this.setState(prevState => ({
        user_email: {
          ...prevState.user_email,
          errorMessage: ''
        }
      }));
    }

    if (this.state.message.value.trim() === '') {
      this.setState(prevState => ({
        message: {
          value: prevState.message.value.trim(),
          errorMessage: 'This field is required.'
        }
      }));

      validFlag = false;
    } else {
      this.setState(prevState => ({
        message: {
          ...prevState.message,
          errorMessage: ''
        }
      }));
    }

    return validFlag;
  }

  send = async (e) => {
    e.preventDefault();

    if (this.validate()) {
      try {
        const { status } = await emailjs.send('service_7x65l92','template_w09bpi6', {
          from_name: this.state.user_name.value,
          reply_to: this.state.user_email.value,
          message: this.state.message.value,
        }, 'fafm9qrgYYgmiaPls');

        if (status === 200) {
          this.setState({ 
            user_name: {
              value: '',
            },
            user_email: {
              value: '',
            },
            message: {
              value: '',
            },
            response: `Thank you! I'll get back to you ASAP.`
          });

        } else {
          throw new Error();
        }
      } catch(e) {
        this.setState({ response: `Something went wrong. Please try again.`});
      }
    }
  }

  render() {
    return (
      <form id="ContactForm" onSubmit={this.send}>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">
                Name
              </label>
              <div className="control  has-icons-left has-icons-right">
                <input
                  className={`input ${this.state.user_name.errorMessage && 'is-danger'}`}
                  type="text"
                  placeholder="enter your name"
                  onChange={this.handleInput}
                  name="user_name"
                  value={this.state.user_name.value}
                  id="boxborder"
                />
                <span className="icon is-small is-left">
                  <FaUserAlt/>
                </span>
                {
                  this.state.user_name.errorMessage ? <span className="icon is-small is-right">
                    <FaExclamationTriangle/>
                  </span> : null
                }
              </div>
              <p className="help is-danger preserveWhiteSpace">
                {this.state.user_name.errorMessage || ' '}
              </p>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">
                Email
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className={`input ${this.state.user_email.errorMessage && 'is-danger'}`}
                  type="text"
                  placeholder="enter your email"
                  onChange={this.handleInput}
                  name="user_email"
                  value={this.state.user_email.value}
                  id="boxborder"
                />
                <span className="icon is-small is-left">
                  <FaEnvelope/>
                </span>
                {
                  this.state.user_email.errorMessage ? <span className="icon is-small is-right">
                    <FaExclamationTriangle/>
                  </span> : null
                }
              </div>
              <p className="help is-danger preserveWhiteSpace">
                {this.state.user_email.errorMessage || ' '}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="field">
            <label className="label">
              Message
            </label>
            <div className="control">
              <textarea
                className={`textarea ${this.state.message.errorMessage && 'is-danger' }`}
                type="text"
                placeholder="Your Message"
                onChange={this.handleInput}
                name="message"
                value={this.state.message.value}
                id="boxborder"
              />
            </div>
            <p className="help is-danger">
              {this.state.message.errorMessage || ' '}
            </p>
          </div>
        </div>
        <div className="buttonWrapper">
          <span className="responseMessage">{this.state.response}</span><br/>
          <button className="button is-link mt-2" onClick={this.send}>
            Send
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;