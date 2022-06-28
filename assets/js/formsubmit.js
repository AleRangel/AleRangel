document.querySelector("form")
    .addEventListener("submit", e => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        console.log(data);




         fetch("https://formsubmit.co/ajax/ale.andrade.rangel@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: `${data.nombre}` ,
                lastName: `${data.Apellido}`,
                email: `${data.Email}`,
                asunto: `${data.Asunto}`,
                message: `${data.Mensaje}`

            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.success === "true"){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Mensaje enviado con éxito',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }else{
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
            .catch(error => console.log(error)); 
            
    })

   