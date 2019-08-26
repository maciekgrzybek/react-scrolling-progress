function throttle(fn, timeout) {
  let ready = true;

  return (...args) => {
    if (!ready) {
      return;
    }

    ready = false;
    fn(...args);

    setTimeout(() => {
      ready = true;
    }, timeout);
  };
}
export default throttle;
