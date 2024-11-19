// types.ts

export interface CenteredModal {
    title: string;
    subtitle?: string;
    colorTheme: "Black" | "White";
    items: Array<{ id: number; title: string; publishedDate: string; modalContent: string }>;
    navigationSlug?: string;
  }
  