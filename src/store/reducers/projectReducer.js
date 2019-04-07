const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'Do nisi ut est veniam mollit ex consequat ea pariatur.' },
    { id: '2', title: 'collect all the stars', content: 'Aute dolor exercitation pariatur velit.' },
    { id: '3', title: 'egg hunt with yoshi', content: 'Anim magna consectetur voluptate eu tempor.' }
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
  case 'CREATE_PROJECT':
    console.log('created project', action.project);
    return state;
  case 'CREATE_PROJECT_ERROR':
    console.log('create project error', action.err);
    return state;
  default:
    return state
  }
}

export default projectReducer;