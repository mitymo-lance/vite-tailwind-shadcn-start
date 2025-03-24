interface GameTimerState {
  duration: number;
  startTime?: Date;
  endTime?: Date;
  intervalId?: NodeJS.Timeout;
  isRunning: boolean;
}

const gameTimer: GameTimerState = {
  duration: 0,
  isRunning: false
};

const gameTimerService = {
  set: (duration: number) => {
    gameTimer.duration = duration;
    gameTimer.isRunning = false;
  },
  
  get: () => {
    return gameTimer.duration;
  },

  start: () => {
    if (!gameTimer.isRunning) {
      gameTimer.startTime = new Date();
      gameTimer.isRunning = true;
      gameTimer.intervalId = setInterval(() => {
        if (gameTimer.duration > 0) {
          gameTimer.duration--;
        } else {
          gameTimerService.stop();
        }
      }, 1000);
    }
  },

  stop: () => {
    if (gameTimer.isRunning) {
      gameTimer.endTime = new Date();
      gameTimer.isRunning = false;
      if (gameTimer.intervalId) {
        clearInterval(gameTimer.intervalId);
        gameTimer.intervalId = undefined;
      }
    }
  },

  elapsed: (): number => {
    if (!gameTimer.endTime || !gameTimer.startTime) return 0;
    return gameTimer.endTime.getTime() - gameTimer.startTime.getTime();
  },
  
  countDown: (): number => {
    return gameTimer.duration;
  },

  isRunning: (): boolean => {
    return gameTimer.isRunning;
  },

  reset: () => {
    gameTimerService.stop();
    gameTimer.duration = 0;
    gameTimer.startTime = undefined;
    gameTimer.endTime = undefined;
  }
};

export default gameTimerService;