import { useEffect, useState } from "react";
import images from "../assets/images";

const gallery = images

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
    //if an image isn't selencted make no change
    if (!selectedImage) return;

    //if the esc key is pressed set image value to null
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    //smurf on the window, if any key is pressed run handleKeyDown func
    window.addEventListener("keydown", handleKeyDown);

    //return smurf for any key passing the info from selected image
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <div className="bg-[#181818] w-4/5 my-10 p-5 grid grid-cols-4 gap-5 mx-auto rounded-lg">
        
        {/* map the array of images onClick set state to the selected image sending image with key*/}
        {gallery.map((image, index) => (
          <div className="card image-full shadow-sm" key={`${image.src}-${index}`}>
            <figure>
              <button
                type="button"
                className="block h-full w-full cursor-zoom-in"
                onClick={() => setSelectedImage(image)}
                aria-label={`View ${image.alt} image`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </button>
            </figure>
          </div>
        ))}
      </div>

    {/* Pop out image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-4 text-4xl leading-none text-white"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            &times;
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[90vh] max-w-[90vw] rounded-md object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
