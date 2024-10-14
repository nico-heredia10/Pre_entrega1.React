

export default async function Promesa(url){

    return await fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error('Erron el la petision');
        }
        return response.json();
    })
    .then(data => data)
    .catch(error => {
        console.error('Error en la petision '+ error)
    })
}