import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c394b1989abba236dfb710794cb353f0755f79fc1144851c4e6b190c85d927e0'
    }
});