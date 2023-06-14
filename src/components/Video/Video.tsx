import { FC } from "react";

const Video: FC<{ src: string }> = ({ src }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={src}
      title="YouTube video player"
        
      allow="accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};
export default Video;
