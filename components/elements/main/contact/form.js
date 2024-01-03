
import React from 'react';

import axios from 'axios';

import { Suspense } from 'react';

const url = 'https://contactform-ho4v4yvfnq-uc.a.run.app';


const ContactForm = (props) => {

    const claases = props.className;

    async function formSubmit() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        const date = new Date();

        if (name === '' || email === '' || phone === '' || message === '') {
            alert('please fill all fields');
            return;
        }

        const data = {
            name: name,
            email: email,
            phone: phone,
            message: message,
            date: date
        }

        alert(JSON.stringify(data));


        await axios.post(url, null, {
            params: {
                name: name,
                email: email,
                phone: phone,
                message: message,
                date: date
            } 
        }).then((res) => {
            console.log(res);
        }
        ).catch((error) => {
            console.log(error);
        }
        );
        


    }

    return (
        <form action="#" className={claases} onSubmit={formSubmit}>
            <div className="mt-2">
                <label htmlFor="name" className="block mb-2 text-sm font-medium ">name</label>
                <input type="text" id="name" className="block p-3 w-full text-sm bg-base-300 rounded-lg" placeholder="your name" required />
            </div>
            <div className="mt-2">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">email</label>
                <input type="email" id="email" className="block p-3 w-full text-sm bg-base-300 rounded-lg" placeholder="username@provider.com" required />
            </div>
            <div className="mt-2">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium">phone</label>
                <input type="tel" id="phone" className="block p-3 w-full text-sm bg-base-300 rounded-lg" placeholder="+1 555 555 55 55" required />
            </div>
            <div className="mt-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">message</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm bg-base-300 rounded-lg" placeholder="your message" required></textarea>
            </div>
            <button type="submit" className="mt-2 py-3 px-5 text-sm font-medium bg-base-300 rounded-lg hover:bg-primary hover:text-white focus:outline-none focus:bg-primary-600" onClick={formSubmit}>send</button>
        </form>
    )

}

export default ContactForm;