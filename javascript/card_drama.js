arrCard = [
    { title: " True Beauty", image: "assets/drama/d1.webp", video: "https://kisskh.co/Drama/True-Beauty/Episode-1?id=975&ep=29922&page=0&pageSize=100" },
    { title: " My Demon", image: "assets/drama/d2.jpeg ", video: "https://kisskh.co/Drama/My-Demon/Episode-1?id=8268&ep=139842&page=0&pageSize=100" },
    { title: " Lovely Runner", image: " assets/drama/d3.webp", video: "https://kisskh.co/Drama/Lovely-Runner/Episode-1?id=8792&ep=150326&page=0&pageSize=100" },
    { title: " Marry My Husband", image: " assets/drama/d4.jpeg", video: "https://kisskh.co/Drama/Marry-My-Husband/Episode-1?id=8409&ep=144044&page=0&pageSize=100" },
    { title: " Snowdrop", image: " assets/drama/d5.jpeg ", video: "https://kisskh.co/Drama/Snowdrop/Episode-1?id=1106&ep=60927&page=0&pageSize=100" },
    { title: " Queen of Tears", image: " assets/drama/d6.jpeg", video: "https://kisskh.co/Drama/Queen-of-Tears/Episode-1?id=8714&ep=147731&page=0&pageSize=100" },
    { title: " A Business Proposal", image: " assets/drama/d7.jpeg ", video: "https://kisskh.co/Drama/A-Business-Proposal/Episode-1?id=4608&ep=86192&page=0&pageSize=100" },
    { title: " Twinkling Watermelon", image: " assets/drama/d8.jpeg", video: "https://kisskh.co/Drama/Twinkling-Watermelon/Episode-1?id=7977&ep=136523&page=0&pageSize=100" },
    { title: " Love Next Door", image: " assets/drama/d9.jpeg ", video: "https://kisskh.co/Drama/Love-Next-Door/Episode-1?id=9301&ep=160501&page=0&pageSize=100" },
    { title: " Family by Choice ", image: " assets/drama/d10.avif ", video: "https://kisskh.co/Drama/Family-by-Choice/Episode-1?id=9491&ep=165145&page=0&pageSize=100" },
    { title: " My Lovely Liar", image: " assets/drama/d11.jpeg", video: "https://kisskh.co/Drama/My-Lovely-Liar/Episode-1?id=7490&ep=131633&page=0&pageSize=100" },
    { title: " When the Phone Rings", image: " assets/drama/d12.jpeg ", video: "https://kisskh.co/Drama/When-the-Phone-Rings/Episode-1?id=9828&ep=169608&page=0&pageSize=100" },
    { title: " Falling Into Your Smile", image: " assets/drama/d13.webp", video: "https://kisskh.co/Drama/Falling-Into-Your-Smile/Episode-1?id=773&ep=59814&page=0&pageSize=100" },
    { title: " Fireworks of My Heart", image: " assets/drama/d14.webp", video: "https://kisskh.co/Drama/Fireworks-of-My-Heart/Episode-1?id=7628&ep=129654&page=0&pageSize=100" },
    { title: " My Boss", image: " assets/drama/d15.avif ", video: "https://kisskh.co/Drama/My-Boss/Episode-1?id=8273&ep=144185&page=0&pageSize=100" },
    { title: " When I Fly Towards You", image: " assets/drama/d16.jpeg ", video: "https://kisskh.co/Drama/When-I-Fly-Towards-You/Episode-1?id=7532&ep=128132&page=0&pageSize=100" },



];

function getCards() {
    const cardRow = document.getElementById("rowCardDrama");
    cardRow.innerHTML = "";

    arrCard.forEach(item => {
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
