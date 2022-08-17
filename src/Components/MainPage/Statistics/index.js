import React from 'react'
import '../../../Assets/Styles/MainPage/Statistics/Statistics.css'


function index() {
  return (
    <div className='container'>
        <h2 className='my-5'>
        Statistika
        </h2>


        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">10+</h5>
        <p class="card-text">Tərəfdaş Şirkət</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">110+</h5>
        <p class="card-text">İstifadəçi sayı</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">10+</h5>
        <p class="card-text">Ümumi Vakansiyalar</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default index