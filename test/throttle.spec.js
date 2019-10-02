import throttle from '../src/components/scroll-progress/helpers/throttle';

describe('Throttle helper function', () => {
  const TIMEOUT = 100;
  const callback = jest.fn();
  const throttled = throttle(callback, TIMEOUT);

  test('should run the callback function on initial load', () => {
    throttled();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('should run function only once, when invoked twice, one after another', () => {
    throttled();
    throttled();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test(`should run function twice after invoking for the second time after ${TIMEOUT}ms`, (done) => {
    throttled();
    const runAfterTime = () => new Promise((resolve) => {
      setTimeout(() => {
        throttled();
        throttled();
        resolve();
      }, TIMEOUT);
    });
    runAfterTime()
      .then(() => {
        expect(callback).toHaveBeenCalledTimes(2);
        done();
      });
  });
});
