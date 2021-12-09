import {addMessage, changeMessageTextArea} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";





let mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage

    }
}


const DialogsContainer = connect(mapStateToProps,{changeMessageTextArea,addMessage})(Dialogs)
export default DialogsContainer