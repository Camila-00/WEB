


const container = document.querySelector("#App")

// -------------SEM React------------------------------------------------------------

// const App = document.createElement("h2")
// App.innerHTML = "Contador com JS"

// container.appendChild(App)

// --------------COM React------------------------------------------------------------

// const App = React.createElement("h2", null, "Contador com React")

// ReactDOM.render(App, container)

// --------------COM Função-----------------------------------------------------------

// function App(props) {
//     return React.createElement("h2", null, props.title)
// }

// ReactDOM.render(React.createElement(App, {title: "Contador Novo"}, null), container)

// --------------Inserindo elementos---------------------------------------------------

// function App(props) {
//     const Title = React.createElement("h2", null, props.title)
//     const Contador = React.createElement("h3", null, 0)

//     return React.createElement("div", {className: props.className}, [Title, Contador])
// }

// ReactDOM.render(React.createElement(App, {title: "Contador Novo"}, null), container)

// ------------------Usando o Babel e inserindo  elementos de ação----------------------

function App(props) {

    const [contagem, setContagem] = React.useState(0)

    function increment() {
        setContagem(anterior => anterior + 1)
    }

    function decrement() {
        setContagem(anterior => anterior - 1)
    }

    return (<div className= "contador">
                <h2>{props.title}</h2>
                <h3>{contagem}</h3>
                <div>
                    <button className="button1" onClick={decrement}>-</button>
                    <button className="button2" onClick={increment}>+</button>                    
                </div>
        
            </div>)
}

ReactDOM.render(React.createElement(App, {title: "Contador"}, null), container)


