
import profile from "../images/profile.jpeg"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"

function Header() {
  return (
    <header className="header">
      <div className='hero-bg'>
        <h2 className='name-text'>ZEKER MEHMET REİSOĞLU</h2>
        <div className='hero-content'>
          <div className='hero-left'>
            <h1>I am a Full Stack <br />
              Developper...</h1>
            <p>...who likes to craft solid and scalable frontend
              <br />products with great user experiences.</p>
            <div className='hero-buttons'>
              <div className='buttton-github' >
                <img src={github} />
                <p>Github</p>
              </div>
              <div className='button-linkedin'>
                <img src={linkedin} />
                <p>Linkedin</p>
              </div>
            </div>
          </div>
          <img className='profile-photo' src={profile} />
        </div>
      </div>
    </header>
  );
}
export default Header;