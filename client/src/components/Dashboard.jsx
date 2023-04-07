import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';
// import pirates from '../images/PNC-Park.jpg'
import Navbar from '../components/Navbar'

const Dashboard = () => {

    const [stadiumList, setStadiumList] = useState([]);
    // const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/stadiums')
            .then(res => {
                console.log(res.data);
                setStadiumList(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/getuser/' + id)
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .catch(err => console.log(err))
    // })

    // const logout = () => {
    //     axios.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
    //         .then(res => {
    //             console.log(res);
    //             navigate("/")
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    return (
        <div>
            <Navbar/>
            <div className="allStadiums">
                {/* <button onClick={logout}>Logout</button> */}
                {
                    stadiumList.map((stadium, index) => (
                        <div key={index}>
                            <h2>{stadium.teamName}</h2>
                            <h2><Link to={`/stadiums/${stadium._id}`}>{stadium.stadiumName}</Link></h2>
                            <img className="stadium-img" src={require(`../images/${stadium.stadiumImage}`)} alt="Picture of stadium" />
                        </div>
                    ))
                }
            </div>
        </div>

    //     <div class="container">
    //     <div class="row">
    //         <h1 class="sectiontitle">Here are some of my <span class="text-purple">projects</span></h1>
    //         <ul class="projectlist">
    //             <li class="project">
    //                 <div class="projectwrapper">
    //                     <img src="" class="projectimg" alt=""/>
    //                     <div class="projectdescription">
    //                         <h3 class="projectdescription--title">Library project</h3>
    //                         <h4 class="projectdescription--sub-title">
    //                             HTML, CSS, JavaScript
    //                         </h4>
    //                         <p class="projectdescription--para">
    //                             This website was one of the first project i ever worked on.
    //                             I used 3 diffrent types of coding language to make this website
    //                             and make it responsive.
    //                         </p>

    //                         <div class="projectdescriptionlinks">
    //                             <a href="/Stock project copy/" target="_blank" class="project__description--link" >
    //                                 <button class="btn">Library.com</button>
    //                             </a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </li>
    //         </ul>
    //     </div>
    // </div>
    )
}

export default Dashboard