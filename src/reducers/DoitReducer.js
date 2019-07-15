import uuid from 'uuid';

export const DoitReducer = (state, action) => {
  switch(action.type){
    case 'ADD':
      return [...state, { title: action.doit.title, coment: action.doit.coment, id: uuid() }]
    case 'REMOVE':
      return state.filter(doit => doit.id !== action.id)
    default:
      return state    
  }
}