import { ChatEngine } from 'react-chat-engine'
import './App.css'

import React from 'react'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='6f4580e0-1e84-458f-9cb0-a3d392d690e9'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()
         }
		/>
            
        
    )
}

export default App
