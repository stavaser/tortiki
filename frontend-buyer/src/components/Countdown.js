import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
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

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const Countdown = () => {
  const stratTime = Date.now(); // use UNIX timestamp in seconds
  const endTime = stratTime + 99990; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="App">
      <CountdownCircleTimer
        {...timerProps}
        colors={[['#7E2E84']]}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime }) =>
          renderTime(
            (getTimeDays(daysDuration - elapsedTime) === 1 &&
              dayDeclensions[0]) ||
              ((getTimeDays(daysDuration - elapsedTime) >= 5 ||
                getTimeDays(daysDuration - elapsedTime) === 0) &&
                dayDeclensions[2]) ||
              (getTimeDays(daysDuration - elapsedTime) <= 4 &&
                dayDeclensions[1]),

            getTimeDays(daysDuration - elapsedTime)
          )
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[['#D14081']]}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > hourSeconds,
        ]}
      >
        {({ elapsedTime }) =>
          renderTime(
            (getTimeHours(daySeconds - elapsedTime) === 1 &&
              hourDeclensions[0]) ||
              ((getTimeHours(daySeconds - elapsedTime) >= 5 ||
                getTimeHours(daySeconds - elapsedTime) === 0) &&
                hourDeclensions[2]) ||
              (getTimeHours(daySeconds - elapsedTime) <= 4 &&
                hourDeclensions[1]),
            getTimeHours(daySeconds - elapsedTime)
          )
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
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
