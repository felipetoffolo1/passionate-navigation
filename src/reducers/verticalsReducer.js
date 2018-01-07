import verticals from "../data/verticals.json";

export default (
  state = { all: verticals  },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
