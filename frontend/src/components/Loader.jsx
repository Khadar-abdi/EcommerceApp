 
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner
    animation='grow'
    role='status'
    style={{
        width:'50px',
        height:'50px',
        margin: 'auto',
        display:'block',
        justifyContent:'center'
    }}
    />
  )
}

export default Loader
