import { useEffect, useState, useRef } from 'preact/hooks';
import Lottie from 'react-lottie-player/dist/LottiePlayerLight';

const LottieAnimComponent = ({ animationData, speed, value }) => {
    const [direction, setDirection] = useState(1);
    const [play, setPlay] = useState(false);
    const prevValueRef = useRef();

    useEffect(() => {
        prevValueRef.current = value;
    });

    const prevValue = prevValueRef.current;

    useEffect(() => {
        if (prevValue !== value && !play) {
            setDirection(value ? -1 : 1);
            setPlay(true);
        }
    }, [value, prevValue, play]);

    return (
        <Lottie
            animationData={animationData}
            play={play}
            speed={speed}
            direction={direction}
            onComplete={() => setPlay(false)}
        />
    );
};

export default LottieAnimComponent;
