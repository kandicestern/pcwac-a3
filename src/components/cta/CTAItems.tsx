import CTAItem from "./CTAItem";
import "./CTAItems.css";

export default function CTAItems() {
    return (
        <div className="cta-container">
            <div className="container responsivegrid articleLayout aem-GridColumn aem-GridColumn--default--12">
                <div id="ID02" className="cmp-container ">
                    <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                        <div
                            className="call-to-action-container accordion aem-GridColumn aem-GridColumn--default--newline aem-GridColumn--default--12 aem-GridColumn--offset--default--0">
                            <div id="call-to-action-container-9ea9253c4f" className="cmp-accordion" data-cmp-is="accordion"
                                data-cmp-data-layer="{&#34;call-to-action-container-9ea9253c4f&#34;:{&#34;shownItems&#34;:[],&#34;@type&#34;:&#34;sydneywater-commons/components/call-to-action-container&#34;,&#34;repo:modifyDate&#34;:&#34;2021-09-30T02:41:29Z&#34;}}"
                                data-placeholder-text="false">
                                <CTAItem title="Pay your bill" iconsrc="/images/pay-your-bill.svg" href="/water-the-environment/what-you-can-do/report-fault.html" />
                                <CTAItem title="Report a fault" iconsrc="/images/report-a-fault.svg" href="/water-the-environment/what-you-can-do/report-fault.html" />
                                <CTAItem title="Check outages" iconsrc="/images/check-outages.svg" href="/water-the-environment/what-we-are-doing/works-near-you.html" />
                                <CTAItem title="My Account" iconsrc="/images/my-account-icon.png" href="/accounts-billing/my-account/about-my-account.html" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}