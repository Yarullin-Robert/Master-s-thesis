import React from "react";

const CallbackTest = (props) => {
    
  let AddElement = React.createRef()    
  
  return (

    <div className='callback'>

      <div className='callback__new'>
          <input onChange={() => props.UpdateTestElement(AddElement.current.value)} ref={AddElement} value={props.Page.NewValue} />
          <input onClick={() => props.AddTestElement()} type='button' value='create new' />
      </div>

      <div className='callback__existed'>
        {props.Page.CallbackTest.map((Item) => (
          <p id={Item.id} key={Item.id}>
            {Item.id} - {Item.title}
          </p>
        ))}
      </div>

    </div>

  );
};

export default CallbackTest;
