import React, { useEffect, useRef, useState } from 'react';
import data from '../assets/uavsData';
import { motion } from 'framer-motion';

const ProductPage = () => {
    const [selectedItemData, setSelectedItemData] = useState(data[0]);
    const { id, category, name, specifications, imgSrc, audioSrc } = selectedItemData;

    const audioRef = useRef();
    const sourceRef = useRef();

    useEffect(() => {
        // To fix the on load scroll issue with framer motion
        scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

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
            <motion.div
                initial={{
                    scale: 0,
                    opacity: 0.5
                }}
                animate={{
                    scale: 1,
                    opacity: 1
                }}
                transition={{
                    duration: 0.5,
                }}
                className='flex flex-col gap-6 lg:w-2/4'
            >
                <img
                    src={imgSrc} alt={name} className='w-full h-full aspect-square object-cover rounded-xl shadow-neutral-500 shadow-lg drop-shadow-2xl'
                />
                <motion.div
                    initial={{
                        scale: 0,
                        opacity: 0.5
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.2,
                        delay: 0.5
                    }}
                    className='flex flex-row justify-center gap-x-3 h-24'
                >
                    {data.map((item, index) => (
                        <img
                            key={index}
                            src={item.imgSrc}
                            alt={"img-" + item.id}
                            className={`w-24 h-24 rounded-md cursor-pointer duration-200 shadow-sky-200 shadow-lg scale-110 ${id !== item.id && "blur-[2px] shadow-none hover:blur-none scale-95 hover:scale-100"} transition-all duration-200`}
                            onClick={() => setSelectedItemData(item)}
                        />
                    ))}
                </motion.div>
            </motion.div>

            {/* DETAILS */}
            <motion.div
                initial={{
                    opacity: 0,
                    x: '50%'
                }}
                animate={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    duration: 0.5,
                }}
                className='flex flex-col gap-4 lg:w-2/4'
            >
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
            </motion.div>
        </div>
    );
};

export default ProductPage;