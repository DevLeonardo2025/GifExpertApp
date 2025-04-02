import React, { useState } from 'react'

export const AddCatrgory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('');

    const onSubmit= (e) => { 
        e.preventDefault();
        if (inputValue.trim().length <= 4) return;
        onNewCategory( inputValue.trim());
        setInputValue('');  
    }

    const onChangeInput = ({target}) => { 
        setInputValue(target.value);  
    }
    
  return (
    <form onSubmit={onSubmit}>
        <input 
            type='text' 
            placeholder='Busca tus Gifs'
            value={inputValue}
            onChange={onChangeInput}
        /> 
    </form>
  )
}
