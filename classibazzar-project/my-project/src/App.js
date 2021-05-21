import React from 'react'
import {connect} from 'react-redux'
import {ping} from './redux/action'
// import {fetchUser} from './redux/actions'



function App({fetchUser}) {
  // React.useEffect(()=> {
  //   fetchUser('Madan-444')
  // })
  return (
    <div className="App">
      this is just boiler plate
      <button onClick={()=> ping())}>Fetch Data</button>
    </div>
  );
}

const mapDispatchToProps = dispatch=> {
  return {
    ping: (username)=> dispatch(ping()),
  }
} 

export default connect(null,mapDispatchToProps) (App);
