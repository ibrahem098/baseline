import {
    popular,
    latestArrivals,
    nikeDunks,
    blogPosts,
    shop,
    jordanScrollbar,
    nikeScrollbar,
    alerts
} from "./data.js";


function generateHTML(elemntClass, array, elemntFunction) {
    let HTML = ``;
    array.forEach((item) => {
        HTML += elemntFunction(item);
    });
    document.querySelector(elemntClass).innerHTML = HTML;
}

const nikeDunksHTML = (item) => `
    <div>
      <div class="nkpic${item.id}"></div>
      <div class="ladata">
        <p class="latitle">${item.title}</p>
        <p class="laprice">$${(item.priceCents)/100}</p>
      </div>
    </div>`

const latestArrivalsHTML = (item) => `
    <div class="la1 latestArrival">
      <div class="lapic${item.id}"></div>
      <div class="ladata">
        <p class="latitle">${item.title}</p>
        <p class="laprice">$${item.priceCents/100}</p>
      </div>
    </div>`

const popularHTML = (item) => `
    <div class="popularLine popi${item.id}">
        <div class="pop${item.id}"></div>
        <p class="ptitle">${item.title}</p>
        <p>${item.style}</p>
        <p>${item.brand}</p>
        <p>$ ${((Number(item.priceCents))/100)}</p>
      </div>`

const blogHTML = (item) => `
<div class="blogitem">
<div class="blogimg${item.id}"></div>
<div class="item-text">
  <span class="title">${item.title}</span>
  <span class="artc">${item.text}</span>
  <button class="but">Read more</button>
</div>
</div>`

const shopHTML = (item) => `
    <div class="${item.title}">
      <span>Shop ${item.title}</span>
    </div>`

const ScrollbarHTML = (item) => `
      <span>•</span>
      <img class="line-img" src="media/lines/line ${item.collection}/${item.id}${item.fileExtention}" />
      <span>${item.title}</span>`

const newdroppsHTML = (item) => `
<span>${item.alertMsg}</span><span>${item.alertMsg}</span><span>${item.alertMsg}</span><span>${item.alertMsg}</span>
<span>${item.alertMsg}</span><span>${item.alertMsg}</span><span>${item.alertMsg}</span><span>${item.alertMsg}</span>
<span>${item.alertMsg}</span><span>${item.alertMsg}</span><span>${item.alertMsg}</span><span>${item.alertMsg}</span>
<span>${item.alertMsg}</span><span>${item.alertMsg}</span><span>${item.alertMsg}</span><span>${item.alertMsg}</span>`

generateHTML('.latestArrivals', latestArrivals, latestArrivalsHTML);
generateHTML('.list', popular, popularHTML);
generateHTML('.nikeDunks', nikeDunks, nikeDunksHTML)
generateHTML('.blogall', blogPosts, blogHTML)
generateHTML('.shop', shop, shopHTML)
generateHTML('.freefly2', jordanScrollbar, ScrollbarHTML)
generateHTML('.freefly3', nikeScrollbar, ScrollbarHTML)
generateHTML('.newsline', alerts[1], newdroppsHTML)
generateHTML('.freefly', alerts[0], newdroppsHTML)