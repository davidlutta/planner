const initialState = {
    projects: [
        {id: '1', title: 'Buy guns', content: 'I Will go buy a bunch of powerful weapons'},
        {id: '2', title: 'Sell guns', content: 'I will sell the weapons to the highest bidders'},
        {id: '3', title: 'Make 1 billion dollars', content: 'I will make 1 billion Dollars'},
        {id: '4', title: 'Live Life', content: 'I will enjoy the money'}
    ]
};

const ProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Created Project');
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('CREATE PROJECT ERROR: ', action.err);
            return state;
        default:
            return state;
    }
};
export default ProjectReducer;
