import React, { Component } from "react";
import "./form.css";

class User extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      Profile: "",
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="conatiner">
        <form className="form">
          <fieldset className="conatiner1">
            <legend>UserData</legend>
            FirstName:
            <input type="text" required/>
            <br />
            <br />
            <br />
            
            LastName:
            <input type="text"required />
            <br />
            <br />
            <br />
            Gender:
            <input required type="radio" value="male" name="gender" />
            Male
            <input type="radio" value="female" name="gender" />
            female
            <br />
            <br />
            <br />
            Country:
            <select >
              <option>please select Country</option>
              <option>India</option>
              <option>Russia</option>
              <option>China</option>
              <option>America</option>
            </select>
            <br />
            <br />
            <br />
            Hobbies:
            <input type="checkbox" name="hobbies[]" />
            Dancing
            <input type="checkbox" name="hobbies[]" />
            Singing
            <input type="checkbox" name="hobbies[]" />
            Sports
            <input type="checkbox" name="hobbies[]" />
            WatchingMovies
            <br />
            <br />
            <br />
            Profile-Image:
            <input required type="file" name="profileImage" onChange={(e) => this.setState({ Profile: e.target.value })} />
            <br />
            <br />
            <br />
            Email:
            <input required
              type="email"
              name="email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <br />
            <br />
            <br />
            <input className="sub" type="submit" name="submit" />
            <input className="res" type="reset" name="reset" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default User;