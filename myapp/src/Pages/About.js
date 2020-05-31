import React, { Component } from 'react'
import '../Assets/CSS/About.css'

class About extends Component{
    render(){
        return(
            <div className="aboutcontainer">
                <div className="aboutsection">
                    <div className="abouttitle">ABOUT SECTION</div>
                    <div className="aboutcontent">
                        <p>Hey,My name is Akbar Khan,One who has designed and developed this project,Now rather then wasting your time with my introduction,let get into project description  </p>
                        <p>So,COLLEGE CONNECT,Is developed considering the current scenario of Schools and Colleges. If our college want to drop us a notification 
                            then either they approach college website or any social sites,but in both the cases number of reach of the notification is low.
                            As very less people checks college websites and over there also they don't have much option to interact or engage with that notice. Now if we talk about Social sites 
                            then all of us know their limitations. 
                        </p>
                        <p>
                            So now there must be a question arised in your mind, HOW IS COLLEGE CONNECT BENEFICIAL ???
                        </p>
                        <p>COLLEGE CONNECT Is designed considering all the disadvantages of above method and even it has something for students too.Yes over here not only college Admins but students too can register and make a post.
                            There will be two post section in the homepage,One for ADMIN and second section is booked for students, Not just this you can even like and comment just like the way you do in other socal sites. There will be profile page where you can check your profile details along with the posts which you have made in the site.
                            you may edit your profile and even you can delete your post.
                        </p>
                        <p>If we talk about admin then it will not be wrong to call ADMIN as "super user" as admin can delete any post which they wants to.</p>
                        <p>I will just request you to use it and check, you will surely find it beneficial,Do forgive me for any grammatial error in the about section. THANK YOU </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About