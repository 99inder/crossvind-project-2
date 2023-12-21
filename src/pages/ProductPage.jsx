import React, { useEffect, useRef, useState } from 'react';
import data from '../assets/uavsData';

const ProductPage = () => {
    const [selectedItemData, setSelectedItemData] = useState(data[0]);
    const { category, name, specifications, imgSrc, audioSrc } = selectedItemData;

    const audioRef = useRef();
    const sourceRef = useRef();

    function formatString(input) {
        // Replace underscores with spaces
        let formattedString = input.replace(/_/g, ' ');

        // Capitalize the first letter of each word
        formattedString = formattedString.replace(/\b\w/g, function (match) {
            return match.toUpperCase();
        });

        return formattedString;
    }

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.load(audioSrc);
        }
    }, [selectedItemData])

    return (
        <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={imgSrc} alt={name} className='w-full h-full aspect-square object-cover rounded-xl' />
                <div className='flex flex-row justify-center gap-x-3 h-24'>
                    {data.map((item, index) => (
                        <img
                            key={index}
                            src={item.imgSrc}
                            alt={"img-" + item.id}
                            className='w-24 h-24 rounded-md cursor-pointer'
                            onClick={() => setSelectedItemData(item)}
                        />
                    ))}
                </div>
            </div>

            {/* DETAILS */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className='text-violet-600 font-semibold'>{category}</span>
                    <h1 className='text-3xl font-bold'>{name}</h1>
                </div>

                <audio ref={audioRef} controls className='w-full max-w-sm'>
                    <source ref={sourceRef} src={audioSrc} type="audio/mp3" />
                </audio>
                {/* Specifications */}
                <div>
                    <p className='text-2xl font-semibold'>Specifications: </p>
                    {specifications && (
                        <ul className='mt-6 flex flex-col gap-y-2'>
                            {Object.entries(specifications).map(([key, value]) => (
                                <li key={key} className='grid grid-cols-2 text-slate-700'>
                                    <strong>{formatString(key)}</strong>
                                    <p>{value}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;