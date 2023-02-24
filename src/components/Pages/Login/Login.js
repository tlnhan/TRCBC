import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8080/login", {
                email, password
            })
                .then(res => {
                    if (res.data == "Đã tồn tại") {
                        history("/home", { state: { id: email } })
                    }
                    else if (res.data == "Hợp lệ") {
                        alert("Email hợp lệ")
                    }
                })
                .catch(e => {
                    alert("Sai email hoặc mật khẩu")
                    console.log(e);
                })
        }
        catch (e) {
            console.log(e)
        }

    }

    return (
        <div className='login'>
            <section class="vh-100">
                <div class="container py-5 h-100">
                    <div class="row d-flex align-items-center justify-content-center h-100">
                        <div class="col-md-8 col-lg-7 col-xl-6">
                            <img src="/assets/logo_big.png"
                                alt="bg_login image" width="70%" className='background ' />
                        </div>
                        <div class="login col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form action="POST">
                                <div class="form-outline mb-4">
                                    <input type="email" id="form1Example13" class="form-control form-control-lg"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        required />
                                    <label class="form-label" for="form1Example13">Địa chỉ email:</label>
                                </div>
                                <div class="form-outline mb-4">
                                    <input type="password" id="form1Example23" class="form-control form-control-lg"
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        required />
                                    <label class="form-label" for="form1Example23">Mật khẩu:</label>
                                </div>
                                <div class="d-flex justify-content-around align-items-center mb-4">
                                    <div class="form-check">
                                        <input class="form-check-input bg-dark border-dark" type="checkbox" value="" id="form1Example3" />
                                        <label class="form-check-label" for="form1Example3"> Ghi nhớ tôi </label>
                                    </div>
                                    <a href="/" className='text-decoration-none text-dark'>Quên mật khẩu ?</a>
                                    <Link to='/register' className='text-decoration-none'><a href="/" className='nav-link text-dark'>Tạo 1 tài khoản mới</a></Link>
                                </div>
                                <button type="submit" class="btn-login btn btn-dark btn-lg btn-block"
                                    onClick={submit} required>Đăng nhập</button>
                                <div class="divider d-flex align-items-center">
                                    <p class="text-center fw-bold mx-3 mb-0 text-muted">Hoặc</p>
                                </div>
                                <a class="btn-facebook btn btn-primary btn-lg btn-block" href="/" style={{ backgroundColor: "#3b5998" }}
                                    role="button">
                                    <i class="fa fa-facebook-official me-2" aria-hidden="true"></i>Đăng nhập với Facebook
                                </a>
                                <a class="btn-twitter btn btn-primary btn-lg btn-block mt-2" href="/" style={{ backgroundColor: "#55acee" }}
                                    role="button">
                                    <i class="fa fa-twitter me-2" aria-hidden="true"></i>Đăng nhập với Twitter</a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login