
class Renderer {
   constructor(data) {
   this.data = data
   }
   
   userRender() {
      $('.user-container').empty()
      const source = $('#user-template').html()
      const template = Handlebars.compile(source)
      const userInfo = template(this.data)
      $('.user-container').append(userInfo)

   }

   friendsRender() {
      $('.friends-list').empty()
      const source = $('#friends-template').html()
      const template = Handlebars.compile(source)
      const friendsList = template(this.data)
      $('.friends-container').append(friendsList)

   }

   quoteRender() {
      $('.quote-container').empty()
      const source = $('#quote-template').html()
      const template = Handlebars.compile(source)
      const quote = template(this.data)
      $('.quote-container').append(quote)
   }

   pokemonRender() {
      $('.pokemon-container').empty()
      const source = $('#pokemon-template').html()
      const template = Handlebars.compile(source)
      const pokemon = template(this.data)
      $('.pokemon-container').append(pokemon)
   }
   aboutRender(){
      $('.meat-container').empty()
      const source = $('#about-template').html()
      const template = Handlebars.compile(source)
      const about = template(this.data)
      $('.meat-container').append(about)
   }
   mainRender(){
      this.userRender()
      this.friendsRender()
      this.quoteRender() 
      this.pokemonRender()
      this.aboutRender()
   }


}