import "./petProfile.css"
import React from 'react'
import Feed from '../../components/feed/Feed.jsx'
import Rightbar from '../../components/rightbar/Rightbar.jsx'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Topbar from '../../components/topbar/Topbar.jsx'

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={`${PF}pet/3.jpg`} alt="" />
                            <img className="profileUserImg" src={`${PF}pet/7.jpg`} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Lowe</h4>
                            <span className="profileInfoDesc">Hi I am Lowe</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile pet />
                    </div>
                </div>
            </div>
        </>
    )
}
