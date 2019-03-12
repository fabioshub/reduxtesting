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