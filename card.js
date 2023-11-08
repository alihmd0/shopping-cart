export const creatCard = (mainTag, product) => {
    const cardEle = document.createElement('div');
    mainTag.appendChild(cardEle);
    const imageEle = creatImage(product);
    cardEle.appendChild(imageEle);
    const footerEle = creatInfo(product);
    cardEle.appendChild(footerEle);
    cardEle.classList.add('product');
}

const creatImage = (product) => {
    const imageEle = document.createElement('img')
    imageEle.src = product.image;
    return imageEle;
}

const creatInfo = (product) => {
    const footerEle = document.createElement('div');
    const titleEle = document.createElement('h2');
    const infoEle = document.createElement('div');
    const plusSpan = document.createElement('span');
    const priceSpan = document.createElement('span');

    titleEle.innerText = product.title.slice(0, 5);
    plusSpan.innerText = '+';
    priceSpan.innerText = product.price;

    footerEle.classList.add('product-footer');
    infoEle.classList.add('product-info')

    footerEle.appendChild(titleEle);
    footerEle.appendChild(infoEle);
    infoEle.appendChild(plusSpan);
    infoEle.appendChild(priceSpan);

    plusSpan.addEventListener('click', () => addToCart(product));

    return footerEle;
}

let products = [];

const addToCart = (data) => {
    products.push(data);

    const cartContainer = document.getElementById('card-list');

    const createProductCard = () => {
        cartContainer.innerHTML = '';
        products.forEach(product => cartContainer.innerHTML += `<div class='cart-product'>
        <img src='${product.image}'>
        <div>
            <p>${product.title.slice(0, 5)}</p>
            <span>${product.price}</span>
        </div>
        <div>
            <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
                <button>remove</button> 
            </div>
        </div>
    </div>`);
    }
    createProductCard()
}