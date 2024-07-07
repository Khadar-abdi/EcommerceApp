import { Link, useNavigate } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import Message from '../components/message'
import { useDispatch, useSelector } from 'react-redux';
import {  Card, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { addToCart, removeFromCart } from '../slices/cartSlice';
 
const CartScreen = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.cart)

    const checkOutHandler=()=>{
        navigate('/login?redirect=/shipping')
    }


    const addToCartHandler= async (product, qty)=>[
     await  dispatch(addToCart({...product,qty}))
    ]
    const RemoveFromCartHander= async (id)=>[
       dispatch(removeFromCart(id))
    ]


    return (
        <Row>

            <Col md={8}>



                <h1 className=' py-1 text-slate-500 text-2xl font-semibold'> Shopping Cart</h1>
                {cartItems.length === 0 ? (

                    <Message className='text-gray-500 font-normal'>
                        Your Cart is empty <Link to='/' className='underline text-slete-600 font-semibold italic'>Go back</Link>
                    </Message>
                ) : (


                    <ListGroup variant='flush'>
                        {cartItems.map((item) => (
                            <ListGroup.Item key={item._id}>
                                <Row className='items-center  gap-0' md={8}>
                                    <Col md={2}>
                                        <img src={item.image} alt={item.name} className='py-2 -sm   rounded w-[50%] img-fluid ' />
                                    </Col>
                                    <Col md={4}>
                                        <h2 className='text-slate-500 font-normal ' style={{ fontFamily: 'Quicksand, sans-serif' }}> <Link to={`/product/${item._id}`}> {item.name}</Link></h2>
                                    </Col>
                                    <Col md={2}>
                                        <h2 className='text-slate-500 font-normal ' style={{ fontFamily: 'Quicksand, sans-serif' }}>  {item.price}</h2>


                                    </Col>
                                    <Col md={2}>

                                        <Form.Control className=" w-20"
                                            as='select'
                                            value={item.qty}
                                            onChange={(e) => {addToCartHandler(item,Number(e.target.value)) }}
                                        >
                                            {[...Array(item.countInStock).keys()].map((x) => (

                                                <option style={{ fontFamily: 'Quicksand, sans-serif' }} value={x + 1} key={x + 1}>

                                                    {x + 1}
                                                </option>

                                            ))}

                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <button onClick={()=>RemoveFromCartHander(item._id)} className='bg-slate-50 hover:bg-slate-100 p-2  rounded  border border-slate-300'> <FaTrash className='text-slate-600' /></button>
                                    </Col>


                                </Row>


                            </ListGroup.Item>

                        ))}
                    </ListGroup>


                )
                }

            </Col>
                <Col md={4} variant='flush'>
                <Card className='mt-14 p-2'> 
                    <ListGroup.Item>
                        <h2 className='items-center text-slate-600 text-2xl ' style={{ fontFamily: 'Quicksand, sans-serif' }}> Subtotal  {cartItems.reduce(( acc, item)=> acc+ item.qty,0  )} Items</h2>

                       <span className='text-slate-500 text-sm font-extrabold' style={{ fontFamily: 'Quicksand, sans-serif' }}> $ {cartItems.reduce((init, item)=> init+ item.qty* item.price,0).toFixed(2)}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <button onClick={checkOutHandler} className='bg-slate-800 px-2 text-slate-50 p-2 rounded my-3 disabled:bg-slate-500 ' disabled={cartItems.length === 0}>
                            Proceed to CheckOut
                        </button>
                    </ListGroup.Item>
                </Card>


                </Col>
        </Row>
    )
}

export default CartScreen