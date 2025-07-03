import React, { useEffect, useState } from 'react';
import image1 from '../assest/banner/bannar6.jpg';
import image2 from '../assest/banner/bannar7.jpg';
import image3 from '../assest/banner/bannar3.jpeg';
import image4 from '../assest/banner/bannar4.jpeg';
import image5 from '../assest/banner/bannar1.jpeg';

import image1Mobile from '../assest/banner/b1_mobile.jpg';
import image2Mobile from '../assest/banner/b2_mobile.jpg';
import image3Mobile from '../assest/banner/b3_mobile.jpg';
import image4Mobile from '../assest/banner/b4_mobile.jpg';
import image5Mobile from '../assest/banner/b5_mobile.jpg';

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const BannerProduct = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const desktopImages = [image1, image2, image3, image4, image5];
    const mobileImages = [image1Mobile, image2Mobile, image3Mobile, image4Mobile, image5Mobile];

    const nextImage = () => {
        if (desktopImages.length - 1 > currentImage) {
            setCurrentImage(prev => prev + 1);
        }
    };

    const prevImage = () => {
        if (currentImage !== 0) {
            setCurrentImage(prev => prev - 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (desktopImages.length - 1 > prev ? prev + 1 : 0));
        }, 5000);

        return () => clearInterval(interval);
    }, [desktopImages.length, currentImage]);

    return (
        <div className='container mx-auto px-4 rounded'>
            <div className='h-56 md:h-72 w-full bg-slate-200 relative'>

                {/* Navigation Buttons */}
                <div className='absolute z-10 h-full w-full md:flex items-center hidden '>
                    <div className='flex justify-between w-full text-2xl'>
                        <button onClick={prevImage} className='bg-white shadow-md rounded-full p-1'>
                            <FaAngleLeft />
                        </button>
                        <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'>
                            <FaAngleRight />
                        </button>
                    </div>
                </div>

                {/* Desktop and Tablet Version */}
                <div className='hidden md:flex h-full w-full overflow-hidden'>
                    {desktopImages.map((imageURL, index) => (
                        <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURL} style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                            <img src={imageURL} alt="Banner Image" className='w-full h-full' />
                        </div>
                    ))}
                </div>

                {/* Mobile Version */}
                <div className='flex h-full w-full overflow-hidden md:hidden'>
                    {mobileImages.map((imageURL, index) => (
                        <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURL} style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                            <img src={imageURL} alt="Mobile Banner Image" className='w-full h-full object-cover' />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default BannerProduct;
