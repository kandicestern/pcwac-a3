import "./CTAItem.css";

interface CTAProps {
  title: string;
  iconsrc: string;
  href: string;
}

export default function CTAItem(props: CTAProps) {
  const { title, iconsrc, href } = props;

  return (
    <div className="cmp-accordion__item">
      <div className="call-to-action image">
        <div className="sw-image-container">
          <div className="cmp-image">
            <a
              className="cmp-image__link"
              href={href}
              data-cmp-clickable
              data-cmp-hook-image="link"
            >
              <img
                src={iconsrc}
                className="cmp-image__image"
                itemProp="contentUrl"
                data-cmp-hook-image="image"
                alt=""
              />
              <div>
                {title}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
