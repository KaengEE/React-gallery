import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  //api요청
  const [images, setImages] = useState([]); //초기값 빈 배열
  const [term, setTerm] = useState("flowers"); //초기 검색값
  //console.log(process.env.REACT_APP_PIXABAY_API_KEY);

  useEffect(() => {
    //사진 가져오기
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json()) //결과를 json으로 변환
      .then((data) => setImages(data.hits)) //hits의 데이터
      .catch((err) => console.log(err)); // err 콘솔
  }, [term]);

  return (
    <div className="container mx-auto my-7">
      <ImageSearch setTerm={setTerm} />
      {images.length === 0 && (
        <h1 className="text-5xl text-center mt-32">이미지가 없습니다.</h1>
      )}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
