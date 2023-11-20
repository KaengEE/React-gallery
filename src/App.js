import { useEffect, useState } from "react";

function App() {
  //api요청
  const [images, setImages] = useState([]); //초기값 빈 배열
  const [isLoading, setIsLoading] = useState(true); //초기값 true
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
  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by John Doe
        </div>
        <ul>
          <li>
            <strong>Views: </strong> 4000
          </li>
          <li>
            <strong>Downloads: </strong> 300
          </li>
          <strong>Likes: </strong> 400
        </ul>
      </div>
      <div className="px-6 py-4 text-sm font-semibold text-gray-700 ">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1  mr-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1  mr-2">
          #tag3
        </span>
      </div>
    </div>
  );
}

export default App;
