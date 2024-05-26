 
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const rating = ({text, value}) => {
    
  return (
    <div className='flex flex-row  gap-2 '>
        <div className='text-yellow-400 flex flex-row items-center  '>
        <span>
            {value >= 1 ? <FaStar  /> : value>=0.5 ? <FaStarHalfAlt/> :<FaRegStar/>}
        </span>
        <span>
            {value >= 2 ? <FaStar/> : value>=1.5 ? <FaStarHalfAlt/> :<FaRegStar/>}
        </span>
        <span>
            {value >= 3 ? <FaStar/> : value>=2.5 ? <FaStarHalfAlt/> :<FaRegStar/>}
        </span>
        <span>
            {value >= 4 ? <FaStar/> : value>=3.5 ? <FaStarHalfAlt/> :<FaRegStar/>}
        </span>
        <span>
            {value >= 5 ? <FaStar  /> : value>=4.5 ? <FaStarHalfAlt/> :<FaRegStar/>}
        </span>
        </div>
        <span className='text-slate-500 text-sm gap-1'>  {text && text}</span>

    </div>
  )
}

export default rating