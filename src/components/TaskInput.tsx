import React from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../modules/tasksModule'
import { useForm } from 'react-hook-form'

type FormData = {
    title: string
}

const TaskInput: React.FC = () => {
    const dispatch = useDispatch()

    const { register, handleSubmit, errors, reset } = useForm<FormData>()

    const handleOnSubmit = (data: FormData) => {
        dispatch(addTask(data.title))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)} className="input-form">
            <div className="inner">
                <input
                    type="text"
                    name="title"
                    className={`input ${errors.title && 'error'}`}
                    placeholder="TODOを入力してください。"
                    ref={register({
                        required: 'タイトルは必ず入力してください。',
                        minLength: { value: 3, message: 'タイトルは3文字以上で入力してください。'},
                        maxLength: { value: 200, message: 'タイトルは200文字以下で入力してください。'}
                    })}
                />
                <button className="btn is-primary">追加</button>
                {
                    errors.title &&
                    <span className="error-message">{ errors.title.message }</span>
                }
            </div>
        </form>
    )
}

export default TaskInput
