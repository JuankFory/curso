import PropTypes from "prop-types"

export function Button({text, name}){
console.log(text)
    return <button onClick={function (){
        alert("Presiono Boton del usuario"+name)
    }}>
        {text}-{name}
        </button>
}

Button.PropType={
    text:PropTypes.string.isRequired

}
//Valor por defecto o tambien se puede colocando desde el paramtero donde se recibe
Button.defaultProps={
    name:"usuario"
}