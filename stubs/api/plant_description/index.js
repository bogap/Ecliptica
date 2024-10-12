const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const ACCESS_TOKEN = '' // ProxyAPI token
const sendMessage = async (request) => {
    try {
        const response = await axios.post(
            'https://api.proxyapi.ru/openai/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [{'role': 'user', 'content': request}],
                max_tokens: 150,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                },
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error sending message:', error);
    }
};

sendMessage("Where is Russia?").then(r => console.log(r));