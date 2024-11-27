
import classNames from "classnames";
// import { MediaTextCard as MediaType, Modal as ModalType } from "types";
import { useState } from "react";


import { File  } from "./existingComponent/File";
import { RichText } from "./existingComponent/RichText";
import { Section  } from "./existingComponent/Section";
import {  Modal } from "./existingComponent/Modal";
import { lowercaseKeys, unEscapeHTML } from "../../../utils/index";
import { ArrowCarousel } from "./existingComponent/ArrowCarousel"
import { useRouter } from "next/router";

export interface ModalType {
  title: string;
  content: string;
}

interface NewsletterItem {
  id: string;
  media: string;
  title: string;
  text: string;
  link: string;
  layout: string;
  size: string;
  margin: string;
  displaySeperator: boolean;
  navSlug: string;
  colorTheme: string;
  modal: {
    title: string;
    content: string;
  };
}


type Media = {
  id: number;
  url: string;
  mimeType: string;
  size: number;
};



export interface Localization {
  id: number;
  locale: string;
  title?: string;
  slug?: string;
  published_at?: string;
  created_at?: string;
}

type LatestNewsLetterItem = {
  id: string;
  media: string;
  title: string;
  text: string;
  link: string;
  layout: string;
  size: string;
  margin: string;
  displaySeperator: boolean;
  navSlug: string;
  colorTheme: string;
  modal: {
    title: string;
    content: string;
  };
};

type LatestNewsLetter = {
  newsletter: {
    data: {
      attributes: {
        title: string;
        subjectLine: string | null;
        content: string;
        homePageImage: {
          data: {
            attributes: {
              url: string;
              mime: string;
            };
          };
        };
      };
    };
  };
  items: LatestNewsLetterItem[];
};

type ContentItem = {
  Title: string;
  description: string;
  navigationSlug: string;
  LatestNewsLetter: LatestNewsLetter;
};

interface LatestNewsLetterData {
  __typename: string;
  Title: string;
  navigationSlug: string;
  LatestNewsLetter: {
    __typename: string;
    newsletter: {
      __typename: string;
      data: {
        __typename: string;
        attributes: {
          __typename: string;
          title: string;
          subjectLine: string;
          content: string;
          homePageImage: {
            __typename: string;
            data: {
              __typename: string;
              attributes: {
                __typename: string;
                url: string;
                mime: string;
              };
            } | null;
          };
        };
      } | null;
    };
  };
}

interface LatestNewsLetterProps {
  latestNewsLetterData: LatestNewsLetterData;
}




export function LatestNewsLetter({ latestNewsLetterData }: LatestNewsLetterProps) {
  const homePageImage =
    latestNewsLetterData.LatestNewsLetter.newsletter.data?.attributes.homePageImage.data?.attributes.url;

  const newsLetterModalContent =
  latestNewsLetterData.LatestNewsLetter.newsletter.data?.attributes.content
 const [isOpen, setOpen] = useState(false);
 const router = useRouter().pathname;
 const routerObj = useRouter();


 const initModal: ModalType = { title: "", content: "" };
 const [modalProps, setModalProps] = useState(initModal);

 let items = [];
let navigationSlug=latestNewsLetterData.navigationSlug;
let navSlug = navigationSlug;
let size ="Padding";
let colorTheme='Grey';
let margin='None';
let layout='Right';
let title =latestNewsLetterData.Title;
 const close = () => {
   setOpen(false);
   let removeModal = window.location.hash.split('~')[0];
   if(!(routerObj.pathname.includes("/teams")) &&
   !(routerObj.pathname.includes("/onboarding"))){
     routerObj.push( routerObj.pathname+removeModal, undefined, { shallow: true });
   }else if(
     ( (routerObj.pathname.includes("/teams")) ||
       (routerObj.pathname.includes("/onboarding")
     )
   )){
     routerObj.push( routerObj.asPath.split('#')[0]+removeModal, undefined, { shallow: true });
   }
  
 };

 const open = (modal: ModalType,isFromUrl:any = false) => {
   setOpen(true);
   setModalProps(modal);
  //  if(!window.location.hash.includes("~ltnmodal") &&
  /* !isFromUrl &&*/
  /*  !(routerObj.pathname.includes("/teams")) && */
    /* !(routerObj.pathname.includes("/onboarding")) */
  //  ){
    //  routerObj.push(routerObj.pathname+window.location.hash+ '~ltnmodal', undefined, { shallow: true });
  //  }else if(
   /* !window.location.hash.includes("~ltnmodal") &&  */
   /*!isFromUrl && */
  //  ( (routerObj.pathname.includes("/teams")) ||
  //  (routerObj.pathname.includes("/onboarding")) )){
    //  routerObj.push(routerObj.asPath.split('#')[0]+window.location.hash+ '~ltnmodal', undefined, { shallow: true });
  //  }
 };


 if(typeof window !== 'undefined' &&
 sessionStorage &&
 sessionStorage.getItem('modalId') &&
 sessionStorage.getItem('modalId') != null &&
 sessionStorage.getItem('modalId')?.includes("ltnmodal") && isOpen == false){
   let modalID = sessionStorage.getItem('modalId') || "";
   // let modalNumeber = modalID.split("~")[1];
   open(initModal,true);
   sessionStorage.removeItem('modalId');
 }


 function ModalWindow(modal: any) {
   const layout = "Right";
   const size = "Padding";
   return (
     <Modal
       isOpen={isOpen}
       close={close}
       ariaLabel={""}
       className="justify-end"
       presenceKey=""
     >
       <section
         className={classNames(
           "w-screen z-10 relative overflow-scroll h-screen transition-transform ease-in-out duration-300"
         )}
       >
         <div className="w-10/12 top-0 h-screen float-right overflow-scroll bg-black">
           <button
             onClick={close}
             className="absolute btn-close z-10 right-8 top-4"
           >
             <img src="/images/close-x.svg" />
           </button>


          
           {newsLetterModalContent &&
           (newsLetterModalContent.includes("!doctype html") || newsLetterModalContent.includes("!DOCTYPE html"))? (
             <>
               <iframe
                 className="m-20 w-4/5 h-screen aspect-auto bg-white"
                 name="newsletter-frame"
                 srcDoc={`
                 ${unEscapeHTML(newsLetterModalContent)}
                 `}
               />
             </>
           ) : (
             <>
               <div className="text-white m-20">
                 <div className="w-full">
                   <div
                     className={classNames(
                       "relative mb-10",
                       // size === "Medium" ? "w-5/12 md:w-5/12" : "w-5/12 md:w-5/12",
                       size === "Padding" && "py-0",
                       layout === "Right" && "mb-8 md:mb-0"
                     )}
                   >
                     <File {...modal?.modalContent?.Media?.data?.attributes} />
                   </div>
                 </div>
                 <p className="text-sm">
                   {modal?.modalContent?.Text && (
                     <RichText text={modal?.modalContent?.Text} />
                   )}
                 </p>
               </div>
             </>
           )}
         </div>
       </section>
     </Modal>
   );
 }
 
 
  return (
    <>
      {size === "Medium" && <div className=" hr" />}
      <Section
        id={navSlug || "newsletterMediaText"}
        className={classNames(
          "relative overflow-hidden  col-span-6 ",
          margin !== "None" && "my-0 md:my-0",
          colorTheme === "Grey" && "text-white",
          colorTheme === "Black" && "bg-black text-white ",
          colorTheme === "Blur" && "bg-black text-white",
          size === "Padding" && "",
          "border-l border-r border-gray-200"
        )}
      >
        {/* <legend style={{visibility:"hidden"}}>{navigationSlug}</legend> */}
        <div
          className={classNames(
            "flex flex-wrap items-center ",
            size === "Medium" && "max-w-md px-4 md:px-6"
          )}
        >
          {colorTheme === "Blur" && "bg-black text-white" && (
            <File
              className="hidden md:block h-full w-full filter blur-lg opacity-50 absolute top-0 left-0 object-top  transform-gpu object-cover scale-max"
              {...latestNewsLetterData.LatestNewsLetter.newsletter.data?.attributes.homePageImage.data?.attributes}
              alt=""
              url=""
            />
          )}
 
 
          <div
            className={classNames(
              "relative mb-8 md:mb-0",
              size === "Medium" ? "w-full md:w-7/12" : "w-full md:w-full",
              size === "Padding" && "py-0 h-1/3",
              layout === "Right"
                ? "md:order-first md:px-8"
                : layout === "Left"
                ? ""
                : "pl-12",
                
            )}
          >
            {latestNewsLetterData.LatestNewsLetter.newsletter.data?.attributes.homePageImage.data?.attributes && latestNewsLetterData.LatestNewsLetter.newsletter.data?.attributes.homePageImage.data && <File alt=""{...latestNewsLetterData.LatestNewsLetter.newsletter.data?.attributes.homePageImage.data?.attributes} /> }
          </div>
 
 
          <div
            className={classNames(
              "relative max-w-full ",
              layout === "Right"
                ? "md:order-first md:pr-16"
                : layout === "Left"
                ? ""
                : "pl-12",
              size === "Medium" ? "md:w-5/12" : "md:w-full",
              size === "Padding" && "px-4 pb-12  md:pb-0",
              size === "Full" && " pb-12 pt-12 md:pb-1",
              size !== "Medium" && "max-w-titles",
              layout !== "Right" && size !== "Medium" && "md:pr-5"
            )}
          >
            {title && (
              <h2
                className={`${router.includes("/teams") ? `teams-title1` : "px-4 py-8 text-black  text-xl"}`}
              >
                {title}
              </h2>
            )}
            

            <p className="styleRichtext text-black pb-4 px-4">{latestNewsLetterData.LatestNewsLetter.newsletter.data?.attributes.subjectLine && <RichText text={latestNewsLetterData.LatestNewsLetter.newsletter.data?.attributes.subjectLine} />}</p>
            {(
              <div className="inline-block">
                <button
                  // onClick={() => open( latestNewsLetterData.results.Content[0].LatestNewsLetter.newsletter.data.attributes.content)}
                  onClick={() => 
                    open({
                      title: latestNewsLetterData.LatestNewsLetter.newsletter.data?.attributes.title || "Default Title",
                      content: latestNewsLetterData.LatestNewsLetter.newsletter.data?.attributes.content ?? 'Default content',
                    })
                  }
                  
                  className="button-dark mx-4 p-1 transition-opacity bg-black duration-300 block hover:opacity-50 "
                >
                  {"Read The Latest Newsletter"}
                </button>
              </div>
            )}
            {isOpen && <ModalWindow {...modalProps} />}
          </div>
        </div>
      </Section>
 
 
      <style jsx>{`
        .styleRichtext{
        }
        .hr {
          width: calc(100% - 3rem);
          margin: auto;
        }
        .teams-title1 {
          color: var(--Black, #000);
          font-feature-settings: "clig" off, "liga" off;
          font-family: ProximaNova;
          font-size: 24px;
          font-style: normal;
          font-weight: 350;
          line-height: 32px; /* 133.333% */
        }
      `}</style>
    </>
  );
}

 

