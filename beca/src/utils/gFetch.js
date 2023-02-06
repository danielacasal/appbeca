let servicios = [
    { id: '1', categoria: 'masajes', name: 'FACIAL', price: '25', image: './src/assets/facial.jpg'},
    { id: '2', categoria: 'masajes', name: 'ESPALDA', price: '26', image: './src/assets/espalda.jpg'},
    { id: '3', categoria: 'masajes', name: 'PIERNAS', price: '27', image: './src/assets/piernas.jpg'},
    { id: '4', categoria: 'masajes', name: 'MANOS', price: '28', image: './src/assets/manos.jpg'},
    { id: '5', categoria: 'esteticos', name: 'CAPILAR', price: '30', image: './src/assets/capilar.jpg'},
    { id: '6', categoria: 'esteticos', name: 'MANICURE', price: '31', image: './src/assets/manicure.jpg'},
    { id: '7', categoria: 'esteticos', name: 'PEDICURE', price: '32', image: './src/assets/pedicure.jpg'},
    { id: '8', categoria: 'esteticos', name: 'MAQUILLAJE', price: '33', image: './src/assets/maquillaje.jpg'}
]

export const gFetch = (id)=>{
    return new Promise((resolve, reject )=>{
    setTimeout(()=>{
        resolve(id ? servicios.find(serv => serv.id === id) : servicios)
        }, 1000)
    })
}