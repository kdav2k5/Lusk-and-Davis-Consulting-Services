import React, { Component } from 'react';
import{
    Link
  } from 'react-router-dom';

class Contact extends Component {
  render() {
    return (
      <body>
          <div id="contact-form" className="container text-center">
            <div id="contact-form" className="row">
                <div className="col-md-6 offset-md-3">
                <div className="well well-sm">
                <form className="form-horizontal" action="" method="post">
                <fieldset>
                    <legend id="legend-closing" className="text-center">We Want To Hear From You</legend>
            
                    <div className="form-group">
                    <label className=" col-sm-12 text-left control-label" for="name">Name</label>
                    <div className="col-md-12">
                        <input id="name" name="name" type="text" placeholder="First and Last Name" className="form-control">
                    </input>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-12 text-left control-label" for="email">Email</label>
                    <div className="col-md-12">
                        <input id="email" name="email" type="text" placeholder="email" className="form-control">
                    </input>
                    </div>
            
                    <div className="form-group">
                    <label className="col-sm-12 text-left control-label" for="message">Message</label>
                    <div className="col-md-12">
                        <textarea className="form-control" id="message" name="message" placeholder="Questions? Concerns? Services?" rows="10"></textarea>
                    </div>
                    </div>
            
                    <div className="form-group">
                    <div className="col-md-12 text-right">
                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                    </div>
                </div>
                </div>
	        </fieldset>
        </form>
    </div>
</div> 
</div>
</div>
</body>
    );
  }
}

export default Contact;