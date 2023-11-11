import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import img1 from '../images/321-rf-27064231.jpg';
import img2 from '../images/032 Sharpeye Eagle.png';
import img3 from '../images/iStock_78787293_XXXLARGE-lets-work-together.jpg';
import img4 from '../images/client_meeting_ldprod.jpg';
import img5 from '../images/AdobeStock_77490502.jpg';
import img6 from '../images/7a8d1ae82ce7c94a4e756229b4759c16.jpg';
import img7 from '../images/customers.jpg';
import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import { MdVerified } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { GrMail } from 'react-icons/gr';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <div>
        <Carousel fade>
      <Carousel.Item interval={1300}>
        <img height={350}
          className="d-block w-100"
          src={img2}
          alt="First slide"  
        />
        <Carousel.Caption>
          <h1 style={{color:"rgb(153, 107, 215)", marginTop:"-50px"}}><b>Welocome to Unique Loan Services</b></h1><br></br><br></br>
          <p style={{color:"black"}}>
    <b>Getting funds for business purposes can be difficult.
    <br></br>We Unique Loan Services, offer a wide range of loan schemes with low-interest rates.
    <br></br>Choose from our range of loans as per your requirements with no hidden charges.
    <br></br>Our approach towards credit solutions is to make valuable credit accessible for everyone through our offerings of lower interest rates, maximum loan to value, and no hidden charges.
    <br></br>Our bank partnerships & customer-focused approach makes taking a loan fast, simple & safe.
   </b>
   </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1300}>
        <img height={350}
        className='d-block w-100'
        src={img3}
        alt="second-slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1300}>
        <img height={350}
        className='d-block w-100'
        src={img1}
        alt="second-slide"
        />
      </Carousel.Item>
    </Carousel>
        <div className='login-outer-block'>
            <img src={img5} alt=""/>
      <div className='login-block' >
        <center>
        <form>
            <h4>Customer Login</h4>
            <label><span>USERNAME:</span></label>
            <input style={{marginLeft:"20px"}} type='text'/>
            <br/><br/>
            <label>PASSWORD:</label>
            <input style={{marginLeft:"20px"}} type='password'/>
            <br/><br/>
            <button className='btn btn-success col-2 btn-sm me-2' style={{marginLeft:"30px"}}>login</button>
            <button className='btn btn-warning col-2 btn-sm'>reset</button>
            <br/><br/>
            New User <NavLink>signup</NavLink>
        </form>
        </center>
      </div>
      </div>
      <div className='features-block'>
            <center><h4 style={{color:"purple"}}><b>OUR FEATURES</b></h4></center>
        
            <MdVerified style={{color:"green"}}/>Attractive interest rates<br/>
            <MdVerified style={{color:"green"}}/>Flexible tenures<br/>
            <MdVerified style={{color:"green"}}/>Repayment options<br/>
            <MdVerified style={{color:"green"}}/>Minimal documentation<br/>
            <MdVerified style={{color:"green"}}/>Quick disbursals<br/>
            <MdVerified style={{color:"green"}}/>Identification of best banking option<br/>
            <MdVerified style={{color:"green"}}/>Unbeatable liasoning across all levels<br/>
            <MdVerified style={{color:"green"}}/>Cost effective and timely delivery<br/>
            <MdVerified style={{color:"green"}}/>Processing fee is payable only on success/delivery<br/>
            <MdVerified style={{color:"green"}}/>Utmost transparency and honesty<br/>
        
      </div>
      <div className='before-applying'>
        <div className='before-appying-inner-block'>
        <center><h4 style={{color:"purple"}}><b>BEFORE YOU APPLY FOR A STARTUP LOAN</b></h4>
        <p>
            Before committing to your startup loan, it's essential you identify your bussiness needs,<br/>
            determine how much you can actually afford,and know axactly what you bring to the table.
        </p>
        <br/><br/>
        <h4 style={{color:"purple"}}><b>KNOW HOW MUCH YOU CAN AFFORD</b></h4>
        <p>
        Borrowing only what you know you can repay is always a good idea, but it's especially <br/>
        important when you're starting a business. Before signing on the dotted line, make sure <br/>
        you've calculated how much financing your small business can afford. In addition to your<br/>
        loan amount, startup loans are determined by your interest rate, term, and collateral.<br/>
        These factors can vary substantially depending on the type of startup loan you choose. 
        </p>
        </center>
        </div>
      </div>
        <div>

        </div>
        <br/><br/><br/>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src={img3} height={250} />
        <Card.Body>
        <Card.Title><h3 style={{textAlign:"center", color:"purple"}}>QUICK INQUIRY</h3></Card.Title>
        <Card.Text>
          <div className='container' style={{textAlign:"center"}}>
        <form method='post'>
             <label htmlFor='n'>Name:</label><br></br>
             <input type='text' id='n' name='n'></input><br></br><br></br>
             <label htmlFor='nm'>Contact No:</label><br></br>
             <input type='number' id='nm' name='nm'></input><br></br><br></br>
             <label htmlFor='em'>Email</label><br></br>
             <input type='email' id='em' name='em'></input><br></br><br></br>
             <input type='submit' value='SUBMIT' className='btn btn-success'></input>
        </form>
        </div>
        </Card.Text>
      </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={img6} height={250} />
        <Card.Body>
        <Card.Title><h3 style={{textAlign:"center", color:"purple"}}>WE ARE CATERING TO</h3></Card.Title>
        <Card.Text>
        <p style={{textAlign:"center"}}>   
IT Industries, Restaurent<br></br>
Transporters / Logistics<br></br>
Educational Institutes<br></br>
Government Employees<br></br>
Exporters & Importers<br></br>
Doctors & Hospitals<br></br>
Drugs & Pharmaceuticals<br></br>
Healthcare Manufacturing<br></br>
Leather Manufacturers<br></br>
Media & Entertainment<br></br>
</p>
        </Card.Text>
      </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={img7} height={250} />
        <Card.Body>
        <Card.Title><h3 style={{textAlign:"center", color:"purple"}}>OUR BRANCHES</h3></Card.Title>
        <Card.Text>
        <p style={{textAlign:"center"}}>
        Mumbai<br></br>
        Delhi<br></br>
        Kolkata<br></br>
        Chennai<br></br>
        Banglore<br></br>
        Hyderabad<br></br>
        Pune
        </p>
        </Card.Text>
      </Card.Body>
      </Card>
    </CardGroup>
    <footer>
        <div className='footer'>
            <div className='footer-company'>
                <h6><b>COMPANY</b></h6>
                <h6>About</h6>
                <h6>Careers</h6>
                <h6>Newsroom</h6>
            </div>
            <div className='footer-resourses'>
                <h6><b>RESOURSES</b></h6>
                <h6>FAQ</h6>
                <h6>Blogs</h6>
                <h6>Security</h6>
                <h6>Terms & Conditions</h6>
                <h6>Find a Local Representative</h6>
            </div>
            <div>
                <h6 className='footer-contact'><b>CONTACT US</b></h6>
                <GrMail style={{color:"green"}}/><h6 style={{color:"gray"}}>iniqueloanservices@gmail.com</h6>
                <FiPhoneCall style={{color:"green"}}/><h6 style={{color:"gray"}}>18001515555</h6>
            </div>
        </div>
        <center><h5 style={{backgroundColor:"yellow"}}>@ 2022 Unique Loan Services | All Rights Reserved</h5></center>
    </footer>
    </div>
  )
}

export default Home
