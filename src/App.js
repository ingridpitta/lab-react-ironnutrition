import React, { Component } from 'react';
import FoodBox from './components/FoodBox/foodBox';
import Form from './components/Form/form';
import Search from './components/Search/search';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      foodsList: [],
      filteredFood: [],
      show: false,
      inputValue: ''
    };
  }

  componentDidMount = () => {
    this.setState({ foodsList: foods });
  };

  showFood = () => {
    const { foodsList, filteredFood } = this.state;

    return filteredFood.length
      ? filteredFood.map((food, index) => {
          return (
            <FoodBox
              name={food.name}
              calories={food.calories}
              image={food.image}
              quantity={food.quantity}
              onClick={this.onClick}
              key={`food-${index + 1}`}
            />
          );
        })
      : foodsList.map((food, index) => {
          return (
            <FoodBox
              name={food.name}
              calories={food.calories}
              image={food.image}
              quantity={food.quantity}
              onClick={this.onClick}
              key={`food-${index + 1}`}
            />
          );
        });
  };

  cancelAction = () => {
    this.showModal();
  };

  addFood = () => {
    const { foodsList } = this.state;
    const name = document.getElementById('form-name');
    const calories = document.getElementById('form-calories');
    const image = document.getElementById('form-image');
    const updatedList = [
      ...foodsList,
      {
        name: name.value,
        calories: calories.value,
        image: image.value,
        quantity: 0
      }
    ];
    this.setState({
      foodsList: updatedList
    });

    this.showModal();
    this.showFood();
  };

  showModal = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  filterFoods = searchValue => {
    const { foodsList } = this.state;
    const filteredFoods = foodsList.filter(food =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    this.setState({ filteredFood: filteredFoods });
  };

  onChange = e => {
    const { inputValue } = this.state;

    this.setState(
      {
        inputValue: e.target.value
      },
      () => {
        this.filterFoods(inputValue);
      }
    );
  };

  render() {
    const { inputValue, show } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>IronNutrition</h1>
        </header>
        <section>
          <Search value={inputValue} onChange={this.onChange} />
          {show && (
            <Form addFood={this.addFood} cancelAction={this.cancelAction} />
          )}
          {!show && (
            <div className="buttons">
              <button className="button is-primary" onClick={this.showModal}>
                Add Food
              </button>
            </div>
          )}
          {this.showFood()}
        </section>
      </div>
    );
  }
}

export default App;
