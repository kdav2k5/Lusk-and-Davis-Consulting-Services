import React, { Component } from 'react';
import{
    Link
  } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <body>
      <div ClassName="banner container text-center">
        <img style={{height:"300"}}ClassName="front" src={require("./meeting2.jpg")} alt="front page" />
      <section className="bg-primary">
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 offset-md-3  text-center">                     
                <h1 className="slogan">Improve your business with Lusk and Davis Business Consulting</h1>
                    <p className="description">With over 30 years combined experience, Lusk and Davis is here to take your healthcare business to the next level. Need business advice? Counseling for you or or patients? Possible plan of care moving forward with your clients? We are here to help.</p>
            </div>
        </div>
    </div>
 </section>
        </div> 
    <section className="container-fluid text-center">
        <div id="service-row"  className="row">
            <div  className="col-sm-4">
             <i className="fa fa-medkit"></i>
             <h4>Plan of Care</h4>
             <p>We provide individualized care for each of your  clients. We focus on the patient's specific needs and provide a plan of action to ensure that the needs of the patient are met, and a successful plan is in place going forward. </p>
        </div> 
        <div className="col-sm-4">
            <i class="fa fa-clipboard"></i>
            <h4>On Site Assessments</h4>
            <p>Taking care of the patient's phyisical, emotional, and spiritual well being as it relates to terminal illness is important to us. Based on the patient and the family needs, we will perform assessments so that these conditions are met in this time of need.</p> 
        </div>
        <div className="col-sm-4">
            <i class="fa fa-calendar"></i>
            <h4>Counseling</h4>
            <p>Our team is equipped to perform counseling for those who are dealing with challenging life events. Need to see a counselor for you, your patients, or their families? Contact us so that we can help address these needs. Your health is our main priority.</p>        
        </div>
        </div>
    </section>
        <section className="container-fluid text-center">
        <div id="locations" className="row">
        <div className="col-md-6 offset-md-3  text-center">
        <h1>We Serve The Puget Sound!</h1>
        <p>Skagit County, Snohomish County, King County, Pierce County</p>
        </div>
        </div> 
    </section>
    
       </body>
    );
  }
}

export default  HomePage
