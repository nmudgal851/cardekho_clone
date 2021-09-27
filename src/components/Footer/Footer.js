import React from 'react'
import {BadgeOutlined, CarRentalOutlined, LocalOfferOutlined, CompareOutlined} from '@mui/icons-material'
import './Footer.scss'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-header">
                <div className="footer-header-info">
                    <div className="footer-header-info-left">
                        <BadgeOutlined/>
                    </div>
                    <div className="footer-header-info-right">
                        <div className="footer-header-info-right-title">
                            <span>India’s #1</span>
                        </div>
                        <div className="footer-header-info-right-description">
                            <span>Largest Auto portal</span>
                        </div>
                    </div>
                </div>
                <div className="footer-header-info">
                    <div className="footer-header-info-left">
                        <CarRentalOutlined/>
                    </div>
                    <div className="footer-header-info-right">
                        <div className="footer-header-info-right-title">
                            <span>Car Sold</span>
                        </div>
                        <div className="footer-header-info-right-description">
                            <span>Every 4 minute</span>
                        </div>
                    </div>
                </div>
                <div className="footer-header-info">
                    <div className="footer-header-info-left">
                        <LocalOfferOutlined/>
                    </div>
                    <div className="footer-header-info-right">
                        <div className="footer-header-info-right-title">
                            <span>Offers</span>
                        </div>
                        <div className="footer-header-info-right-description">
                            <span>Stay updated pay less</span>
                        </div>
                    </div>
                </div>
                <div className="footer-header-info">
                    <div className="footer-header-info-left">
                        <CompareOutlined/>
                    </div>
                    <div className="footer-header-info-right">
                        <div className="footer-header-info-right-title">
                            <span>Compare</span>
                        </div>
                        <div className="footer-header-info-right-description">
                            <span>Decode the right car</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-main">
                <div className="footer-main-overview">
                    <div className="footer-main-overview-title">
                        <span>OVERVIEW</span>
                    </div>
                    <div className="footer-main-overview-items">
                        <div>About us</div>
                        <div>FAQs</div>
                        <div>Privacy Policy</div>
                        <div>Terms & Conditions</div>
                        <div>Corporate Policies</div>
                    </div>
                </div>
                <div className="footer-main-others">
                    <div className="footer-main-others-title">
                        <span>OTHERS</span>
                    </div>
                    <div className="footer-main-others-items">
                        <div>Advertise with Us</div>
                        <div>Careers</div>
                        <div>Customer Care</div>
                    </div>
                </div>
                <div className="footer-main-connect">
                    <div className="footer-main-connect-title">
                        <span>CONNECT WITH US</span>
                    </div>
                    <div className="footer-main-connect-items">
                        <div>1800 200 3000 (Toll-Free)</div>
                        <div>support@cardekho.com</div>
                        <div>Dealer solutions</div>
                        <div>Used Cars Business</div>
                        <div>Contact Us</div>
                        <div>Feedback</div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="footer-copyright-left">
                    <span>© 2021 Girnar Software Pvt. Ltd.</span>
                </div>
                <div className="footer-copyright-right">
                    <div className="footer-copyright-right-item">
                        <img src="https://stimg.cardekho.com/pwa/img//gaadi-new-logo.svg" alt=""/>
                    </div>
                    <div className="footer-copyright-right-item">
                        <img src="https://stimg.cardekho.com/pwa/img//zigwheels.png" alt=""/>
                    </div>
                    <div className="footer-copyright-right-item">
                        <img src="https://stimg.cardekho.com/pwa/img//bikedekho.png" alt=""/>
                    </div>
                    <div className="footer-copyright-right-item">
                        <img src="https://stimg.cardekho.com/pwa/img//logo/id-main-logo.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
