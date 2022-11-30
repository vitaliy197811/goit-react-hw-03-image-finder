import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, showModal, imageURL, imagelAlt, }) => (
    <>
        {images.map(image => (
            <li key={image.id} className={css.ImageGalleryItem} onClick={showModal}>
                <img
                    src={image.webformatURL}
                    alt={image.tags}
                    className={css.ImageGalleryItemImage}
                    onClick={() => {
                        imageURL(image.largeImageURL);
                        imagelAlt(image.tags);
                    }}
                />
            </li>
        ))}
    </>
);

ImageGalleryItem.prototypes = {
    image: PropTypes.arrayOf({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }),
    showModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;