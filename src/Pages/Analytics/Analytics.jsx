import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Analytics = ({ onUpdatePixel }) => {

    const [pixelCode, setPixelCode] = useState('');

    useEffect(() => {
        // Fetch the Pixel code from the server
        const fetchPixelCode = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/pixel');
                if (response.data) {
                    setPixelCode(response.data.code);
                    onUpdatePixel(response.data.code);
                }
            } catch (error) {
                console.error('Error fetching the Pixel code', error);
            }
        };
        fetchPixelCode();
    }, [onUpdatePixel]);

    const handleInputChange = (event) => {
        setPixelCode(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/pixel', { code: pixelCode });
            onUpdatePixel(pixelCode);
        } catch (error) {
            console.error('Error saving the Pixel code', error);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Facebook Pixel Code:
                    <input type="text" className='border-2 border-green-700 mx-3 rounded-md p-10' value={pixelCode} onChange={handleInputChange} />
                </label>
                <button className='btn bg-green-500 text-white' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Analytics;