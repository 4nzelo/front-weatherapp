import React, { Component } from 'react';
import { CCard, CCardImage, CListGroupItem, CListGroup, CImage} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

export default class WeatherCard extends Component {
    render() {
        return (
            
            <div className = "App-card">
            <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top" src="/images/background.png" />
                <CListGroup flush>
                    <CListGroupItem> <CImage src="/images/temp.png" width={40} height={40} />   Temperatura { this.props.temp } </CListGroupItem>
                    <CListGroupItem> <CImage src="/images/humidity.png" width={40} height={40} />  Humedad { this.props.humidity } </CListGroupItem>
                    <CListGroupItem> <CImage src="/images/wind.png" width={40} height={40} />  Velocidad Viento { this.props.speedWind }</CListGroupItem>
                </CListGroup>
            </CCard>
            </div>
        )
    }

}