
import profile from "../images/profile.jpeg"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"

function Header() {
  return (<>
    <div className="header">
      <div className="header-container">
        <h2 className='name-text'>ZEKER MEHMET REİSOĞLU</h2>
        <div>
          <div className='hero-content'>
            <div className='hero-left'>
              <h1>I am a Full Stack <br />
                Developer...</h1>
              <p>...who likes to craft, solid and scalable full stack
                <br />products with great user experiences.</p>
              <div className='hero-buttons'>
                <a href="https://github.com/Zekereis">
                <div className='buttton-github' >
                  <img src={github} />
                  <p>Github</p>
                </div>
                </a>
                <a href="https://www.linkedin.com/in/zeker-reisoğlu-b27839218/">
                <div className='button-linkedin'>
                  <img src={linkedin} />
                  <p>Linkedin</p>
                </div>
                </a>
              </div>
            </div>
            <div className="photo-div">
              <img className='profile-photo' src={profile} />
            </div>

          </div>
        </div>

      </div>
    </div>
  </>
  );
}
export default Header;