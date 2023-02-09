import Link from "next/link";


interface ICardProps {
 title: string;
 description: string;
 path: string;
 cta?: string;
}


export const Card = ({ ...props }: ICardProps) => {
 return (
   <div className="max-w-sm h-fit p-6 bg-white border border-gray-200 rounded-lg shadow-md">
     <a href={props.path}>
       <h5 className="mb-2 pt-2 text-2xl font-bold tracking-tight text-gray-900">
         {props.title}
       </h5>
     </a>
     <p className="mb-3 py-4 font-normal text-gray-70">{props.description}</p>
     <Link
       href={props.path}
       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
     >
       {props.cta ? props.cta : "Explore Now"}
       <svg
         aria-hidden="true"
         className="w-4 h-4 ml-2 -mr-1"
         fill="currentColor"
         viewBox="0 0 20 20"
         xmlns="http://www.w3.org/2000/svg"
       >
         <path
           fill-rule="evenodd"
           d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
           clipRule="evenodd"
         ></path>
       </svg>
     </Link>
   </div>
 );
};


