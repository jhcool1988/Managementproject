
import './App.css';
import Customer from './components/Customer';
import React, {Component, component} from 'react';

const customer = [
  {
  'id': 1,
  'image': 'http://placeimg.com/128/108/1',
  'name': '김종현',
  'birthday': '880319',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'http://placeimg.com/128/108/2',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '의적'
},
{
  'id': 3,
  'image': 'http://placeimg.com/128/108/3',
  'name': '정약용',
  'birthday': '751222',
  'gender': '남자',
  'job': '유학생'
}
]


class App extends Component {
  render() {  
    return (
      <div>
        {
          customer.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })

        }
      </div>
    );
  }
}

export default App;
