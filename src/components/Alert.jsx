import React from 'react';

const Alert = (props) => {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        const cap = lower.charAt(0).toUpperCase() + lower.slice(1);
        return cap;
    }
  return (
   <div style={{height:"21px"}}>
      {
        props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         {capitalize(props.alert.type)}: <strong>{props.alert.msg}</strong>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       </div>
   </div>
      }
   </div>
  )
}

export default Alert;
