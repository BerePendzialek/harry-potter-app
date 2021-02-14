import createElement from '../../lib/createElement'
import './CreateForm.css'

export default function CreateForm() {
  const form = createElement('form', {
    className: 'form',
    innerHTML: `
<h2>Fill up the fields below to create your own Harry Potter Character!</h2>
<label>
 Name:
 <input type='text' name= "name" placeholder= 'Your name...'>
 </label>
 <label>
 Last name:
 <input type='text' name= "lastname" placeholder= 'Your last name...'>
 </label>
 <p>Choose your house:</p>
 
 <label>
 Gryffindor:
   <input type="radio" name="house" value= 'Gryffindor'
          >
  </label>
 
 <label>
 Slytherin:
   <input type="radio" name="house" value= 'Slytherin'
          >
  </label>
  
  
 <label>
 Hufflepuff:
   <input type="radio" name="house" value= 'Hufflepuff'
          >
  </label>
  
  
 <label>
 Ravenclaw:
   <input type="radio" name="house" value= 'Ravenclaw'
          >
  </label>
 
 <button>Create student!</button>
`,
  })

  return form
}
