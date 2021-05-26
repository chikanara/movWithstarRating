import React from "react";

const StarRating = ({ rate, handleRate }) => {
  const stars = (n) => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= n) {
        // star = [...star,"★"]
        star.push(
          <span
            key={i}
            style={{ color: "gold", cursor: "pointer" }}
            onClick={() => handleRate(i)}
          >
            ★
          </span>
        );
      } else {
        // star = [...star,"★"]
        star.push(
          <span
            key={i}
            style={{ color: "rgba(0,0,0,0.5)", cursor: "pointer" }}
            onClick={() => handleRate(i)}
          >
            ★
          </span>
        );
      }
    }
    return star;
  };

  return (
    <div style={{ padding: "0.5rem", fontSize: "1.5em" }}>{stars(rate)}</div>
  );
};
StarRating.defaultProps = {
  rate: 1,
  handleRate: () => {},
};

export default StarRating;
