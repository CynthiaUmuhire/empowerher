import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
        if (!divRef.current || isFocused) return;

        const div:HTMLElement = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };
    return (
            <div
                ref={divRef}
                onMouseMove={handleMouseMove}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative h-screen grid place-content-center  backdrop-blur-md bg-transparent"
            >
                <div
                    className='pointer-events-none absolute -inset-px opacity-0  transition duration-300'
                    style={{
                        opacity,
                        background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
                    }}
                />
                <div className="max-w-lg px-10 sm:px-0 mx-auto items-center justify-center flex flex-col gap-5 font-medium ">
                    <p className='text-md text-slate-300 animate-slide-in-from-left'>Welcome to Nurture Nest, A Community of Empowerment and Support. We specialize in teenage pregnancies, providing a platform for young mothers to share their stories and learn from each other. Join us today and start your journey of growth, change, and healing!</p>
                    <Link to="/login" className="rounded-md bg-gray-300 text-center py-2 px-3 text-violet-950">Join the community</Link>
                </div>
            </div>
            );
}

export default Landing
