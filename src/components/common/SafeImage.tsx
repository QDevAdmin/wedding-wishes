import React, { useState } from 'react';
import { ImageIcon } from 'lucide-react';
interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
}
const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className,
  fallbackClassName,
  ...props
}) => {
  const [error, setError] = useState(false);
  const handleError = () => {
    setError(true);
  };
  if (error || !src) {
    return <div className={`bg-neutral-100 flex items-center justify-center ${fallbackClassName || className}`}>
        <ImageIcon className="w-1/3 h-1/3 text-neutral-300" />
      </div>;
  }
  return <img src={src} alt={alt} className={className} onError={handleError} {...props} />;
};
export default SafeImage;