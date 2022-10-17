import React, {Component, Fragment} from "react";
import Recaptcha from 'react-google-invisible-recaptcha';
import './Form.css';

export class Form extends Component {
    state = {
        firstname : '',
        lastName : '',
        messageSent: false
    }

    handleChange = input => (e) => {
        this.setState({[input]:e.target.value})
    }

    sendMessage = () => {
      this.recaptcha.execute();
    }

    onResolved = () => {
        this.setState({messageSent:true})
        console.log(this.state)
    }

    render() {
        return(
                <Fragment>
                    <div className="form-div">
                    <form className="form" title='contact Form'>
                    <label for="fname">First name:</label>
                    <input
                    type='text'
                    onChange = {this.handleChange('firstName')}
                    />
                      <label for="fname">Last name:</label>
                     <input
                     type='text'
                    onChange = {this.handleChange('lastName')}
                    />
                     <label for="fname">Text:</label>
                     <input className="text"
                     type='text'
                    onChange = {this.handleChange('lastName')}
                    />
                    <button onClick = {this.sendMessage}>
                     click
                    </button>
                    <Recaptcha 
                    ref = { ref => this.recaptcha = ref}
                    sitekey = '6Lfrn4ciAAAAAKx1k4hXuTxbLGQWOZKmp9A2ayct'
                    onResolved = {this.onResolved}
                    />
                    </form>
                    </div>
                    
                </Fragment>
        )
    }
}

export default Form;