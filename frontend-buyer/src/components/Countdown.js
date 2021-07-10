import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useSelector } from 'react-redux';
import './countdown_style.css';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 80,
  strokeWidth: 6,
};

const dayDeclensions = ['День', 'Дня', 'Дней'];
const hourDeclensions = ['Час', 'Часа', 'Часов'];

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const Countdown = ({ date_end, date_added, key }) => {
  const renderTime = (dimension, time) => {
    // console.log(time);
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };
  const counter = useSelector((state) => state.lottery.counter);

  console.log('inside counter', key);

  const startTime = (Date.now() - Date.parse(counter.date_added)) / 1000; // use UNIX timestamp in seconds
  const endTime = (Date.parse(counter.date_end) - Date.now()) / 1000; // use UNIX timestamp in seconds

  const remainingTime = endTime - startTime;

  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  console.log('remainingTime', remainingTime);

  const getDeclinedWord = (number, list) => {
    if (number === 1) {
      return list[0];
    } else if (number >= 5 || number === 0) {
      return list[2];
    } else {
      return list[1];
    }
  };

  return (
    <div className="App">
      <CountdownCircleTimer
        {...timerProps}
        colors={[['#7E2E84']]}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
        key={key}
      >
        {({ elapsedTime }) => {
          // console.log(elapsedTime); Date.now() / (1000 * daySeconds)
          return renderTime(
            getDeclinedWord(
              getTimeDays(daysDuration - elapsedTime),
              dayDeclensions
            ),
            getTimeDays(daysDuration - elapsedTime)
          );
        }}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        key={key}
        colors={[['#D14081']]}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > hourSeconds,
        ]}
      >
        {({ elapsedTime }) => {
          // console.log('fuck', elapsedTime);
          // console.log('poop', endTime + startTime);
          return renderTime(
            getDeclinedWord(
              getTimeHours(daySeconds - elapsedTime),
              hourDeclensions
            ),
            getTimeHours(daySeconds - elapsedTime)
          );
        }}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        key={key}
        colors={[['#EF798A']]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds,
        ]}
      >
        {({ elapsedTime }) =>
          renderTime('Мин.', getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        key={key}
        colors={[['#218380']]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > 0,
        ]}
      >
        {({ elapsedTime }) => renderTime('Сек.', getTimeSeconds(elapsedTime))}
      </CountdownCircleTimer>
    </div>
  );
};
export default Countdown;
