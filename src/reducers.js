const initialState = {
    user: {
      name: 'John',
      country: 'India',
      gender: 'Male',
      pan: '9746WEEE56435',
      education: {
        tenth: {
          instituteName: 'Kakatiya Concept school',
          cgpa: '10',
        },
        higherSecondary: {
          instituteName: 'Narayna Junior College',
          cgpa: '9.6',
        },
        graduation: {
          instituteName: 'Vignan Bharathi',
          cgpa: '7.6',
        },
      },
      certifications: [
        'Python'
      ],
    },
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      case 'ADD_CERTIFICATION':
        return {
          ...state,
          user: {
            ...state.user,
            certifications: [...state.user.certifications, action.payload],
          },
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  