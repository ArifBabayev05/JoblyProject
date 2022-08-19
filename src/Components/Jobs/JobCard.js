import React from 'react'
import { Link } from "react-router-dom";


function JobCard(props) {
    // const background = props.product.companyImage;
  return (
    <div className='border-2 mb-4 aa rounded overflow-hidden container'>

         <Link id='cards'  to={`/job/${props.product.id}`} style={{ textDecoration: 'none' }}>
         <div 
            style={{
                        'background': `#ae99ff`, "height":'90px',
                    }}
                    className="w-100  myCard d-flex ">
                        <img src={props.product.companyImage}/>
                        <h3>{props.product.name}</h3>

                        <div className='deadline'>
                            <p>{props.product.Deadline}</p>
                        </div>
        </div>
        </Link>

    </div>
  )
}

export default JobCard