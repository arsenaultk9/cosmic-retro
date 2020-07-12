import Axios from 'axios';

function get(url: string) {
    return Axios.get(getUrl(url)).catch(generalErrorHandler(url));
}

function post(url: string, data?: any) {
    return Axios.post(getUrl(url), data).catch(generalErrorHandler(url));
}

function generalErrorHandler(url: string) {
    return (error: any) => {
        alert(`Failed to execute url ${url} with error: ${error} `);
        return Promise.reject(error);
    };
}

function getUrl(url: string) {
    return `http://localhost:5481/${url}`;
}

export default {
    get,
    post,
};
