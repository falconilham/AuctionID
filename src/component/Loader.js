import {TextBlock, RectShape} from 'react-placeholder/lib/placeholders';
import React from 'react'

export const awesomePlaceholder = (
  <div className='col-sm my-awesome-placeholder'>
    <div>
      <RectShape color='grey' style={{width: "100%", height: 120}}/>
      <div className="child-placeholder">
        <TextBlock style={{width: "100%", height: 30}} color='grey'/>
        <TextBlock style={{width: "100%", height: 30}} color='grey'/>
      </div>
    </div>
    <div>
      <RectShape color='grey' style={{width: "100%", height: 120}}/>
      <div className="child-placeholder">
        <TextBlock style={{width: "100%", height: 30}} color='grey'/>
        <TextBlock style={{width: "100%", height: 30}} color='grey'/>
      </div>
    </div>
    <div>
      <RectShape color='grey' style={{width: "100%", height: 120}}/>
      <div className="child-placeholder">
        <TextBlock style={{width: "100%", height: 30}} color='grey'/>
        <TextBlock style={{width: "100%", height: 30}} color='grey'/>
      </div>
    </div>
  </div>
);