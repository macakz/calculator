import './Main.css';

import Footer from './Footer'
import Header from './Header'
import Calculator from './Calculator'


function App () {
  return (
    <>
      <div className="pageContainer">
        <div className="contentWrap">
          <Header />
          <Calculator />
        </div>
        <Footer />
      </div>
    </>

  );
}

export default App;
