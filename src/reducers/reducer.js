import Axios from "axios";
import { ZUILID } from "../constants/otherConstant";
import { createWishtListItemLocalEndpoint } from "../config/ptc-config";


export const initialState = {
    currentpage: 1,
    onFocus: false,
    currentSearchTerm: '',
    snackbarOpened: false,
    snackbarOpenedP: false,
    searchtermdata: [
        {
            category: "color",
            displayCategory: "color",
            items: ["Blue", "Black", "Brown", "Bronze", "green", "red", "purple"]
        },
        {
            category: "collection",
            displayCategory: "collection",
            items: ["Selena Blue", "Peony Flower", "Canabas Grey", "Walton Iron", "Simple Metal", "Corby Nickel", "Stockholm Black"]
        },
    ],
    wishlist: [],
    onWishlist: false,
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
        case 'SETSEARCHED':
            return {
                ...state,
                searched: action.payload
            }
        case 'CURRENTSEARCHTERM':
            return {
                ...state,
                currentSearchTerm: action.payload
            }
        case 'ADDTOWISHLIST':
            console.log('add to wishlist')
            for (let index = 0; index < state.wishlist.length; index++) {
                if (state.wishlist[index].item.sku[0] === action.payload.item.sku[0]) {
                    // console.log('alreadyin there')
                    let updateAmount = 1;
                    state.wishlist[index].amount += updateAmount;
                    // const copy = state.wishlist[index]
                    // copy.amount = updateAmount;
                    // console.log(copy)
                    const wishlistItem = {
                        ...state,
                        wishlist: [...state.wishlist]
                    }
                    const params = { wishlist_item: JSON.stringify(wishlistItem.wishlist), wishlist_id: ZUILID }
                    Axios.post(createWishtListItemLocalEndpoint, params).then(res => { console.log(res) }).catch((error) => console.log(error))
                    return wishlistItem;
                }
            }
            const wishlistItem = {
                ...state,
                wishlist: [...state.wishlist, action.payload]
            }
            const params = { wishlist_item: JSON.stringify(wishlistItem.wishlist), wishlist_id: ZUILID }
            Axios.post(createWishtListItemLocalEndpoint, params).then(res => { console.log(res) }).catch((error) => console.log(error))
            return wishlistItem;
        case 'REMOVEFROMWISHLIST':
            console.log('remove from wishlist')
            const wishlistItemRemoved = {
                ...state,
                wishlist: state.wishlist.filter(item => item !== action.payload)
            }
            const paramsRemoved = { wishlist_item: JSON.stringify(wishlistItemRemoved.wishlist), wishlist_id: ZUILID }
            Axios.post(createWishtListItemLocalEndpoint, paramsRemoved).then(res => { console.log(res) }).catch((error) => console.log(error))
            return wishlistItemRemoved;
        case 'OVERRIDEWISHLIST':
            console.log('override wishlist')
            return {
                ...state,
                wishlist: action.payload
            }
        case 'REMOVEWISHLIST':
            console.log('remove wishlist')
            const removeWishlist = { wishlist_item: JSON.stringify([]), wishlist_id: ZUILID }
            Axios.post(createWishtListItemLocalEndpoint, removeWishlist).then(res => { console.log(res) }).catch((error) => console.log(error))
            return {
                ...state,
                wishlist: []
            }
        case 'ONWISHLIST':
            return {
                ...state,
                onWishlist: action.payload
            }
        case 'RESETSTATE':
            return {
                currentpage: 1,
                onFocus: false,
                currentSearchTerm: '',
                snackbarOpened: false,
                snackbarOpenedP: false,
                searchtermdata: [
                    {
                        category: "color",
                        displayCategory: "color",
                        items: ["Blue", "Black", "Brown", "Bronze", "green", "red", "purple"]
                    },
                    {
                        category: "collection",
                        displayCategory: "collection",
                        items: ["Selena Blue", "Peony Flower", "Canabas Grey", "Walton Iron", "Simple Metal", "Corby Nickel", "Stockholm Black"]
                    },
                ],
                wishlist: [],
                onWishlist: false,
            };
        case 'SNACKBARTOGGLER':
            return {
                ...state,
                snackbarOpened: action.payload
            }
        default:
            return state;
    }
}

