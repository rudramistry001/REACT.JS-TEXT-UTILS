

import './App.css';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (

    <>

<Navbar title = "TextUtils" AboutText = " About TextUtils"></Navbar>

<div className="container">
<TextForm heading = "Enter the text to analyse"></TextForm>
<ContactForm></ContactForm>
</div>
    </>
  );
}

export default App;
