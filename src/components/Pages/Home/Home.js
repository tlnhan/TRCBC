import React from 'react'
import './Home.css'

const Home = () => {

    return (
        <div>
            <div id="demo" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-indicators justify-content-center">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/hinh1.jpg" alt="Los Angeles" class="d-block" />
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/hinh2.jpg" alt="Chicago" class="d-block" />
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/hinh3.jpg" alt="New York" class="d-block" />
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    )
}

export default Home