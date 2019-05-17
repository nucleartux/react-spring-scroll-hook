# react-spring-scroll-hook

![demo](assets/scroll.gif)

Simple hook for creating smooth scroll list with arrows.

## Example

```
import useSpringScroll from 'react-spring-scroll-hook';

const {
  ref,
  onLeft: handlePrevClick,
  onWheel: handleWheel,
  onRight: handleRightClick
} = useSpringScroll();

return <div>
  <img src={arrowPrevIcon} onClick={handlePrevClick} />

  <div className="overflow" onWheel={handleWheel}>
    {children}
  </ScrollRow>

  <img src={arrowNextIcon} onClick={handleRightClick} />
</div>
```
