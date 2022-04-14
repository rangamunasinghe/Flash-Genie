import axios from 'axios';

export default {

    getAllDecks(){
        return axios.get('/decks');
    },

    create(deck){
        return axios.post(`/decks/`, deck);
    }

}
