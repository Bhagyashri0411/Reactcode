import React from "react"
import Home from "./Home";
import Html from "./Html";
import './Navbar.css';
const Navbar = () => {
    const shoot = () => {
        document.getElementById('darkmodemenu').style.top = '75px';
    }
    const shoot1 = () => {
        document.getElementById('darkmodemenu').style.top = '5px';
    }
    const Tutorialchanges =() =>{
        alert("hiii")
    }
    return (
        <div>
            <div className="w3-bar w3-card-2 notranslate" style={{ paddingLeft: '12px', paddingRight: '16px', overflow: 'visible' }}>
                <a className="w3-bar-item w3-button w3-hover-none w3-left w3-padding-16" title="Home" style={{ width: '77px' }}>
                    <i className="fa fa-home" />
                </a>
                <a className="w3-bar-item w3-button w3-hide-small barex bar-item-hover w3-padding-24" href="javascript:void(0)" style={{ width: '117px' }} onClick={Tutorialchanges} >Tutorials <i className="fa fa-caret-down" style={{ display: 'inline' }} /><i className="fa fa-caret-up" style={{ display: 'none' }} /></a>
                <a className="w3-bar-item w3-button w3-hide-small barex bar-item-hover w3-padding-24" href="javascript:void(0)" style={{ width: '135px' }}>References <i className="fa fa-caret-down" style={{ display: 'inline' }} /><i className="fa fa-caret-up" style={{ display: 'none' }} /></a>
                <a className="w3-bar-item w3-button w3-hide-small barex bar-item-hover w3-padding-24 ws-hide-800" href="javascript:void(0)" style={{ width: '119px' }}>Exercises <i className="fa fa-caret-down" style={{ fontSize: '20px', display: 'inline' }} /><i className="fa fa-caret-up" style={{ display: 'none' }} /></a>
                <a className="w3-bar-item w3-button w3-hide-medium bar-item-hover w3-hide-small w3-padding-24 barex ws-hide-1200" href="https://www.w3schools.com/videos/index.php">Videos</a>
                <a class="w3-bar-item w3-button w3-hide-medium bar-item-hover w3-hide-small w3-padding-24 barex ws-hide-1080" href="/pro/index.php">Pro <span className="ribbon-topnav ws-hide-1250">NEW</span></a>
                <div id="loginactioncontainer" className="w3-right w3-padding-16">
                    <div id="mypagediv" style={{ display: 'none' }} />
                    <a id="w3loginbtn" className="w3-bar-item w3-btn w3-right" target="_self" style={{ display: 'inline' }}>Log in</a>
                </div>

                <div className="w3-right w3-padding-16 w3-white">
                    <a className="w3-bar-item w3-button bar-item-hover w3-right w3-hide-medium barex" style={{ width: '134px', borderRadius: '25px', marginRight: '8px' }} href="https://courses.w3schools.com/" target="_blank" >Paid Courses</a>
                    <a className="w3-bar-item w3-button bar-item-hover w3-right w3-hide-small barex ws-pink" style={{ borderRadius: '25px', marginRight: '8px' }} target="_blank">Website <span className="ribbon-topnav ws-hide-1250">NEW</span></a>
                </div>

                <div className="w3-right w3-padding-16 ext_icon_container container-style">

                    <a className="w3-bar-item w3-button bar-icon-hover w3-right w3searchbtntopnav" href="javascript:void(0)" style={{ paddingTop: '24px', paddingBottom: '24px', paddingLeft: '12px', paddingRight: '12px', marginRight: '8px' }} ><i className="fa fa-search"></i></a>
                    <a className="w3-bar-item w3-button bar-icon-hover w3-right w3translatebtntopnav" href="javascript:void(0)" style={{ paddingTop: '24px', paddingBottom: '24px', paddingLeft: '12px', paddingRight: '12px' }}><i className="fa fa-globe"></i></a>

                    <a className="w3-bar-item w3-button bar-icon-hover w3-right w3-hide-small" onMouseOver={shoot} onMouseOut={shoot1} style={{ paddingTop: '24px', paddingBottom: '24px', paddingLeft: '12px', paddingRight: '12px' }} href="javascript:void(0)"><i className="fa fa-adjust"></i></a>

                    <div id="darkmodemenu" className="ws-grey w3-hide-small" onMouseOver={shoot} onMouseOut={shoot1} style={{ top: '5px' }}>
                        <input id="radio_darkpage" type="checkbox" name="radio_theme_mode" /><label htmlFor="radio_darkpage"> Dark mode</label>
                        <br />
                        <input id="radio_darkcode" type="checkbox" name="radio_theme_mode" /><label htmlFor="radio_darkcode"> Dark code</label>
                    </div>

                </div>
            </div>

            <Home></Home>

            <Html></Html>
        </div>
    )
}
export default Navbar