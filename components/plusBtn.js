import { Component } from 'react'
class PlusBtn extends Component {
    state = {  }
    render() { 
        return ( 
            <svg width="50" height="50" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="31.5" cy="31.5" r="31" stroke="black"/>
            <path d="M15.5 31.5H47.5H31.5V15.5V47.5" stroke="black"/>
            </svg>
         );
    }
}
 

export default PlusBtn;