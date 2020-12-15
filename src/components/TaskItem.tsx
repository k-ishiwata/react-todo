import React, { useState } from 'react'
import { Task } from '../Types'
import { useDispatch } from 'react-redux'
import { doneTask, deleteTask, updateTask } from '../modules/tasksModule'

type Props = {
    task: Task
}

const TaskItem: React.FC<Props> = ({ task }) => {
    const dispatch = useDispatch()

    const [editTitle, setEditTitle] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTitle(e.target.value)
    }

    const handleUpdate = () => {
        const newTask = {...task}
        newTask.title = editTitle
        
        dispatch(updateTask(newTask))
        setEditTitle('')
    }

    return (
        <li className={task.done ? 'done' : ''}>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    className="checkbox-input"
                    onClick={() => dispatch(doneTask(task))}
                    defaultChecked={task.done}
                />
            </label>
            <div onClick={() => setEditTitle(task.title)}>{
                editTitle !== ''
                    ? <input
                        type="text"
                        className="input"
                        defaultValue={editTitle}
                        onChange={handleInputChange}
                      />
                    : <span>{task.title}</span>
            }</div>
            {
                editTitle !== ''
                    ? <div className="btn-group">
                        <button className="btn" onClick={handleUpdate}>更新</button>
                        <button className="btn is-cancel" onClick={() => setEditTitle('')}>キャンセル</button>
                      </div>
                    : <div className="btn-group is-hover-show">
                        <button className="btn is-delete" onClick={() => dispatch(deleteTask(task))}>削除</button>
                      </div>
            }
        </li>
    )
}

export default TaskItem
