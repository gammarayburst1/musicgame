import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// このデータは例としてハードコードしていますが、実際にはAPIやデータベースからフェッチすることを想定しています。
const users = [
    { username: "user123", rating: 2100, rank: 1 },
    { username: "smilyemily", rating: 2943, rank: 2 },
    // ... 他のユーザーデータ ...
];

function Search() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const navigate = useNavigate();

    const handleSearch = () => {
        const foundUser = users.find(user => user.username === input);
        setResult(foundUser);
    };

    return (
        <div className="search-container">
            <h2>ユーザー検索</h2>
            <div>
                <input 
                    type="text" 
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                    placeholder="ユーザー名を入力"
                />
                <button onClick={handleSearch}>検索</button>
            </div>
            
            {result && (
                <div className="search-result">
                    <p>ユーザー名: {result.username}</p>
                    <p>レーティング: {result.rating}</p>
                    <p>順位: {result.rank}</p>
                </div>
            )}
            
            <button onClick={() => navigate(-1)}>戻る</button>
        </div>
    );
}

export default Search;
