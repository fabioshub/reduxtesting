export const mainreducer = (state, action) => {

    switch(action.type) {

        case 'BASICTEXTACTION':
            return {
                ...state,
                text: action.payload
            }
        case 'ITEMDATA':
            return Object.assign({}, state,  {itemdata: action.payload})
        case 'CURRENTPAGE':
            return {
                ...state, 
                currentpage: action.payload
            }
        case 'RESETITEMDATA':
            //this is needed for temp. deleting the item data so 'loading items' gets displayed'
            return {
                ...state,
                itemdata: action.payload
            }
        default:
            return state;
    }
}

