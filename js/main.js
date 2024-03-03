// Function to fetch data from the API
var n = "0";
function openPage(pageName, elmnt, color) {
  n = 0;
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content

  document.getElementById(pageName).style.display = "block";
  if (pageName == "Home") {
    //console.log("oloooom");
  }

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
  //   fetchData(pageName);
  renderData(pageName);
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

async function fetchData(pageName) {
  // renderData();
  if (pageName == "Home") {
    n = "1";
    try {
      const response = await fetch("https://weeecode.com/api/retproducts/1");
      data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } else if(pageName=="News"){
    n = "2";
    try {
      const response = await fetch("https://weeecode.com/api/retproducts2/0");
      data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }else if(pageName=="Contact"){
    n = "3";
    try {
      const response = await fetch("https://weeecode.com/api/retproducts1/1");
      data = await response.json();
      
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  else{
      n='4';
    const response = await fetch("https://weeecode.com/api/upload-file1");
    data = await response.json();
    return data;
  }
 
}

// Function to render data in cards
async function renderData(pageName) {
    
   data = await fetchData(pageName);
  var container = document.querySelector(".main" + n);
  container.innerHTML='';
  if (!data) {
    return;
  }

  data.forEach((item) => {
    var brands = [
      "ZMS",
      "ZMS LUX",
      "ZMS MASTER",
      "ZMS V-BELT",
      "NXH INDUSTRIAL",
    ];
    const myrrow = document.createElement("div");
    const card = document.createElement("article");
    card.classList.add("card1");
    const img = document.createElement("img");
    img.classList.add("card__img");
    const dd = document.createElement("div");
    img.src = "./DATA/" + item.id + "/ID " + item.id + ".JPG";
    //  const inner=document.createElement('div');
    //  inner.classList.add('innercard')
    const title = document.createElement("h2");
    title.classList.add("card__name");

    const ah = document.createElement("a");

    const body = document.createElement("img");
    body.classList.add("card__icon");
    // body.classList.add('card__preci--before');
    if (item.category != null && item.category!="1") {
      // print(item.category);
      title.textContent = brands[parseInt(item.category) - 1];
      body.src = "./brands/" + item.category + ".png";
    } else {
      title.textContent = brands[0];

      body.src = "./brands/logo.png";
    }

    //body.textContent = item.type;
// container.removeChild();

    const cardp = document.createElement("div");
  
    cardp.classList.add("card__precis");

    const size = document.createElement("p");
  
    size.textContent = item.size;
    size.classList.add("card__preci");
    size.classList.add("card__preci--now");
    const size1 = document.createElement("p");
   
    size1.textContent = item.name;
    size1.classList.add("card__preci");
    size1.classList.add("card__preci--before");
    dd.appendChild(ah);

    dd.appendChild(size1);
    dd.appendChild(size);
    cardp.appendChild(body);
    // cardp.apspendChild(size);
    cardp.appendChild(dd);

    container.appendChild(card);
    card.appendChild(img);
    //card.appendChild(inner)
    card.appendChild(title);
    card.appendChild(cardp);

    // card.appendChild(myrrow);

    // inner.appendChild(size);
  });
}

// renderData();
