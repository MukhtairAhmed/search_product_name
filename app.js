var item = [
    {
        imgbx :"./5.avif",
        price : "$200",
        title : "cloth",
    },
    {
        imgbx : "./5.avif",
        price : "$90",
        title : "tiye",
    },
    {
        imgbx :"./5.avif",
        price : "60",
        title : "pant",
    },
    {
        imgbx :"./5.avif",
        price : "$50",
        title : "women cloth",
    },
    {
        imgbx :"./5.avif",
        price : "$20",
        title : "Tshirt",
    },
    {
        imgbx :"./5.avif",
        price : "$100",
        title : "baby cloth",
    },
    {
        imgbx :"./5.avif",
        price : "$100",
        title : "baby cloth",
    },
    {
        imgbx :"./5.avif",
        price : "$99",
        title : "hp",
    },
    {
        imgbx :"./5.avif",
        price : "$66",
        title : "kits",
    },
    {
        imgbx :"./5.avif",
        price : "$60",
        title : "pan",
    },
    {
        imgbx :"./5.avif",
        price : "$80",
        title : "book",
    },
];

var production = [...new Set(item.map((data)=>{
    return data;
}))];


var user_Data = document.getElementById("data");
user_Data.onkeyup = (e) =>{
var now = e.target.value;
var voltage = production.filter((data)=>{
    return(
        data.title.toLocaleLowerCase().includes(now)
    );
    })
    filter_data(voltage);
}





function filter_data(para){
     document.getElementById("root").innerHTML = para.map((data)=>{
        var {imgbx,title,price} = data;
        return(`
<div id='box'>
    <img src='${imgbx}' alt="">    
     <span>${title}</span>
    <p>${price}</p>
    </div>
`);
    })
}


filter_data(item);

