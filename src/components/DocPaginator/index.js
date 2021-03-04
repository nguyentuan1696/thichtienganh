import Link from "next/Link";
const DocPaginator = (props) => {
  const { metadata } = props;
  return (
    <nav
      className="pagination-nav"
      aria-label="The ARIA label for the docs pagination"
    >
      <div className="pagination-nav__item">
        {metadata.previous && (
          <Link className="pagination__link" href={metadata.previous.permalink}>
            <div className="pagination-nav__sublabel">Previous</div>
            <div className="pagination-nav__label">
              &laquo; {metadata.previous.title}
            </div>
          </Link>
        )}
      </div>
      <div className="pagination-nav__item pagination-nav__item--next">
        {metadata.next && (
          <Link className="pagination-nav__link" href={metadata.next.permalink}>
            <div className="pagination-nav__sublabel">Next</div>
            <div className="pagination-nav__label">
              {metadata.next.title} &raquo;
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default DocPaginator;
