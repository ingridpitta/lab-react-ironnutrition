import React from 'react';
import './form.css';

const Form = ({ addFood, cancelAction }) => {
  return (
    <div className="form-box">
      <div className="field">
        <label className="label">Nome</label>
        <div className="control">
          <input className="input" type="text" placeholder="e.x Pizza" id="form-name"/>
        </div>
      </div>
      <div className="field">
        <label className="label">Calorias</label>
        <div className="control">
          <input className="input" type="number" placeholder="e.x 0" id="form-calories"/>
        </div>
      </div>
      <div className="field">
        <label className="label">Imagem</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="e.x https://image.com/image"
            id="form-image"
          />
        </div>
      </div>
      <div className="buttons">
        <button className="button is-danger" onClick={cancelAction}>
          Cancelar
        </button>
        <button className="button is-warning" onClick={addFood}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Form;
