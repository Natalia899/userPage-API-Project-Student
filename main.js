const api = new APIManager()
const render = new Renderer()

const data = function() {
    api.loadData()
}

const displayData = () => {
    render.mainRender(api.data)
}