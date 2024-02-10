import React , {useState} from 'react'

export default function About(props) {
  return (
    <div className='container my-5' style={{border:props.backclr==='dark'?'1px solid black':'1px solid white'}}>
            <h1 className="my-2" style={{color:props.backclr ==='dark'?'black':'white'}}>About Us</h1>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item"  style={{border:props.backclr==='dark'?'1px solid black':'1px solid white'}}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color:props.backclr ==='dark'?'black':'white',backgroundColor:props.backclr==='dark'?'white':'#1e2a36'}}>
                    <strong>Accordion Item #1</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample"style={{border:props.backclr==='dark'?'1px solid black':'1px solid white'}}>
                <div className="accordion-body" style={{color:props.backclr ==='dark'?'black':'white',backgroundColor:props.backclr==='dark'?'white':'#343a40'}}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{border:props.backclr==='dark'?'1px solid black':'1px solid white'}}>
                <h2 className="accordion-header" >
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={{color:props.backclr ==='dark'?'black':'white',backgroundColor:props.backclr==='dark'?'white':'#1e2a36'}}>
                <strong>Accordion Item #2</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample"style={{border:props.backclr==='dark'?'1px solid black':'1px solid white'}}>
                <div className="accordion-body" style={{color:props.backclr ==='dark'?'black':'white',backgroundColor:props.backclr==='dark'?'white':'#343a40'}}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{border:props.backclr==='dark'?'1px solid black':'1px solid white'}}>
                <h2 className="accordion-header" >
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={{color:props.backclr ==='dark'?'black':'white',backgroundColor:props.backclr==='dark'?'white':'#1e2a36'}} >
                <strong>Accordion Item #3</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample"style={{border:props.backclr==='dark'?'1px solid black':'1px solid white'}}>
                <div className="accordion-body" style={{color:props.backclr ==='dark'?'black':'white',backgroundColor:props.backclr==='dark'?'white':'#343a40'}} >
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>
            {/* <div className="container my-3">
                <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
            </div> */}
    </div>
  )
}
