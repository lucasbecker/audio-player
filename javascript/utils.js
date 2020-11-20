function secondsToMinutes(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);

  if(String(minutes).length > 2) {
    minutes = ('0'+minutes).slice(-3)
  }else {
    minutes = ('0'+minutes).slice(-2)
  };
 
  
  return `${Number(minutes)}:${('0'+seconds).slice(-2)}`;
}

export {
  secondsToMinutes
}