export const defaultState = {
      login: false,
  };
  export const reducers = (prevState, action) => {
      switch (action.type) {
          case 'LOGIN':
              return {
                  ...prevState,
                  login: action?.data,
              };
      }
  };