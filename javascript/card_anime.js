arrCard = [
    {title: " Yakuza Fiancé: Raise wa Tanin ga Ii",     image: " assets/anime/n1.jpeg", video: "https://kisskh.co/Drama/Yakuza-Fianc---Raise-wa-Tanin-ga-Ii/Episode-1?id=9644&ep=164889&page=0&pageSize=100"},
    {title: " Cheng He Titong - How dare you !?",       image: " assets/anime/n2.jpeg", video: "https://kisskh.co/Drama/Cheng-He-Titong---How-dare-you---/Episode-1?id=9195&ep=156878&page=0&pageSize=100"},
    {title: " Renegade Immortal - Xian Ni",             image: " assets/anime/n3.avif", video: "https://kisskh.co/Drama/Renegade-Immortal---Xian-Ni/Episode-1?id=8050&ep=136531&page=0&pageSize=100"},
    {title: " Battle Through the Heavens 5th Season",   image: " assets/anime/n4.avif", video: "https://kisskh.co/Drama/Battle-Through-the-Heavens-5th-Season/Episode-27?id=5640&ep=116915&page=0&pageSize=100"},
    {title: " Blue Lock vs. U-20 Japan ",               image: " assets/anime/n5.jpeg", video: "https://kisskh.co/Drama/Blue-Lock-vs--U-20-Japan---Blue-Lock-2nd-Season/Episode-1?id=9623&ep=164734&page=0&pageSize=100"},
    {title: " Soul Land 2: The Peerless Tang Clan",     image: " assets/anime/n6.avif", video: "https://kisskh.co/Drama/Soul-Land-2--The-Peerless-Tang-Clan/Episode-1?id=7182&ep=128269&page=0&pageSize=100"},
    {title: " The Demon Hunter",                        image: " assets/anime/n7.jpeg", video: "https://kisskh.co/Drama/Cang-Yuan-Tu---The-Demon-Hunter/Episode-1?id=7565&ep=128765&page=0&pageSize=100"},
    {title: " Perfect World",                           image: " assets/anime/n8.webp", video: "https://kisskh.co/Drama/Perfect-World/Episode-95?id=1832&ep=117645&page=0&pageSize=100"},
    

];

function getCards(){
    const cardRow = document.getElementById("rowCardAnime");
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