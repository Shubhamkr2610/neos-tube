import { createContext, useContext } from "react";

const likeContext = createContext()

const likeProvider = ({children})=>{


    return(
        <likeContext.Provider>
            {children}
        </likeContext.Provider>
    )


    
}

const useLike= ()=>useContext(likeContext)
export {useLike, likeProvider}