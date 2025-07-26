"use client"
import { useEffect, useCallback, useState, useRef } from 'react';

const services = [
    "barbering",
    "garden maintenance",
    "shopping",
    "car repair",
    "home clearning",
];

const HomeHero = () => {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [currentService, setCurrentService] = useState<string>(services[0]);
    const nextService = useCallback(() => {
        const currentIndex = services.indexOf(currentService);
        if (currentIndex + 1 >= services.length) {
            setCurrentService(services[0]);
        } else {
            setCurrentService(services[currentIndex + 1])
        }
        timeoutRef.current = setTimeout(nextService, 1500);
    }, [currentService])

    useEffect(() => {
        timeoutRef.current = setTimeout(nextService, 1500);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [nextService])

    return (
        <div className="w-screen p-3 min-h-[300px] flex justify-start items-center text-white bg-black">
            <h1 className="text-3xl">Choose from 1000s of services, like {currentService}</h1>
        </div>
    );
};

export default HomeHero;
