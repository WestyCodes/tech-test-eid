export default async function getProductsByID(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    return res.json();
}
