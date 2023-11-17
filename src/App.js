import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MyPage from './components/MyPage';
import Ranking from './components/Ranking'; 
import Settings from './components/Settings';
import Search from './components/Search';
import Game from './components/Game';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/search" element={<Search />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/game" element={<Game />} />
          {/* 他のルートもここに追加できます。 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import React from "react";
// import axios from "axios";

// function App() {
// 	const [data, setData] = React.useState();
// 	const url = "http://127.0.0.1:8000";

// 	const GetData = () => {
// 		axios.get(url).then((res) => {
// 			setData(res.data);
// 		});
// 	};
// 	return (
// 		<div>
// 			<div>ここに処理を書いていきます</div>
// 			{data ? <div>{data.Hello}</div> : <button onClick={GetData}>データを取得</button>}
// 		</div>
// 	);
// }

// export default App;
