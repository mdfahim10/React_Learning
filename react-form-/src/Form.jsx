import { useState } from "react";

export default function Form() {

    /*  Sinngle Input
    let [fullName, setFullName] = useState("");
    let handleNameChange = (event) => {
        setFullName(event.target.value)
    };
    */

    
    // Multiple Input
    let [formData, setFormData] = useState({
        fullName: "",
        username: ""
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {
                ...currData,
                [event.target.name]: event.target.value
            };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();

        setFormData({
            fullName: "",
            username: ""
        });
    };

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="fullName">Full Name</label>

            <input
                placeholder="Enter full name"
                type="text"
                value={formData.fullName}
                id="fullName"
                name="fullName"
                onChange={handleInputChange}
            />

            <br />

            <label htmlFor="username">Username</label>

            <input
                placeholder="Enter user name"
                type="text"
                value={formData.username}
                id="username"
                name="username"
                onChange={handleInputChange}
            />

            <br />

            <button type="submit">Submit</button>

        </form>
    );
}