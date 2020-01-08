import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './Modal.css'

const Modal: React.FC = () => {
    const [isShow, setIsShow] = useState(false)

    return (
        <div style={{textAlign: 'center', paddingTop: '200px'}}>
            <button onClick={() => setIsShow(true)} className="btn is-primary">モーダル表示</button>
            <CSSTransition
                in={isShow}
                timeout={{
                    enter: 0,
                    exit: 500
                }}
                unmountOnExit
                classNames="modal-show"
            >
                <div className="modal" onClick={() => setIsShow(false)}>
                    <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-head">モーダル</div>
                        <div className="modal-body">
                            <p>アニメーションテスト</p>
                        </div>
                        <div className="modal-foot">
                            <button className="btn" onClick={() => setIsShow(false)}>閉じる</button>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Modal
