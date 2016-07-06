

 const project = [
    { 
      id: 1,
      name: 'Flora', 
      year: 'Ongoing',
      type: 'Web Application',
      desc: 'Game data collection and analysis tool. A project consisting of multiple components across different platforms.',
      tech: ['HTML', 'CSS', 'React.js']
    },
    { 
      id: 2,
      name: 'PMHC', 
      year: '2016',
      type: 'Web Application',
      desc: 'The newest iteration of my personal portfolio using universal/isomorphic React.',
      tech: ['HTML', 'CSS', 'React.js', 'Node.js']
    },
    { 
      id: 3,
      name: 'XIVDPS.com', 
      year: '2015',
      type: 'Web Application',
      desc: 'Game data collection and analysis tool. A project consisting of multiple components across different platforms.',
      tech: ['PHP', 'MySQL', 'Redis', 'C#', 'Node.js, Javascript']
    },
    { 
      id: 4,
      name: 'Eterna', 
      year: '2014',
      type: 'Web Application',
      desc: 'Website for a small gaming community with a lightweight C# plugin and phpBB skin.',
      tech: ['PHP', 'MySQL', 'C#', 'Javascript']
    },
    { 
      id: 5,
      name: 'Tank Wars', 
      year: '2013',
      type: 'Game',
      desc: '2D Top-down shooter written for an academic project on object-oriented programming and visualisation techniques.',
      tech: ['Processing']
    },
    { 
      id: 6,
      name: 'Magister Crabs', 
      year: '2011',
      type: 'Microsite',
      desc: 'A digital brochure for a business based in Richmond, BC.',
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