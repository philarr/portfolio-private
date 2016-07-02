

 const project = [
    { 
      id: 1,
      name: 'Flora', 
      year: 'Ongoing',
      type: 'Web Application',
      tech: ['HTML', 'CSS', 'React.js']
    },
    { 
      id: 2,
      name: 'PMHC', 
      year: '2016',
      type: 'Web Application',
      tech: ['HTML', 'CSS', 'React.js', 'Node.js']
    },
    { 
      id: 3,
      name: 'XIVDPS.com', 
      year: '2015',
      type: 'Web Application',
      tech: ['PHP', 'MySQL', 'Redis', 'C#', 'Node.js, Javascript']
    },
    { 
      id: 4,
      name: 'Eterna', 
      year: '2014',
      type: 'Web Application',
      tech: ['PHP', 'MySQL', 'C#', 'Javascript']
    },
    { 
      id: 5,
      name: 'Tank Wars', 
      year: '2013',
      type: 'Game',
      tech: ['Processing']
    },
    { 
      id: 6,
      name: 'Magister Crabs', 
      year: '2011',
      type: 'Microsite',
      tech: ['HTML', 'CSS']
    },
 
  ];


export default (state = { project }, action) => {

	switch(action.type) {
		case 'SAY_HELLO': 
			return { ...state, 'Test': action.msg}
		case 'SAY_HELLO2': 
			return { ...state, 'Test2': [...state.Test2, {id: state.Test2.length + 1, msg: ' | this is mapped | '}] }

		default: 
			return state;
	}

 
}