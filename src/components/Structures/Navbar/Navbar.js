import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/' className='text-decoration-none'><img src='/assets/logo_brand.jpg' width='40px' className='logo_brand ms-2' /></Link>
                    <Link to='/' className='text-decoration-none'><a className="navbar-brand ms-3 fw-bold" href="/">
                        Tiệm Trò Con Bò Cười
                    </a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item ms-1">
                                <Link to='/home' className='text-decoration-none'><a className="nav-link text-light" href="/">
                                    <i className="fa fa-home me-2" aria-hidden="true"></i>
                                    Trang chủ
                                </a></Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link to='/favorites' className='text-decoration-none'><a className="nav-link text-light" href="/">
                                    <i class="fa fa-heart me-2" aria-hidden="true"></i>
                                    Yêu thích
                                </a></Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link to='/products' className='text-decoration-none'><a className="nav-link text-light" href="/">
                                    <i class="fa fa-truck me-2" aria-hidden="true"></i>
                                    Đơn hàng
                                </a></Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link to='/history' className='text-decoration-none'><a className="nav-link text-light" href="/">
                                    <i class="fa fa-history me-2" aria-hidden="true"></i>
                                    Lịch sử
                                </a></Link>
                            </li>
                        </ul>
                        <form className="d-flex ms-5">
                            <input className="form-control me-2" type="text" placeholder="Tìm kiếm..." />
                            <button className="btn btn-dark" type="button">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item ms-2">
                                <Link to='/cart' className='text-decoration-none'><a className="nav-link text-light" href="/">
                                    <i class="fa fa-shopping-cart me-2" aria-hidden="true"></i>
                                    Giỏ hàng
                                </a>
                                </Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link to='/login' className='text-decoration-none'><a className="nav-link text-light" href="/">
                                    <i class="fa fa-sign-in me-2" aria-hidden="true"></i>
                                    Đăng nhập
                                </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar