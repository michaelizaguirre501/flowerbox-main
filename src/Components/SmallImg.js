import React from "react";

function SmallImg({ data }) {
  return (
    <div
      style={{
        width: "30%",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        opacity: 0.8,
      }}
    >
      <img src={data.image} alt="flower" />
      <div style={{ display: "flex", flexDirection: "row", padding: 15 }}>
        <h1
          style={{
            width: "100%",
            fontSize: 20,
            textAlign: "left",
            marginTop: 5,
            color: "blue",
          }}
        >
          {data.name}
        </h1>
        <p
          style={{
            backgroundColor: "#f9dde0",
            margin: "0 auto",
            width: "3rem",
            padding: 5,
          }}
        >
          ${data.price}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        {data.tags.map((tag) => (
          <p
            style={{
              backgroundColor: "#eeeeee",
              borderRadius: 5,
              margin: 10,
              flexDirection: "row",
              padding: 10,
            }}
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SmallImg;

