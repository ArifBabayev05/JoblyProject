import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
  submitHandler = e => {
    e.preventDefault();
    const data = {

      mail: this.mail,
      password: this.password,

    };

     //Index.tsx Axios üçün default localhost vermişəm.
    // localhost/* dan sonra gələni yaz bura.
    axios.post('login', data)
      .then(res => {
        localStorage.setItem('token', res.data.token)
      }).catch(err => { console.log(err) })
  }
  render() {
    return <div className='container w-50 '>
      <form onSubmit={this.submitHandler}>
        <h3 className='text-center'>Giriş</h3>


        <div className='form-group'>
          <label>Mail</label>
          <input type='text' placeholder='Mail' className='form-control' onChange={e => this.mail = e.target.value} />
        </div>

        <div className='form-group'>
          <label>Şifrə</label>
          <input type='text' placeholder='Şifrə' className='form-control' onChange={e => this.password = e.target.value} />
        </div>

        <button className=' mt-3 btn btn-primary w-100 btn-block'>Giriş</button>




      </form>
    </div>
  }
}

// export default Register