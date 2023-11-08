import { getProduct } from "./API.js";
import { creatCard } from "./card.js";

const productsContainer = document.getElementById('container');

const showProducts = async () => {
    const products = await getProduct()
    products.forEach(data => creatCard(productsContainer, data));
}

document.addEventListener('DOMContentLoaded', showProducts);
