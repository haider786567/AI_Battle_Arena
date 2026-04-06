import type { BattleData } from './types';
import axios from 'axios';

// Replace this with a real API call to your backend
export const fetchBattleData = async (problem: string): Promise<BattleData> => {
    try {
        const response = await axios.post('http://localhost:3000/use-graph', { problem });``
        
        
        return response.data.data as BattleData;
    } catch (error) {
        console.error('Error fetching battle data:', error);
        throw new Error('Failed to fetch battle data');
    }

};
