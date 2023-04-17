import './style.css'


export function Card ({name, dataCadastro}:any) {
    return(
        <div className='card'>
            <strong>{name}</strong>
            <small>{dataCadastro}</small>
        </div>
    )
}