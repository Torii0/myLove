import { lazy, useEffect } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgShare from "lightgallery/plugins/share";
import lgHash from "lightgallery/plugins/hash";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import galeria from "../assets/galeria";
import "./GalleryPage.css";

const GalleryPage = () => {
  useEffect(() => {
    const container = document.querySelector(".masonry-gallery-demo");
    if (container) {
      const msnry = new Masonry(container, {
        itemSelector: ".gallery-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
      });

      imagesLoaded(container).on("progress", () => {
        msnry.layout();
      });
    }
  }, []);

  return (
    <div className="page">
      <div className="overlay">
        <Link to="/menu" className="title">
          <Title />
        </Link>
        <div className="gallery-footer">
          <h2>Stwórzmy kolejne wspomnienia razem 💗</h2>
        </div>
        <LightGallery
          elementClassNames={"masonry-gallery-demo"}
          plugins={[lgZoom, lgShare, lgHash]}
          speed={500}
        >
          <div className="grid-sizer"></div>
          {Object.keys(galeria).map((key) => {
            const src = galeria[key];

            return (
              <a
                key={key}
                className="gallery-item"
                data-src={src}
                data-sub-html="<h4><3</h4><p>Description of the photo.</p>"
              >
                <img
                  alt="Gallery"
                  className="img-responsive"
                  src={src}
                  onLoad={lazy}
                />
              </a>
            );
          })}
        </LightGallery>
      </div>
    </div>
  );
};

export default GalleryPage;
