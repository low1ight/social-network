import {addMessage, changeMessageTextArea} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";





let mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage

    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,   {changeMessageTextArea,addMessage}))(Dialogs)
