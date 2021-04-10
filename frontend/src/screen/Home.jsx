import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export const Home = ()=> {


    return( 

        <div>
            <section id="main">
            

            <section id="section-left">

            <div class="navigation">
            <Link to='/Login'> <p id="loginRegisterButton" >Login/Sign Up</p> </Link>
                
            </div>

            <div id="hero-content">
                <div id="logo-container">
                    <img id="logo" src="images/jeux-logo.png" alt="Jeux logo"/>
                </div>
                <div id="hero-text-block">
                    <p><span id="play-button"> play <i class="fas fa-play"></i></span> fun games<br/> with <span class="highlighted">friends <br/> anywhere</span>.</p>
                    <img id="fiends-stickers" src="images/friends-stickers-jeux.png" alt="Jeux Friends Stickers"/>
                </div>

            

            </div>

            </section>

            
                
            <section id="hero-carousel">
                <div class="gameThumbnail leftTilt"> 
                    <p class="gameButton"> Gif Chat <i class="fas fa-play"></i></p>
                </div>

                <div class="gameThumbnail rightTilt"> 
                    <p class="gameButton"> Gif Chat <i class="fas fa-play"></i></p>
                </div>

                <div class="gameThumbnail leftTilt"> 
                    <p class="gameButton"> Gif Chat <i class="fas fa-play"></i></p>
                </div>
            <p id="round-button"><a id="allGamesLink">See All Games </a></p>


            <footer id="footer">
                <a href="https://twitter.com/thisisoke"> Made by @thisisoke</a>
            </footer>

            </section>
            

            
        </section> 

        </div>

    );

}