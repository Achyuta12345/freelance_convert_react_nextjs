// components/File.tsx
import React, { ImgHTMLAttributes } from "react";

export interface FileProps extends ImgHTMLAttributes<HTMLImageElement> {
  url: string;
  alt: string;
}

export const File: React.FC<FileProps> = ({ url, alt, ...props }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img src={url} alt={alt} {...props} />
  </a>
);

