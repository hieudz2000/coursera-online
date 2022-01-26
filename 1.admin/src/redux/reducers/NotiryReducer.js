const NotifyReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTIFY':
            let tmpState = state
            tmpState.unshift(action.content)
            return [...tmpState]
        case 'CLEAR_NOTIFY':
            let tmp = state
            tmp.splice(action.index,1)
            return [...tmp]
        default:
            return state
    }
}
export default NotifyReducer