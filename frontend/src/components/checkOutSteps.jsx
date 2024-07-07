import { Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const checkOutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <Nav className=" flex flex-row justify-center py-2 font-light">
            <Nav.Item>
                {step1 ?
                    <LinkContainer to='/login'>
                        <Nav.Link className="text-slate-600 font-semibold hover:text-slate-900 " style={{ fontFamily: 'Quicksand, sans-serif' }}  > Sign In</Nav.Link>
                    </LinkContainer> :
                     
                        <Nav.Link disabled style={{ fontFamily: 'Quicksand, sans-serif' }} > Sign In</Nav.Link>
                    
                }
            </Nav.Item>
            <Nav.Item>
                {step2 ?
                    <LinkContainer to='/shipping'>
                        <Nav.Link className="text-slate-600 font-semibold hover:text-slate-900" style={{ fontFamily: 'Quicksand, sans-serif' }}> shipping</Nav.Link>
                    </LinkContainer> :
                 
                        <Nav.Link disabled className="text-slate-600  "> shipping</Nav.Link>
                 
                }
            </Nav.Item>
            <Nav.Item>
                {step3 ?
                    <LinkContainer to='/payment'>
                        <Nav.Link className="text-slate-600 font-semibold  hover:text-slate-900 " style={{ fontFamily: 'Quicksand, sans-serif' }}> Payment</Nav.Link>
                    </LinkContainer> :
                    
                        <Nav.Link disabled className="text-slate-600  "> Payment</Nav.Link>
                     
                }
            </Nav.Item>
            <Nav.Item>
                {step4 ?
                    <LinkContainer to='/placeoder'>
                        <Nav.Link className="text-slate-600 font-semibold hover:text-slate-900" style={{ fontFamily: 'Quicksand, sans-serif' }}> Place Order</Nav.Link>
                    </LinkContainer> :
                
                        <Nav.Link disabled className="text-slate-600  ">Place Order</Nav.Link>
                    
                }
            </Nav.Item>
        </Nav>
    )
}

export default checkOutSteps