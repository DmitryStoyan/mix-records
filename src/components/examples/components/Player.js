import { useEffect, useState } from "react";
import artik from "../sounds/artik.mp3";
import styles from "./styles.module.css";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import useSound from "use-sound";

export function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(artik);

  const playingButton = () => {
    if (isPlaying) {
      pause(); // приостанавливаем воспроизведение звука
      setIsPlaying(false);
    } else {
      play(); // воспроизводим аудиозапись
      setIsPlaying(true);
    }
  };

  // текущее положение звука в минутах и секундах
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  // текущая позиция звука в секундах
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    const time = {
      min: min,
      sec: secRemain,
    };
    setCurrTime({
      min,
      sec: secRemain,
    });

    // задаем значение переменной time
    setTime(time);
  }, [duration]);

  // определяем переменную time
  const [time, setTime] = useState({
    min: "",
    sec: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // устанавливаем состояние с текущим значением в секундах
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  return (
    <div className={styles.wrapper}>
      <PlayArrowRoundedIcon
        className={styles.button_play}
        onClick={playingButton}
      />
      <input
        type="range"
        min="0"
        max={duration / 1000}
        default="0"
        value={seconds}
        onChange={(e) => {
          sound.seek([e.target.value]);
        }}
        className={styles.range}
      />
      <div className={styles.time}>
        <p className={styles.time_text}>
          {currTime.min}:{currTime.sec}
        </p>
        <p className={styles.time_text}>/</p>
        <p className={styles.time_text}>
          {time.min}:{time.sec}
        </p>
      </div>
    </div>
  );
}
