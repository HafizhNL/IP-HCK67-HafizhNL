import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function Card() {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const fetchProduct = async () => {
        setLoading("Loading...")
        setError("")
        try {
            const { data } = await axios({
                method: "GET",
                url: "http://localhost:3000/public/products"
            });
            console.log(data);
            setProduct(data);
        } catch (error) {
            console.log(error);
            setError(error)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    if (error) {
        return <h3>{error.message ?? error}</h3>;
    }

    if (loading) {
        return <h3>Loading...</h3>;
    }

    return (
        <>
            <div className="bg-sky-400">
                <div className="flex flex-wrap gap-8">
                    {product.map((item) => (
                        <div className="bg-slate-950 relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                                <img
                                    src={item.imgUrl}
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="text-white block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    {item.name}
                                </h4>
                                <h6 className="text-white block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                                    Rp.{item.price}
                                </h6>
                                <button className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <Link to={`/public/detail/${item.id}`}>Detail</Link>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default Card;