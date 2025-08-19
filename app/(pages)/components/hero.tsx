"use client"
import { useEffect, useCallback, useState, useRef } from 'react';

const services = [
    "barbering",
    "garden maintenance",
    "shopping",
    "car repair",
    "home cleaning",
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
        <div className="w-full px-6 py-16 md:py-24 min-h-[400px] flex justify-center items-center text-white bg-gradient-to-r from-black to-gray-800">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Choose from 1000s of services, like{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        {currentService}
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                    Connect with trusted professionals in your area and get things done effortlessly
                </p>
            </div>
        </div>
    );
};

export default HomeHero;
