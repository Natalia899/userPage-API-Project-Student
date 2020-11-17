
class Renderer {
   
   userRender() {
      const source = $('#user-template').html()
      const template = Handlebars.compile(source)
      const userInfo = template(this.data)
      $('.user-container').empty().append(userInfo)

   }

   friendsRender() {
      const source = $('#friends-template').html()
      const template = Handlebars.compile(source)
      const friendsList = template(this.data)
      $('.friends-container').empty().append(friendsList)

   }

   quoteRender() {
      const source = $('#quote-template').html()
      const template = Handlebars.compile(source)
      const quote = template(this.data)
      $('.quote-container').empty().append(quote)
   }

   pokemonRender() {
      const source = $('#pokemon-template').html()
      const template = Handlebars.compile(source)
      const pokemon = template(this.data)
      $('.pokemon-container').empty().append(pokemon)
   }

   aboutRender(){
      const source = $('#about-template').html()
      const template = Handlebars.compile(source)
      const about = template(this.data)
      $('.meat-container').empty().append(about)
   }
   
   mainRender(data){
      this.userRender()
      this.friendsRender()
      this.quoteRender() 
      this.pokemonRender()
      this.aboutRender()
   }


}