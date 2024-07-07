import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../components/Loader"
import { useLoginMutation } from "../slices/usersApiSlice"
import { setCreditails } from "../slices/authslice"
import { toast } from "react-toastify"

import { Link, useLocation, useNavigate } from "react-router-dom"
import FormContainer from "../components/FormContainer"
import { Col, Form, FormControl, FormGroup, Row } from "react-bootstrap"



const LoginScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation()
  const { userInfo } = useSelector((state) => state.auth)
  const { search } = useLocation()
  const sp = new URLSearchParams(search)
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }

  }, [userInfo, redirect, navigate])



  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({email, password}).unwrap();
      dispatch(setCreditails({...res,}))
      navigate(redirect)
    } catch (error) {
      toast.error(error?.data?.message || error.error)

    }
  }
  return (
    <div className="p-4">

      <FormContainer  >
        <h1 className=" text-slate-500 font-bold text-3xl " style={{ fontFamily: 'Quicksand, sans-serif' }}> Sign In</h1>

        <Form onSubmit={submitHandler}>
          <FormGroup controlId="email" className="my-2">
            <Form.Label className="text-slate-500 font-semibold" style={{ fontFamily: 'Quicksand, sans-serif' }}> Email Address</Form.Label>
            <FormControl className="placeholder:opacity-50" type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}>

            </FormControl>

          </FormGroup>
          <FormGroup controlId="password" className="my-2">
            <Form.Label className="text-slate-500 font-semibold" style={{ fontFamily: 'Quicksand, sans-serif' }}> Password</Form.Label>
            <FormControl className="placeholder:opacity-50" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}>

            </FormControl>

          </FormGroup>

          <button type="submit" style={{ fontFamily: 'Quicksand, sans-serif' }} className='bg-slate-700 px-2 text-slate-100 p-2 rounded my-3 font-bold disabled:bg-slate-500  ' disabled={isLoading}>
             Sign In
          </button>
          {isLoading && <Loader/>}
        </Form>

        <Row className='py-1'>
          <Col>
            New customer? <Link to={redirect? `/register?/redirect=${redirect}`: '/register'} className="underline font-semibold">Register</Link>
          </Col>
        </Row>

      </FormContainer>
    </div>
  )
}

export default LoginScreen