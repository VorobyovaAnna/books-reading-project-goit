import React from 'react';
import { useState, useEffect } from 'react';
import { TimerСontainer, TimerHeader, Timer, LabelTimer } from './CoalTimer.styled';

const YearTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "January, 01, 2023";
  
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
    
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

    return (
    <>  
       <TimerHeader>До досягнення мети залишилось</TimerHeader>
       <TimerСontainer>
          {/* <p><span>ДН</span>{addLeadingZero(days)}:<span>ГОД</span>{addLeadingZero(hours)}:<span>ХВ</span>{addLeadingZero(minutes)}:<span>СЕК</span>{addLeadingZero(seconds)}</p> */}
          <Timer><span>{addLeadingZero(days)}</span><span>:</span><span>{addLeadingZero(hours)}</span><span>:</span><span>{addLeadingZero(minutes)}</span><span>:</span><span>{addLeadingZero(seconds)}</span></Timer>
          <LabelTimer><span>ДН</span><span>ГОД</span><span>ХВ</span><span>СЕК</span></LabelTimer>
          </TimerСontainer>
    </>
  );
};

export default YearTimer;