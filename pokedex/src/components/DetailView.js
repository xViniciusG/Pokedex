import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon, description}) => {
  const { id, name, sprite, type } = pokemon;
 

  return (
    <section className="detail-view">
       <div>
        <div className='data-wrapper'>
          <h3 className='data-id'> {id} </h3>
          <div>
            <h3 className='data-name'> {name} </h3>
          </div> 
        </div>
      </div>
      <img src={sprite} className='sprite-image' alt="sprite"/>
     <div className='data-wrapper-down'>
     <h2 className="data-char">Type: {type}</h2>
     <h2 className="data-char">Description: </h2>
     </div>
    </section>
  )
}

export default DetailView;
