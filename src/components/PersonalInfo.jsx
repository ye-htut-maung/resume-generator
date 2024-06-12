import { useState } from "react";
const PersonalInfo = () => {
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    linkedin: "",
    github: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="border-solid border-2 border-black p-7">
        <h2>Personal Information</h2>
        <form onSubmit="">
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={personalData.name}
              onChange={handleChange}
              className="border-2 border-black"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={personalData.email}
              onChange={handleChange}
              className="border-2 border-black"
            />
          </div>
          <div>
            <label htmlFor="linkedin">Linkedin</label>
            <input
              type="url"
              name="linkedin"
              id="linkedin"
              value={personalData.linkedin}
              onChange={handleChange}
              className="border-2 border-black"
            />
          </div>
          <div>
            <label htmlFor="github">GitHub</label>
            <input
              type="url"
              name="github"
              id="github"
              value={personalData.github}
              onChange={handleChange}
              className="border-2 border-black"
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              value={personalData.city}
              onChange={handleChange}
              className="border-2 border-black"
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              type="text"
              name="state"
              id="state"
              value={personalData.state}
              onChange={handleChange}
              className="border-2 border-black"
            />
          </div>
          <div>
            <button
              type="submit"
              className="border-2 border-black bg-green-300 p-3"
            >
              Save
            </button>
            <button className="border-2 border-black bg-blue-300 p-3">
              Edit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalInfo;
