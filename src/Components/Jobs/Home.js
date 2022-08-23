import React, { useState , useEffect } from 'react'
import axios from 'axios'
// import '../../Assets/Styles/Job/Job.css'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import '../../Assets/Styles/Job/Home.css'


//Job Details
function Home() {
  const {id} = useParams()
  const url = `http://localhost:3000/users/${id}`
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false
  })

  let content = null

  useEffect(()=>{
    setProduct({
      loading:true,
      data: null,
      error: false
      
    })

    axios.get(url)
    .then(response =>{
        setProduct({
          loading:false,
          data: response.data,
          error: false
        })

        .catch(() =>{
          setProduct({
            loading:false,
            data: null,
            error: true
          })
        })
    })
  }, [url])

  if(product.loading){
    content = <Loader/>
  }

  if(product.error){
    content = <p>Xəta baş verdi, yenidən yoxlayın.</p>
  }
  
  if(product.data){
   content =
    <div className='card'>
      <div className='card-header'>
        <div className='d-flex'> 
        <div className='headerImage me-4 mb-3'>
          <img src= {product.data.companyImage} alt='asf'/>
        </div>
          <h1>{product.data.name}</h1>
        </div>
      
      <div className='salaryInfo d-flex'>
        <p className='salary'>Maaş : {product.data.Salary}</p>
      </div>
      </div>
    <div className='apply'>
      <button className='btn '>Müraciət Et</button>
    </div>


      <div className='card-body'>
        <div className='top_infos d-flex'>
          <p className='me-2'>{product.data.companyName}</p>
          <p>{product.data.City}</p>

        </div>

        <div className='body_infos row'>
          <div className='works col-lg-6 col-sm-12'>
              <h3 className='mb-3 ms-1'>Əsas Vəzifə Öhdəlikləri</h3>
              <p className='mt-4 ms-4'>{product.data.MainWork}</p>
          </div>
          <div className='skills  col-lg-6 col-sm-12'>
            <h3 className='mb-4 ms-1'>Lazım Olan Bacarıqlar</h3>
            <p className='ms-5'>{product.data.Skills}</p>
          </div>


        </div>

      </div>
    <div  className='d-flex justify-content-end card-footer'>
     <h6> {product.data.City}</h6>
      <h6>{product.data.DateTime}</h6>
    </div>

      
    </div>

  }
  
    return (
      <div className='container'>
        
        <div>{content}</div>
    </div>

    
  )
}

export default Home