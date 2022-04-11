import './Navbar.css';
const Home = () => {
    return (
        <div>
            <div className="ws-black w3-center" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
                <div className="w3-content learntocodecontent" style={{ maxWidth: '1400px' }}>
                    <h1 className="learntocodeh1">Learn to Code</h1>
                    <h3 className="learntocodeh3">With the world's largest web developer site.</h3>
                    <br />
                    <form className="example" action="/action_page.php" style={{ margin: 'auto', maxWidth: '500px' }}>
                        <input type="text" placeholder="Search our tutorials, e.g. HTML" id="search2" autoComplete="off" />
                        <button type="button" id="learntocode_searchbtn" ><i id="learntocode_searchicon" className="fa fa-search" /></button>
                        <div id="listofsearchresults">
                        </div>
                    </form>
                    <h4 style={{ color: 'white', fontSize: '23px', fontWeight: 700, marginTop: '30px!important' }}>
                        <a href="where_to_start.asp">Not Sure Where To Begin?</a>
                    </h4>
                </div>
            </div>
            <svg style={{ backgroundColor: '#D9EEE1' }} width="100%" height={70} viewBox="0 0 100 100" preserveAspectRatio="none">
                <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill="#282A35" />
            </svg>
        </div>
    )
}
export default Home