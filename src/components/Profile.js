import profil from "../images/profile.jpeg";
function Profile() {
    return (

        <div className="profile">
            <div className="profile-container">
                <p>Profile</p>
                <div className="profile-content">
                    <div className="basic-information">
                        <p>Basic Information</p>
                        <div className="profile-info" >
                            <div className="basic-left">
                                <p >Date of Birth<br /><br />
                                    City<br /><br />
                                    Education<br /><br /><br />
                                    Position</p>
                            </div>
                            <div className="basic-right">
                                <p >
                                    25.02.2000<br /><br />
                                    Kocaeli<br /><br />
                                    Kocaeli Uni.International R.<br/>
                                    Computer Programming<br /><br />
                                    Full Stack<br /><br />
                                </p>
                            </div>
                        </div>
                    </div>
                    <img className="profile-photo-two" src={profil} />
                    <div className="about-box">
                        <p>About Me</p>
                        <div className="about-box-info">
                            <p><i>My name is Zeker, and I am a full-stack developer<br />
                                with 2 years of self-coding experience in software.<br />
                                I have recently been completing a bootcamp that<br />
                                will end in April 2023. I am passionate about creating <br />
                                innovative and user-friendly web and mobile applications.<br />
                                My skills include proficiency in various programming<br />
                                languages such as JavaScript, React, Node.js, and more.<br />
                                I am always eager to learn new technologies and improve<br />
                                my skills to deliver high-quality solutions to my clients.</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;