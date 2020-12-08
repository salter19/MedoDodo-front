import axios from 'axios'
import Servers from './Servers'

const address = Servers.local
const options = ['week/', 'category/']

const byWeek = async(value) => {
    const result = await axios.get(`${address}${options[0]}${value}`);
    return result.data;
}

const byCategory = async(value) => {
    const result = await axios.get(`${address}${options[1]}${value}`)
    return result.data;
}

export default {byWeek}