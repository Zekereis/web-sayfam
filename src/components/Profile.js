import profil from "../images/profile.jpeg";
function Profile() {
    return (
        <div className="profile">
            <p>Profile</p>
            <div className="profile-content">
                <div className="basic-information">
                    <p>Basic Information</p>
                    <div className="profile-info" >
                        <div className="basic-left">
                            <p >Doğum tarihi<br /><br />
                                İkamet Şehri<br /><br />
                                Eğitim Durumu<br /><br />
                                Tercih Ettiği Rol</p>
                        </div>
                        <div className="basic-right">
                            <p >
                                24.03.1996<br /><br />
                                Ankara<br /><br />
                                Hacettepe Ünv.  Biyoloji<br /><br />
                                Lisans, 2016<br /><br />
                                Frontend, UI<br /><br />
                            </p>
                        </div>
                    </div>
                </div>
                <img className="profile-photo" src={profil} />
                <div className="about-box">
                    <p>About Me</p>
                    <div className="about-box-info">
                        <p>Lorem ipsum, dolor sit amet<br />
                            consectetur adipisicing elit.<br />
                            Veniam aut, odit laborum aliquam<br />
                            voluptatum nisi mollitia.<br /><br/>
                            Mnima accusamus ratione soluta <br />aperiam sit voluptate?
                            Dicta quod<br /> deserunt quam temporibus cumque magnam! </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;