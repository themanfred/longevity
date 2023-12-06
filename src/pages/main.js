import { useState, useEffect } from 'react';
import ImageGallery from "react-image-gallery";



export default function Main() {
    // Automatically import all jpeg files from the assets folder
    function resizeImage(base64Str, maxWidth = 100, maxHeight = 100) {
    return new Promise((resolve) => {
        let img = new Image();
        img.src = base64Str;
        img.onload = () => {
        let canvas = document.createElement('canvas');
        const MAX_WIDTH = maxWidth;
        const MAX_HEIGHT = maxHeight;
        let width = img.width;
        let height = img.height;
    
        if (width > height) {
            if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
            }
        } else {
            if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
            }
        }
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL());
        };
    });
    }
    
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function loadAndResizeImages() {
            const imageContext = require.context('../assets', false, /\.jpeg$/);
            const loadedImages = imageContext.keys().map(item => imageContext(item));

            const resizedThumbnails = await Promise.all(loadedImages.map(async (src) => {
                const galleryImage = await resizeImage(src, 800, 600);
                const thumbnail = await resizeImage(src, 250, 150);


                return {
                    original: galleryImage,
                    thumbnail: thumbnail
                };
            }));

            setImages(resizedThumbnails);
        }

        loadAndResizeImages();
    }, []);

    return (
        <div className="gallery ">
            <h1>05/12/2023</h1>
            <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} autoPlay={true} slideInterval={5000} />
        </div>
    );
}
