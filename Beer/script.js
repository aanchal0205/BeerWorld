var page=1;


async function getdata()                                                    //fetching data from UPI
{
  try
  {

  
    const data =await fetch(`https://api.punkapi.com/v2/beers?per_page=9&page=${page}`,{
    method:"GET"
  });
  const beer= await data.json();
  console.log(beer);
// 
  beer.forEach((beer) => createlist(beer))
}
catch(err)
{
  console.log("Data Not Found");
}

}
getdata();





function createlist({name,tagline,first_brewed,description,image_url})              //This function will fetch the fields from the API and will display it in respective HTML
{
    const info=document.createElement('div');
    info.setAttribute("class","container-fluid");

    info.innerHTML=`
    <div class="row mt-3 main justify-content-center">
    <div class=" picture col-lg-12 col-sm-12">
    <img src=${image_url} " height="150px" width="90px""/>
    </div>
    </div>

    <div class="row h justify-content-center">
    <div class="col-lg-12 m col-sm-11">
    <div class="row mt-3 justify-content-center">
    <div class="detailsn">
    <div class="name col-lg-10 ">
    <h3>${name}</h3>
    </div>
    </div>
    </div>
    <div class="row justify-content-center">
    <div class="details col-lg-12 col-sm-10">
    <p>${`<i class="fa fa-quote-left" aria-hidden="true">&nbsp&nbsp<i>${tagline}</i>&nbsp</i><i class="fa fa-quote-right " aria-hidden="true"></i>`}</p>
    </div>
    </div>

    <div class="row justify-content-start">
    <div class="details col-lg-6 col-sm-10 ">
    <p><b>First Brewed:</b>&nbsp&nbsp${first_brewed}</p>
    </div>
    </div>

    <div class="row justify-content-start">
    <div class="details col-lg-12 col-sm-11 ">
    <p class="description">${`<i class="fa fa-info-circle" aria-hidden="true">&nbsp${description}</i>`}</p>
    
    </div>
    <div>
    </div>
    </div>
    
  </div>
     `;

    var s= document.querySelector(".beerlist");
    s.append(info);

    var s= document.querySelectorAll(".m")
var colors = ["#d7d714", "#639191", "#9ccc65","#ffab91","#e1bee7","#c5cae9","#e7c175db"];
for(var i=0;i<s.length;i++)
{
  s[i].style.backgroundColor=colors[i%colors.length];
}


var p= document.querySelectorAll(".picture")
var colors = [ "#639191", "#9ccc65","#ffab91","#e1bee7","#c5cae9","#e7c175db","#d7d714"];
for(var i=0;i<p.length;i++)
{
  p[i].style.backgroundColor=colors[i%colors.length];
}

    
}








function more()    //This function will display next 8 beer data on the page as perpage 8 beers are displayed at a time. This function results in pagination
{
    page++;
    
    getdata();
}



