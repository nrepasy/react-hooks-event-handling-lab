import React from 'react';

    function EyesOnMe(){
        function handleFocus(event){
                console.log("Good!")
        }
    function handleBlur(event){
            console.log("Hey! Eyes on me!")
    }


return(
<button onFocus={handleFocus} onBlur={handleBlur}>Eyes on Me</button>

    )   
}



export default EyesOnMe;