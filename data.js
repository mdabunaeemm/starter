const reviews = [
    {
        id:1,
        name:"Smith",
        job:"web developer",
        img:"mem-1.png",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, voluptatum. Et labore, incidunt iure quia beatae at natus. Ullam eius, veniam voluptas blanditiis accusantium ipsa dolore aspernatur recusandae eveniet quas!",
    },
    {
        id:2,
        name:"Sujan",
        job:"web developer",
        img:"mem-2.png",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, voluptatum. Et labore, incidunt iure quia beatae at natus. Ullam eius, veniam voluptas blanditiis accusantium ipsa dolore aspernatur recusandae eveniet quas!",
    },
    {
        id:3,
        name:"Jone Doe",
        job:"web developer",
        img:"mem-3.png",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, voluptatum. Et labore, incidunt iure quia beatae at natus. Ullam eius, veniam voluptas blanditiis accusantium ipsa dolore aspernatur recusandae eveniet quas!",
    },
];

const img = document.querySelector("#person-img");
const author = document.querySelector(".name");
const job = document.querySelector(".job");
const text = document.querySelector(".text");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const random = document.querySelector(".random");



let currentItem = 1;



window.addEventListener("DOMContentLoaded", function(){
    ShowItem(currentItem)
    
});
function ShowItem(person){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    text.textContent=item.text;
}
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length -1 ){
        currentItem = 0;
    }
    ShowItem(currentItem);
})
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0 ){
        currentItem = reviews.length-1;
    }
    ShowItem(currentItem);
})
random.addEventListener("click", function(){
    
    currentItem = Math.floor(Math.random()*reviews.length)
    ShowItem(currentItem);
})

