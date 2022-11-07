const contactForm = document.getElementById('contact_form');
const userName = document.getElementById('user_name');
const userEmail = document.getElementById('user_email');
const message = document.getElementById('message');

const sendEmail = async (body) => {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    }
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', settings);
    const data = await response.json();
    return data;
};

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const body = {
        service_id: 'service_v00xuvg',
        template_id: 'template_5fy907d',
        user_id: '8h9TpIDnMkQcnSpcJ',
        template_params: {
            'to_name': userName.value,
            'from_name': userEmail.value,
            'message': message.value
        }
    };

    sendEmail(body)
        .then((response) => {
            console.log(response.text("En breve nos contactaremos"))
        })
        .catch((error) => {
            console.log(error)
        })
})