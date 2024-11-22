// components/RichText.tsx
import React from "react";

interface RichTextProps {
  text: string;
}

export const RichText: React.FC<RichTextProps> = ({ text }) => (
  <div dangerouslySetInnerHTML={{ __html: text }} />
);
