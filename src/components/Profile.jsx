import React from 'react'
import '../css/styleProfile.css'
import ProfileImg from '../img/profile.png'
import avatar from '../img/avt.png'
import img2 from '../img/img2.png'
import images from '../img/image.js'

export default function Profile() {
    return (
        <div>
            <div className="main-menu">
                <div className="menu-link">
                    Trang Chủ
                </div>            
                <div className="menu-link">
                    Thông báo
                    <span className="circle">12</span>
                </div>            
                <div className="menu-link">
                    Tài khoản
                    <i className="fas fa-angle-down arrow"></i>
                </div>            
            </div>
            <div className="main-img-profile">
                <img src={ProfileImg} alt="#" className="img"/>
                <div className="content-profile">
                    <div className="hero">
                        <img src={avatar} alt="#"  className="profile-img"/>
                        <div className="title-profile">
                            <div className="heading">Nguyễn Minh</div>
                            <div className="desc">
                                Là 1 lập trình viên yêu nghề. Tôi muốn lan toả niềm đam mê bất tận với tất cả mọi người. Hãy theo dõi tôi và tạo ra 1 cộng đồng lớn mạnh
                            </div>
                        </div>
                    </div>
                    <div className="rectangle"></div>
                    <div className="content-number">
                        <div className="follow">
                            <div className="follow-heading">1.3K</div>
                            <div className="follow-title">Bài viết</div>
                        </div>
                        <div className="follow">
                            <div className="follow-heading">14</div>
                            <div className="follow-title">Ảnh</div>
                        </div>
                        <div className="follow">
                            <div className="follow-heading">2.3K</div>
                            <div className="follow-title">Người theo dõi</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-profile">
                <div className="row">
                    <div className="col-6">
                        <div className="previous">
                            <p className="prev-title">Bài viết gần đây</p>
                            <div className="all">
                                <p className="prev-all">Xem tất cả</p>
                                <i className="fas fa-angle-right"></i>
                            </div>
                        </div>

                        <div className="content-main">
                            <div className="main-image">
                                <img src={images.img2.default} alt="" className="img-box"/>
                                <div className="box">
                                    <div className="box-heading">Bài viết 1</div>
                                    <div className="box-title">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...
                                    </div>
                                </div>
                            </div>
                            <div className="main-image">
                                <img src={images.img3.default} alt="" className="img-box"/>
                                <div className="box">
                                    <div className="box-heading">Bài viết 1</div>
                                    <div className="box-title">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...
                                    </div>
                                </div>
                            </div>
                            <div className="main-image">
                                <img src={images.img4.default} alt="" className="img-box"/>
                                <div className="box">
                                    <div className="box-heading">Bài viết 1</div>
                                    <div className="box-title">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...
                                    </div>
                                </div>
                            </div>
                            <div className="main-image">
                                <img src={images.img5.default} alt="" className="img-box"/>
                                <div className="box">
                                    <div className="box-heading">Bài viết 1</div>
                                    <div className="box-title">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="previous">
                            <div className="all">
                                <p className="prev-title">Ảnh</p>
                                <span className="circle">6</span>
                            </div>
                            <div className="all">
                                <p className="prev-all">Xem tất cả</p>
                                <i className="fas fa-angle-right"></i>
                            </div>
                        </div>

                        <div className="content-image">
                            <div className="image-profile">
                                <img src={images.content1.default} alt="" />
                            </div>
                            <div className="image-profile">
                                <img src={images.content2.default} alt="" />
                            </div>
                            <div className="image-profile">
                                <img src={images.content3.default} alt="" />
                            </div>
                            <div className="image-profile">
                                <img src={images.content4.default} alt="" />
                            </div>
                            <div className="image-profile">
                                <img src={images.content5.default} alt="" />
                            </div>
                            <div className="image-profile">
                                <img src={images.content6.default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
