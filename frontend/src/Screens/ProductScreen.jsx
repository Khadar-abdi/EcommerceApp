import { useParams } from "react-router-dom"
// import products from "@/product"
import { Link } from "react-router-dom";
import Rating from "@/components/rating";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductScreen = () => {

    const [product, setMyProduct] = useState({})

    const { id: productId } = useParams();
   


    
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get(`/api/products/${productId}` )
            setMyProduct(data);
            
            
        };

        fetchData();
    }, [productId]);
    console.log(product)
 
 
    return (
        <div className=" my-4 flex justify-center items-center flex-col">
            <Link to='/' className=" self-start rounded-md bg-slate-700 text-gray-100  px-2 py-2   font-light  " style={{ fontFamily: 'Quicksand, sans-serif' }}>Back</Link>
            <div className="grid   grid-cols-1 my-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3   gap-3 w-fit "   >
        
                <img src={product.image} alt={product.name} className=" lg:w-[100%] md:w-[80%] h-auto shadow-sm sm:w-[60%]  " />
                <div className="flex flex-col justify-center items-start gap-3  mx-4">

                    <span className="text-slate-400 font-light underline " style={{ fontFamily: 'Quicksand, sans-serif' }}> {product.name}</span>
                    <hr className=" text-slate-500 w-[250px]"  />
                    <div className=" flex flex-row justify-center items-center gap-1  "> 
                    <Rating   value={product.rating} text={product.numberOFViews} />
                    <span className="text-sm text-slate-400">reveiws</span>
                   </div>
                    <hr className=" text-slate-500 w-[250px]"  />
                   
                    <span className="text-slate-400 text-2xl" style={{ fontFamily: 'Quicksand, sans-serif' }}> price: ${product.price}</span>
                    <span className="p-1 text-slate-500 text-md font-normal"  style={{ fontFamily: 'Quicksand, sans-serif' }}>{product.description}</span>
                </div>
                <div className="flex flex-col py-4">
                    <div className="flex flex-row justify-between p-3 shadow-sm shadow-slate-50 rounded-xl border ">
                        <span className="p-1 text-slate-600 text-lg font-normal">Price</span>
                        <span className="p-1 text-slate-600 text-lg font-medium">$ {product.price}</span>
                      
                    </div>
                    <div className="flex flex-row justify-between p-3 shadow-sm shadow-slate-50 rounded-xl border ">
                        <span className="p-1 text-slate-600 text-lg font-normal">Status</span>
                        <span className="p-1 text-slate-600 text-lg font-medium">{product.countInStorck > 0 ? "In Stock" : "Out Stock"}</span>
                    </div>
                    <div className="flex flex-row p-3 shadow-sm shadow-slate-50 rounded-xl border justify-end  ">
                        <button type="button" className="p-2 px-3 text-slate-100 bg-slate-700 rounded-md " disabled={product.countInStorck===0}>Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen