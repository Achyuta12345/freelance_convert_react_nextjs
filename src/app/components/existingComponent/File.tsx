import React, { ImgHTMLAttributes } from "react";
export interface FileProps extends ImgHTMLAttributes<HTMLImageElement> {
  url: string;
  alt: string;
}

export const File: React.FC<FileProps> = ({ url, alt, ...props }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img
      style={{  width: "550x" }}
      src={url}
      alt={alt || "Image"}
      {...props}
    />
  </a>
);
