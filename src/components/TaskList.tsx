import React from 'react'
import TaskItem from './TaskItem'
import { Task } from '../Types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

type Props = {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {

    const handleDone = (task: Task) => {
        setTasks(prev => prev.map(t =>
            t.id === task.id
                ? { ...task, done: !task.done }
                : t
        ))
    }

    const handleDelete = (task: Task) => {
        setTasks(prev => prev.filter(t =>
            t.id !== task.id
        ))
    }

    return (
        <div className="inner">
            {
                tasks.length <= 0 ? '登録されたTODOはありません。' :
                <TransitionGroup component="ul" className="task-list">
                { tasks.map(task => (
                    <CSSTransition
                        key={task.id}
                        timeout={{
                            enter: 300,
                            exit: 700
                        }}
                        classNames="fade"
                    >
                        <TaskItem
                            task={task}
                            handleDone={handleDone}
                            handleDelete={handleDelete}
                        />
                    </CSSTransition>
                )) }
                </TransitionGroup>
            }
        </div>
    )
}

export default TaskList
