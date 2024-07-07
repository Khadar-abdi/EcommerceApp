
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import Rating from "../components/rating"; 
import { useState } from "react"; 
import { useDispatch } from "react-redux";
import { useGetProductDetailsQuery } from "../slices/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/message";
import { Button, Form } from "react-bootstrap";
import  {addToCart}  from "../slices/cartSlice";

const ProductScreen = () => {

    const { id: productId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [qty , setQty] = useState(1);


    const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);
    const addToCartHandler = ()=>{  
      
      console.log(dispatch(addToCart({...product, qty })))
      navigate('/cart')
         
    }
 
 
 
    return (
        
        <div className=" my-4 flex justify-center items-center flex-col ">
            <Link to='/' className=" self-start rounded-md bg-slate-700 text-gray-100  px-2 py-2   font-light  " style={{ fontFamily: 'Quicksand, sans-serif' }}>Back</Link>
            
            {isLoading ? (
      <div className="flex justify-center items-center  "><Loader /></div>
    ) : error ? (
        <Message variant='danger'>

        {error?.error || error?.data?.message}
   </Message>
    ) : (
      <>
                 
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
                <div className="flex flex-col py-0 justify-center h-{50%} rounded-md shadow-sm shadow-slate-50">
                    <div className="flex flex-row justify-between p-3   border ">
                        <span className="p-1 text-slate-600 text-lg  font-medium" style={{ fontFamily: 'Quicksand, sans-serif' }}>Price</span>
                        <span className="p-1 text-slate-600 text-lg font-medium">$ {product.price}</span>
                      
                    </div>
                    <div className="flex flex-row justify-between p-3   border ">
                        <span className="p-1 text-slate-600 text-lg  font-medium" style={{ fontFamily: 'Quicksand, sans-serif' }}>Status</span>
                        <span className="p-1 text-slate-600 text-lg font-medium">{product.countInStock > 0 ? "In Stock" : "Out Stock"}</span>
                    </div>
                        { product.countInStock > 0 && (
                    <div className="flex flex-row justify-between p-3   border ">

                             
                                
                                <span className=" text-slate-500 font-medium " style={{ fontFamily: 'Quicksand, sans-serif' }}> Quantity</span>
                                <Form.Control className=" w-20"
                                as='select'
                                value={qty}
                                onChange={(e)=> setQty(Number(e.target.value))}
                                >
                                    {[...Array(product.countInStock).keys()].map((x)=>(
                                    
                                   <option value={x+1} key={x+1}>
                                   
                                   {x+1}
                                   </option>
                                    
                                    ))}
                                    
                                </Form.Control>
                          
                        
                    </div>
                        ) }
                    <div className="flex flex-row p-3   border justify-end  ">
                        <Button  type="button" className="p-2 px-3 hover:bg-slate-600 border-none  text-slate-100 bg-slate-700 rounded-md " disabled={product.countInStock===0} onClick={addToCartHandler}>Add Cart</Button>
                    </div>
                </div>
            </div>
            </>
            )}
        </div>
    )
}

export default ProductScreen