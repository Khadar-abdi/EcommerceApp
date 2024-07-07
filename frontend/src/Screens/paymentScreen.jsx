import { useEffect, useState } from "react"
import CheckOutSteps from "../components/checkOutSteps"
import FormContainer from "../components/FormContainer"
import {  Col, Form } from "react-bootstrap"
import { savePaymentMethod } from "../slices/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const paymentScreen = () => {

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const cart = useSelector((state)=> state.cart)
    const {shippingAddress} = cart

    useEffect(() => {
        if(!shippingAddress){
            navigate('/shipping')
        }
        
    }, [shippingAddress, navigate])

    const submitHandle = (e)=>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }
    return (
        <FormContainer  >
            <CheckOutSteps step1 step2 step3 />
            <h1 className=" text-slate-500 font-semibold text-2xl py-2 " style={{ fontFamily: 'Quicksand, sans-serif' }}> Payment</h1>

            <Form onSubmit={submitHandle}>
                <Form.Group>
                    <Form.Label className="text-slate-600"> Select Method</Form.Label>
                    <Col>
                        <Form.Check
                            className="checked:text-slate-800"
                            type="radio"
                            value="PayPal"
                            label='PayPal or Credit Card'
                            id="PayPal"
                            name="paymentMethod"
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)} >
                        </Form.Check> 
                    </Col>
                </Form.Group>
                <button type="submit" style={{ fontFamily: 'Quicksand, sans-serif' }} className='bg-slate-700 px-2 text-slate-100 p-2 rounded my-3 font-bold disabled:bg-slate-500  '  >
                       Continue
                    </button>
            </Form>
        </FormContainer>
    )
}

export default paymentScreen