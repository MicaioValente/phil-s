export interface CARD_PRODUCTS_PROPS extends CARD_PRODUCTS{
    onPress: (item: CARD_PRODUCTS) => void,
}

export interface CARD_PRODUCTS {
    id: string,
    name: string,
    link: LINK_CARD_PRODUCTS,
    logo: any,
    avaliable: boolean,
}
interface LINK_CARD_PRODUCTS {
    type: "EXTERNAL" | "INTERN",
    url:  string
}