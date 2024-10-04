import { useSelector } from "react-redux";
import { deletePost } from "../../redux/profile-reducer";
import { useDispatch } from "react-redux";

const Test = ({text1,text2}:any) => {

    const profilePage = useSelector((state:any) => state.profilePage); //insted mstp

    const dispatch = useDispatch() //instead mdtp

    const handleClick = () => {
          dispatch(deletePost(1))
    }

    return (
        <>
        <p onClick={handleClick}>fsd</p>
        </>
    )
}

export default Test;


