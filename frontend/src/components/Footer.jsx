import {Row, Col, Container} from 'react-bootstrap'

const Footer = () => {

    const currentYear = new Date().getFullYear();
 
  return (
    <footer className=' '>
        
        <Container>
        <Row>
          <Col className='text-center py-3 mt-28'>
          <p className=' text-slate-400 font-mono'> HamudShop&copy; ${currentYear} </p>
          </Col>
        </Row>
      </Container>

    </footer>
  )
}

export default Footer