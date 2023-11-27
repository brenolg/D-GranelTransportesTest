import Button   from "./NewUserButtonStyles";
import { useContext } from "react";
import  Context  from "../context/Context";

export default function NewUserButton() {
  const { setShowNewUserPop} = useContext(Context);

  const handleNewUserPop = () => {
    setShowNewUserPop(true);
  }
  
  return (
    <Button onClick={ handleNewUserPop} >
      Novo usuário
    </Button>
  );
}
