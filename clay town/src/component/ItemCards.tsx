import ItemCard from "./ItemCard";



const ItemCards = ({products}) => {
  

  return (
    <ul className="flex justify-around mb-20 flex-wrap">
      {products.map((item, index) => (
        <ItemCard item={item} key={index} />
      ))}
    </ul>
  );
};

export default ItemCards;

