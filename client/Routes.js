import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import {me, meDZ} from './store'
import AllJumps from './components/AllJumps';
import SingleJump from './components/SingleJump'
import AddJump from './components/AddJump'
import CreateUser from './components/CreateUser';
import UserProfile from './components/UserProfile';
import Example from './components/Example';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    // this.props.loadInitialDataDZ()
  }

  render() {
    const {isLoggedIn, isUser, isDropzone, isAdmin} = this.props
    console.log(this.props)
    let user = (
      <div>
        <Switch>
          <Route path="/example" component={Example} />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={AllJumps} />
          <Route path="/login" component={Login} />
          <Route path="/add" component={AddJump} />
            {/* 1. Login/2. Logout/
            3. All jumps/4. single jump/5. edit jump/6. add jump/7. delete jump/
            8. add to load/9. remove from load/ 
            10. edit user info/11. delete account 
            12. add payment method */}
        </Switch>
      </div>
    )
    let dropzone = (
      <div>
        <Switch>
          <Route path="/example" component={Example} />
          <Route path="/login" component={Login} />
          {/* 13. All loads/14. single load /15. edit load/16. add load/17. delete load/
          18. edit dropzone info/ 19. delete account/
           */}
        </Switch>
      </div>
    )
    let admin = (
      <div>
        <Switch>
          <Route path="/example" component={Example} />
          <Route path="/login" component={Login} />
          {/* 20. all dropzones/ 21. all users/ 
           */}
        </Switch>
      </div>
    )

    let notLoggedOn = (
      <div>
        <Switch>
            {/* 22.sign up page for user/23. sign up as dropzone  */}
          <Route path="/login" component={Login} />
          
          <Route path="/signup" component={CreateUser} />
        </Switch>
      </div>
    )
    
    return isLoggedIn ? (
      <div>
        {isAdmin ? admin : (
          <div>
            {isDropzone ? dropzone : user}
          </div>)}
      </div>) : notLoggedOn
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    isAdmin: !!state.auth.isAdmin,
    isUser: !!state.auth.isUser,
    isDropzone: !!state.auth.isDropzone,
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      // isLoggedIn ? dispatch(me()) : dispatch(meDZ())
      dispatch(me())
      dispatch(meDZ())
     
    },
    // loadInitialDataDZ() {
    //   // isLoggedIn ? dispatch(me()) : dispatch(meDZ())
    //   dispatch(meDZ())
     
    // }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

// render() {
//   const { isLoggedIn, isAdmin, isUser, isDropzone } = this.props;

//   return (
//     <div>
//       {isLoggedIn ? (
//         <div>
//           {isAdmin ? (
//             <Switch>
//               {/* Routes if logged in and admin */}
//               <Route exact path="/" component={Home} />
//               <Route exact path="/admin" component={Admin} />
//               <Route exact path="/admin/users" component={AdminUsers} />
//               <Route exact path="/admin/products" component={AdminShop} />
//               {/* <Route exact path="/products" component={Shop} /> */}
//               <Route path="/products/add" component={CreateProduct} />
//               <Route
//                 exact
//                 path="/products/:id/update"
//                 component={UpdateProduct}
//               />
//               <Route path="/products/:id" component={SingleProduct} />
//               <Route exact path="/cart" component={Cart} />
//               <Route exact path="/profile" component={UserProfile} />
//               <Route path="/users/orders" component={OrderHistory} />
//               <Route path="/checkout" component={Checkout} />
//               <Route path="/orderSuccess" component={OrderSuccess} />
//               <Route path="*" component={NotFoundPage} status={404} />
//             </Switch>
//           ) : (

//             <Switch>
//                 {/* Routes if logged in but not admin */}
//                 <Route exact path="/" component={Home} />
//                 <Route exact path="/products" component={Shop} />
//                 <Route exact path="/products/:id" component={SingleProduct} />
//                 <Route exact path="/cart" component={Cart} />
//                 <Route exact path="/profile" component={UserProfile} />
//                 <Route path="/users/orders" component={OrderHistory} />
//                 <Route path="/checkout" component={Checkout} />
//                 <Route path="/orderSuccess" component={OrderSuccess} />
//                 <Route path="*" component={NotFoundPage} status={404} />
//               </Switch>
//             )}
//           </div>
//         ) : (
//           <Switch>
//             {/* Routes if not logged in */}
//             <Route exact path="/" component={Home} />
//             <Route path="/login" component={Login} />
//             <Route path="/signup" component={CreateUser} />
//             <Route exact path="/products" component={Shop} />
//             <Route exact path="/products/:id" component={SingleProduct} />
//             <Route exact path="/cart" component={Cart} />
//             <Route path="/checkout" component={Checkout} />
//             <Route path="/orderSuccess" component={OrderSuccess} />
//             <Route path="*" component={NotFoundPage} status={404} />
//           </Switch>
//         )}
//       </div>
//     );
//   }
// }