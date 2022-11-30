import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, ...otherProps }) => (
    <section>
        <ul className={css.ImageGallery}>
                <ImageGalleryItem images={images} { ...otherProps } />
        </ul>
    </section>
);

ImageGallery.prototypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default ImageGallery;