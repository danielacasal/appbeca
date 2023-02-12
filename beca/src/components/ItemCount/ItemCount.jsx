import { useState } from "react"


const ItemCount = ({initial=1, stock=10, onAdd}) => {
    const [count, setCount] = useState (initial)

    const handleSuma = () => {
        if(count < stock) {
            setCount(count+1)
        }else {

        }
    }

    const handleResta = () => {
        if(count> initial){
            setCount(count-1)
        }
        
    }

    const handleOnAdd = () => {
        onAdd(`Cantidad: ${count}`)
    }

  return (
    <div className="card">
        <div className="card-body">
            <button className="btn btn-outline-dark w-100" onClick={handleSuma}>+</button>
            <label>{count}</label>
            <button className="btn btn-outline-dark w-100" onClick={handleResta}>-</button>
        </div>
        <div className="card-footer">
            <button className="btn btn-outline-dark w-100" onClick={handleOnAdd}>Agregar</button>
        </div>
    </div>
  )
}

export default ItemCount
