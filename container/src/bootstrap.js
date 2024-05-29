import { mount as productMount } from 'products/ProductIndex'
import { mount as cartMount } from  'carts/CartIndex'
const productEl = document.querySelector('#product')
const cartEl = document.querySelector('#cart')

productMount(productEl)
cartMount(cartEl)

console.log('container')
