export const productList: Product[] = [
    {id:1, name: 'Lavanda', price: 10, description: 'Botella de 1 litro'},
    {id:2, name: 'Detergente', price: 5, description: 'Dura 120 lavados'},
    {id:3, name: 'Limpia vidrios', price: 7, description: 'Tus vidrios trasparentes'},
    {id:4, name: 'Quita grasa', price: 8},
    {id:5, name: 'Perfumina', price: 2, description: 'El olor a campo mas realista'},
]

export interface Product {
    id: number | string,
    name: string,
    price: number,
    description?: string
}