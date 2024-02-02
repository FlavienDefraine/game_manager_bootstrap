console.log("le log de la console")

/*top games*/
const gameList = [
    {
        title:"Hollow knight",
        date:2017,
        imgUrl:"https://upload.wikimedia.org/wikipedia/en/0/04/Hollow_Knight_first_cover_art.webp",
    },
    {
        title:"FC24",
        date:2023,
        imgUrl:"https://www.presse-citron.net/app/uploads/2023/08/ea-sports-fc-24-preo.jpg",
    },
    {
        title:"Super Mario Bros Wonder",
        date:2023,
        imgUrl:"https://www.presse-citron.net/app/uploads/2023/10/Sans-titre-1.jpg",
    },
    {
        title:"Minecraft",
        date:2009,
        imgUrl:"https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP",
    },
    {
        title:"Terraria",
        date:2011,
        imgUrl:"https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg?t=1666290860",
    },
    {
        title:"Tony Hawk's Pro Skater 2",
        date:2000,
        imgUrl:"https://d2ed948asmbmr8.cloudfront.net/static/media/products/Tony-Hawks-Pro-Skater-2-n64.jpg",
    },
]

/* DOM ELEMENTS*/
const cardContainer = document.querySelector(".row")

/* Modal ELEMENTS*/
const modalTitle = document.querySelector(".modal-title")
const modalBody = document.querySelector(".modal-body")
const modalFooter = document.querySelector(".modal-footer")

gameList.forEach((game, i) => {
    console.log(game.title, i),
    console.log(game.date, i),
    console.log(game.imgUrl, i),
    cardContainer.innerHTML += `
        <div class="col">
            <article class="card shadow-sm">
                <img src="${game.imgUrl}" class = "bd-placeholder-img card-img-top" alt="${game.title}">
                <div class="card-body">
                    <h3>${game.title}</h3>
                    <p class="card-text">${game.date}</p>
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-secondary view" data-bs-toggle="modal" data-bs-target="#gameModal">
                            View
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary edit" data-bs-toggle="modal" data-bs-target="#gameModal">
                            Edit
                        </button>
                    </div>
                </div>
                
            </article>
        </div>
            
    `
})

/*buttons array*/
const listBtnsView = document.querySelectorAll(".view")
const listBtnsEdit = document.querySelectorAll(".edit")

listBtnsView.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        modalTitle.innerHTML = gameList[i].title
        modalBody.innerHTML = `
            <img src="${gameList[i].imgUrl}" alt="${gameList[i].title}" class="img-fluid rounded mx-auto d-block">
            <p class="mt-4 text-center">${gameList[i].date}</p>
        `
        modalFooter.innerHTML = `
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
        `
    })
})



listBtnsEdit.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        modalTitle.innerHTML = "Edit mode"
        modalBody.innerHTML = `
            <div class="mt-2 title">
                <label for="title" class="form-label">Titre</label>
                <input type="text" class="form-control" id="title" placeholder="${gameList[i].title}">
            </div>
            <div class="mt-2 image">
                <label for="date" class="form-label">Date</label>
                <input type="text" class="form-control" id="date" placeholder="${gameList[i].date}">
            </div>
            <div class="mt-2 image">
                <label for="image" class="form-label">Image</label>
                <input type="text" class="form-control" id="image" placeholder="${gameList[i].imgUrl}">
                <img src="${gameList[i].imgUrl}" alt="${gameList[i].title}" class="img-fluid rounded mx-auto d-block mt-4">
            </div>
        `
        modalFooter.innerHTML = `
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success save">Save changes</button>
        `
        const saveBtn = document.querySelector(".save")
        saveBtn.addEventListener("click", () => {
            const newTitle = document.getElementById("title");
            const newDate = document.getElementById("date");
            const newImage = document.getElementById("image");
            if(newTitle.value == null || newDate.value == null || newImage == null){alert("missing value")}else(console.log(newTitle.value, newDate.value, newImage.value))
        })
    })
})