// import React, { useContext } from "react";
// // useParams hook
// import { useParams } from "react-router-dom";
// // useFecth hook
// import useFetch from "../hooks/useFetch";
// // components
// import RelatedProducts from "../components/RelatedProducts";
// // context
// import { CartContext } from "../context/CartContext";

// const ProductDetails = () => {
//   const { addToCart } = useContext(CartContext);
//   const { id } = useParams();
//   // get product data base on the id
//   const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
//   if (!data) {
//     return <div className="container mx-auto">loading...</div>;
//   }
//   // category title
//   const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

//   return (
//     <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
//       <div className="container mx-auto">
//         {/* text */}
//         <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
//           <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
//           <img
//               src={`https://indsoftwareproduction-82wmn.ondigitalocean.app${data[0].attributes.image.url}`}
//               alt=""
//               className="w-full max-w-[75%]"
//             />
//           </div>
//           <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
//             {/* category title */}
//             <div className="uppercase text-accent text-lg font-medium mb-2">
//               {data[0].attributes.categories.data[0].attributes.title}
//             </div>
//             {/* title */}
//             <h2 className="h2 mb-4">{data[0].attributes.title}</h2>
//             {/* description */}
//             <p className="mb-12">{data[0].attributes.description}</p>
//             {/* price & btn */}
//             <div className="flex items-center gap-x-8">
//               {/* price */}
//               <div className="text-3xl text-accent font-semibold">
//                 {data[0].attributes.price} Rs/month
//               </div>

//               <button
//                 // onClick={() => addToCart(data, id)}
//                 className="btn btn-accent"
//               >
//                  <a
//                   href={data[0].attributes.paymentlink}
//                 >
//                   Buy Now
//                 </a>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-[30px] mb-[25px]">
//   <div className="flex-1 bg-primary p-10 xl:p-20 rounded-lg flex flex-col justify-between">
//     {/* category title */}
//     <div className="uppercase text-accent text-lg font-medium mb-2">
//       {data[0].attributes.shortd}
//     </div>
//     {/* title */}
//     <h2 className="h2 mb-4">{data[0].attributes.title}</h2>
//     {/* description */}
//     <p className="mb-6 flex-grow">{data[0].attributes.description2}</p>

//     <div className="flex items-center gap-x-8">
//       <div className="text-3xl text-accent font-semibold mt-20px">
//         Official Page Link
//       </div>
//       <button className="btn2 btn-accent">
//         <a
//           href={data[0].attributes.urlprop}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Click Here
//         </a>
//       </button>
//     </div>
//   </div>
//   <div className="flex-1 lg:max-w-[60%] bg-primary rounded-lg flex justify-center items-center">
//     <iframe
//       className="rounded-lg"
//       width="95%"
//       height="90%" // Set height to 100% to fill the parent container
//       src={`https://www.youtube.com/embed/${data[0].attributes.video.providerUid}?rel=0&showinfo=0`}
//       frameBorder="0"
//       allow="autoplay; encrypted-media"
//       allowFullScreen
//       title="YouTube Video"
//     />
//   </div>
// </div>


//         {/* related products */}
//         <RelatedProducts categoryTitle={categoryTitle} />
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RelatedProducts from "../components/RelatedProducts";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  
  if (!data) {
    return <div className="container mx-auto">loading...</div>;
  }

  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            <img
              src={`https://indsoftwareproduction-82wmn.ondigitalocean.app${data[0].attributes.image.url}`}
              alt=""
              className="w-full max-w-[75%]"
            />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            <div className="uppercase text-accent text-lg font-medium mb-2">
              {categoryTitle}
            </div>
            <h2 className="h2 mb-4">{data[0].attributes.title}</h2>
            <p className="mb-12">{data[0].attributes.description}</p>
            <div className="flex items-center gap-x-8">
              <div className="text-3xl text-accent font-semibold">
                {data[0].attributes.price} Rs/month
              </div>
              <button className="btn btn-accent">
                <a href={data[0].attributes.paymentlink}>Buy Now</a>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[30px] mb-[25px]">
          <div className="flex-1 bg-primary p-10 xl:p-20 rounded-lg flex flex-col justify-between">
            <div className="uppercase text-accent text-lg font-medium mb-2">
              {data[0].attributes.shortd}
            </div>
            <h2 className="h2 mb-4">{data[0].attributes.title}</h2>
            <p className="mb-6 flex-grow">{data[0].attributes.description2}</p>
            <div className="flex items-center gap-x-8">
              <div className="text-3xl text-accent font-semibold mt-20px">
                Official Page Link
              </div>
              <button className="btn2 btn-accent">
                <a
                  href={data[0].attributes.urlprop}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>
              </button>
            </div>
          </div>
          <div className="flex-1 lg:max-w-[60%] bg-primary rounded-lg flex justify-center items-center">
            <iframe
              className="rounded-lg"
              width="95%"
              height="90%" // Set height to 100% to fill the parent container
              src={`https://www.youtube.com/embed/${data[0].attributes.video.providerUid}?rel=0&showinfo=0`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube Video"
            />
          </div>
        </div>

        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default ProductDetails;
