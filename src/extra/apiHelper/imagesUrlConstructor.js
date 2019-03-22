import { endpoint, itemImageEndpoint } from "../../config/ptc-config";

export const imageUrlConstructor = (urlPart) => {
    return  itemImageEndpoint + urlPart
}

export const imageUrlConstructorProductGroups = (urlPart) => {
    return endpoint + urlPart
}