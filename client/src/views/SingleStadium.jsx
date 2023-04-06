import React, {useState} from 'react'
import Stadium from '../components/Stadium'
import ReviewForm from '../components/ReviewForm'
import Navbar from '../components/Navbar'

const SingleStadium = () => {

    const [stadium, setStadium] = useState([]);

    return (
        <div>
            <Navbar/>
            <div className="single-stadium">
                <Stadium stadium={stadium} setStadium={setStadium}/>
                <ReviewForm/>
            </div>
        </div>
    )
}

export default SingleStadium