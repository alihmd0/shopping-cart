export const getProduct = async () => {
    const response = await fetch("https://fakestoreapi.com/products").then(data => data.json())
    return response;
}