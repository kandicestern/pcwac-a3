import Header from './Header';
import CTAItems from './cta/CTAItems';
import Navigation from './nav/Navigation';
import Footer from './Footer';
import TabsComponent from './tabs/Tabs';
import Hero from './Hero';
import '../App.css';
import WhatsOn from './WhatsOn';

export default function Root() {
    return (
        <>
            <div className="experiencefragment aem-GridColumn aem-GridColumn--default--12">
                <span data-component_type="experiencefragment">
                    <div className="xfpage page basicpage">
                        <div id="container-111d2e0f0c" className="cmp-container ">
                            <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                                <Header />
                                <div className='desktop-nav'>
                                    <div className="navigation aem-GridColumn aem-GridColumn--default--12">
                                        <Navigation />
                                    </div>
                                </div>

                                <main id="main-content">

                                    <CTAItems />
                                    <Hero />
                                    <div className="container responsivegrid articleLayout aem-GridColumn aem-GridColumn--default--12">
                                        <div id="ID03" className="cmp-container sw-child-mobile-fw">
                                            <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                                <TabsComponent />
                                                <WhatsOn />
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
            <div className="container responsivegrid aem-GridColumn aem-GridColumn--default--12">
                <div id="container-8a3e1b6a4a" className="cmp-container ">
                    <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                        <div className="separator sw-grey-separator aem-GridColumn aem-GridColumn--default--12">
                            <div id="separator-ede1de1a3f" className="cmp-separator">
                                <hr className="cmp-separator__horizontal-rule" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}