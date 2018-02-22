import React, { Component } from 'react';
import loadingGif from '../../assets/loading.gif';
// import { Card } from '../'

export const CardContainer = ({ pokeTypes }) => {
  const loading = !Object.keys(pokeTypes).length ? <img src={loadingGif} alt="loading" /> : <div>LOADED</div>
  const { bug, fighting, flying, ghost, ground, normal, poison, rock, steel } = pokeTypes;

  return (
    <section className="CardContainer">
      { loading }
    </section>
  )
}
