import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


function DarkVariantExample() {
    const captionStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
  return (
    <>
    
    <Carousel variant="dark">

<Carousel.Item>
<img
  className="d-block w-100"
  src="/images/slide1.jpg"
  alt="First slide"
  style={{height: "600px", marginLeft: 'auto', marginRight: 'auto'}}
  
/>

<Carousel.Caption style={captionStyle}>
<Button style={{backgroundColor: '#fff', color: 'black', border: "#fff"}} className='btn btn-lg'> Online Giving <i className="fas fa-arrow-right"></i></Button> &nbsp;
<Button style={{backgroundColor: "#fff", color: 'black', border: "#fff"}} className='btn btn-lg'> Watch Live</Button>
  

</Carousel.Caption>

</Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/slide2.jpg"
      alt="First slide"
      style={{height: "600px", marginLeft: 'auto', marginRight: 'auto'}}
      
    />
<Carousel.Caption style={captionStyle}>
<Button style={{backgroundColor: '#fff', color: 'black', border: "#fff"}} className='btn btn-lg'> Online Giving <i className="fas fa-arrow-right"></i></Button> &nbsp;
<Button style={{backgroundColor: "#fff", color: 'black', border: "#fff"}} className='btn btn-lg'> Watch Live</Button>
  
      
    
    </Carousel.Caption>
   
  </Carousel.Item>
  


  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/slide3.jpg"
      alt="First slide"
      style={{height: "600px", marginLeft: 'auto', marginRight: 'auto'}}
      
    />
<Carousel.Caption style={captionStyle}>
<Button style={{backgroundColor: '#fff', color: 'black', border: "#fff"}} className='btn btn-lg'> Online Giving <i className="fas fa-arrow-right"></i></Button> &nbsp;
<Button style={{backgroundColor: "#fff", color: 'black', border: "#fff"}} className='btn btn-lg'> Watch Live</Button>
  
    
    </Carousel.Caption>
    
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/slide4.jpg"
      alt="First slide"
      style={{height: "600px", marginLeft: 'auto', marginRight: 'auto'}}
      
    />
    
    <Carousel.Caption style={captionStyle}>
<Button style={{backgroundColor: '#fff', color: 'black', border: "#fff"}} className='btn btn-lg'> Online Giving <i className="fas fa-arrow-right"></i></Button> &nbsp;
<Button style={{backgroundColor: "#fff", color: 'black', border: "#fff"}} className='btn btn-lg'> Watch Live</Button>
  
    
    </Carousel.Caption>

  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/slide5.jpg"
      alt="First slide"
      style={{height: "600px", marginLeft: 'auto', marginRight: 'auto'}}
      
    />
         <Carousel.Caption style={captionStyle}>
<Button style={{backgroundColor: '#fff', color: 'black', border: "#fff"}} className='btn btn-lg'> Online Giving <i className="fas fa-arrow-right"></i></Button> &nbsp;
<Button style={{backgroundColor: "#fff", color: 'black', border: "#fff"}} className='btn btn-lg'> Watch Live</Button>
  
    
    </Carousel.Caption>
    
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/slide6.jpg"
      alt="First slide"
      style={{height: "600px", marginLeft: 'auto', marginRight: 'auto'}}
      
    />
    
    <Carousel.Caption style={captionStyle}>
<Button style={{backgroundColor: '#fff', color: 'black', border: "#fff"}} className='btn btn-lg'> Online Giving <i className="fas fa-arrow-right"></i></Button> &nbsp;
<Button style={{backgroundColor: "#fff", color: 'black', border: "#fff"}} className='btn btn-lg'> Watch Live</Button>
  
    
    </Carousel.Caption>

  </Carousel.Item>



  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/slide7.jpg"
      alt="First slide"
      style={{height: "600px", marginLeft: 'auto', marginRight: 'auto'}}
      
    />
    
<Carousel.Caption style={captionStyle}>
<Button style={{backgroundColor: '#fff', color: 'black', border: "#fff"}} className='btn btn-lg'> Online Giving <i className="fas fa-arrow-right"></i></Button> &nbsp;
<Button style={{backgroundColor: "#fff", color: 'black', border: "#fff"}} className='btn btn-lg'> Watch Live</Button>
  
    
    </Carousel.Caption>

  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/slide8.jpg"
      alt="First slide"
      style={{height: "600px", marginLeft: 'auto', marginRight: 'auto'}}
      
    />
            
            <Carousel.Caption style={captionStyle}>
<Button style={{backgroundColor: '#fff', color: 'black', border: "#fff"}} className='btn btn-lg'> Online Giving <i className="fas fa-arrow-right"></i></Button> &nbsp;
<Button style={{backgroundColor: "#fff", color: 'black', border: "#fff"}} className='btn btn-lg'> Watch Live</Button>
  
    
    </Carousel.Caption>
    
  </Carousel.Item>

  

</Carousel>
    </>
  );
}

export default DarkVariantExample;