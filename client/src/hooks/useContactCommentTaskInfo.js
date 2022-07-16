import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { contactForCommentAndTask } from "../redux/actions/commentActionFunctions";

export const useContactCommentTaskInfo = (id) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleContactId = () => {
    dispatch(contactForCommentAndTask(id));
    navigate("/comments");
  };

  return { handleContactId };
};
