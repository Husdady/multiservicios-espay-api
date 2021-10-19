const getWindowSize = (mq = 1024) => {
  let windowSize = {
    width: window.innerWidth,
    height: window.innerHeight,
    isLessThanMQ: window.innerWidth < mq,
    isGreaterThanMQ: window.innerWidth > mq,
  };
  return windowSize;
};

export default getWindowSize;
