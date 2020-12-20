import React from 'react'
import Message from './components/Message'
import axios from 'axios'
import './App.css'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            newMessage: '',
            newName: ''
        }
        //binding methods to prevent problems when calling them
        this.handleMessageChange = this.handleMessageChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.addMessage = this.addMessage.bind(this)

        console.log('constructor')
    }

    
    componentDidMount() {
        console.log('will mount')
        this.getMessages()
        
        
    }

    //getting the messages from backend and saving them in array
    async getMessages() {
        const url = 'http://localhost:8000/getArray'
        const response = await fetch(url)
        const data = await response.json()
        this.setState({messages: data})
    }

    //creating a message object and sending it to backend
    async addMessage() {
        
        const messageObject = {
            content: this.state.newMessage,
            username: this.state.newName,
            id: this.state.messages.length + 1
            
        }
        console.log(messageObject)
        axios.post('http://localhost:8000/getArray', messageObject)
            
    }

    //event handlers for the input fields
    handleMessageChange = (event) => {
        this.setState({newMessage: event.target.value})
    }
    
    handleNameChange = (event) => {
        this.setState({newName: event.target.value})
    }

    render() {
        console.log('render')
    
        
        
        
        return (
            <div>
                <h1>ScuffedLauta</h1>
                <div className='messageBoard'>
                    <form className='submit' onSubmit={this.addMessage}>
                        <label htmlFor='msg'>Message:</label><br/>
                        <input
                            type = 'text'
                            name = 'msg'
                            maxLength = '50' 
                            value={this.state.newMessage}
                            onChange={this.handleMessageChange}
                        /><br/>
                        <label htmlFor='author'>Username:</label><br/>
                        <input
                            type = 'text'
                            name = 'author'
                            maxLength = '25'
                            value={this.state.newName}
                            onChange={this.handleNameChange}
                        /><br/><br/>
                        <button type="submit">
                            Post
                        </button>
                    </form>
                
                    <ul className='messageBox'>
                        {this.state.messages.map(content => <Message key={content.id} message={content}/>)}
                    </ul>
                </div>
            </div>
        )
    }
}   

export default App