// import React from "react";
// import PropTypes from "prop-types";

// const THEMES = {
//   white: "content-card content-card--white",
//   blue: "content-card content-card--blue",
// };
// export const CONTENT_THEMES = Object.keys(THEMES);

// /**
//  * A wrapper for arbitrary rich text content, usually displayed in a sidebar.
//  * Can optionally have a call to action link at the bottom.
//  */
// const ContentCard = ({ children, theme, ctaLabel, ctaHref }) => (
//   <aside className={THEMES[theme]}>
//     {children}
//     {ctaLabel ? (
//       <div className="content-card__cta">
//         <a href={ctaHref} target="_blank" rel="noopener noreferrer">
//           {ctaLabel}
//         </a>
//       </div>
//     ) : null}
//   </aside>
// );

// ContentCard.propTypes = {
//   ctaLabel: PropTypes.string,
//   ctaHref: PropTypes.string,
//   theme: PropTypes.oneOf(CONTENT_THEMES).isRequired,
//   children: PropTypes.node.isRequired,
// };

// ContentCard.defaultProps = {
//   ctaLabel: null,
//   ctaTo: null,
//   ctaHref: null,
// };

// export default ContentCard;
