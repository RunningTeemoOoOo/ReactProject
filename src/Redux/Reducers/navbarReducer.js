const navbarReducers = (prevState = true, action) => {
  let {type, payload} = action

  switch(type) {
      case "hideNavbar": 
          return payload;
      case "showNavbar":
          return payload;
      default:
          return prevState;
  }
}

export default navbarReducers