import React from 'react';

const About = () => {
    return (
        <div className='flex flex-col gap-8 p-8 bg-gray-900 text-gray-300 pt-16'>
            <div>
                <p className='font-bold text-white text-3xl mb-4'>Our Mission & Values</p>
                <p className='text-xl'>
                    At <span className='text-yellow-500 font-semibold'>Eshany Bazaar</span>, we believe shopping should be affordable, seamless, and enjoyable. 
                    Our mission is to offer a carefully curated selection of high-quality products while ensuring a smooth and satisfying shopping experience.
                </p>
                <ul className='mt-3 space-y-2'>
                    <li>✔ <span className='text-yellow-500'>Customer First</span> – Your satisfaction is our top priority.</li>
                    <li>✔ <span className='text-yellow-500'>Quality Assurance</span> – We offer only the best, thoroughly checked products.</li>
                    <li>✔ <span className='text-yellow-500'>Affordability & Style</span> – Trendy, stylish, and pocket-friendly shopping.</li>
                </ul>
            </div>

            <div>
                <p className='font-bold text-white text-3xl mb-4'>What We Offer</p>
                <ul className='text-xl space-y-2'>
                    <li>🛍 <span className='text-yellow-500'>Fashion & Accessories</span> – Stylish clothing, footwear, and accessories.</li>
                    <li>📱 <span className='text-yellow-500'>Electronics & Gadgets</span> – Latest smartphones, smartwatches, and more.</li>
                    <li>🏠 <span className='text-yellow-500'>Home Essentials</span> – High-quality home decor and daily-use products.</li>
                </ul>
                <p className="mt-3">Every item in our store is handpicked to ensure superior quality and value for our customers.</p>
            </div>

            <div>
                <p className='font-bold text-white text-3xl mb-4'>Why Choose Us?</p>
                <ul className='text-xl space-y-2'>
                    <li>✔ Premium Quality – Top-notch products at unbeatable prices.</li>
                    <li>✔ Secure & Fast Delivery – Reliable shipping partners ensure timely deliveries.</li>
                    <li>✔ Easy Returns & Support – Hassle-free returns and dedicated customer service.</li>
                    <li>✔ Exclusive Deals – Special discounts and offers for our loyal customers.</li>
                </ul>
            </div>

            <div>
                <p className='font-bold text-white text-3xl mb-4'>Contact Us</p>
                <p className='text-xl'>
                    📧 Email: <a href="mailto:support@eshanybazaar.com" className='text-yellow-500'>support@eshanybazaar.com</a><br />
                    📞 Phone: <span className='text-yellow-500'>+123 456 7890</span>
                </p>
                <p className='mt-3'>We’re here to help! Reach out to us for any queries, and our team will be happy to assist you.</p>
            </div>
        </div>
    );
}

export default About;
