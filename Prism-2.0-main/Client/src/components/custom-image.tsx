import { useState } from "react";

export interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export const CustomImage = ({ src, alt, className = "", ...rest }: CustomImageProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <img
      src={src}
      alt={alt}
      className={`transition duration-300 w-full h-full object-cover ${
        isLoading ? "blur-md" : "blur-0"
      } ${className}`}
      onLoad={() => setLoading(false)}
      loading="lazy"
      decoding="async"
      {...rest}
    />
  );
};
