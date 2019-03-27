const initialState = {
    currentpage: 1,
    onFocus: false,
    searchtermdata: []
};

export const mainreducer = (state = initialState, action) => {

    switch (action.type) {

        case 'BASICTEXTACTION':
            return {
                ...state,
                text: action.payload
            }
        case 'ITEMDATA':
            return Object.assign({}, state, { itemdata: action.payload })
        case 'RESETITEMDATA':
            //this is needed for temp. deleting the item data so 'loading items' gets displayed'
            return {
                ...state,
                itemdata: action.payload
            }
        case 'MAXPAGENUMBER':
            return {
                ...state,
                maxpagenumber: action.payload
            }
        case 'CATEGORYDATA':
            return {
                ...state,
                categorydata: action.payload
            }
        case 'PRODUCTGROUPDATA':
            return {
                ...state,
                productgroupdata: action.payload
            }
        case 'NAVLINKUPDATER':
            return {
                ...state,
                navlink: action.payload
            }
        case 'SETSEARCHTERMDATA':
            return {
                ...state,
                searchtermdata: action.payload
            }
        case 'SETITEMPAGE':
            return {
                ...state,
                item: action.payload
            }
        case 'SETONFOCUS':
            return {
                ...state,
                onFocus: action.payload
            }
        default:
            return state;
    }
}

