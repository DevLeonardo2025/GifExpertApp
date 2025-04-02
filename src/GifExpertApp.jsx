import React, { useState } from 'react'
import { AddCatrgory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch man']);

    const onAddCategory = (newCategory) => { 
        if( categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

  return (
    <>
        <h1>GifExperApp</h1>
        {/* agregamos el input para introducir categorias */}
        <AddCatrgory 
            onNewCategory={onAddCategory}
        />
       {/* hacemos un map */}
        {categories.map((category) => 
            <GifGrid 
                key={category}
                category={category} // le enviamos el 'One punch man'
            />
        )}
    </>
  )
}
