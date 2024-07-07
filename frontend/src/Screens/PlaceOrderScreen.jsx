
import CheckOutSteps from "../components/checkOutSteps";
import { toast } from 'react-toastify'
import Message from "../components/message";

import { useEffect } from "react"
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { useCreateOrderMutation } from '../slices/orderApiSlice';
import { clearCartItems } from "../slices/cartSlice";
import Loader from "../components/Loader";




const PlaceOrderScreen = () => {

    <CheckOutSteps step1 step2 step3 step4 />
 
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart)


    const [createOrder, {isLoading, error} ] = useCreateOrderMutation();

    useEffect(() => {
        if (!cart.shippingAddress.address) {
            navigate('/shipping')
        } else if (!cart.paymentMethod) {
            navigate('/payment')
        }

    }, [cart.shippingAddress.address, cart.paymentMethod, navigate])


    const dispatch = useDispatch();
    const placeOrderHandler = async () => {
      try {
        const res = await createOrder({
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        }).unwrap();
        dispatch(clearCartItems());
        navigate(`/order/${res._id}`);
      } catch (err) {
        toast.error(err);
      }
    };

    return (

        < >

            <CheckOutSteps step1 step2 step3 step4 />


            <Row >
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h1 className="font-semibold text-lg text-slate-800" style={{ fontFamily: 'Quicksand, sans-serif' }}>Delivery</h1>
                            <p className="text-slate-800 text-[16px]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                                <strong className="text-slate-700">Address: </strong>
                                {cart.shippingAddress.address}, {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h1 className="font-semibold text-lg text-slate-800" style={{ fontFamily: 'Quicksand, sans-serif' }}>Payment Method</h1>
                            <p className="text-slate-800 text-[16px]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                                <strong className="text-slate-700">Method: </strong>
                                {cart.paymentMethod}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h1 className="font-semibold text-lg text-slate-800" style={{ fontFamily: 'Quicksand, sans-serif' }}>Order Items</h1>
                            {cart.cartItems.length === 0 ? (
                                <Message> Your cart is empty</Message>
                            ) : (
                                <ListGroup variant='flush'>
                                    {cart.cartItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.image} alt={item.name} fluid rounded />
                                                </Col>
                                                <Col>
                                                    <Link className="underline" to={`/product/${item.product}`}>{item.name}</Link>
                                                </Col>
                                                <Col md={4} className=" text-slate-600 font-serif">
                                                    {item.qty} x ${item.price} = ${item.qty * item.price}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>



                    </ListGroup></Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h2 className="text-slate-900 font-semibold" style={{ fontFamily: 'Quicksand, sans-serif' }}>Order Summury</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row className="text-slate-600" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                                    <Col> Items: </Col>
                                    <Col> {cart.ItemPrice} </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row className="text-slate-600" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                                    <Col> Delivery: </Col>
                                    <Col> {cart.ItemDelivery} </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row className="text-slate-600" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                                    <Col> Tax: </Col>
                                    <Col> {cart.ItemTax} </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row className="text-slate-600" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                                    <Col> Grand price: </Col>
                                    <Col> {cart.totalPrice} </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {error && <Message variant='danger'> {error}</Message>}
                            </ListGroup.Item>


                            <ListGroup.Item>
                                <Button style={{ fontFamily: 'Quicksand, sans-serif' }} className='bg-slate-700 px-2 text-slate-100 p-2 rounded my-3 font-semibold disabled:bg-slate-300 hover:bg-slate-600   border-none '
                                    type='button'
                                    disabled={cart.cartItems.length === 0}
                                    onClick={placeOrderHandler}
                                >
                                    Place Order
                                </Button>
                                {isLoading && <Loader />}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PlaceOrderScreen