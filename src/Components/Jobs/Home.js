import React, { useState , useEffect } from 'react'
import axios from 'axios'
import '../../Assets/Styles/Job/Job.css'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

function Home() {
  const {id} = useParams()
  const url = `https://dummyjson.com/products/${id}`
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
    <div>
      <h1>{product.data.title}</h1>

      <div>
        <img src={product.data.images[0]}/>
      </div>
    </div>

  }
  
    return (
      <div>
        
        {content}
    </div>

    
  )
}

export default Home