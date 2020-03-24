import React, { Component } from 'react';
import FormOptions from '../FormOptions/FormOptions';
import FormFieldset from '../FormFieldset/FormFieldset';
import slugify from 'slugify';
import './Form.css';

export default class Customize extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                  <FormOptions 
                    selected={this.props.selected}
                    itemHash={itemHash}
                    feature={feature}
                    item={item}
                    key={item.name}
                    updateFeature={this.props.updateFeature}   
                  />
              );
            });     
            return (
                <FormFieldset
                    key={idx} 
                    feature={feature}
                    options={options}
                    featureHash={featureHash}
                />             
            );
        });
        return (
        <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
        </form>
        )
    }
}


