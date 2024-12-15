// types.ts

export interface CenteredModal {
    title: string;
    subtitle?: string;
    colorTheme: "Black" | "White";
    items: Array<{ id: number; title: string; publishedDate: string; modalContent: string }>;
    navigationSlug?: string;
  }

  //VerticalCardMultiImage
  
  
  interface TitleImageItem {
    displayName: string; // "title-image-item"
    type: string; // Component type
    repeatable: boolean; // Indicates if the component is repeatable
    component: string; // Component reference, e.g., "cn-tech-hub.title-image-item"
  }
  
  interface TextTitle {
    displayName: string; // "text-title"
    type: string; // Component type
    repeatable: boolean; // Indicates if the component is repeatable
    component: string; // Component reference, e.g., "cn-tech-hub.text-title"
  }

  export interface VerticalCardMultiImage {
    collectionName: string; // "components_cn_tech_hub_vertical_card_multi_images"
    info: {
      displayName: string; // "verticalCard-MultiImage"
      icon: string; // "connector"
    };
    options: Record<string, unknown>; // Placeholder for options object
    attributes: {
      title: string; // Title of the card
      text: string; // Text content
      navTitle: string; // Navigation title
      navSlug: string; // Navigation slug
      ColorTheme: string; // Color theme of the card
      navigationSlug: string; // Navigation slug for internal links
      items: TitleImageItem[]; // Array of title-image-item components
      content: TextTitle[]; // Array of text-title components
    };
  }
  