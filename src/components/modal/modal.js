import React from 'react';
import Modal from 'react-modal';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import emailjs from 'emailjs-com';
import classes from './modal.module.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '20px',
    backgroundColor: 'white'
  }
};

Modal.setAppElement('#root')


const ModalView = (props) => {

  const [modalIsOpen,setIsOpen] = React.useState(true);

  const submitMail = (e) => {
    e.preventDefault();

       emailjs.sendForm('gmail','template_jxk6ioj', e.target, 'user_ynNZxMuwAewsmAq1Up9BB')
         .then((result) => {
              setIsOpen(false);
         }, (error) => {
             console.log(error.text);
         });
         e.target.reset();
         props.setOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
    props.setOpen(false);
  }

  return(
    <Modal
         isOpen={modalIsOpen}
         style={customStyles}
         contentLabel="Example Modal"
         transparent={true}
       >


         <form className={classes.form} onSubmit={submitMail}>
           <HighlightOffIcon onClick={closeModal} className={classes.close} fontSize = "large"/>
           <h4>Contact Us</h4>
         <input type="text" name="name"  required placeholder="Name"/>
         <input type="text" name="email" required placeholder="Email"/>
         <textarea name="message" className="message" placeholder="Message"/>
         <input type="submit" value="Send" style={{width: "25%",marginLeft: "auto", marginRight: "auto"}}/>
         </form>
       </Modal>
  )
}

export default ModalView;
