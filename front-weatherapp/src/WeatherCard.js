import React, { Component } from 'react';
import { CCard, CCardImage, CListGroupItem, CListGroup, CImage} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

export default class WeatherCard extends Component {
    render() {
        return (
            
            <div className = "App-card">
            <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top" src="/images/background.png" />
                <div className = "card-title">  {this.props.name} </div> 
                <div className = "card-title2"> {this.props.date} </div> 
                <div className = "card-title3"> {this.props.temp}°</div> 
                <CListGroup flush>
                    <CListGroupItem> <CImage src="/images/temp.png" width={30} height={30}   />   Temperatura <span className = "cardValue"> { this.props.temp } </span>  </CListGroupItem>
                    <CListGroupItem> <CImage src="/images/humidity.png" width={30} height={30} />  Humedad  <span className = "cardValue"> { this.props.humidity }% </span> </CListGroupItem>
                    <CListGroupItem> <CImage src="/images/wind.png" width={30} height={30} />  Velocidad Viento  <span className = "cardValue"> { this.props.speedWind } m/s </span> </CListGroupItem>
                </CListGroup>
            </CCard>
            </div>
        )
    }

}