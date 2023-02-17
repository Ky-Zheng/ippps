import { Input } from "@material-ui/core";
import * as React from "react";
import { Card, FavTabs } from "ui";

const data = [
  {
    id: 3,
    artist: "Claude Monet",
    title: "Water Lily Pond",
    date: "1918",
    price: "$70,350,000",
    dimensions_h: "100",
    dimensions_l: "200",
    imageurl:
      "https://sothebys-com.brightspotcdn.com/dims4/default/47ff05f/2147483647/strip/true/crop/7672x3817+0+0/resize/684x340!/format/webp/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F93%2Fe4%2F6d4e92714df08e6a06bfe9e301ae%2F10680-claude-monet-le-bassin-aux-nympheas.jpg",
      addorremove:"Remove"

  },

  {
    id: 5,
    artist: "Edgar Degas",
    title: "Scène de ballet",
    date: "1834",
    price: "$2,784,750",
    dimensions_h: "81.3",
    dimensions_l: "56.3",
    imageurl:
      "https://uploads4.wikiart.org/images/edgar-degas/ballet-scene.jpg!Large.jpg",
      addorremove:"Remove"
  },
];

export default function Favorite() {
  return (
    <div>
      <FavTabs />
      <div className="grid grid-cols-4 ml-10 mx-auto gap-6 flex flex-1 flex-col justify-between">
        {data.map((item) => (
          <Card
            title={item.title}
            artist={item.artist}
            date={item.date}
            price={item.price}
            dimensions_h={item.dimensions_h}
            dimensions_l={item.dimensions_l}
            imageurl={item.imageurl}
            addorremove={item.addorremove}
          />
        ))}
      </div>
    </div>
  );
}
