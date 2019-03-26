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

export const setSearchTerm = (searchTerm) => {
    return {
        type: "SETSEARCHTERM",
        payload: searchTerm
    }
}

export const setItemPage = (item) => {
    return {
        type: "SETITEMPAGE",
        payload: item
    }
}