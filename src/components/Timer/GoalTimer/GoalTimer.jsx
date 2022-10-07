import React from 'react';
import { useState, useEffect } from 'react';
import { GoalTimerWrapper, TimerСontainer, TimerHeader, Timer, LabelTimer } from './GoalTimer.styled';
import { useGetTrainingQuery } from 'redux/RTKQuery/booksApi';

const GoalTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

   const { data: training } = useGetTrainingQuery();
  
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
    
  const getTime = () => {
    if (training?.training && training?.training.length !== 0) {
      const timeFinished = Date.parse(training?.training[0].finish);
      localStorage.setItem('finishTime', timeFinished);
    }
      const finishDate = localStorage.getItem('finishTime');
    
      const time = finishDate - Date.now();

      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    
      if ( Date.now() >= finishDate) {
        localStorage.removeItem('finishTime')
      }
    };

  useEffect(() => {
    const finishDate = localStorage.getItem('finishTime');

    const interval = setInterval(() => getTime(finishDate), 1000);

    return () => clearInterval(interval);
  }, []);

    return (
    <GoalTimerWrapper>  
       <TimerHeader>До досягнення мети залишилось</TimerHeader>
       <TimerСontainer>
          <Timer><span>{addLeadingZero(days)}</span><span>:</span><span>{addLeadingZero(hours)}</span><span>:</span><span>{addLeadingZero(minutes)}</span><span>:</span><span>{addLeadingZero(seconds)}</span></Timer>
          <LabelTimer><span>ДН</span><span>ГОД</span><span>ХВ</span><span>СЕК</span></LabelTimer>
          </TimerСontainer>
    </GoalTimerWrapper>
  );
};

export default GoalTimer;