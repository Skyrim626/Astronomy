function NewsCard({
  customHeight,
  newsImage,
  categories,
  newsTitle,
  customFontSize,
}) {
  const defaultHeight = 250;
  const defaultFontSize = "18";

  return (
    <>
      <div
        className="newsCard"
        style={{
          height: `${customHeight || defaultHeight}px`,
          cursor: "pointer",

          position: "relative",
        }}
      >
        <img
          src={newsImage}
          style={{ width: "100%", height: "100%" }}
          alt="newsImage"
        />
        <div
          className="newsHeadline"
          style={{
            position: "absolute",
            padding: "0 0.5em 0 0.5em",
            bottom: "0",
          }}
        >
          <div
            className="newsCategories"
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "4px",
            }}
          >
            {categories ? (
              categories.map((category, index) => (
                <a
                  key={index}
                  href=""
                  style={{
                    background: "#5CB85C",
                    padding: "2px 5px",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {category}
                </a>
              ))
            ) : (
              <p>No categories available.</p>
            )}
          </div>
          <h4 style={{ fontSize: `${customFontSize || defaultFontSize}px` }}>
            {newsTitle || "No Title"}
          </h4>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
