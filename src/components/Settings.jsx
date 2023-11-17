import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const navigate = useNavigate();

    return (
        <div className="settings-container">
            <button onClick={() => navigate(-1)}>戻るボタン</button>
        </div>
    );
}

export default Settings;
