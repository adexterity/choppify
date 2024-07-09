import ItemCard from "./ItemCard";


interface Item {
  image: string;
}

const ItemCards = () => {
  const items:Item[] = [
    {
      image: "bg-product1-bg",
    },
    {
      image: "bg-product2-bg",
    },
    {
      image: "bg-product3-bg",
    },
    {
      image: "bg-product4-bg",
    },
    {
      image: "bg-product5-bg",
    },
    {
      image: "bg-product6-bg",
    },
  ];

  return (
    <ul className="flex justify-around mb-20 flex-wrap">
      {items.map((item, index) => (
        <ItemCard item={item} key={index} />
      ))}
    </ul>
  );
};

export default ItemCards;


/* 
     return (
        <ul >
            
            {cities.map(city=>{
              return <CityItem city={city} key={city.id} />
            })}
            
        </ul>
    )


*/