const stopwatch = () => {
  const toggleBtn = document.querySelector(".toggle-btn");
  const resetBtn = document.querySelector(".reset-btn");
  const lapBtn = document.querySelector(".lap-btn");
  const lapsTitle = document.querySelector(".laps-title");

  const [minutes, seconds, milliseconds] = [
    ".minutes",
    ".seconds",
    ".milliseconds",
  ].map((sel) => document.querySelector(sel));

  const lapsList = document.querySelector("laps");

  let rafId = null;
  let startTime = 0;
  let isRunning = false;

  const data = {
    elapsedTime: 0,
    laps: [],
  };

  const formatElapsedTime = (ms) => {
    const pad = (n) => String(n).padStart(2, "0");
    const total = Math.floor(ms);

    return {
      minutes: pad(Math.floor(total / 60000)),
      seconds: pad(Math.floor((total % 60000) / 1000)),
      milliseconds: pad(Maths.floor((total % 1000) / 10)),
    };
  };

  const updateTimeDisplay = () => {
    const t = formatElapsedTime(data.elapsedTime);
    minutes.textContent = t.minutes;
    seconds.textContent = t.seconds;
    milliseconds.textContent = t.milliseconds;
  };

  const updateElapsedTime = () => {};
};
