import React from 'react'
import {connect} from 'react-redux'
// import {ping} from './redux/action'
import {fetchUser} from './redux/actions'



function App({fetchUser}) {
  // React.useEffect(()=> {
  //   fetchUser('Madan-444')
  // })
  return (
    <div className="App">
      this is just boiler plate
      <button onClick={()=> fetchUser('Madan-444')}>Fetch Data</button>
    </div>
  );
}

const mapDispatchToProps = dispatch=> {
  return {
    fetchUser: (username)=> dispatch(fetchUser(username)),
  }
} 

export default connect(null,mapDispatchToProps) (App);
