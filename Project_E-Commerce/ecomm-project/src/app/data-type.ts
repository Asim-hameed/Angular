export interface SignUp{
    name: string,
    password: string,
    email: string
}

export interface LogIn{
    password: string,
    email: string
}
export interface product{
    name: string,
    price: number,
    category:string,
    color:string,
    description: string,
    image: string,
    id: number,
    quantity: undefined | number
    productId:undefined | number
}
export interface cart{
    name: string,
    price: number,
    category:string,
    color:string,
    description: string,
    image: string,
    id: number,
    quantity: undefined | number,
    userId: number,
    productId:number
}
export interface priceSummary{
    price:number,
    discount: number,
    tax:number,
    delivery:number,
    total:number
}
export interface order{
    email: string,
    address: string,
    contact:string,
    totalPrice:number,
    userId:string,
    id:number|undefined
}
export interface orderToStripe{
    email:string,
    address:string,
    contact:string
}