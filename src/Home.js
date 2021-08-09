import { useState } from "react";

const Home = () => {
    const [isPendingImg, setIsPendingImg] = useState(false);
    const [isPendingData, setIsPendingData] = useState(false);

    const handleOnClickImage = () => {
        setIsPendingImg(true);
        fetch("https://api.nasa.gov/planetary/apod?api_key=9YUajepmhWTLLO1dz38SxEeKsWa8KyzPDKK66Bep")
        .then(res => {
            if(!res.ok){
                setIsPendingImg(false);
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
           setIsPendingImg(false);
        })
        .catch(err => {
            const template = `
            <div className="error">
                <p>${err.message}</p>
            </div>
            `
            document.querySelector(".content-image").innerHTML = template;
            setIsPendingImg(false);
        })        
    }

    const handleOnClickData = () => {
        setIsPendingData(true);
        fetch("https://ssd-api.jpl.nasa.gov/cad.api")
        .then(res => {
            if (!res.ok) {
                setIsPendingData(false);
                throw new Error("Could not fetch the people details from this source.");
            }
            return res.json();
        })
        .then(details => {
            const title = `<h3>NEO Earth close-approaches of less than 0.05 au in the next 60 days</h3>`;
            const total = `<h4>Total expected close approaches: ${details.count}</h4>`;
            const dataTable = `
            <table>
                <thead>
                    <th>Asteroid/Comet Designation</th>
                    <th>Date</th>
                </thead>
                <tbody class="data-details">
                <tbody>
            </table>
            `
            document.querySelector(".content-data").innerHTML = title + total + dataTable;
            
            const template = details.data.map(el => {
                return `
                <tr>
                    <td>${el[0]}</td>
                    <td>${el[3]}</td>
                </tr>
                `
            });

            document.querySelector(".data-details").innerHTML = template.join("");
            setIsPendingData(false);
        })
        .catch(err => {
            const template = `
            <div className="error">
                <p>${err.message}</p>
            </div>
            `
            document.querySelector(".content-data").innerHTML = template;
            setIsPendingData(false);
        })   
    }

    return (
        <div className="home">
            <button id="get-image" onClick={handleOnClickImage}>{isPendingImg === false ? "Get image of the day" : "Loading..."}</button>
            <button id="get-story" onClick={handleOnClickData}>{isPendingData === false ? 
            "Get asteroids and comets close-approach data" : "Loading..."}</button>
            <article className="content-image">                
            </article>
            <article className="content-data">
            </article>
        </div>
    );
}

export default Home;