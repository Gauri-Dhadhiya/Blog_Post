const initialState = {
  blogDetails: [
    {
      id: 1,
      title: "React",
      catagories: "this is the best react post",
      content:
        "React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.",
    },
    {
      id: 2,
      title: "Redux",
      catagories: "this is best redux post",
      content:
        "Getting Started with Redux Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",
    },
  ],
};
export function Reducer(state = initialState, action) {
  switch (action.type) {
    case "Create_Blog":
      const newState = [...state.blogDetails, action.data.value];
      return { blogDetails: newState };
    case "Read_Blog":
      return state;
    case "Update_Blog":
      const updateNewArrayData = [...state.blogDetails];
      const updatedValue = updateNewArrayData.map((data) =>
        data.id === Number(action.data.data.id)
          ? { ...data, ...action.data.data }
          : data
      );
      return { blogDetails: updatedValue };
    case "Delete_Blog":
      const singleDeleteData = state.blogDetails.filter(
        (data) => data.id !== Number(action.id.id)
      );
      return { blogDetails: singleDeleteData };
    default:
      return state;
  }
}
