const CHANGE_MESSAGE_AREA = 'CHANGE-MESSAGE-AREA'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    messageData: [
        {messageText: 'text1', id: '2'},
        {messageText: 'text2', id: '2'},
        {messageText: 'text3', id: '2'},
        {messageText: 'text4', id: '2'}
    ],
    dialogsData: [
        {userName: "Alisa", id: "1"},
        {userName: "Lena", id: "2"},
        {userName: "Masha", id: "3"},
        {userName: "Alexa", id: "4"},
        {userName: "Sonya", id: "5"},
    ],
    textarea: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_MESSAGE_AREA:
            return {...state,textarea: action.newText}
        case ADD_MESSAGE:
            return {
                ...state,
                messageData: [...state.messageData,
                    {messageText: state.textarea,id: `${state.messageData.length + 1}` }],
                textarea: ''}

        default:
            return state
    }

}

export default dialogsReducer;

export const changeMessageTextArea = (newText) => ({type: CHANGE_MESSAGE_AREA, newText: newText})
export const addMessage = () => ({type: ADD_MESSAGE})