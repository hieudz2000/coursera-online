const addNotify = content => {
    return {
        type: 'ADD_NOTIFY',
        content
    }
}
const clearNotify = index =>{
    return {
        type: 'CLEAR_NOTIFY',
        index
    }
}
const exportDefault = {
    addNotify,
    clearNotify
}
export default exportDefault