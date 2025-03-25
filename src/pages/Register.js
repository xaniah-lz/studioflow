import React, { useState } from "react";
import "./Register.css";
import googleLogo from "../images/google.png";
import facebookLogo from "../images/facebook.png";

const provinceOptions = {
  "Batangas": ["Balayan", "Batangas City", "Bauan", "Calaca", "Calatagan", "Cuenca", "Ibaan", "Lemery", "Lipa", "Lobo", "Mabini", "Malvar", "Mataasnakahoy", "Nasugbu", "Padre Garcia", "Rosario", "San Jose", "San Juan", "San Luis", "San Nicolas", "San Pascual", "Santa Teresita", "Santo Tomas", "Taal", "Talisay", "Tanauan", "Taysan", "Tingloy", "Tuy"],
  "Cavite": ["Alfonso", "Amadeo", "Bacoor", "Carmona", "Cavite City", "Dasmariñas", "General Emilio Aguinaldo", "General Mariano Alvarez", "General Trias", "Imus", "Indang", "Kawit", "Magallanes", "Maragondon", "Mendez", "Naic", "Noveleta", "Rosario", "Silang", "Tagaytay", "Tanza", "Ternate", "Trece Martires"],
  "Laguna": ["Alaminos", "Bay", "Biñan", "Cabuyao", "Calamba", "Calauan", "Cavinti", "Famy", "Kalayaan", "Liliw", "Los Baños", "Luisiana", "Lumban", "Mabitac", "Magdalena", "Majayjay", "Nagcarlan", "Paete", "Pagsanjan", "Pakil", "Pangil", "Pila", "Rizal", "San Pablo", "San Pedro", "Santa Cruz", "Santa Maria", "Santa Rosa", "Siniloan", "Victoria"],
  "Quezon": ["Agdangan", "Alabat", "Atimonan", "Buenavista", "Burdeos", "Calauag", "Candelaria", "Catanauan", "Dolores", "General Luna", "General Nakar", "Guinayangan", "Gumaca", "Infanta", "Jomalig", "Lopez", "Lucban", "Lucena", "Macalelon", "Mauban", "Mulanay", "Padre Burgos", "Pagbilao", "Panukulan", "Patnanungan", "Perez", "Pitogo", "Plaridel", "Polillo", "Quezon", "Real", "Sampaloc", "San Andres", "San Antonio", "San Francisco", "San Narciso", "Sariaya", "Tagkawayan", "Tayabas", "Tiaong", "Unisan"],
  "Rizal": ["Angono", "Antipolo", "Baras", "Binangonan", "Cainta", "Cardona", "Jalajala", "Morong", "Pililla", "Rodriguez", "San Mateo", "Tanay", "Taytay", "Teresa"]
};


const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    setCity(""); // Reset city when province changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering with:", {
      firstName,
      lastName,
      email,
      phone,
      city,
      province,
      password,
      confirmPassword,
      agreeTerms,
    });
  };

  return (
    <div>
    <div className="register-page">
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="register-title">Create New Account</h2>
          <div className="input-group-row name-row">
            <div className="input-group">
              <label>Firstname</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Lastname</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="input-group-row location-row">
            <div className="input-group">
              <label>Province</label>
              <select value={province} onChange={handleProvinceChange} required>
                <option value="">Select Province</option>
                {Object.keys(provinceOptions).map((prov) => (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label>City</label>
              <select value={city} onChange={(e) => setCity(e.target.value)} required>
                <option value="">Select City</option>
                {province && 
                  provinceOptions[province].map((cityName) => (
                    <option key={cityName} value={cityName}>
                      {cityName}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="register-options">
            <label>
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />{" "}
              I agree to the Terms & Conditions
            </label>
          </div>
          <button type="submit" className="register-btn">
            Create Account
          </button>
          <div className="separator">
            <span> ━━━━━━━━━━━━━━   OR   ━━━━━━━━━━━━━━ </span>
          </div>
          <div className="social-logins">
            <button className="google-login">
              <img src={googleLogo} alt="Google Login" />
            </button>
            <button className="facebook-login">
              <img src={facebookLogo} alt="Facebook Login" />
            </button>
          </div>
        </form>
      </div>
      <div className="register-banner">
        <h1>Your Event Starts Here </h1>
        <p>
        Sign Up for <strong>Easy Rentals </strong>
        </p>
        <h2>
          and <strong className="highlight">Epic Productions!</strong>
        </h2>
        <button className="banner-button">Button</button>
      </div>
    </div>
    <footer className="footer">
      <div className="logo">YOUR LOGO<br /><small>Your Tagging here</small></div>
      <div className="column">
        <h3>Title here</h3>
        <p>text</p>
        <p>text</p>
        <p>text</p>
      </div>
      <div className="column">
        <h3>Title here</h3>
        <p>text</p>
        <p>text</p>
        <p>text</p>
      </div>
      <div className="column">
        <h3>Contact Us</h3>
        <p>info@company.com</p>
        <p>123-456-7890</p>
      </div>
      
    </footer>
    </div>
  );
};

export default Register;