import React from 'react';
import './Wrapper.css';
import axios from 'axios';

// export default class PersonList extends React.Component {

//   componentDidMount() {
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Mogilev&units=metric&lang=ru&appid=36e0233862a0a943f9b51e6b546e6280`)
//       .then(res => {
//         this.setState({ weather: res.data })
//        console.log(res)  
//       })
//   } 
//   render() {
//     return (
//       <div>
//         {this.state?.weather.main.temp}
//         {/* по схеме react lifecycle diagram сначала отработает рендер и потом только componentDidMount потом опять рендер который вызовет сетстейт. 
//         Так как первый раз рендер сработает раньше componentDidMount, то выпадет ошибка,чтоб ее не было нужно написать ? (заменяет if). 
//         если объект weather существует то нужно найти имя  */}
//       </div>
//     )
//   }
// }





class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beforeArray: Array.from(new Array(this.getDayBefore(this.getMonth())), (v, i) => i),
      arrayWithData: Array.from(new Array(this.dayCount(this.getMonth())), (v, i) => i),
      month: this.getMonth(),
      arrayWithNameMonth: ["Январь ", "Февраль ", "Март ", "Апрель ", "Май ", "Июнь ", "Июль ", "Август ", "Сентябрь ", "Октябрь ", "Ноябрь ", "Декабрь "],
      year: this.getYear(),
    }
  }

  dayCount = (month, year) => {
    switch (month) {
      case 0:
        return (31)        
      case 1:
        if (year % 4 === 0 || year % 400 === 0) {
          return (29);
        } else {
          return (28)
        }         
      case 2:
        return (31)        
      case 3:
        return (30)        
      case 4:
        return (31)        
      case 5:
        return (30)        
      case 6:
        return (31)        
      case 7:
        return (31)        
      case 8:
        return (30)        
      case 9:
        return (31)        
      case 10:
        return (30)        
      case 11:
        return (31)        
      default:
        alert("Ошибка");
        break;
    }
  }

  getDayBefore(month) {    
    return (
      new Date(2021, month, 0).getDay()
    )
  }

  getMonth() {
    return (
      new Date().getMonth()
    )
  }

  getYear() {
    return (
      new Date().getFullYear()
    )
  }

  handleForward = () => {
    this.setState((prevState) => {
      let nameMonth=prevState.month+1;
      let namberYear=prevState.year;
      if (nameMonth>11) {
        nameMonth=0;
        namberYear=prevState.year+1;
      }
      return {
      month: nameMonth,
      arrayWithData: Array.from(new Array(this.dayCount(nameMonth,namberYear)), (v, i) => i),
      beforeArray: Array.from(new Array(this.getDayBefore(nameMonth)), (v, i) => i),
      year: namberYear,
    }
  })}

  handleBack = () => {
    this.setState((prevState) => {
      let nameMonth=prevState.month-1;
      let namberYear=prevState.year;
      if (nameMonth<0) {
        nameMonth=11;
        namberYear=prevState.year-1;
      }
      return {
      month: nameMonth,
      arrayWithData: Array.from(new Array(this.dayCount(nameMonth,namberYear)), (v, i) => i),
      beforeArray: Array.from(new Array(this.getDayBefore(nameMonth)), (v, i) => i),
      year: namberYear,
    }
  })}
 
  render() {   

    return (

      <div className="block__center block__margin-top">

        <div className="block__size block_border block__padding-top">

          <div className="flex">

            <div>
              {this.state.arrayWithNameMonth[this.state.month]}
              {this.state.year}
            </div>

            <div>
              <button onClick={this.handleForward}>след</button>
              <button onClick={this.handleBack}>предыд</button>
            </div>

          </div>

          <div className="flex block__margin-top">
            <p>пн</p>
            <p>вт</p>
            <p>ср</p>
            <p>чт</p>
            <p>пт</p>
            <p>сб</p>
            <p>вс</p>
          </div>

          <div className="flex-wrap block__margin-top block__size">
            {this.state.beforeArray.map((el, i) => {
              return (
                <button key={i} className="button"></button>
              )
            })}

            {this.state.arrayWithData.map((el, i) => {
              return (
                <button key={i} className="button">{i + 1}</button>
              )
            })}
          </div>

        </div>

      </div>
    );
  }
}

export default Wrapper;
