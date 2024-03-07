import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (

    <>

<Navbar title = "TextUtils" AboutText = " About TextUtils"></Navbar>

<div className="container">
<TextForm heading = "Enter the text to analyse"></TextForm>

</div>
    </>
  );
}

export default App;
