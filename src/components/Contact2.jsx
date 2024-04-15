import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

export default function Contact() {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false,
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            message: '',
        });

        setErrors({
            name: false,
            email: false,
            message: false,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Simple validation example (you can adjust it based on your requirements)
        const newErrors = {
            name: formData.name.trim() === '',
            email: !/^\S+@\S+\.\S+$/.test(formData.email),
            message: formData.message.trim() === '',
        };

        setErrors(newErrors);

        // Check if there are no errors before submitting the form
        if (!Object.values(newErrors).some((error) => error)) {
            // Your form submission logic goes here
            console.log('Form submitted:', formData);

            // Reset form after successful submission
            resetForm();
            toast.success('Message is sent Successfully!');
        }
    };

    return (
        <div className='bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-full'>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600 font-medium">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        ref={inputRef}
                        className={`mt-1 p-2 w-full border rounded-md focus:outline-none ${errors.name ? 'border-red-500' : 'focus:border-green-500'
                            }`}
                    />
                    {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 font-medium">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`mt-1 p-2 w-full border rounded-md focus:outline-none ${errors.email ? 'border-red-500' : 'focus:border-green-500'
                            }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">Please enter a valid Email</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-600 font-medium">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`mt-1 p-2 w-full border rounded-md focus:outline-none ${errors.message ? 'border-red-500' : 'focus:border-green-500'
                            }`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300 btn-block bn54"
                >
                    <span className='bn54span'>Send Message</span>
                </button>
            </form>
        </div>
    );
}
