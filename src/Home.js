const Home = () => {
    const handleOnClickImage = () => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=9YUajepmhWTLLO1dz38SxEeKsWa8KyzPDKK66Bep")
        .then(res => {
            if(!res.ok){
                throw new Error("Could not fetch the data from this source.")
            }
            return res.json();
        })
        .then(data => {
            const template = `
            <div className="home-data">
                    <h3>${data.title}</h3>
                    <img src=${data.url} alt=${data.title} />
                    <p>${data.explanation}</p>
                    <address>${data.date}</address>
                </div>
            `
           document.querySelector(".content-image").innerHTML = template;
        })
        .catch(err => {
            const template = `
            <div className="error">
                <p>${err.message}</p>
            </div>
            `
            document.querySelector(".content-image").innerHTML = template;
        })        
    }

    const handleOnClickData = () => {
        fetch("https://ssd-api.jpl.nasa.gov/cad.api")
        .then(res => {
            if (!res.ok) {
                throw new Error("Could not fetch the people details from this source.")
            }
            return res.json();
        })
        .then(details => {
            const title = `<h3>NEO Earth close-approaches of less than 0.05 au in the next 60 days</h3>`;
            const total = `<h4>Total expected close approaches: ${details.count}</h4>`;
            
            const template = details.data.map(el => {
                return `<li>Asteroid/comet designation <strong>"${el[0]}"</strong> will be close to Earth on <strong>${el[3]}</strong>.</li>`
            });

            document.querySelector(".content-data").innerHTML = title + total + template;
        })
        .catch(err => {
            const template = `
            <div className="error">
                <p>${err.message}</p>
            </div>
            `
            document.querySelector(".content-data").innerHTML = template;
        })   
    }

    return (
        <div className="home">
            <button id="get-image" onClick={handleOnClickImage}>Get image of the day</button>
            <button id="get-story" onClick={handleOnClickData}>Get asteroids and comets close-approach data</button>
            <article className="content-image">                
            </article>
            <article className="content-data">
            </article>
        </div>
    );
}

export default Home;