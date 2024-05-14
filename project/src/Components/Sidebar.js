import React from 'react'
import "./Side.css"
import chatgpt from "../Components/images/Logo.png"
import Logout from "../Components/images/Logout.png"
import ManSub from "../Components/images/Manage Subscription.png"
import Settings from "../Components/images/Settings.png"
import profile from "../Components/images/DALL·E 2022-11-11 13.44 1.png"
import explore from "../Components/images/Explore What's new.png"
import Chat from "../Components/images/Chat.png"
import Vision from "../Components/images/Dark version.png"

export default function Sidebar() {
  return (
    <>
    
    <nav className="sidebar-navigation">
	<ul>

        {/* top */}

        <div className='top'>

		<li className="active">
            <img src={chatgpt} alt='logo'/>
		</li>
        </div>


        {/* middle */}

        <div className='middle'>
        <li>
            <img src={Chat} alt='logo'/>
		</li>

		
		<li>
        <img src={ManSub} alt='logo' style={{
            margin:'-10px 10px'
        }}/>
		</li>
		<li>
        <img src={explore} alt='logo'/>
		</li>
		<li>
        <img src={Settings} alt='logo'/>
		</li>

        </div>
        

        {/* down */}


        <div className='donw'>

        <li>
        <img src={profile} alt='logo'/>
			<span className="tooltip">Settings</span>
		</li>

        <li>
        <img src={Logout} alt='logo'/>
			<span className="tooltip">Settings</span>
		</li>

        <li>
        <img src={Vision} alt='logo'/>
			<span className="tooltip">Settings</span>
		</li>

        </div>

        
	</ul>
</nav>
    
    </>
  )
}
