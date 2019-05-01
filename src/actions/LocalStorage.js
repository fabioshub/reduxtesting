export const addItemToLocalStorageWishlist = (storageName, wishlistItem) => {
    if (localStorage.getItem(storageName)) {
        let wishlist = JSON.parse(localStorage.getItem(storageName))
        console.log(wishlist)
        for (let index = 0; index < wishlist.length; index++) {
            if (wishlist[index].item.sku[0] === wishlistItem.item.sku[0]) {
                console.log('already in here')
                wishlist[index].amount += 1;
                return localStorage.setItem(storageName, JSON.stringify(wishlist))
            }
        }
        wishlist.push(wishlistItem);
        localStorage.setItem(storageName, JSON.stringify(wishlist))
    } else {
        let wishlist = [];
        wishlist.push(wishlistItem);
        localStorage.setItem(storageName, JSON.stringify(wishlist))
    }
}

export const retrieveLocalStorageWishlist = (storageName) => {
    return localStorage.getItem(storageName) ? JSON.parse(localStorage.getItem(storageName)) : [];
}

export const removeItemToLocalStorageWishlist = (storageName, wishlistItem) => {
    let wishlist = JSON.parse(localStorage.getItem(storageName))
    console.log(wishlist)
    for (let index = 0; index < wishlist.length; index++) {
        if (wishlist[index].item.sku[0] === wishlistItem.item.sku[0]) {
            console.log('already in here')
            wishlist[index].amount += 1;
            return localStorage.setItem(storageName, JSON.stringify(wishlist))
        }
    }
    wishlist.push(wishlistItem);
    localStorage.setItem(storageName, JSON.stringify(wishlist))

}