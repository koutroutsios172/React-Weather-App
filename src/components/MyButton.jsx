import React from "react";

function MyButton () {
  const cities = [
    {
      id: 1,
      title: "Greece",
    },
    {
      id: 2,
      title: "Portugal",
    },
    {
      id: 3,
      title: "Hungary",
    },
    {
      id: 4,
      title: "Albania",
    },
    {
      id: 5,
      title: "Tokyo",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id}
          className="text-white text-lg font-medium"
          >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default MyButton;