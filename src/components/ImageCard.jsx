import React from "react";

export const ImageCard = ({ image }) => {
  //console.log(image);
  const tags = image.tags.split(", "); //문자 분리후 배열로 저장
  return (
    //이미지 카드
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.largeImageURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-orange-700 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong> {image.views}
          </li>
          <li>
            <strong>Downloads: </strong> {image.downloads}
          </li>
          <strong>Likes: </strong> {image.likes}
        </ul>
      </div>
      <div className="px-6 py-4 text-xs font-semibold text-gray-700 ">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="inline-block bg-amber-100 rounded-full px-3 py-1 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default ImageCard;
