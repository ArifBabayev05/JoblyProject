import React, { useState , useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
import JobCard from './JobCard'
import '../../Assets/Styles/Job/Job.css'


//Full Jobs
function Jobs() {
  const url = `http://localhost:3000/users`
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false
  })

  

  useEffect(()=>{
    setProducts({
      loading:true,
      data: null,
      error: false
      
    })

    axios.get(url)
    .then(response =>{
        setProducts({
          loading:false,
          data: response.data,
          error: false
        })

        .catch(() =>{
          setProducts({
            loading:false,
            data: null,
            error: true
          })
        })
    })
  }, [url])

  let content = null

  if(products.loading){
    content = <Loader/>
  }

  if(products.error){
    content = <p>Xəta baş verdi, yenidən yoxlayın.</p>
  }

  if(products.data){
    content =
     products.data.map((product,key)=>
      <div>
        <JobCard product={product}/>
      </div>
     )

     
       
     
 
   }

  return (
    <div>
      <h1 className='container' style={{color:'var(--pink)'}}>Aktiv Vakansiyalar</h1>
      {content}


    </div>
  )
}

export default Jobs