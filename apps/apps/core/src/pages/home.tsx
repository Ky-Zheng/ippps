import { Card, Tabs } from "ui";

const data=[
  {   id: 1,
      artist:"Paul Cezanne",
      title: "Maisons au Chou, a Pontoise",
      date:"1881",
      price: "$3,660,000",
      dimensions_h:"65.2",
      dimensions_l:"81.2",
      imageurl:"https://www.artnet.com/WebServices/images/ll00041lldk8yJFgUNECfDrCWvaHBOc2qbG/paul-cézanne-maisons-au-chou,-à-pontoise.jpg",
      addorremove:"Add to Favorite"
  },

  {   id: 2,
      artist:"Edouard Manet",
      title: "Spring",
      date:"1881",
      price: "$89,000,000",
      dimensions_h:"74",
      dimensions_l:"51.5",
      imageurl:"https://ca-times.brightspotcdn.com/dims4/default/7565884/2147483647/strip/false/crop/1439x2048+0+0/resize/1044x1486!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6c%2F2a%2F2f0b2c73da4690bbdae983380ccd%2Fla-et-cm-getty-comes-away-with-manet-20141105-001",
      addorremove:"Add to Favorite"

  },

  {   id: 3,
      artist:"Claude Monet",
      title: "Water Lily Pond",
      date:"1918",
      price: "$70,350,000",
      dimensions_h:"100",
      dimensions_l:"200",
      imageurl:"https://sothebys-com.brightspotcdn.com/dims4/default/47ff05f/2147483647/strip/true/crop/7672x3817+0+0/resize/684x340!/format/webp/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F93%2Fe4%2F6d4e92714df08e6a06bfe9e301ae%2F10680-claude-monet-le-bassin-aux-nympheas.jpg",
      addorremove:"Add to Favorite"
    },

  {   id: 4,
    artist:"Paul Cezanne",
    title: "The Card Players",
    date:"1891",
    price: "$340,000,000",
    dimensions_h:"65.4",
    dimensions_l:"81.9",
    imageurl:"https://collectionapi.metmuseum.org/api/collection/v1/iiif/435868/800382/main-image",
    addorremove:"Add to Favorite"

},

{   id: 5,
  artist:"Edgar Degas",
  title: "Scène de ballet",
  date:"1834",
  price: "$2,784,750",
  dimensions_h:"81.3",
  dimensions_l:"56.3",
  imageurl:"https://uploads4.wikiart.org/images/edgar-degas/ballet-scene.jpg!Large.jpg",
  addorremove:"Add to Favorite"
},

{   id: 6,
  artist:"Paul Gauguin",
  title: "Le vallon",
  date:"1848",
  price: "$10,421,756",
  dimensions_h:"41.5",
  dimensions_l:"67",
  imageurl:"https://upload.wikimedia.org/wikipedia/commons/d/de/Paul_Gauguin_-_Le_vallon_%281892%29.jpg",
  addorremove:"Add to Favorite"
},
];


export default function Home() {
  return (
    <div>
    <Tabs/>
    <div className="grid grid-cols-4 ml-10 mx-auto gap-6 flex flex-1 flex-col justify-between">
      {data.map((item) => (
        <Card title={item.title} artist={item.artist} date={item.date}
        price={item.price} dimensions_h={item.dimensions_h} dimensions_l={item.dimensions_l} 
        imageurl={item.imageurl} addorremove={item.addorremove}/>
      ))}
    </div>
    </div>

  );
}
;

{/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
  State
</label>
<div className="relative">
  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
    <option>New Mexico</option>
    <option>Missouri</option>
    <option>Texas</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
</div> */}