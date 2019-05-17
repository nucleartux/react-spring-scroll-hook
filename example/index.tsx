import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useSpringScroll from '../src/index';

const App = () => {
  const {
    ref,
    onLeft: handlePrevClick,
    onWheel: handleWheel,
    onRight: handleRightClick,
  } = useSpringScroll();

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={handlePrevClick}>{'<'}</button>
      <div
        ref={ref}
        onWheel={handleWheel}
        style={{ width: 300, height: 20, overflow: 'scroll' }}
      >
        <div style={{ whiteSpace: 'pre' }}>
          very long list, very long list,very long list,very long list,very long
          list,very long list,very long list,very long list, very long list,very
          long list,very long list,very long list,very long list,very long list,
        </div>
      </div>
      <button onClick={handleRightClick}>{'>'}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
