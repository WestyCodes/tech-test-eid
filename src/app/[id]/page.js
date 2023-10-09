import getProductsByID from '../../../utils/getByID';

export default async function productByID({ params }) {
    const product = await getProductsByID(params.id);
    return (
        <div className="mx-auto grid grid-cols-1 justify-items-center justify-center my-20 h-screen">
            <div className="bg-white shadow-md rounded-xl duration-500 h-fit">
                <div className="flex justify-items-center justify-center my-10">
                    <img
                        src={product.images[0]}
                        alt="Product"
                        className="w-fit h-80 object-cover rounded-xl"
                    />
                </div>
                <div className="px-4 py-3 ">
                    <span className="text-gray-400 mr-3 uppercase text-xs">
                        {product.brand}
                    </span>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                        {product.title}
                    </p>
                    <p className="text-lg text-black cursor-auto my-3">
                        {product.description}
                    </p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">
                            £{product.price}
                        </p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">
                                £
                                {parseFloat(
                                    product.price /
                                        (1 - product.discountPercentage / 100)
                                ).toFixed(2)}
                            </p>
                        </del>
                    </div>
                </div>
            </div>
        </div>
    );
}
