document.getElementById("actualitzar").addEventListener("click", function() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("bitcoin").innerHTML = data.bpi.EUR.rate + " €"
    })
    .catch(error => {
        console.error('Error obteniendo la cotización del Bitcoin:', error)
        document.getElementById("bitcoin").innerHTML = "Error cargando datos"
    })
})


document.getElementById("novaBroma").addEventListener("click", function() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("broma").innerHTML = data.value
    })
    .catch(error => {
        console.error('Error obteniendo la broma de Chuck Norris:', error)
        document.getElementById("broma").innerHTML = "Error cargando broma"
    })
})


document.getElementById("nouUsuari").addEventListener("click", function() {
    
    const gender = document.querySelector('input[name="gender"]:checked').value
    const nationality = document.getElementById("nationality").value
    
   
    let apiUrl = 'https://randomuser.me/api/'
    let params = []
    
    if (gender) {
        params.push(`gender=${gender}`)
    }
    
    if (nationality) {
        params.push(`nat=${nationality}`)
    }
    
    
    params.push('results=1')
    
    if (params.length > 0) {
        apiUrl += '?' + params.join('&')
    }
    
    console.log('URL de la API:', apiUrl)
    
    
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API')
        }
        return response.json()
    })
    .then(data => {
        console.log('Datos del usuario:', data)
        const user = data.results[0]
        
        
        const userCard = document.createElement('div')
        userCard.className = 'user-card'
        
        userCard.innerHTML = `
            <img src="${user.picture.large}" alt="Avatar de ${user.name.first} ${user.name.last}" class="user-avatar">
            <div class="user-info">
                <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Telèfon:</strong> ${user.phone}</p>
                <p><strong>Ubicació:</strong> ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}</p>
                <p><strong>Edat:</strong> ${user.dob.age} anys</p>
                <p><strong>Gènere:</strong> ${user.gender === 'male' ? 'Home' : 'Dona'}</p>
                <p><strong>Data de registre:</strong> ${new Date(user.registered.date).toLocaleDateString('ca-ES')}</p>
            </div>
        `
        
        
        document.getElementById("usuaris").prepend(userCard)
    })
    .catch(error => {
        console.error('Error obteniendo usuario aleatorio:', error)
        alert('Error al cargar el usuario. Por favor, intenta de nuevo.')
    })
})


document.addEventListener('DOMContentLoaded', function() {
})