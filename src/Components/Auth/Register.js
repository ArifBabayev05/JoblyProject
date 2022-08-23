import React, { Component } from 'react'
import axios from 'axios'

export default class Register extends Component {
    submitHandler = e => {
        e.preventDefault();
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            mail: this.mail,
            password: this.password,
            confirmPassword: this.confirmPassword

        };

        //Index.tsx Axios üçün default localhost vermişəm.
        // localhost/* dan sonra gələni yaz bura.
        axios.post('register', data)
            .then(res => {
                console.log(res)
            }).catch(err => { console.log(err) })
    }
    render() {
        return <div className='container w-50 '>
            <form onSubmit={this.submitHandler}>
                <h3 className='text-center'>Qeydiyyat</h3>

                <div className='form-group'>
                    <label>Ad</label>
                    <input type='text' placeholder='Ad' className='form-control' onChange={e => this.firstName = e.target.value} />
                </div>

                <div className='form-group'>
                    <label>Soyad</label>
                    <input type='text' placeholder='Soyad' className='form-control' onChange={e => this.lastName = e.target.value} />
                </div>

                <div className='form-group'>
                    <label>Mail</label>
                    <input type='text' placeholder='Mail' className='form-control' onChange={e => this.mail = e.target.value} />
                </div>

                <div className='form-group'>
                    <label>Şifrə</label>
                    <input type='text' placeholder='Şifrə' className='form-control' onChange={e => this.password = e.target.value} />
                </div>

                <div className='form-group'>
                    <label>Yenidən Şifrə</label>
                    <input type='text' placeholder='Yenidən Şifrə ' className='form-control' onChange={e => this.confirmPassword = e.target.value} />
                </div>

                <button className=' mt-3 btn btn-primary w-100 btn-block'>Qeydiyyat</button>




            </form>
        </div>
    }
}

// export default Register