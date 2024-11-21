import "./Navigation.css";

export default function NavAcctsBilling() {
    return (
        <div className="nav-submenu">
            <div className="nav-heading">My Account</div>
            <ul>
                <li>
                    <a href="/accounts-billing/my-account/about-my-account.html">
                        <p>About My Account</p>
                    </a>
                </li>
                <li >
                    <a href="/accounts-billing/my-account/register-for-my-account.html">
                        <p>Register for My Account</p>
                    </a>
                </li>
                <li><a href="/accounts-billing/my-account/log-in-to-my-account.html"
                ><p>Log in to
                    My Account</p>
                </a>
                </li>
                <li><a href="/accounts-billing/my-account/go-paperless.html"
                ><p>Go
                    paperless &amp; win</p></a>
                </li>
            </ul>

            <div className="nav-heading">Paying your
                bill</div>
            <ul className="cmp-navigation__group">
                <li>
                    <a href="/accounts-billing/paying-your-bill/bill-payment.html">
                        <p>Bill
                            payment</p>
                    </a>
                </li>
                <li>
                    <a href="/accounts-billing/paying-your-bill/payment-options.html">
                        <p>Payment
                            options</p>
                    </a>
                </li>
                <li>
                    <a href="/accounts-billing/paying-your-bill/help-with-your-bill.html"
                    >
                        <p>Help to
                            pay your water bill</p>
                    </a>
                </li>
                <li><a href="/accounts-billing/paying-your-bill/our-prices.html">
                    <p>Our
                        prices</p>
                </a>
                </li>
                <li><a href="/accounts-billing/paying-your-bill/charges-water-usage-calculators.html">
                    <p>Charges
                        &amp; water usage calculators</p>
                </a>
                </li>
            </ul>

            <div className="nav-heading">Reading your
                meter</div>
            <ul>
                <li>
                    <a href="/accounts-billing/reading-your-meter/about-your-meter.html">
                        <p>About your
                            meter</p>
                    </a>
                </li>
                <li>
                    <a href="/accounts-billing/reading-your-meter/meter-readings.html">
                        <p>Meter
                            readings</p>
                    </a>
                </li>
                <li>
                    <a href="/accounts-billing/reading-your-meter/meter-maintenance.html">
                        <p>Meter
                            maintenance</p>
                    </a>
                </li>
            </ul>

            <div className="nav-heading">Managing your
                account</div>
            <ul>
                <li>
                    <a href="/accounts-billing/managing-your-account/mailing-address-changes.html"><p>Mailing
                        address changes</p>
                    </a>
                </li>
                <li><a href="/accounts-billing/managing-your-account/account-balance.html"><p>Account
                    balance</p>
                </a>
                </li>
                <li><a href="/accounts-billing/managing-your-account/pension-rebates.html">
                    <p>
                        Pension
                        rebates
                    </p>
                </a>
                </li>
                <li><a href="/accounts-billing/managing-your-account/buying-and-selling-a-property.html"><p>Buying
                    &amp; selling a property</p></a>
                </li>
                <li><a href="/accounts-billing/managing-your-account/deceased-estates.html"
                ><p>Deceased
                    estates</p></a>
                </li>
                <li><a href="/accounts-billing/managing-your-account/name-changes.html"><p>Name
                    changes
                </p></a>
                </li>
            </ul>
        </div>

    )
}