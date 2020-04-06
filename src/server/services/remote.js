import fetch from 'isomorphic-fetch';

export default url => fetch(
    url,
    {
        headers: {
            Accept: 'application/json',
        },
    },
)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }

            throw new Error(`couldn't GET ${url}`);
        });
