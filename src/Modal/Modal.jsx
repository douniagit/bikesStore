import React from 'react';
import './modal.css';
import ModalContent1 from "./ModalContent1.jsx";

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.closeClick=this.closeClick.bind(this);
  }
  // componentWillMount(){
  //   this.setState({priceTTC:17});
  // }

    closeClick(){
      this.props.openModal(this.props.bool);
    }



  render(){
    //ce que l'on met dans render va apparaitre dans l'application apres

    return(
      <div>
        <div className="modal" onClick={this.closeClick}>
          <div className="overlay">

            <ModalContent1/>
            <button onClick={this.closeClick}>X</button>

          </div>
        </div>
      </div>
    );
  }
}

export default Modal;