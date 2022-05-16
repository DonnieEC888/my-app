import React, {Component} from 'react';


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }
    componentDidCatch(error) {
       this.setState({error: true})
      }
      render() {
          const {error} = this.state;
        if(error) {
            return <h1>An error has occured. Please try again later.</h1>
        }
         return this.props.children
        
      }

}
export default ErrorBoundary