import React from "react";
import Loader from './Loader';
import {NavLink} from 'react-router-dom';



class Menu extends React.Component{
    render(){
        if(!this.props.data){
             return<Loader/>   
        }

        let datas = this.props.data.items;

        let allLanguages = datas.reduce((acc, items) => {
            acc = acc.concat(items.language);
            return acc;
          }, []);

        let languages =  [...new Set(allLanguages)]
       return(
        <div className="container">
            <ul className="nav">{
            languages.map((language) => 
            language === null ? (
                <li className="menu">
                    <NavLink activeClassName={(isActive) => 
                        "active" + (!isActive) ? 
                        "non-active" : ""} to='/' >
                        All
                    </NavLink>
                </li>
            ):(
                <li className="menu">
                    <NavLink activeClassName="active" to={`/post/${language}`}>
                        {language}
                    </NavLink>
                </li>
            )
            )
            }</ul>
        </div>
       )   
    }
}


export default Menu;