import React from 'react'
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'
import './App.css'

const App: React.FC = () => {
    return (
        <div>
            <TaskInput />
            <TaskList />
        </div>
    )
}

export default App
