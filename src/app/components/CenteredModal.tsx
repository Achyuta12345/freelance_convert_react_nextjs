import className from "classnames";
// import { CenteredModal as TextType } from "types";
import {RichText}  from "./existingComponent/RichText";
import { Section } from "./existingComponent/Section";
import {  Modal } from "./existingComponent/Modal";
import { File } from "./existingComponent/File";
import { useState, useEffect } from "react";
import { format,parseISO } from "date-fns";
// import Head from 'next/head';
// import { useRouter } from 'next/router';



interface centeredModalData {
  _typename: string; // Component type identifier
  title: string | null; // Main title of the modal, nullable
  subtitle: string | null; // Subtitle of the modal, nullable
  navigationSlug: string | null; // Slug for navigation, nullable
  items: Array<{
    __typename: string; // Component type identifier for items
    id: string; // Unique identifier for the item
    title: string | null; // Item title, nullable
    publishedDate: string | null; // Date the item was published, nullable
    modalContent: {
      text?: string; // Text content of the modal, optional
      modalTitle?: string | null; // Title of the modal, optional and nullable
      media?: { 
        data: { 
          attributes: string; // Media attributes, e.g., URL or metadata
        };
      }; // Optional media field
    } | null; // Modal content can be null
  }>;
}







interface CenteredModalProps {
  centeredModalData: centeredModalData;
}

export function CenteredModal({ centeredModalData }: CenteredModalProps) {
  // const router = useRouter();
//  const modalTitle = centeredModalData.results.Content[0]?.title;
 // console.log("data------", props)
 const [isOpen, setOpen] = useState(false);
 const [i, setI] = useState(0);
 const [j, setJ] = useState(0);
 const [currentPageTitle, setCurrentPageTitle] = useState('');

//  const removeQueryParam = (key:any) => {
//    if (key in router.query) {
//      const newQuery = { ...router.query };
//      delete newQuery[key];
//      router.push({ pathname: router.pathname, query: newQuery }, undefined, { shallow: true });
//      // setParamRemoved(true);
//    } else {
//      console.log(`Query parameter "${key}" does not exist.`);
//    }
//  };
 useEffect(() => {
   // Access the current page title
   const title = document.title;
   setCurrentPageTitle(title);
 }, []); // Run this effect only once after the component mounts
 const close = () => {
   document.title = `${currentPageTitle}`;
   setJ(0);
   setOpen(false);
   //let removeModal = window.location.hash.split('~')[0];
  //  router.push( router.asPath.split('~')[0], undefined, { shallow: true });
   // router.push( router.asPath.split('#')[0]+removeModal, undefined, { shallow: true });
   //removeQueryParam("~techmodal");
 };
 const back = () => {
   document.title = `${currentPageTitle}`;
   setI(9999);
   setJ(0);
   //let removeModal = window.location.hash.split('~')[0];
  //  router.push( router.asPath.split('~')[0], undefined, { shallow: true });
 };
 const open = () => {
   setOpen(true);
 };
 const setIndex = (index: number) => {
   setI(index);
 };


 const handleItemClick = (
  index: number,
  modalTitle: string | null,
  isFromUrl: boolean,
  item: { id: string }
) => {
  document.title = `${currentPageTitle}${modalTitle ? ` - ${modalTitle}` : ""}`;
  setIndex(parseInt(item.id));
  setJ(0);
  open();
};

const handleItemClickInModal = (
  index: number,
  modalTitle: string | null,
  item: { id: string }
) => {
  document.title = `${currentPageTitle}${modalTitle ? ` - ${modalTitle}` : ""}`;
  setIndex(parseInt(item.id));
  setJ(9999);
  open();
};

 //const [pageTitle, setPageTitle] = useState(false);


 // Pagination Starts
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 10;
   // Calculate the number of pages
   const totalPages = centeredModalData.items && Math.ceil(centeredModalData.items.length / itemsPerPage);
   // Get the items to be displayed on the current page
   const currentItems = centeredModalData.items && centeredModalData.items.slice(
     (currentPage - 1) * itemsPerPage,
     currentPage * itemsPerPage
   );
 // Pagination Ends


//  if(typeof window !== 'undefined' &&
//  sessionStorage &&
//  sessionStorage.getItem('modalId') &&
//  sessionStorage.getItem('modalId') != null &&
//  sessionStorage.getItem('modalId')?.includes("techmodal") && isOpen == false){
//    let modalID = sessionStorage.getItem('modalId') || "";
//    let modalNumeber = modalID.split("~")[1];
//    handleItemClick(parseInt(modalNumeber),"Hi,",true,{id:parseInt(modalNumeber)});
//    sessionStorage.removeItem('modalId');
//  }


 return (
   <Section
    //  id={centeredModalData.results.Content?.navigationSlug || "centeredModal"}
     id={centeredModalData.navigationSlug || "centeredModal"}
    //  className={className(centeredModalData?.colorTheme === "Black" && "bg-black text-white")}
    className=""
   >
     <legend style={{visibility:"hidden"}}>{centeredModalData.navigationSlug}</legend>
     {centeredModalData.title && (
       <div className=" py-1 px-2 md:px-2 ">
         {centeredModalData.title && (
           <span className="border-b-2 border-black font-semibold py-1 ml-6 ">{centeredModalData.title}</span>
          
          
         )}
         {centeredModalData.subtitle && (
           <p className="ProximaNova-font technology-update-sublititle font-bold text-base text-[#131313] mt-6 px-6">{centeredModalData.subtitle} </p>
         )}


         <Modal
           isOpen={isOpen}
           close={close}
           presenceKey={centeredModalData.title}
           ariaLabel={centeredModalData.title || ""}
           className="justify-end"
         >
           <section
             className={className(
               "w-screen z-10 relative overflow-scroll h-screen transition-transform ease-in-out duration-300 text-white"
             )}
           >
             <div className="w-10/12 top-0 h-screen float-right overflow-scroll bg-black">
               <button
                 onClick={close}
                 className={`${"absolute btn-close z-10 top-4 ml-10 text-white"} ${
                   j == 9999 ? "hidden" : ""
                 }`}
               >
                 Back
               </button>
               <button
                 onClick={back}
                 className={`${"absolute btn-close z-10 top-4 ml-10 text-white"} ${
                   j != 9999 ? "hidden" : ""
                 }`}
               >
                 Back
               </button>
               <button
                 onClick={close}
                 className="absolute btn-close z-10 right-12 top-4"
               >
               
                 <img src="/images/close-x.svg" alt="Close" />

                 
               </button>


               <div
                 className={`${"text-white m-20"} ${
                   i == 9999 ? "hidden" : ""
                 }`}
               >
                 <div className="w-full">
                   <div
                     className={className(
                       "relative mb-10",
                       "w-5/12 md:w-5/12",
                       "py-0",
                       "mb-8 md:mb-0"
                     )}
                   >
                     {centeredModalData.items &&
                       centeredModalData.items.find((item : any)=> {
                                       
                       return item.id == i

                       })?.modalContent?.media && (
                        //  <File
                        //    {...centeredModalData.results.Content[0]?.items.find((item : any)=> item.id == i).}
                        //  />
                         <File
                           url="Hello"
                           alt="sgsdgdf"
                         />
                       )}
                   </div>
                 </div>
                 <p className="text-sm">
                   {centeredModalData.items &&
                    centeredModalData.items.find((item : any)=> item?.id == i)?.modalContent?.text && (
                       <RichText text={centeredModalData.items.find((item : any)=> item.id == i)?.modalContent?.text || ""} />
                     )}
                 </p>
               </div>


               <div
                 className={`${"text-white m-20"} ${
                   i != 9999 ? "hidden" : ""
                 }`}
               >
                 <div className="w-full">
                   {currentItems &&
                     currentItems.map((item, i) => {
                       return (
                         <div className="flex items-center mt-10" key={i}>
                           <div className="flex-auto px-10 items-start">
                             <p
                               className="manrope-semibold cursor-pointer"
                               onClick={() => handleItemClickInModal(i,item.modalContent?.modalTitle??null, item)}
                             >
                               <span className="manrope-semibold pr-10 dateField">
                                 {item &&
                                   item.publishedDate &&
                                   format(
                                     parseISO(item.publishedDate),
                                     "dd  MMM yyyy"
                                   )}
                               </span>
                               {item.title}
                             </p>
                             <hr />
                           </div>
                         </div>
                       );
                     })}
                 </div>


                 {/* Pagination Controls Starts*/}
     <div className="flex justify-center mt-10">
       <button
         className={`px-2 py-1 mx-1 font-bold ${currentPage === 1 ? 'text-gray-500' : 'cursor-pointer'}`}
         onClick={() => setCurrentPage(currentPage - 1)}
         disabled={currentPage === 1}
       >
          &lt;
       </button>


       {Array.from({ length: totalPages || 0 }, (_, index) => (
         <button
           key={index}
           className={`px-2 py-1 mx-1 ${currentPage === index + 1 ? 'font-bold underline' : ''}`}
           onClick={() => setCurrentPage(index + 1)}
         >
           {index + 1}
         </button>
       ))}


       <button
          className={`px-2 py-1 mx-1 font-bold ${currentPage === totalPages ? 'text-gray-500' : 'cursor-pointer'}`}
         onClick={() => setCurrentPage(currentPage + 1)}
         disabled={currentPage === totalPages}
       >
         &gt;
       </button>
     </div>
      {/* Pagination Controls ends */}
               </div>
             </div>
           </section>
         </Modal>


         <div className="px-6 py-4">
 {centeredModalData.items && centeredModalData.items.slice(0, 4).map((item, i) => {
   let formattedDate = ""; // Define formattedDate here
  
   if (item && item.publishedDate) {
     formattedDate = format(parseISO(item.publishedDate), "MMM dd yyyy"); // Update date format
   }
  
   return (
     <div key={i}>
       {i > 0 && <hr className="border-t border-gray-400" />} {/* Light black straight line */}
       <div className="flex flex-col my-4">
         <span className="ProximaNova-font dateField text-xs text-gray-500 font-bold">
           {formattedDate}
         </span>
         <p
           className="cursor-pointer text-black ProximaNova-font tech-updates-titles   leading-snug mt-1"
           onClick={() => handleItemClick(i, item.modalContent?.modalTitle ?? null, false, item)}
         >
           {item.title}
         </p>
       </div>
     </div>
   );
 })}
  <hr className="border-t border-gray-400" /> {/* Light black straight line for last item */}
  {/* View All Updates Button */}
 <button
   onClick={() => handleItemClick(9999, "", false, { id: "9999" })}
   className="view-all-button ProximaNova-font bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 mt-4 text-sm font-semibold"
 >
   View All Updates
 </button>
</div>






       </div>
     )}


     <style jsx>{`
     .dotted-hr {
       border-top: 1px dotted grey;
     }
       .view-all-button{
         color: #000;
         text-align: right;
         font-feature-settings: 'clig' off, 'liga' off;


         /* Navbar */
         font-family: ProximaNova;
         font-size: 13px;
         font-style: normal;
         font-weight: 325;
         line-height: 16px; /* 123.077% */
         text-transform: capitalize;
         margin-top: 10px;
       }
       .dateField {
         color: #6c6e70;
         width: 200px;
         display: inline-block;
       }
       .technology-update-header{
         font-size: 32px;
         margin: 0;
       }
       .technology-update-sublititle{
         font-size: 15px;
         color: #131313;
       }
     
       @media (max-width: 768px){
         .tech-updates-titles{
           white-space: nowrap;
           overflow: hidden;
           text-overflow: ellipsis;
           display: inline-block;
           width: 410px;
         }
       }
       @media (max-width: 650px) {
         .items-start {
           display: block;
           width: 100%;
           padding: 0 0 0 0;
         }
         .dateField {
           display: block;
         }
         .tech-updates-titles{
           font-size:14px;
           width: 250px;
         }
       }
      
     `}</style>
   </Section>
 );
}
