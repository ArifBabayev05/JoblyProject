import React, {useState,useEffect} from 'react'
import '../../../Assets/Styles/MainPage/Statistics/Statistics.css'
import axios from 'axios'


function Index() {


  const [user, setUser] = useState('');
  const [company, setCompany] = useState('');
  const [vacancy, setVacancy] = useState('');


  //data.at(-1) last element of array
  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(res=>setCompany(res.data.at(-1).id))
      
  })
  useEffect(() => {
    axios.get("http://localhost:3000/users")    
    .then(res=>setUser(res.data.at(-1).id))
    
  })
  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(res=>setVacancy(res.data.at(-1).id))

  })

  return (
    <div className='container'>
        <h2 className='mt-5 mb-4'>
        Statistika
        </h2>


        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">{company}+</h5>
        <p class="card-text fs-2 ">Tərəfdaş Şirkət</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">{user}+</h5>
        <p class="card-text fs-2">İstifadəçi sayı</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">{vacancy}+</h5>
        <p class="card-text fs-3">Ümumi Vakansiyalar</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Index