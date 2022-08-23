import React,{Component} from 'react';
import Home from './Pages/Home'
import About from './Pages/About'
import Job from "./Pages/Jobs";
import JobList from './Pages/JobList'
import Header from './Layouts/Header/Index'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import {Footer} from './Layouts/Footer/Index'
import axios from 'axios'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  state = {};

  componentDidMount = ()=> {

    //Index.tsx Axios üçün default localhost vermişəm.
    // localhost/* dan sonra gələni yaz bura.
    axios.get('user').then(
      res => {
        this.setState({
          user: res.data
        })
      },
      err => {
        console.log(err)
      }
    )

  }
  render() {
    return (
    <div className="App">
      
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home user={this.state.user}/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='job/:id' element={<Job/>}/>
          <Route path='job' element={<JobList/>}/>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />

          


          
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}
}
