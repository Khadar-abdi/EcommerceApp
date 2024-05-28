import Loader from "@/components/Loader";
import Products from "../components/Products"
// import product from "../product.jsx"
import { useGetProductsQuery } from "../slices/productApiSlice";
import Message from "@/components/message";


const HomeScreen = () => {

    const { data: products, isLoading, error } = useGetProductsQuery();

 
  

    return (

        <>
            {isLoading ? (
                <div className="flex justify-center items-center  "><Loader /></div>
            ) : error ? (
                <Message variant='danger'>

                     {error?.error || error?.data?.message}
                </Message>
            ) : (
                <>
                    <div className="flex justify-center items-center   flex-col flex-wrap py-4 ">
                        <h2 className="pb-2 self-start text-slate-500 font-semibold  text-3xl"> Latest Products</h2>
                        <div className="grid  grid-cols-1 sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-center   gap-2 w-fit "   >
                            {products.map((product) => {

                                return <Products product={product} key={product._id} />

                            })}
                        </div>

                    </div>
                </>
            )}

        </>
    )
}

export default HomeScreen