export const AppActions = dispatch => ({
      loginsAction: async data => {
          dispatch({ type: 'LOGIN', data });
      },
  });