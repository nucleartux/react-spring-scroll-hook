import { useState, useRef, useEffect } from 'react';
import useSpring from 'react-use/lib/useSpring';

function useSpringState(): [number, (fn: (prev: number) => number) => void] {
  const [target, setTarget] = useState(0);
  const value = useSpring(target, 1, 10);

  return [value, setTarget];
}

export default function useSpringScroll() {
  const rowEl = useRef<HTMLDivElement>(null);
  const [value, setTarget] = useSpringState();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (shouldAnimate && rowEl.current) {
      rowEl.current.scrollLeft = value;
    }
  }, [value, shouldAnimate]);

  function handlePrevClick() {
    setTarget(target => {
      const next = target - 100;

      return next < 0 ? 0 : next;
    });
    setShouldAnimate(true);
  }

  function handleRightClick() {
    setTarget(target => {
      if (!rowEl.current) {
        return target;
      }

      const next = target + 100;
      const { scrollWidth, offsetWidth } = rowEl.current;
      const width = scrollWidth - offsetWidth;

      return next > width ? width : next;
    });
    setShouldAnimate(true);
  }

  function handleWheel() {
    setShouldAnimate(false);
  }

  return {
    ref: rowEl,
    onWheel: handleWheel,
    onRight: handleRightClick,
    onLeft: handlePrevClick,
  };
}
