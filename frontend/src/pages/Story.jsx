import { useRef, useState } from 'react';
import stories from '../../util';

const Story = ({params}) => {
    console.log(params);
    
    const { title, story } = stories[0];
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
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
        <section className="max-w-screen-2xl mx-auto flex flex-col items-center  justify-center">
            <div
                ref={divRef}
                onMouseMove={handleMouseMove}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='relative flex flex-col  max-w-2xl mx-auto items-center justify-center rounded-xl  bg-gray-300 px-8 py-16 shadow-2xl'
            >
                <div
                    className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
                    style={{
                        opacity,
                        background: `radial-gradient(150px circle at ${position.x}px ${position.y}px, rgb(46,16,101,0.4), transparent 40%)`,
                    }}
                />
                <h3 className="text-lg font-medium text-gray-900">
                    {title}
                </h3>
                <p className="mt-2  text-sm/relaxed text-gray-500">
                    {story}
                </p>
            </div>
       </section>
    );
};

export default Story;

