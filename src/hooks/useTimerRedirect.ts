import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export const useTimerRedirect = () => {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0);
  const router = useRouter();
 
  useEffect(() => {
    setSeconds(0);
    setMinutes(0);
  }, []);

  console.log(seconds, minutes);

  useEffect(() => {

    const timer = setInterval(() => {
        setSeconds(seconds + 1);
    }, 1000)

    if (seconds === 60) {
      setSeconds(0);
      setMinutes(minutes + 1);
    }
       
    if (minutes === 2) {
        router.push('/');
    }

    return () => {
        clearInterval(timer);
    };
  }, [seconds]);

  const resetCount = () => {
    setSeconds(0);
    setMinutes(0);
  };

  return {minutes, seconds, resetCount};
}