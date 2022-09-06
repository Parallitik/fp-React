import style from './Message.module.scss'

export const Message = ({text, addExclamationPoint}) => {
    const getExclamationMark = () => {
        addExclamationPoint(prevCount => prevCount + ' !')
    }

    return <div className= {style.messageWrp}>
        <p className={style.messageText}>text: {text}</p>
        <button className={style.exclamationMark} onClick={getExclamationMark}>add &#33;</button>
    </div>
}