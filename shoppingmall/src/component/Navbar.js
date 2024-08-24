import React from "react";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성",]
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }
    const goToHome = () => {
        navigate('/');
    }

    const search = (event) => {
        if(event.key === "Enter"){
            let keyword = event.target.value
            // console.log(keyword)
            navigate(`/?q=${keyword}`)
        }
    }
    return(
        <div>
            {authenticate? (<div>
                <div className="login-button" onClick={()=>setAuthenticate(false)}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그아웃</div>
                </div>
            </div>):(<div>
                <div className="login-button" onClick={()=>navigate("/login")}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
                </div>
            </div>)}

            <div className="nav-section">
                <img 
                width={100} 
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" 
                alt="logo"
                onClick={goToHome}
                style={{ cursor: 'pointer' }}
                />
            </div>

            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map(menu => <li>{menu}</li>)}
                </ul>
                <div className="search-area">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" onKeyPress={(event)=>{search(event)}}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;