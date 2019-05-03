export const action1 = {
    type: "BASICTEXTACTION",
    payload: "DIT IS NIEUWE TEXT"
}


export const itemDataCreator = (data) => {
    return {
        type: "ITEMDATA",
        payload: data
    }
}

export const resetCurrentItemData = {
    type: "RESETITEMDATA",
    payload: null
}

export const maxPageSetter = (page) => {
    return {
        type: "MAXPAGENUMBER",
        payload: page
    }
}

export const categoryDataCreator = (data) => {
    return {
        type: "CATEGORYDATA",
        payload: data
    }
}

export const productGroupDataCreator = (data) => {
    return {
        type: "PRODUCTGROUPDATA",
        payload: data
    }
}

export const navLinkUpdater = (navItem) => {
    return {
        type: "NAVLINKUPDATER",
        payload: navItem
    }
}

export const setSearchTermData = (searchTermData) => {
    return {
        type: "SETSEARCHTERMDATA",
        payload: searchTermData
    }
}

export const setItemPage = (item) => {
    return {
        type: "SETITEMPAGE",
        payload: item
    }
}

export const onFocus = (onFocus) => {
    return {
        type: "SETONFOCUS",
        payload: onFocus
    }
}

export const searched = (bool) => {
    return {
        type: "SETSEARCHED",
        payload: bool
    }
}

export const currentSearch = (term) => {
    return {
        type: "CURRENTSEARCHTERM",
        payload: term
    }
}

export const snackbarToggler = (bool) => {
    return {
        type: 'SNACKBARTOGGLER',
        payload: bool
    }
}

export const snackbarTogglerP = (bool) => {
    return {
        type: 'SNACKBARTOGGLERP',
        payload: bool
    }
}


export const overrideWistlist = (item) => {
    return {
        type: 'OVERRIDEWISHLIST',
        payload: item
    }
}


export const onWishlist = (bool) => {
    return {
        type: 'ONWISHLIST',
        payload: bool
    }
}


export const resetState = () => {
    return {
        type: 'RESETSTATE',
    }
}

export const setWishListAmount = (amount) => {
    return {
        type: 'SETWISHLISTAMOUNT',
        payload: amount
    }
}

export const updateWishListAmount = (amount) => {
    return {
        type: 'UPDATEWISHLISTAMOUNT',
        payload: amount
    }
}