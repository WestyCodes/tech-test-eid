import getProducts from '../../utils/getProducts';

export default async function Home() {
    const allProducts = await getProducts();

    return (
        <div>
            <div className="text-center p-10">
                <h1 className="font-bold text-4xl mb-4">All Dummy Products</h1>
            </div>

            <section
                id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
            >
                {allProducts.products.map((product) => {
                    const urlLink = `/${product.id}`;
                    return (
                        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                            <a href={urlLink}>
                                <img
                                    src={product.images[0]}
                                    alt="Product"
                                    className="h-80 w-72 object-cover rounded-t-xl"
                                />
                                <div className="px-4 py-3 w-72">
                                    <span className="text-gray-400 mr-3 uppercase text-xs">
                                        {product.brand}
                                    </span>
                                    <p className="text-lg font-bold text-black truncate block capitalize">
                                        {product.title}
                                    </p>
                                    <div className="flex items-center">
                                        <p className="text-lg text-black cursor-auto my-3">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}
