//create state with async actions
// functions that return objects.

export const ADD_REPOSITORY = 'ADD_REPOSITORY';
export const addRepository = repository => ({
    type: ADD_REPOSITORY,
    repository
});
