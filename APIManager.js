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
                this.data.user.fName = users.results[0].name.first
                this.data.user.lName = users.results[0].name.last
                this.data.user.city = users.results[0].location.city
                this.data.user.country = users.results[0].location.country
                this.data.user.imagine = users.results[0].picture.thumbnail
            }
        })
    }

    getFriends() {
       // this.data.friends=[]
        for (let i = 0; i<6; i++) {
            $.ajax({
                method: 'get',
                url: 'https://randomuser.me/api/',
                success: (friend) => {
                    let friendName = friend.results[0].name.first + " " + friend.results[0].name.last
                    this.data.friends.push(friendName)

                }
            })
        }
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








