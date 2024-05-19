import { useState } from "react";
import NavbarHome from "../components/NavbarHome";

export default function Producto() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const images = [
    "https://www.ixpap.com/images/2021/04/ixpap-25.jpg",
    "https://pixelz.cc/wp-content/uploads/2017/11/army-soldiers-desert-combat-uhd-4k-wallpaper.jpg",
    "https://wallpaperaccess.com/full/1225317.jpg",
    "https://wallpaperaccess.com/full/800029.jpg",
    "https://wallpaper.dog/large/10915368.jpg",
    "https://th.bing.com/th/id/R.9b74536f22ecf2d0fac475916b4c604a?rik=9mWlLuz%2f7NAv1w&riu=http%3a%2f%2fwww.solofondos.com%2fwp-content%2fuploads%2f2015%2f12%2feb030ae837c1c43420b377e290cd4937.jpg&ehk=oxB01DZ%2bAa%2bwUF6NIrv%2bdVzakS5dSd48DRb7%2fEIL%2fjA%3d&risl=&pid=ImgRaw&r=0",
  ];

  const texts = ["anime", "accion", "motos", "carros", "peliculas", "juegos"];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleMouseEnter = (index) => {
    const imageElements = document.querySelectorAll(".carousel-image");
    imageElements.forEach((element, i) => {
      if (i !== index) {
        element.style.animationPlayState = "paused";
      }
    });
  };

  const handleMouseLeave = () => {
    const imageElements = document.querySelectorAll(".carousel-image");
    imageElements.forEach((element) => {
      element.style.animationPlayState = "running";
    });
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`bg-${darkMode ? "black" : "white"} text-${
        darkMode ? "white" : "black"
      }`}
    >
      <NavbarHome />
      <div>
        <h1 className="text-4xl font-bold text-center mt-8">
          Todo lo que buscas
        </h1>
      </div>

      <div className="flex justify-center items-center mt-4">
        <div className="w-1000">
          <div
            className="flex justify-center overflow-x-auto"
            onMouseEnter={handleMouseLeave}
            onMouseLeave={handleMouseEnter}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className={`w-60 h-40 object-cover cursor-pointer carousel-image ${
                  selectedImage === image ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
          {selectedImage && (
            <div className="mt-4 flex flex-col items-center">
              <img
                src={selectedImage}
                alt="Selected Image"
                className="w-40 h-40 object-cover animate-bounce"
                style={{ marginTop: "100px" }}
              />
              <p className="mt-2 text-xl font-semibold text-center">
                {texts[images.indexOf(selectedImage)]}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          className={`px-4 py-2 rounded ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}
          onClick={handleDarkModeToggle}
        >
          Modo Oscuro
        </button>
      </div>
    </div>
  );
}
