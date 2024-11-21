import './Hero.css';

export default function Hero() {
    return (
        <div className="campaign teaser aem-GridColumn aem-GridColumn--default--12">

            <div className="hero-container">
                <img className="hero-img" alt="" src="/images/jeremy-bishop-1braZySlEKA-unsplash.jpg" />
                <div className="hero-text-container">
                    <h1>Tomorrow's water starts today.</h1>
                    <p>
                        Investing to secure our water future.<br />
                        What does it mean for you?
                    </p>
                    <div>
                        <a className="hero-btn" href="/accounts-billing/paying-your-bill/our-prices/price-proposal.html">
                            <button tabIndex={-1}>Sydney Water's 2025–30 price proposal</button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}