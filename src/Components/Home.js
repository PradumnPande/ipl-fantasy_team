import React, { Component } from 'react'

 class Home extends Component {
  render() {
    return (
      <div>
      <table border={1} cellSpacing={0} cellPadding= {10}>
          <thead>
              <tr>
              <th>Sl.no</th>
              <th>Team 1</th>
              <th>Team 2</th>
              <th>Match Date</th>
             <th>Match Time</th>
             <th>Match stadium</th>
             <th>Match Winner</th>
             <th>Match status</th>
             <th>Match delay</th>
              </tr>
          </thead>
          <tbody>
               
            <tr>
                <td>1</td>
                <td>Mumbai</td>
                <td>CSK</td>
                <td >12.05.22</td>
                <td >7:30</td>
                <td >Wankhede</td>
                <td > Mumbai</td>
                <td>winner</td>
                <td>no</td>
            </tr>
    </tbody> 
      </table>
      </div>
    )
  }
}

export default Home