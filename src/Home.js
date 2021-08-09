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

    const handleOnClickPeopleInfo = () => {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => {
            if (!res.ok) {
                throw new Error("Could not fetch the people details from this source.")
            }
            return res.json();
        })
        .then(data => {
            const title = `<h3>List of people currently in space</h3>`;
            const template = data.people.map(person => {
                return `<li>${person.name} is currently on ${person.craft}</li>`;
            })

            document.querySelector(".content-people").innerHTML = title + template;
        })
        .catch(err => {
            const template = `
            <div className="error">
                <p>${err.message}</p>
            </div>
            `
            document.querySelector(".content-people").innerHTML = template;
        })   
    }

    return (
        <div className="home">
            <button id="get-image" onClick={handleOnClickImage}>Get image of the day</button>
            <button id="get-story" onClick={handleOnClickPeopleInfo}>Get info on people in space</button>
            <article className="content-image">                
            </article>
            <article className="content-people">
            </article>
        </div>
    );
}

export default Home;