import React, {useState} from 'react';
import './style.css'
function Form() {

  const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [MovieName, setMovieName] = useState(null);
    const [Date,setDate] = useState(null);
    

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "MovieName"){
            setMovieName(value);
        }
        if(id === "Date"){
            setDate(value);
        }
       

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,MovieName,Date);
    }


    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              
              <div className="MovieName">
                  <label className="form__label" for="MovieName">Movie Name </label>
                  <input  type="text" name="" id="MovieName"  className="form__input"placeholder="MovieName"/>
              </div>
              
              <div className="Date">
                  <label className="form__label" for="Date">Date </label>
                  <input  type="Date" name="" id="Date"  className="form__input"/>
              </div>

              
          </div>
          <div class="footer">
              <button type="submit" class="btn">Book Ticket</button>
          </div>
      </div>      
    )       
}
export default Form;