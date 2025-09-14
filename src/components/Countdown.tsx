import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string; // format ISO "2025-12-31T19:00:00"
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4 lg:gap-8 text-center text-white py-2 animate-pulse">
      {/* Days */}
      <div className="bg-primary p-4 rounded-2xl shadow-md w-18">
        <div className="text-xl font-bold">{timeLeft.days}</div>
        <div className="text-xs">Hari</div>
      </div>
      {/* Hours */}
      <div className="bg-primary p-4 rounded-2xl shadow-md w-18">
        <div className="text-xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs">Jam</div>
      </div>
      {/* Minutes */}
      <div className="bg-primary p-4 rounded-2xl shadow-md w-18">
        <div className="text-xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs">Menit</div>
      </div>
      {/* Seconds */}
      <div className="bg-primary p-4 rounded-2xl shadow-md w-18">
        <div className="text-xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs">Detik</div>
      </div>
    </div>
  );
};

export default Countdown;
