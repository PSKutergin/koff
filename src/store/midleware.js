export const apiTokenErrorMiddleware = (store) => (next) => async (action) => {
  if (action.type.endWith("rejected") && action.payload?.status === 401) {
    await store.dispatch(apiTokenError());
  }
  next(action);
};
