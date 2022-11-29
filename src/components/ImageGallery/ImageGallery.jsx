import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, ...otherProps }) => (
    <section>
        <ul className={css.ImageGallery}>
            {images.map(image => (
                <ImageGalleryItem key={image.id} image={image} { ...otherProps } />
            ))}
        </ul>
    </section>
);

ImageGallery.prototypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
    otherProps: PropTypes.func.isRequired,
};

export default ImageGallery;