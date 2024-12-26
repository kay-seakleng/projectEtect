arrCard = [
    {title: " Moana 2",                 image: " assets/action/a1.jpeg", video: "https://kisskh.co/Drama/Moana-2--HD-CAM-/Episode-1?id=9905&ep=170095&page=0&pageSize=100"},
    {title: " Venom: The Last Dance",   image: " assets/action/a15.jpeg", video: "https://kisskh.co/Drama/Venom--The-Last-Dance/Episode-1?id=9753&ep=166697&page=0&pageSize=100"},
    {title: " Mufasa The Lion King",    image: " assets/action/a3.jpeg", video: "https://kisskh.co/Drama/Mufasa-The-Lion-King--CAM-/Episode-1?id=9993&ep=171607&page=0&pageSize=100"},
    {title: " Sonic the Hedgehog 3",    image: " assets/action/a4.jpeg", video: "https://kisskh.co/Drama/Sonic-the-Hedgehog-3--CAM-/Episode-1?id=9992&ep=171606&page=0&pageSize=100"},
    {title: " The Six Triple Eight",    image: " assets/action/a5.jpeg", video: "https://kisskh.co/Drama/The-Six-Triple-Eight/Episode-1?id=9990&ep=171568&page=0&pageSize=100"},
    {title: " Carry-On",                image: " assets/action/a6.jpeg", video: "https://kisskh.co/Drama/Carry-On/Episode-1?id=9982&ep=171324&page=0&pageSize=100"},
    {title: " Small Things Like These", image: " assets/action/a7.jpeg", video: "https://kisskh.co/Drama/Small-Things-Like-These/Episode-1?id=9981&ep=171323&page=0&pageSize=100"},
    {title: " Anora (2024)",            image: " assets/action/a8.jpeg", video: "https://kisskh.co/Drama/Anora--2024-/Episode-1?id=9978&ep=171313&page=0&pageSize=100"},
    {title: " Red one",                 image: " assets/action/a9.jpeg", video: "https://kisskh.co/Drama/Red-One/Episode-1?id=9941&ep=170987&page=0&pageSize=100"},
    {title: " Weekend in Taipei",       image: " assets/action/a10.jpeg", video: "https://kisskh.co/Drama/Weekend-in-Taipei/Episode-1?id=9931&ep=170841&page=0&pageSize=100"},
    {title: " Smile 2",                 image: " assets/action/a11.jpeg", video: "https://kisskh.co/Drama/Smile-2/Episode-1?id=9855&ep=169192&page=0&pageSize=100"},
    {title: " High Potential",          image: " assets/action/a12.jpeg", video: "https://kisskh.co/Drama/High-Potential/Episode-1?id=9629&ep=164753&page=0&pageSize=100"},
    

];

function getCards(){
    const cardRow = document.getElementById("rowCardHollywood");
    cardRow.innerHTML = "";

    arrCard.forEach( item => {
        const card = `
         <div class="col-6 col-lg-3 mb-5 " >
                    <div class="card overflow-hidden">
                        <img src="${item.image}" alt="" >
                        <div class="card-footer text-bg-dark">
                            <p>${item.title}</p>
                            <div class="text-center ">
                                <button class="rounded-3 p-2 border-0 bg-primary text-light"><a href="${item.video}" class="navbar-brand">
                                        Watch 
                                </a></button>
                           </div>
                        </div>
                    </div>
                </div>
        `;
        cardRow.innerHTML += card;
    })
    
}
getCards();