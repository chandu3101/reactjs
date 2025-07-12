import React, { useState } from "react";
export default function EntryForm() {
    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [submitData, setSubmitData] = useState(null);

    // Handle input changes that will input data into the form
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send data to an API
        console.log("Form submitted:", formData);

        try {
            const response = await fetch('http://localhost:5000/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Data saved to Excel!");
            } else {
                alert("Failed to save data.");
            }
        } catch (error) {
            console.error("Error:", error);
        }

        setSubmitData(formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            phone: ''
        });
    }

    return (
        <>
            <h2>Enter the detils</h2>
            <div style={{ maxWidth: '400px', margin: 'auto' }}>
                <h2>User Form</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label><br />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Email:</label><br />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
                </form>

                {submitData && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>Submitted Data:</h3>
                        <p><strong>Name:</strong> {submitData.name}</p>
                        <p><strong>Email:</strong> {submitData.email}</p>
                    </div>
                )}
            </div>
        </>
    );
}
