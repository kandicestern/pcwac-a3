import '../App.css';
import LoginDropdownDesktop from './LoginDropdown';
import MobileNavigation from './nav/MobileNavigation';

export default function Header() {
    return (
        <div className="globalheader image aem-GridColumn aem-GridColumn--default--12">
            <header className="sw-header">
                <div className="sw-header-info">
                    <div className="sw-header-info-content">
                        <div id="skip-to-main">
                            <a href="#main-content">Skip to content</a>
                        </div>
                        <div className="sw-header-wrapper">
                            <div className='sw-hamburger-menu'>
                                <MobileNavigation />
                            </div>
                            <div className="sw-header-logo">
                                <div className="sw-logo-wrapper">
                                    <div className="sw-image-container">
                                        <div data-cmp-is="image"
                                            data-cmp-lazythreshold="0"
                                            data-cmp-src="/content/experience-fragments/sydneywater/us/en/site/header/master/_jcr_content/root/globalheader.coreimg{.width}.gif/1680128673516/sw-logo.gif"
                                            data-asset="/content/dam/sydneywater/icons/sw-logo.gif"
                                            data-asset-id="2072356d-9a15-4c5e-863a-62fdf7dbf948"
                                            id="globalheader-5f4d541e3b"
                                            className="cmp-image" itemScope
                                            itemType="http://schema.org/ImageObject">
                                            <a className="cmp-image__link" href="/"
                                                data-cmp-hook-image="link" aria-label="Sydney Water">
                                                <img src="/images/sw-logo.gif"
                                                    className="cmp-image__image"
                                                    itemProp="contentUrl"
                                                    data-cmp-hook-image="image"
                                                    alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sw-headerInfo-right">
                                <div className="sw-headerInfo-cont">
                                    <div className="sw-headerInfo-wrapper">
                                        <div className="sw-contactUs">
                                            <a className="sw-contactUs-link sw-header-links" href="/contact-us.html" target="_self" aria-labelledby="contact">
                                                <span className="sw-contactUs-icon sw-header-icons">
                                                    <img alt="" src="/images/contact-us.svg" /></span>
                                                <span id="contact" className="sw-contactUs-text sw-header-text">Contact us</span>
                                            </a>
                                        </div>
                                        <div className="sw-login" >
                                            <LoginDropdownDesktop />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}