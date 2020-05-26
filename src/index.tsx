import { useState, useRef, useEffect } from 'react';
import useSpring from 'react-use/lib/useSpring';

function useSpringState(): [number, (fn: (prev: number) => number) => void] {
  const [target, setTarget] = useState(0);
  const value = useSpring(target, 1, 10);

  return [value, setTarget];
}

export default function useSpringScroll({
  step = 100,
}: { step?: number } = {}) {
  const rowEl = useRef<HTMLDivElement>(null);
  const [value, setTarget] = useSpringState();
  const [direction, setDirection] = useState<string | undefined>();

  useEffect(() => {
    if (
      rowEl.current &&
      ((direction === 'left' && rowEl.current.scrollLeft > value) ||
        (direction === 'right' && rowEl.current.scrollLeft < value))
    ) {
      rowEl.current.scrollLeft = value;
    }
  }, [value, direction]);

  function handlePrevClick() {
    setTarget(target => {
      const next = target - step;

      return next < 0 ? 0 : next;
    });
    setDirection('left');
  }

  function handleRightClick() {
    setTarget(target => {
      if (!rowEl.current) {
        return target;
      }

      const next = target + step;
      const { scrollWidth, offsetWidth } = rowEl.current;
      const width = scrollWidth - offsetWidth;

      return next > width ? width : next;
    });
    setDirection('right');
  }

  function handleWheel() {
    setDirection(undefined);
  }

  return {
    ref: rowEl,
    reset: handleWheel,
    right: handleRightClick,
    left: handlePrevClick,
  };
}
