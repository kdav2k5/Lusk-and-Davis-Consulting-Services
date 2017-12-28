import React, { Component } from 'react';
import{
    Link
  } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <body className="container text-center">
      <div id="about-us">
        <h1> Who We Are</h1>
        </div>
        <div>
        <img style={{height:"300"}}ClassName="front" src={require("./meeting.jpg")} alt="about page" />
        </div>
        <div id="about">
        <p>Lorem ipsum dolor amet tilde actually taxidermy, umami you probably haven't heard of them gochujang poutine fingerstache PBR&B chambray vegan +1. Woke vinyl aesthetic drinking vinegar tumeric waistcoat bushwick YOLO church-key skateboard mustache jean shorts scenester. Helvetica microdosing enamel pin slow-carb aesthetic cardigan. Artisan tacos waistcoat wayfarers actually prism 90's quinoa. Brunch occupy jianbing viral, cold-pressed chartreuse hot chicken salvia gochujang distillery plaid brooklyn mixtape coloring book. Health goth 8-bit XOXO thundercats small batch organic pinterest subway tile franzen seitan literally sustainable.

Whatever portland bitters, neutra subway tile ethical skateboard. Vegan keytar snackwave semiotics adaptogen, fam pug. Cliche pickled enamel pin gentrify wayfarers paleo. Prism microdosing bushwick, chia enamel pin humblebrag vinyl coloring book shabby chic. Tumblr street art bitters sustainable locavore health goth farm-to-table four dollar toast, kinfolk four loko portland tumeric chicharrones palo santo. Try-hard drinking vinegar glossier typewriter poke yr.

Artisan kale chips microdosing YOLO, leggings keytar lyft beard succulents asymmetrical. Knausgaard microdosing tumeric hot chicken, forage humblebrag listicle franzen pabst vexillologist typewriter bicycle rights. Enamel pin wolf air plant readymade try-hard listicle occupy banjo VHS deep v mumblecore mixtape. Small batch vegan thundercats raw denim slow-carb cold-pressed fanny pack literally mumblecore bushwick. Woke waistcoat vinyl, small batch hammock swag disrupt semiotics. Selvage YOLO salvia, austin quinoa authentic helvetica deep v leggings 3 wolf moon keytar enamel pin bitters mixtape. Hexagon actually microdosing marfa bicycle rights dreamcatcher succulents.</p>
     </div>
     <div>
       
       
       </div>     
</body>
    );
  }
}

export default  About