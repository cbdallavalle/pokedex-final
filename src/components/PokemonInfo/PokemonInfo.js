import React from 'react';
import PropTypes from 'prop-types';
import './PokemonInfo.css';

export const PokemonInfo = ({ icon, name, type, weight }) => {
  return (
    <div className="PokemonInfo">
      <p>{name}</p>
      <p>{type}</p>
      <p>{weight}</p>
      <img src={icon} alt={`${name} icon`} />
    </div>
  );
};

PokemonInfo.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired
};