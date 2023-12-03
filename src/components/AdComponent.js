import React, { Component } from 'react';

class GoogleAds extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-2933709853465810'
        data-ad-format='auto'
        data-full-width-responsive="true">
      </ins>
    );
  }
}

export default GoogleAds;
