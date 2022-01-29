import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
// import { getItem } from "../services/fetch";
import { products } from "../products/products";

import { useParams } from "react-router-dom";
import { Container } from "./ItemDetailContainer-Styled";
import SkeletonDetails from "./Skeletons/SkeletonDetails";

export default function ItemDetailContainer () {
    
    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        const getItem = new Promise((resolve, reject) => { 
            setLoading(true)
            setTimeout(() => {
                resolve(products.find( item => {
                    setLoading(false)
                    return item.id.toString() === id
                }))
            }, 2000)
        })
        getItem.then(item => setItem(item))
    },[id])

    return (
        <Container>
            {
                !loading ? <ItemDetail item={item} /> : <SkeletonDetails />
            }
        </Container>
    )
}