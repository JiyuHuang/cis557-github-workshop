import './App.css';
import img1 from './imgs/img1.jpeg';
import img2 from './imgs/img2.jpeg';
import img3 from './imgs/img3.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="TxtBox">
          This is the first text box.
        </div>
        <div className="TxtBox">
          This is the second text box.
        </div>
        <div className="TxtBox">
          This is the third text box.
        </div>
        <div className="ImgBox">
          <img src={img1} alt="Img1"></img>
        </div>
        <div className="ImgBox">
          <img src={img2} alt="Img2"></img>
        </div>
        <div className="ImgBox">
          <img src={img3} alt="Img3"></img>
        </div>
      </header>
    </div>
  );
}

export default App;
