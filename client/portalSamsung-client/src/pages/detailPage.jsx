import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailPublic() {
    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const { ProductId } = useParams();


    const fetchDetail = async () => {
        setLoading("Loading...")
        setError("")

        try {
            const { data } = await axios({
                method: "GET",
                url: "http://localhost:3000/public/products/" + ProductId
            });
            console.log(data.data);
            setDetail(data.data);
        } catch (error) {
            console.log(error);
            setError(error)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchDetail();
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
                <article className="text-wrap text-2xl">
                    <img
                        src={detail.imgUrl}
                    />
                    <h1>Name: {detail.name}</h1>
                    <h1>Memory: {detail.memory}</h1>
                    <h1>Storage: {detail.storage}</h1>
                    <h1>Battery Capacity: {detail.batteryCapacity}</h1>
                    <text>Description: {detail.description}</text>
                </article>
            </div>
        </>
    )

}

export default DetailPublic;