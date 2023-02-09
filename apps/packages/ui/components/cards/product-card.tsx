interface IProductCardProps {
  brand: string;
  description: string;
  price: string;
  salesprice: string;
  imageurl: string;
  path: string;
}

export const ProductCard = ({ ...props }: IProductCardProps) => {
  return (
    <div className="flex flex-1 flex-col justify-between w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md">
      <a>
        <img src={props.imageurl} alt="Image Not Available" />
      </a>
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.brand}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {props.price}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {props.salesprice}
      </p>
      <button
            type="submit" 
            style = {{width:'150px',
                    backgroundColor:'black',
                    borderWidth: 3, 
                    borderRadius: 15,
                    margin: 20,
                    padding:5,
                    cursor:"pointer",
                  color: "white"}}>Like</button>
    </div>
  );
};
