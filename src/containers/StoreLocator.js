import React, { Component } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';
import mapChooser from '../mapChooser';
import axios from 'axios';

class StoreLocator extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentMap: 'default.png',
            shops: []
        }
        
        this.chooseMap = this.chooseMap.bind(this);
    }

    async componentDidMount(){
        let response = await axios.get('http://localhost:3000/data/shops.json');
        this.setState({shops: response.data.shops}, ()=> console.log(this.state.shops))
    }

    chooseMap(e){
        this.setState({currentMap: mapChooser(e.target.value)});
    }

    render(){
        let storeButtons = this.state.shops.map((shop, id)=>{
            return (
                <Button
                    key={id}
                    location={shop.location}
                    handleClick={this.chooseMap}
                />
            );
        })
        return(
            <div>
                <Header />
                <div className="buttons">
                    {storeButtons}
                </div>
                <Map imagename={this.state.currentMap} />
            </div>
        );
    }
}

export default StoreLocator;