import React from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';
import { sliderData } from './components/sliderData'
// function App() {
//   return (
//     <div className="App">     
//   <button className="arrow">⇦</button>
//   <ul>
//   <li><img alt ="not found" src="https://en.js.cx/carousel/1.png" /></li>
//   </ul>
//   <button className="arrow">⇨</button>

//     </div>
//   );
// }

const App = () => {
  return (
    <div className="App">
      <ImageSlider slides={sliderData} />
    </div>
  );
}
export default App;
