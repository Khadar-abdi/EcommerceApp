import FormContainer from "../components/FormContainer"
import { saveShippingAddress } from "../slices/cartSlice";
import { useState } from "react"
import { Form, FormControl, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckOutSteps from "../components/checkOutSteps";

const ShippingScreen = () => {
    const cart = useSelector((state)=> state.cart)

    const {shippingAddress} = cart

    const [address, setAddress] = useState(shippingAddress?.address|| '');
    const [city, setCity] = useState(shippingAddress?.city || '');
    const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode || '');
    const [country, setCountry] = useState(shippingAddress?.country || '');

    const dispatch = useDispatch();
    const navigate = useNavigate();

   

    const submitHandle = (e) => {
        e.preventDefault();

        dispatch(saveShippingAddress({address, city, postalCode, country}))
        navigate('/payment')


    }
    return (
        <FormContainer>
            <CheckOutSteps step1 step2 />
            <h1 className=" text-slate-500 font-semibold text-2xl py-2 " style={{ fontFamily: 'Quicksand, sans-serif' }}> Shipping</h1>

            <Form onSubmit={submitHandle}>
                <FormGroup controlId="address" className="my-2">
                    <Form.Label className="text-slate-500 font-semibold" style={{ fontFamily: 'Quicksand, sans-serif' }}> Address</Form.Label>
                    <FormControl className="placeholder:opacity-50" type="text" placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)}>

                    </FormControl>

                </FormGroup>
                <FormGroup controlId="city" className="my-2">
                    <Form.Label className="text-slate-500 font-semibold" style={{ fontFamily: 'Quicksand, sans-serif' }}> Enter city</Form.Label>
                    <FormControl className="placeholder:opacity-50" type="text" placeholder="city" value={city} onChange={(e) => setCity(e.target.value)}>

                    </FormControl>

                </FormGroup>
                <FormGroup controlId="postalCode" className="my-2">
                    <Form.Label className="text-slate-500 font-semibold" style={{ fontFamily: 'Quicksand, sans-serif' }}>  postal code</Form.Label>
                    <FormControl className="placeholder:opacity-50" type="text" placeholder="postalCode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)}>

                    </FormControl>

                </FormGroup>
                <FormGroup controlId="country" className="my-2">
                    <Form.Label className="text-slate-500 font-semibold" style={{ fontFamily: 'Quicksand, sans-serif' }}>  country</Form.Label>
                    <FormControl className="placeholder:opacity-50" type="text" placeholder="country" value={country} onChange={(e) => setCountry(e.target.value)}>

                    </FormControl>

                </FormGroup>
                <button type="submit" style={{ fontFamily: 'Quicksand, sans-serif' }} className='bg-slate-700 px-2 text-slate-100 p-2 rounded my-3 font-bold disabled:bg-slate-500  '  >
                       Continue
                    </button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen