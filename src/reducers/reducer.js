import Axios from "axios";
import { ZUILID } from "../constants/otherConstant";
import { createWishtListItemLocalEndpoint, createWishtListItemEndpoint } from "../config/ptc-config";


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
    wishlistCounter: 0
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
        case 'OVERRIDEWISHLIST':
            return {
                ...state,
                wishlist: action.payload
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
        case 'SNACKBARTOGGLERP':
            return {
                ...state,
                snackbarOpenedP: action.payload
            }
        case 'SETWISHLISTAMOUNT':
            return {
                ...state,
                wishlistCounter: action.payload
            }
        case 'UPDATEWISHLISTAMOUNT':
            return {
                ...state,
                wishlistCounter: action.payload
            }
        default:
            return state;
    }
}

