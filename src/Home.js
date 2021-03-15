import React, { Component } from 'react'
import './Home.css'
import Product from './Product'
import Items from './Items'





class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: Items
            
        };
      }
    
      

    render()
    {
        //console.log(this.state.items[0].title)
        return(
            
            <div className='home'>
                <div className="home__container">

                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
                    className="home__image" 
                    alt="poster"/>
                    {/*<img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/CoolPad/Cool6/GW/D21073017_WLD_BAU_Coolpad_Cool6_Tall_hero_1500x600._CB660470371_.jpg"
                    className="home__image" 
                    alt="poster"/>*/}

                    <div className="home__row">
                       
                        <Product items = {this.state.items[0]} />
                        <Product items = {this.state.items[1]} />
                        <Product items = {this.state.items[2]} />
                        <Product items = {this.state.items[3]} />

                        
                        
                        
                    </div>

                    <div className="home__row">
                    <Product items = {this.state.items[4]} />
                    <Product items = {this.state.items[5]} />
                    <Product items = {this.state.items[6]} />
                    <Product items = {this.state.items[7]} />
                    
                        
                    </div>

                    <div className="home__row">
                    <Product items = {this.state.items[8]} />
                    <Product items = {this.state.items[9]} />
                    <Product items = {this.state.items[10]} />
                    <Product items = {this.state.items[11]} />
                
                        
                        
                    </div>
                
                </div>
            </div>

        )
    }

}


export default Home
