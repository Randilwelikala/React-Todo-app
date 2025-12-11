import {useState} from 'react';

function Modal(){
    const [isOpen,setIsOpen] = useState(false);

    return(
        <div>
            <button onClick={()=>setIsOpen(true)}>Open Model</button>
            {
                isOpen && (
                    <div>
                        <div>
                            <h2>hello from Modal</h2>
                            <p>This isa modal component</p>

                            <button onClick={()=>setIsOpen(false)}>Close</button>
                        </div>
                    </div>
                )
            }
            
        </div>        
    );
}

export default Modal;
