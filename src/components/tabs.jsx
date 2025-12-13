import {useState} from 'react';

function Tabs(){
    const [activeTab,setActiveTab] = useState("home");

    return(
        <div>
            <div>
                <button onClick={()=>setActiveTab("home")}>
                    Home
                </button>

                <button onClick={()=>setActiveTab("profile")}>
                    Profile
                </button>

                <button onClick={()=>setActiveTab("settings")}>
                    Settings
                </button>
            </div>

            {activeTab==="home" && <p>you are on the Home tab</p>}
            {activeTab==="profile" && <p>you are on the Profile tab</p>}
            {activeTab==="settings" && <p>you are on the Settings tab</p>}
        </div>
    )
}

export default Tabs;