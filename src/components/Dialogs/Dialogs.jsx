import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

function Dialogs(props) {



    let dialogs = props.dialogsPage.dialogsData.map(dialog => <DialogsItem path={dialog.id} userName={dialog.userName}/>)
    let messages = props.dialogsPage.messageData.map(message => <MessageItem text={message.messageText}/>)

    const onButtonClick = () => {
        props.addMessage()
    }
    const onTextChange = (e) => {

        props.changeMessageTextArea(e.target.value)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsContent}>
                {dialogs}
            </div>

            <div className={classes.messagesContent}>>
                <div className="messages">
                    {messages}
                </div>
                <div>
                    <textarea onChange={onTextChange} value={props.dialogsPage.textarea}
                              placeholder='Enter your message'></textarea>
                    <button onClick={onButtonClick}>ADD</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;


const DialogsItem = (props) => {

    let path = `/dialogs/${props.path}`
    return (
        <div>
            <NavLink to={path}>{props.userName}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {

    return (
        <div>{props.text}</div>
    )
}

