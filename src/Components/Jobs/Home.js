import React, { useState , useEffect } from 'react'
import axios from 'axios'
import '../../Assets/Styles/Job/Job.css'
import { useParams } from 'react-router-dom'

function Home() {
  const {id} = useParams()
  const url = `https://dummyjson.com/products/${id}`
  const [product, setProduct] = useState(null)

  let content = null

  useEffect(()=>{
    axios.get(url)
    .then(response =>{
        setProduct(response.data)
    })
  }, [url])


  
  if(product){
   content =
    <div>
      <h1>{product.title}</h1>

      <div>
        <img src={product.images[0]}/>
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