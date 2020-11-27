//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {
            user: {},
            friends: [],
            quote: '',
            pokemon: {},
            about: ''
        }
    }

    getUser() {
        $.ajax({
            method: 'GET',
            url: 'https://randomuser.me/api/',
            success:  (users) => {
                let person = users.results[0]
                this.data.user.fName = person.name.first
                this.data.user.lName = person.name.last
                this.data.user.city = person.location.city
                this.data.user.country = person.location.country
                this.data.user.imagine = person.picture.thumbnail
            }
        })
    }

    getFriends() {
            $.ajax({
                method: 'get',
                url: 'https://randomuser.me/api/?results=6',
                success: (friend) => {
                    this.data.friends=friend.results.map( f => f.name.first + " " + f.name.last)
                }
            })
        }
   

    getQuote() {
        $.ajax({
            method: 'GET',
            url: 'https://api.kanye.rest',
            success: (west) => {
                this.data.quote = west.quote
            }
        })
    }

    getPokemon() {
        const pokemonID = Math.floor(Math.random() * 100) + 1
        $.ajax({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/item/${pokemonID}/`,
            success: (poke)=> {
                this.data.pokemon.name = poke.names[0].name
                this.data.pokemon.image = poke.sprites.default

            }
        })
    }

    getText() {
        $.ajax({
            method: 'GET',
            url: 'https://baconipsum.com/api/?type=meat-and-filler',
            success: (meat) => {
                this.data.about = meat
            }
        })
    }

    loadData() {
        this.getUser()
        this.getFriends()
        this.getQuote()
        this.getPokemon()
        this.getText()
    }

}








