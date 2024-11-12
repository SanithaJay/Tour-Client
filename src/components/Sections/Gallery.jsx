import React from 'react';
import '../../styles/Gallery.css';
import image1 from '../../assets/images/gallery-01.jpg';
import image2 from '../../assets/images/gallery-02.jpg';
import image3 from '../../assets/images/gallery-03.jpg';
import image4 from '../../assets/images/gallery-04.jpg';
import image5 from '../../assets/images/gallery-05.jpg';
import image6 from '../../assets/images/gallery-06.jpg';
import image7 from '../../assets/images/gallery-07.jpg';
import image8 from '../../assets/images/gallery-08.jpg';

const Gallery = () =>
{
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8 ];
        const columns = [[], [], [], []];
    images.forEach((image, index) => {
        columns[index % 4].push(image);
    });
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h6 className="fontFamily p-2 rounded-pill bg-warning gallery">
                        Gallery
                    </h6>
                    <div className="col-md-12 mt-2">
                        <h2>Visit our customers tour gallery</h2>
                    </div>
                </div>
            </div>
            <div className="gallery-container mt-3">
                {columns.map((column, colIndex) => (
                    <div key={colIndex}>
                        {column.map((image, imgIndex) => (
                            <div className="gallery-item" key={imgIndex}>
                                <img src={image} alt={`Gallery item ${imgIndex + 1}`} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery