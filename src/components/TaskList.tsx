import React from 'react'
import TaskItem from './TaskItem'
import { Task } from '../Types'

type Props = {
    tasks: Task[]
}

const TaskList: React.FC<Props> = ({ tasks }) => {
    return (
        <div className="inner">
            {
                tasks.length <= 0 ? '登録されたTODOはありません。' :
                <ul className="task-list">
                { tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                    />
                )) }
                </ul>
            }
        </div>
    )
}

export default TaskList
