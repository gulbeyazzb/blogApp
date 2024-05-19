import createDataContext from "./CreateDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id.id ? action.payload : blogPost;
      });

    case "remove_blogPost":
      return state.filter((blogPost) => {
        return blogPost.id !== action.payload;
      });

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content) => {
    console.log(id);

    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
  };
};

const removeBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "remove_blogPost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, removeBlogPost, editBlogPost },
  []
);
