import {addMessage, changeMessageTextArea} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";





let mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage

    }
}

export default compose(connect(mapStateToProps,{changeMessageTextArea,addMessage}))(Dialogs)
