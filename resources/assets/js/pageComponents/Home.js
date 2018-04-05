import React, {Component}  from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles/Home.scss'


const Home = () => {
    return (
        <div styleName="Home">
            <div styleName="TextContainer">
                <h2>Laravel / React Starter application</h2>
                

                <p>A starter app that can be used as a boilerplate for building laravel api powered apps using the Dingo API Package and JWT tokens provided by TymonDesigns\jwt-auth.</p>
                <p>This demo includes user sign up/sign in, modal components, locally scoped styling using React Css Modules, react component transitions using Css-Transition-Group</p>                
            </div>
        </div>
    );
}

export default CSSModules(Home, styles)
