import React from 'react';
import Header from './Header';
import PotteryControl from './PotteryControl';

function App() {
  return (
   <React.Fragment>
    <div className="container mx-auto">
    <Header />
    <PotteryControl />
    </div>
   </React.Fragment>
  );
}

export default App;
