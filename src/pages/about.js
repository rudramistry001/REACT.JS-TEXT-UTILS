import {React, useState}from 'react'

export default function About() {
    
    const [mystyle, setMyStyle] = useState( {
        color:'white',
        backgroundColor:'black',
        border: '1px solid white'
    });

    const [btnText, setbtnText] = useState('Enable Light Mode');

  const toggleStyle = ()=>{
        if(mystyle.color === 'white'){
           setMyStyle({
            color:'black',
            backgroundColor:'white',
            border: '1px solid black'
        }); 
        setbtnText("Enable Dark Mode");
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor:'black',
            }); 
            setbtnText("Enable Dark Mode");
        }
    }   
    
  return (
    <div className='container' style={mystyle} >
    <h1 className='my-4'>About Us</h1>
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" >
      <button class="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={mystyle} >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button"  style={mystyle}  data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={mystyle} >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={mystyle} >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
<div className="container my-3">
    
  <button type="button" onClick={toggleStyle} class="btn btn-primary">{btnText}</button>
</div>
</div>
    </div>
  )
}
