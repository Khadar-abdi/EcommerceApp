import Products from "../components/Products"
// import product from "../product.jsx"
import  {useGetProductQuery}  from '../slices/productApiSlice'


const HomeScreen = () => {

    const { data: products, isLoading, error } = useGetProductQuery();

 

    return (

        <>
            {isLoading ? (
                <h2> Loading...</h2>
            ) : error ? (
                <div> {error?.error || error?.data?.message}</div>
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