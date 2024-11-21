import '../App.css';
import LoginDropdownDesktop from './LoginDropdown';

export default function Header() {
    return (
        <div className="globalheader image aem-GridColumn aem-GridColumn--default--12">
            <header className="sw-header">
                <div className="sw-header-info">
                    <div className="sw-header-info-content">
                        <ul>
                            <li>
                                <div className="sw-header-wrapper">
                                    <div className="sw-hamburger-menu"></div>
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
                                                        data-cmp-hook-image="link">
                                                        <img src="/images/sw-logo.gif"
                                                            className="cmp-image__image"
                                                            itemProp="contentUrl"
                                                            data-cmp-hook-image="image"
                                                            alt="Sydney Water logo" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sw-headerInfo-right">
                                        <div className="sw-headerInfo-cont">
                                            <ul className="sw-headerInfo-wrapper">
                                                {/* <li className="sw-header-search">
                                                    <form
                                                        className="sw-header-search-form sw-hidden"
                                                        action="#" autoComplete="off"
                                                        role="Search">
                                                        <input type="search" name="search"
                                                            placeholder="Search"
                                                            className="sw-search-input"
                                                            aria-label="Search" />
                                                        <span className="sw-search-close"
                                                            aria-label="Clear"
                                                            tabIndex={0}>
                                                        </span>
                                                        <span className="sw-search-cancel"
                                                            aria-label="Cancel"
                                                            tabIndex={0}>
                                                            Cancel
                                                        </span>
                                                        <div className="sw-search-result sw-hidden"
                                                            tabIndex={0}>
                                                        </div>
                                                    </form>
                                                    <button
                                                        disabled
                                                        aria-disabled
                                                        aria-labelledby='search'
                                                        className="sw-search-link sw-header-links"
                                                        data-search-url="https://www.sydneywater.com.au/search.html"
                                                    >
                                                        <span className="sw-contactUs-icon sw-header-icons"><img src="/images/search.svg" /></span>
                                                        <span id="search"
                                                            className="sw-search-text sw-header-text">Search</span>
                                                    </button>
                                                </li> */}
                                                <li className="sw-contactUs">
                                                    <a className="sw-contactUs-link sw-header-links" href="/contact-us.html" target="_self" aria-labelledby="contact">
                                                        <span className="sw-contactUs-icon sw-header-icons"><img alt="" src="/images/contact-us.svg" /></span>
                                                        <span id="contact" className="sw-contactUs-text sw-header-text">Contact us</span>
                                                    </a>
                                                </li>


                                                <li className="sw-login" >
                                                    <LoginDropdownDesktop />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}