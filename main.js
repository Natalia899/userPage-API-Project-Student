const api = new APIManager()


const data = function() {
    api.loadData()
}

const displayData = () => { 
    const render = new Renderer(api.data)
    render.mainRender()
}