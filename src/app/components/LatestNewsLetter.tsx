
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

type LatestNewsLetterData = {
  status: number;
  results: {
    id: number;
    Title: string;
    Slug: string;
    published_at: string;
    created_at: string;
    updated_at: string;
    locale: string;
    SEOTitle: string | null;
    SEODescription: string | null;
    title: string | null;
    landingTitle: string | null;
    featuredTitle: string | null;
    Content: ContentItem[];
    landingMedia: Media;
    featuredMedia: Media | null;
    localizations: any[];
  };
};

interface LatestNewsLetterProps {
  latestNewsLetterData: LatestNewsLetterData;
}




export function LatestNewsLetter({ latestNewsLetterData }: LatestNewsLetterProps) {
  const homePageImage =
    latestNewsLetterData.results.Content[0].LatestNewsLetter.newsletter.data.attributes.homePageImage.data.attributes.url;

  const newsLetterModalContent =
    latestNewsLetterData.results.Content[0].LatestNewsLetter.newsletter.data.attributes.content;
 const [isOpen, setOpen] = useState(false);
 const router = useRouter().pathname;
 const routerObj = useRouter();


 const initModal: ModalType = { title: "", content: "" };
 const [modalProps, setModalProps] = useState(initModal);

 let items = latestNewsLetterData.results.Content[0].LatestNewsLetter.items;
let navigationSlug=latestNewsLetterData.results.Content[0].navigationSlug;
let navSlug = navigationSlug;
let size ="Medium";
let colorTheme='white';
let margin='';
let layout='';
let title ='';
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
             className="absolute btn-close z-10 right-4 top-4"
           >
             <img src="/images/misc/close-x.svg" />
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
 
 let filterItems
 if (items && items.length > 0) {
  filterItems
 = items.map((item: any, i: number) => {
    // Ensure the item is treated as a NewsletterItem after lowercaseKeys
    item = lowercaseKeys(item) as unknown as NewsletterItem; // Cast to NewsletterItem
  
    const {
      media,
      title,
      text,
      link,
      layout,
      size,
      margin,
      displaySeperator,
      navSlug,
      colorTheme,
      modal,
    } = item;
  
    return (
      <>
        {size === "Medium" && <div className="hr" />}
        <Section
          id={navSlug || "newsletterMediaText"}
          className={classNames(
            "relative overflow-hidden",
            margin !== "None" && "my-8 md:my-16",
            colorTheme === "Grey" && "bg-dark-grey text-white",
            colorTheme === "Black" && "bg-black text-white",
            colorTheme === "Blur" && "bg-black text-white",
            size === "Padding" && "md:px-6"
          )}
        >
          <legend style={{ visibility: "hidden" }}>{navigationSlug}</legend>
          <div
            className={classNames(
              "flex flex-wrap items-center mx-auto",
              size === "Medium" && "max-w-md px-4 md:px-6"
            )}
          >
            {colorTheme === "Blur" && "bg-black text-white" && (
              <File
                className="hidden md:block h-full w-full filter blur-lg opacity-50 absolute top-0 left-0 object-top  transform-gpu object-cover scale-max"
                {...media?.data?.attributes}
              />
            )}
  
            <div
              className={classNames(
                "relative mb-8 md:mb-0",
                size === "Medium" ? "w-full md:w-7/12" : "w-full md:w-6/12",
                size === "Padding" && "py-0",
                layout === "Right" && "mb-8 md:mb-0"
              )}
            >
              {homePageImage && homePageImage && <File url={homePageImage} alt=""  />}
            </div>
  
            <div
              className={classNames(
                "relative max-w-sm ",
                layout === "Right" ? "md:order-first md:pr-16" : "md:pl-16",
                size === "Medium" ? "md:w-5/12" : "md:w-6/12",
                size === "Padding" && "px-4 pb-12  md:pb-0",
                size === "Full" && "px-4 pb-12 pt-12 md:pb-12",
                size !== "Medium" && "max-w-titles",
                layout !== "Right" && size !== "Medium" && "md:pr-16"
              )}
            >
              {title && <h2>{title}</h2>}
              {text && <RichText text={text} />}
              {link && (
                <div className="inline-block">
                  <a
                    href={link.URL}
                    target="blank"
                    className="button-dark transition-opacity button-dark duration-300 block hover:opacity-50 w-full text-left"
                  >
                    {link.Title}
                  </a>
                </div>
              )}
              {modal && (
                <div className="inline-block">
                  <button
                    onClick={() => open(modal)}
                    className="transition-opacity button-dark duration-300 block hover:opacity-50 w-full text-left"
                  >
                    <span className="lato text-sm leading-none">{modal.Title}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </Section>
      </>
    );
  });
  
  };

  // return (
  //   <Section className="">
  //     <legend style={{ visibility: "hidden" }}>{navigationSlug}</legend>
  //     {filterItems && (
  //       <ArrowCarousel slidesPerView={1} items={filterItems} colorTheme="White" />
  //     )}
  //     {isOpen && <ModalWindow {...modalProps} />}
  //   </Section>
  // );
  return (
    <>
      {size === "Medium" && <div className=" hr" />}
      <Section
        id={navSlug || "newsletterMediaText"}
        className={classNames(
          "relative overflow-hidden px-4 ",
          margin !== "None" && "my-8 md:my-16",
          colorTheme === "Grey" && "bg-dark-grey text-white",
          colorTheme === "Black" && "bg-black text-white ",
          colorTheme === "Blur" && "bg-black text-white",
          size === "Padding" && "md:px-6"
        )}
      >
        <legend style={{visibility:"hidden"}}>{navigationSlug}</legend>
        <div
          className={classNames(
            "flex flex-wrap items-center mx-auto",
            size === "Medium" && "max-w-md px-4 md:px-6"
          )}
        >
          {colorTheme === "Blur" && "bg-black text-white" && (
            <File
              className="hidden md:block h-full w-full filter blur-lg opacity-50 absolute top-0 left-0 object-top  transform-gpu object-cover scale-max"
              {...latestNewsLetterData.results.Content[0].LatestNewsLetter.newsletter.data.attributes.homePageImage.data.attributes}
              alt=""
            />
          )}
 
 
          <div
            className={classNames(
              "relative mb-8 md:mb-0",
              size === "Medium" ? "w-full md:w-7/12" : "w-full md:w-full",
              size === "Padding" && "py-0",
              layout === "Right"
                ? "md:order-first md:pr-16"
                : layout === "Left"
                ? ""
                : "pl-12"
            )}
          >
            {latestNewsLetterData.results.Content[0].LatestNewsLetter.newsletter.data.attributes.homePageImage.data.attributes && latestNewsLetterData.results.Content[0].LatestNewsLetter.newsletter.data.attributes.homePageImage.data && <File alt=""{...latestNewsLetterData.results.Content[0].LatestNewsLetter.newsletter.data.attributes.homePageImage.data.attributes} /> }
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
                className={`${router.includes("/teams") ? `teams-title1` : ""}`}
              >
                {title}
              </h2>
            )}
            <p className="styleRichtext">{latestNewsLetterData.results.Content[0].LatestNewsLetter.newsletter.data.attributes.subjectLine && <RichText text={latestNewsLetterData.results.Content[0].LatestNewsLetter.newsletter.data.attributes.subjectLine} />}</p>
            {(
              <div className="inline-block">
                <button
                  // onClick={() => open( latestNewsLetterData.results.Content[0].LatestNewsLetter.newsletter.data.attributes.content)}
                  onClick={() => 
                    open({
                      title: latestNewsLetterData.results.Content[0].LatestNewsLetter.newsletter.data.attributes.title || "Default Title",
                      content: latestNewsLetterData.results.Content[0].LatestNewsLetter.newsletter.data.attributes.content,
                    })
                  }
                  
                  className="button-dark transition-opacity bg-black duration-300 block hover:opacity-50 "
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

 

