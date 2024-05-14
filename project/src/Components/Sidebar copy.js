import React from 'react'
import "./Side.css"
import chatgpt from "../Components/images/Logo.png"
import Logout from "../Components/images/Logout.png"
import ManSub from "../Components/images/Manage Subscription.png"
import Settings from "../Components/images/Settings.png"
import Explore from "../Components/images/Settings.png"
import profile from "../Components/images/DALL·E 2022-11-11 13.44 1.png"

export default function Sidebar() {
  return (
    <>
    
    <nav className="sidebar-navigation">
	<ul>
		<li className="active">
			{/* <i className="fa fa-share-alt"></i> */}
            <img src={chatgpt} alt='logo'/>
			<span className="tooltip">Connections</span>
		</li>
		<li>
            <img src={chatgpt} alt='logo'/>
			<span className="tooltip">Devices</span>
		</li>
		<li>
        <img src={chatgpt} alt='logo'/>
			<span className="tooltip">Contacts</span>
		</li>
		<li>
        <img src={chatgpt} alt='logo'/>
			<span className="tooltip">Fax</span>
			<span className="tooltip">Fax</span>
		</li>
		<li>
        <img src={chatgpt} alt='logo'/>
			<span className="tooltip">Settings</span>
		</li>

        {/* down */}

        <li>
        <img src={chatgpt} alt='logo'/>
			<span className="tooltip">Settings</span>
		</li>

        <li>
        <img src={chatgpt} alt='logo'/>
			<span className="tooltip">Settings</span>
		</li>

        <li>
        <img src={chatgpt} alt='logo'/>
			<span className="tooltip">Settings</span>
		</li>
        
	</ul>
</nav>
    
    </>
  )
}
