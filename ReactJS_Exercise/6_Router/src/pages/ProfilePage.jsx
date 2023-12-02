import React from 'react';
import Menu from '../components/menu';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {

    let {facebookID, youtubeID} = useParams();

    return (
        <div>
            <Menu />
            <p>FacebookID: {facebookID} , YoutubeID: {youtubeID}</p>
            <h1>This is profile page</h1>
        </div>
    );
};

export default ProfilePage;