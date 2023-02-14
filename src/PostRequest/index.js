import {Component} from 'react'
import './index.css'

class PostRequest extends Component {

    state = {
        email: '',
        message: '',
        name: ''
    }

    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    onChangeName = (event) => {
        this.setState({name: event.target.value})
    }

    onChangeMessage = (event) => {
        this.setState({message: event.target.value})
    }

    onSubmit = async(event) => {
        event.preventDefault();
        const {email, message, name} = this.state
        const userDetails = {email, message, name}
        console.log(userDetails)
        const url = 'https://admin.srkprojects.com/web/api/client/v1/contact-us/';
        const options = {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(userDetails)
        }
        
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data)

        this.setState({email: '', name: '', message: ''})
    }



    render() {
        const {email, name, message} = this.state
        return (
            <div className='request-bg-container'>
                <div className='conatiner'>
                    <form className='form' onSubmit={this.onSubmit}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.onChangeEmail} value={email} placeholder="Email" />
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={this.onChangeName} value={name} placeholder="Name"/>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" onChange={this.onChangeMessage} placeholder="Message" value={message}></textarea>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PostRequest