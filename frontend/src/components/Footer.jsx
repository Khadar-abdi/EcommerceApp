import {Row, Col, Container} from 'react-bootstrap'

const Footer = () => {

    const currentYear = new Date().getFullYear();
 
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3 '>
                    <p className=' text-slate-400 font-mono'> HamudShop&copy; ${currentYear} </p>
                </Col>
            </Row>
        </Container>

    </footer>
  )
}

export default Footer