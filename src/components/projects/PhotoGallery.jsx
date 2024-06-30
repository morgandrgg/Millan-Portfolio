"use client"
import "./PhotoGalley.css";
import { useState,useEffect } from "react"; // Import useState from React
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";// Import motion and AnimatePresence from Framer Motion

const imagePaths = Array.from({ length: 71 }, (_, i) => `/images/${i + 1}.jpg`);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Adjust stagger for animation
    },
  },
};

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [rotationAngles, setRotationAngles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAngles = imagePaths.map(() => getRandomTiltAngle());
      setRotationAngles(newAngles);
    }, 2000); // Adjust interval duration as needed (e.g., 2000ms = 2 seconds)

    return () => clearInterval(interval);
  }, []); // Run effect once on component mount

  const getRandomTiltAngle = () => {
    return Math.random() * 40 - 20; // Generates random tilt angle between -20deg and +20deg
  };

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (selectedImage !== null) {
      let newIndex = selectedImage + direction;
      if (newIndex < 0) newIndex = imagePaths.length - 1;
      if (newIndex >= imagePaths.length) newIndex = 0;
      setSelectedImage(newIndex);
    }
  };

  return (
    <div className="photo-gallery-container">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        // className="photo-gallery-content"
        className={clsx(
          "photo-gallery-content custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8"
        )}
      >
        {imagePaths.map((path, index) => (
          <motion.img
            key={index}
            src={path}
            alt={`Image ${index + 1}`}
            className="image-item"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: rotationAngles[index] }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            loading="lazy" // Enable lazy loading for images
            onClick={() => openModal(index)}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="modal-content">
              <motion.img
                src={imagePaths[selectedImage]}
                alt={`Image ${selectedImage + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="modal-image"
              />
              <motion.button
                className="modal-close-btn flex items-center justify-center
        custom-bg"
                onClick={closeModal}
              >
                Close
              </motion.button>
              <motion.button
                className="modal-nav-btn modal-prev-btn flex items-center justify-center
        custom-bg"
                onClick={() => navigateImage(-1)}
              >
                Prev
              </motion.button>
              <motion.button
                className="modal-nav-btn modal-next-btn flex items-center justify-center
        custom-bg"
                onClick={() => navigateImage(1)}
              >
                Next
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;