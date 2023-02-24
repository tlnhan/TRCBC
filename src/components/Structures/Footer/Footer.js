import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="text-center text-lg-start bg-dark text-light">
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div class="me-5 d-none d-lg-block">
                        <span>Kết nối với chúng tôi thông qua:</span>
                    </div>
                    <div>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-facebook-official" aria-hidden="true"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-google" aria-hidden="true"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </section>
                <div class="text-center p-4">
                    © 2023 Copyright:&nbsp;
                    <a class="text-reset fw-bold" href="/">TiemTroConBoCuoi.com.vn</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer