import React from 'react'
import '../css/styleProfile.css'
import ProfileImg from '../img/profile.png'
import avatar from '../img/avt.png'
import content1 from '../img/content1.png'
import img2 from '../img/img2.png'

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
                                <img src={img2} alt="" />
                            </div>
                            <div className="main-image">
                                <img src={img2} alt="" />
                            </div>
                            <div className="main-image">
                                <img src={img2} alt="" />
                            </div>
                            <div className="main-image">
                                <img src={img2} alt="" />
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
                                <img src={content1} alt="" />
                            </div>
                            <div className="image-profile">
                                <img src={content1} alt="" />
                            </div>
                            <div className="image-profile">
                                <img src={content1} alt="" />
                            </div>
                            <div className="image-profile">
                                <img src={content1} alt="" />
                            </div>
                            <div className="image-profile">
                                <img src={content1} alt="" />
                            </div>
                            <div className="image-profile">
                                <img src={content1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
