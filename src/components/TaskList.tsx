import React from 'react'
import TaskItem from './TaskItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useSelector } from 'react-redux'
import { RootState } from '../rootReducer'

const TaskList: React.FC = () => {
    const { tasks } = useSelector((state: RootState) => state.tasks)

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
                        <TaskItem task={task} />
                    </CSSTransition>
                )) }
                </TransitionGroup>
            }
        </div>
    )
}

export default TaskList
