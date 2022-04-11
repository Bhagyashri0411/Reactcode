import './Navbar.css';
const Html = () => {
    return(
        <div className="w3-row w3-padding-32 ws-light-green" style={{ marginTop: '-10px' }}>
        <div className="w3-content" style={{ maxWidth: '1400px' }}>
            <div className="w3-col l6 w3-center" style={{ padding: '3%' }}>
                <h1 style={{ fontSize: '100px', fontWeight: 700, marginTop: '-18px!important' }}>HTML</h1>
                <p style={{ fontSize: '19px' }}>The language for building web pages</p>
                <a  className="w3-button tut-button" style={{ marginBottom: '2px' }}>Learn HTML</a><br />
                <a style={{ position: 'relative', overflow: 'visible', marginBottom: '1px' }} className="w3-button ws-yellow tut-button ws-yellow-hover" title="HTML video tutorial">Video Tutorial<span className="ribbon-vid ws-pink">NEW</span></a><br />
                <a  className="w3-button w3-block ref-button black-color">HTML Reference</a>
            </div>
            <div className="w3-col l6" style={{ padding: '3%' }}>
                <div className="w3-hide-small grey-color w3-card-2 w3-round" style={{ padding: '16px' }}>
                    <h3>HTML Example:</h3>
                    <div className="w3-code htmlHigh notranslate green-border">
                        <span className="tagnamecolor" style={{ color: 'brown' }}><span className="tagcolor" style={{ color: 'mediumblue' }}>&lt;</span>!DOCTYPE<span className="attributecolor" style={{ color: 'red' }}> html</span><span className="tagcolor" style={{ color: 'mediumblue' }}>&gt;</span></span><br />
                        <span className="tagnamecolor" style={{ color: 'brown' }}><span className="tagcolor" style={{ color: 'mediumblue' }}>&lt;</span>html<span className="tagcolor" style={{ color: 'mediumblue' }}>&gt;</span></span><br />
                        <span className="tagnamecolor" style={{ color: 'brown' }}><span className="tagcolor" style={{ color: 'mediumblue' }}>&lt;</span>title<span className="tagcolor" style={{ color: 'mediumblue' }}>&gt;</span></span>HTML Tutorial<span className="tagnamecolor" style={{ color: 'brown' }}><span className="tagcolor" style={{ color: 'mediumblue' }}>&lt;</span>/title<span className="tagcolor" style={{ color: 'mediumblue' }}>&gt;</span></span><br />
                        <span className="tagnamecolor" style={{ color: 'brown' }}><span className="tagcolor" style={{ color: 'mediumblue' }}>&lt;</span>body<span className="tagcolor" style={{ color: 'mediumblue' }}>&gt;</span></span><br /><br />
                        <span className="tagnamecolor" style={{ color: 'brown' }}><span className="tagcolor" style={{ color: 'mediumblue' }}>&lt;</span>h1<span className="tagcolor" style={{ color: 'mediumblue' }}>&gt;</span></span>This is a heading<span className="tagnamecolor" style={{ color: 'brown' }}><span className="tagcolor" style={{ color: 'mediumblue' }}>&lt;</span>/h1<span className="tagcolor" style={{ color: 'mediumblue' }}>&gt;</span></span><br />
                        <span className="tagnamecolor" style={{ color: 'brown' }}><span className="tagcolor" style={{ color: 'mediumblue' }}>&lt;</span>p<span className="tagcolor" style={{ color: 'mediumblue' }}>&gt;</span></span>This is a paragraph.<span className="tagnamecolor" style={{ color: 'brown' }}><span className="tagcolor" style={{ color: 'mediumblue' }}>&lt;</span>/p<span className="tagcolor" style={{ color: 'mediumblue' }}>&gt;</span></span><br /><br />
                        <span className="tagnamecolor" style={{ color: 'brown' }}><span className="tagcolor" style={{ color: 'mediumblue' }}>&lt;</span>/body<span className="tagcolor" style={{ color: 'mediumblue' }}>&gt;</span></span><br />
                        <span className="tagnamecolor" style={{ color: 'brown' }}><span className="tagcolor" style={{ color: 'mediumblue' }}>&lt;</span>/html<span className="tagcolor" style={{ color: 'mediumblue' }}>&gt;</span></span>
                    </div>
                    <a href="" target="_blank" className="w3-button tryit-button">Try it Yourself</a>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Html