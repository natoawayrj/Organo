import './Select.css'

const Select = (props) => {
  return (
    <div className="select">
        <label >{props.label}</label>
        <select onChange={e=>props.alterado(e.target.value)} value={props.valor}>
          <option value=""></option>
           {props.itens.map(item=> <option key={item}>{item}</option>)}
        </select>
    </div>
  )
}

export default Select
