import { useState } from 'react';
import axios from 'axios';


export function useFlip() {
    const [isFlipped, setIsFlipped] = useState(false);
    const flipCard = () => setIsFlipped(isFlipped => !isFlipped);
    return [isFlipped, flipCard];
}


export function useAxios(baseUrl, formatData = data => data) {
    const [data, setData] = useState([]);

    const addData = async (urlSuffix = '') => {
        const response = await axios.get(`${baseUrl}${urlSuffix}`);
        setData(data => [...data, formatData(response.data)]);
    };

    const clearData = () => {
        setData([]);
    };

    return [data, addData, clearData];
}