import axios from 'axios'
import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

const Register = () => {

    const history = useNavigate();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8080/register", {
                firstName, lastName, email, password
            })
                .then(res => {
                    if (res.data == "Đã tồn tại") {
                        alert("Email đã tồn tại")
                    }
                    else if (res.data == "Hợp lệ") {
                        alert("Đăng ký thành công")
                        history('/home', { state: { id: email } })
                    }
                })
                .catch(e => {
                    alert("Không hợp lệ")
                    console.log(e);
                })
        }
        catch (e) {
            console.log(e)
        }

    }

    return (
        <div className='register'>
            <section class="text-center text-lg-start">
                <div class="container py-4">
                    <div class="row g-0 align-items-center">
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <div class="card cascading-right" style={{ background: "hsla(0, 0%, 100%, 0.55)" }} >
                                <div class="card-body p-5 shadow-5 text-center">
                                    <h2 class="fw-bold mb-5">Đăng kí ngay</h2>
                                    <form action="POST">
                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input type="text" id="form3Example1" class="form-control"
                                                        onChange={(e) => { setFirstName(e.target.value) }}
                                                        required />
                                                    <label class="form-label" for="form3Example1">Họ:</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input type="text" id="form3Example2" class="form-control"
                                                        onChange={(e) => { setLastName(e.target.value) }}
                                                        required />
                                                    <label class="form-label" for="form3Example2">Tên:</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <input type="email" id="form3Example3" class="form-control"
                                                onChange={(e) => { setEmail(e.target.value) }}
                                                required />
                                            <label class="form-label" for="form3Example3">Địa chỉ email:</label>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <input type="password" id="form3Example4" class="form-control"
                                                onChange={(e) => { setPassword(e.target.value) }}
                                                required />
                                            <label class="form-label" for="form3Example4">Mật khẩu:</label>
                                        </div>
                                        <div class="form-check d-flex justify-content-center mb-4">
                                            <input class="form-check-input bg-dark border-dark me-2" type="checkbox" value="" id="form2Example33" />
                                            <label class="form-check-label" for="form2Example33">
                                                Theo dõi bản tin của chúng tôi
                                            </label>
                                        </div>
                                        <button type="submit" class="btn btn-dark btn-block mb-4" onClick={submit}
                                            required>
                                            Đăng ký ngay
                                        </button>
                                        <div class="text-center">
                                            <p>Hoặc đăng ký với:</p>
                                            <button type="button" class="btn btn-link-dark btn-floating mx-1">
                                                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                                            </button>

                                            <button type="button" class="btn btn-link-dark btn-floating mx-1">
                                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                            </button>

                                            <button type="button" class="btn btn-link-dark btn-floating mx-1">
                                                <i class="fa fa-google" aria-hidden="true"></i>
                                            </button>

                                            <button type="button" class="btn btn-link-dark btn-floating mx-1">
                                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                            </button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <img src="/assets/logo_big.png" class="w-100 rounded-4 shadow-4"
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register