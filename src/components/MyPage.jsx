import React from 'react';
import { useNavigate } from 'react-router-dom';

// 仮のデータです。実際にはAPIから取得するか、ContextやReduxから取得する可能性があります。
const userData = {
    username: 'user123',
    rating: 2100,
    rank: 1
};

function MyPage() {
    const navigate = useNavigate();

    return (
        <div className="mypage-container">
            <h2>マイページ</h2>
            <p>ユーザー名: {userData.username}</p>
            <p>レーティング: {userData.rating}</p>
            <p>順位: {userData.rank}</p>
            <button onClick={() => navigate(-1)}>戻る</button>
        </div>
    );
}

export default MyPage;
