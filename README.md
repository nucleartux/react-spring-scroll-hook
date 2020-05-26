# react-spring-scroll-hook

Simple hook for creating smooth scroll list with arrows.

![demo](assets/scroll.gif)

## Install

```
yarn add react-spring-scroll-hook
```

## Example

```
import useSpringScroll from 'react-spring-scroll-hook';

const {
  ref,
  left: handlePrevClick,
  reset: handleWheel,
  right: handleRightClick
} = useSpringScroll({ step: 100 });

return <div>
  <img src={arrowPrevIcon} onClick={handlePrevClick} />

  <div className="overflow" onWheel={handleWheel}>
    {children}
  </div>

  <img src={arrowNextIcon} onClick={handleRightClick} />
</div>
```
