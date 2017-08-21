import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { getCategories } from '../actions'
import * as API from '../actions/index.js'
import { connect } from 'react-redux'

class App extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  componentDidMount(){
    //  API.getPosts()
    // API.deleteComment('6ni6ok3ym7mf1p33xxxx')
    // API.getAllCommentsFromPost("6ni6ok3ym7mf1p33lnez")
    //  API.newPost('6ni6ok3ym7mf1p33lneü', Date.now(), 'Learn Redux in 15 minutes!', 'Just kidding. It takes more than 100 minutes to learn technology.', 'thingthree', 'udacity')
    // API.getPost('6ni6ok3ym7mf1p33lnez')
    //  API.newComment('6ni6ok3ym7mf1p33xxxz', Date.now(), 'Nice Comment', 'MrMe', '6ni6ok3ym7mf1p33lneü')
    // API.editComment('6ni6ok3ym7mf1p33xxxz', Date.now(), 'edit Nice Comment')
    // API.editPost('6ni6ok3ym7mf1p33lney','Learn Redux in 15 minutes! -> edited','Just kidding. It takes more than 100 minutes to learn technology. => edited')
    // API.getComment('6ni6ok3ym7mf1p33xxxx')
    //  API.deletePost('6ni6ok3ym7mf1p33lneü')
    API.vodeComment('6ni6ok3ym7mf1p33xxxz',"upVote")
    // API.vodePost('6ni6ok3ym7mf1p33lneü','downVote')
    // .then((categories) => {
    // console.log(categories);
    // this.setState(categories  )
    // console.log(this.state.categories[0])
    // })
}
  render() {

    // const { categories } = this.props
    // const all = API.getCategories()
                // .then( value => {
                    // return value})

    // console.log(all)
    // const res = new Object()
    // var showCategories = []
    // all.then( value => {//console.log(value.categories)
                        // for(let j=0; j<value.categories.length; j++){
                          // showCategories[showCategories.length] = value.categories[j].name
                          // this.setState({categories: value.categories[j].name})
                          // if(res.categories === undefined){
                            // res.categories=[value.categories[j]]
                          // } else {
                            // showCategories.push(value.categories[j].name)
                        // console.log(typeof value.categories[j].name)
                        // }
                      // }
                      // return showCategories
                      // })
    // for(let z=0; z<)
    // console.log(JSON.stringify(showCategories))
    // console.log(a);
    // console.log(this.state.props);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// function mapCategoriesToProps (dispatch) {
//   //  return {
//       // categories: dispatch(API.getAllCategories())
//        const res = API.getCategories().then((categories) => {
//          dispatch(categories.categories[0])
//          console.log(categories.categories)
//        })
//         // console.log(categories)
//         //  this.setState(categories)
//         return {
//           res
//         }
// }
// export default connect(
  // mapCategoriesToProps,
// )(App);


function mapStateToProps ({ food, calendar }) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
 console.log('calendar', calendar);
 // console.log('food', food);
  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? food[calendar[day][meal]]
          : null

        return meals
      }, {})
    })),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectRecipe: (data) => dispatch(API.addRecipe(data)),
    remove: (data) => dispatch(API.removeFromCalendar(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
