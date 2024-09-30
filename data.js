export let popular = [{
    id: 1,
    title: 'Air Jordan 1 High Bleached Coral',
    priceCents: 52000,
    brand: 'Jordan',
    style: '555088-108'
}, {
    id: 2,
    title: 'Air Jordan 1 Mid Light Smoke Grey',
    priceCents: 39000,
    brand: 'Jordan',
    style: '554724-092'
}, {
    id: 3,
    title: 'Air Jordan 4 Thunder',
    priceCents: 55000,
    brand: 'Jordan',
    style: 'DH6927-017'
}, {
    id: 4,
    title: 'Air Jordan 4 Wmns Off-White Sail',
    priceCents: 255000,
    brand: 'Jordan',
    style: 'CV9388-100'
}, {
    id: 5,
    title: 'Asics Gel-Kayano 14 Aritzia White Leprechaun',
    priceCents: 40000,
    brand: 'Asics',
    style: '1203A328-100'
}, {
    id: 6,
    title: 'Asics Gel-Lyte III Ronnie Fieg Homage (Special Box)',
    priceCents: 104000,
    brand: 'Asics',
    style: 'H54FK-6540'
}, {
    id: 7,
    title: 'Converse Chuck Taylor All-star 70 Off-White',
    priceCents: 58000,
    brand: 'Converse',
    style: '163862C'
}, {
    id: 8,
    title: 'Converse Chuck Taylor All-star 70 Off-White Vulcanized',
    priceCents: 300000,
    brand: 'Converse',
    style: '162204C'
}, {
    id: 9,
    title: 'New Balance 550 Aime Leon Dore Olive',
    priceCents: 52000,
    brand: 'New Balance',
    style: 'BB550AD1'
}, {
    id: 10,
    title: 'New Balance 550 Rich Paul Forever Yours',
    priceCents: 34000,
    brand: 'New Balance',
    style: 'BB550RR1'
}, {
    id: 11,
    title: 'New Balance 550 Wmns Bubblegum Pink',
    priceCents: 28000,
    brand: 'New Balance',
    style: 'BBW550BD'
}, {
    id: 12,
    title: 'New Balance 990V6 Action Bronson Lapis Lazuli',
    priceCents: 58000,
    brand: 'New Balance',
    style: 'M990AC6'
}, {
    id: 13,
    title: 'New Balance 998 Concepts C-Note',
    priceCents: 92000,
    brand: 'New Balance',
    style: 'M998TN2'
}, {
    id: 14,
    title: 'Nike Dunk Low Montreal Bagel Sesame (Special Box)',
    priceCents: 42000,
    brand: 'Nike',
    style: 'DZ4853-200'
}, {
    id: 15,
    title: 'Nike Dunk Low Sashiko',
    priceCents: 32000,
    brand: 'Nike',
    style: 'DV0834-101'
}, {
    id: 16,
    title: "Nike Sb Dunk Low Ben & Jerry's Chunky Dunky",
    priceCents: 240000,
    brand: 'Nike',
    style: 'CU3244-100'
}, {
    id: 17,
    title: 'Reebok Club C 85 Jjjjound White',
    priceCents: 52000,
    brand: 'Reebok',
    style: 'DV7763'
}, {
    id: 18,
    title: 'Vans Era Pro Supreme Cdg Shirt Digi Camo Green',
    priceCents: 70000,
    brand: 'Vans',
    style: 'VNOVFB9QS'
}];

let latestArrivals = [{
    id: 1,
    title: 'New Balance 990V6 Action Bronson Lapis Lazuli',
    priceCents: 58000
}, {
    id: 2,
    title: 'New Balance 2002R Ssense Corduroy',
    priceCents: 52000
}, {
    id: 3,
    title: 'Air Jordan 1 Low Wmns Ice Blue',
    priceCents: 40000
}, {
    id: 4,
    title: 'Vans Authentic Pro Supreme Checkers Red',
    priceCents: 80000
}, {
    id: 5,
    title: "Nike Sb Dunk Low Ben & Jerry's Chunky Dunky",
    priceCents: 240000
}]

let nikeDunks = [{
    id: 1,
    title: "Nike Air More Uptempo Supreme Gold",
    priceCents: 52000
}, {
    id: 2,
    title: "Nike Blazer Mid Sacai White Grey",
    priceCents: 155000
}, {
    id: 3,
    title: "Nike Air Force 1 Low Clot Fragment Black Silk",
    priceCents: 81000
}, {
    id: 4,
    title: "Nike Dubnk Low Jackie Robinson",
    priceCents: 76000
}, {
    id: 5,
    title: "Nike Dunk Low Wmns Next Nature Mint",
    priceCents: 29000
}];

let blogPosts = [{
    id: 1,
    title: "Introducing our new NYC store",
    text: "New York Citys shopping landscape is about to get a fresh burst of style with the grand opening of Kicks! Perfectly situated at 123 Fashion Avenu..."
}, {
    id: 2,
    title: "New sneaker brands to watch out for",
    text: "At Kicks, we're always on the lookout for the next big thing in footwear. While classic brands have their charm, there's something exciting about ..."
}, {
    id: 3,
    title: "Latest drops",
    text: "Welcome to Kicks Ltd, where we're excited to showcase our latest collection of Nike Air sneakers! Whether you're a seasoned sneakerhead or just lo..."
}];

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
    </div>
`
const latestArrivalsHTML = (item) => `
    <div class="la1 latestArrival">
      <div class="lapic${item.id}"></div>
      <div class="ladata">
        <p class="latitle">${item.title}</p>
        <p class="laprice">$${item.priceCents/100}</p>
      </div>
    </div>
`;
const popularHTML = (item) => `
    <div class="popularLine popi${item.id}">
        <div class="pop${item.id}"></div>
        <p class="ptitle">${item.title}</p>
        <p>${item.style}</p>
        <p>${item.brand}</p>
        <p>$ ${((Number(item.priceCents))/100)}</p>
      </div>
        `;
const blogHTML = (item) => `
<div class="blogitem">
<div class="blogimg${item.id}"></div>
<div class="item-text">
  <span class="title">${item.title}</span>
  <span class="artc">${item.text}</span>
  <button class="but">Read more</button>
</div>
</div>
    `
const shopHTML

generateHTML('.latestArrivals', latestArrivals, latestArrivalsHTML);
generateHTML('.list', popular, popularHTML);
generateHTML('.nikeDunks', nikeDunks, nikeDunksHTML)
generateHTML('.blogall', blogPosts, blogHTML)