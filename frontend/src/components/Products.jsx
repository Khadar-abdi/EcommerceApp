 
import { Link } from "react-router-dom"
import Rating from "./rating"
 
const Products = ({product} ) => {

 
 
 
  return (
    <div className=' border-slate-50 border self-center rounded-lg shadow-md  bg-neutral-50    shadow-slate-200 hover:bg-slate-50  p-1 w-4/5 h-[97%] overflow-hidden  ' >
      <div className=" flex flex-col flex-wrap justify-center  ">
     
        <Link to={`/product/${product._id}`} className='p-1 '>
            <img src={product.image} alt={product.n} className='w-fit h-[60%] '  /> 
        </Link>
        <div className='my-1 p-2 flex flex-col  '>
            <Link to={`/product/${product._id}`}>
               

                <span className='text-slate-500 font-serif opacity-50 underline  '> {product.name} </span>
            
            </Link>

            <span className="flex flex-row items-center gap-1 text-slate-500 text-sm "> <Rating   value={product.rating} text={product.numberOFViews} /> reveiws</span>
            <span className=" text-slate-400   text-xl "style={{ fontFamily: 'Quicksand, sans-serif' }}>
              $ {product.price}
            </span>

        </div>
    </div>
    
    </div>
  )
}

export default Products