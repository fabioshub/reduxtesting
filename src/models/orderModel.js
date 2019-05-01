
export const convertWishToOrder = (wishlist, zuilid) => {

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


    today = mm + '/' + dd + '/' + yyyy + " @ " + time;

    return {
        "ZUIL_ID": zuilid.toString(),
        "wishlist_order": wishlist.map(element => {

            let result = {
                "item": `${element.item.sku[0]}`,
                "amount": `${element.amount}`
            }
            return result;
        }),
        "time": today
    }

}