import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    address2: "",
    city: "",
    province: "",
    postal: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData);
  };

  return (
    <>
      <div className="form_box">
        <h1>Data Entry Form</h1>

        <form onSubmit={handleSubmit}>
          {/* Row 1: Email + Name side by side */}
          <div className="form_row">
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Name</label>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Address 1 */}
          <div className="field">
            <label>Address</label>
            <input
              type="text"
              placeholder="1234 Main St"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Address 2 */}
          <div className="field">
            <label>Address 2</label>
            <input
              type="text"
              placeholder="Apartment, studio, or floor"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
            />
          </div>

          {/* Row 2: City, Province, Postal Code side by side */}
          <div className="form_row">
            <div className="field">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Province</label>
              <select
                name="province"
                value={formData.province}
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
              </select>
            </div>

            <div className="field">
              <label>Postal Code</label>
              <input
                type="text"
                name="postal"
                value={formData.postal}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="checkbox_line">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label> Agree Terms & Condition?</label>
          </div>

          <div className="button_line">
            <button type="submit" className="submit_btn">
              Submit
            </button>
          </div>
        </form>
      </div>

      {submitted && (
        <div className="output_box">
          <div className="output_row">
            <span className="output_label">Email:</span>
            <span className="output_value">{submitted.email}</span>
          </div>
          <div className="output_row">
            <span className="output_label">Full Name:</span>
            <span className="output_value">{submitted.name}</span>
          </div>
          <div className="output_row">
            <span className="output_label">Address:</span>
            <span className="output_value">{submitted.address}</span>
          </div>
          <div className="output_row">
            <span className="output_label">City:</span>
            <span className="output_value">{submitted.city}</span>
          </div>
          <div className="output_row">
            <span className="output_label">Province:</span>
            <span className="output_value">{submitted.province}</span>
          </div>
          <div className="output_row">
            <span className="output_label">Postal Code:</span>
            <span className="output_value">{submitted.postal}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default App;