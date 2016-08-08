

 const project = [
 /*
    { 
      name: 'MyVinyl', 
      year: 'Ongoing',
      type: 'Web Application',
      desc: 'Curated soundcloud playlists with custom music player.',
      tech: ['HTML', 'CSS', 'React.js'],
      color: ['#747474', '#747474'],
      assets: {
        front: require('../assets/img/pmhc.png')
      }
    },
 */
    { 
      name: 'Portfolio', 
      year: '2016',
      type: 'Web Application',
      desc: 'The newest iteration of my personal portfolio using universal/isomorphic React.',
      tech: ['HTML', 'CSS', 'React.js', 'Node.js', 'MongoDB'],
      color: ['#292E36', '#21262E'],
      assets: {
        front: require('../assets/img/pmhc.png')
      }
    },
    { 
      name: 'XIVDPS', 
      year: '2015',
      type: 'Web Application',
      desc: 'Game data collection and analysis tool consisting of multiple components across different platforms.',
      tech: ['PHP', 'MySQL', 'Redis', 'C#', 'Node.js', 'Javascript'],
      color: ['#23252E', '#1D212C'],
      assets: {
        front:  require('../assets/img/1.jpg')
      }
    },
    { 
      name: 'Eterna', 
      year: '2014',
      type: 'Web Application',
      desc: 'Website for a small gaming community with a lightweight C# plugin and phpBB skin.',
      tech: ['PHP', 'MySQL', 'C#', 'Javascript', 'HTML', 'CSS'],
      color: ['#201B18', '#202020'],
      assets: {
        front:  require('../assets/img/eterna.jpg')
      }
    },
    { 
      name: 'Tank Wars', 
      year: '2013',
      type: 'Game',
      desc: '2D Top-down shooter written for an academic project on object-oriented programming and visualisation techniques.',
      tech: ['Processing'],
      color: ['#252629', '#222222'],
      assets: {
        front:  require('../assets/img/tankwars.png')
      }
    },
    { 
      name: 'Magister Crabs', 
      year: '2011',
      type: 'Microsite',
      desc: 'A simple brochure-style website for a business based in Richmond, BC.',
      tech: ['HTML', 'CSS'],
      color: ['#1E292F', '#1A2D33'],
      assets: {
        front:  require('../assets/img/magister.png')
      }
    },
 
  ];

const environment = {
  
}


export default (state = { project, environment }, action) => {

	switch(action.type) {
		case 'SAY_HELLO': 
			return { ...state, 'Test': action.msg}
		case 'SAY_HELLO2': 
			return { ...state, 'Test2': [...state.Test2, {id: state.Test2.length + 1, msg: ' | this is mapped | '}] }

		default: 
			return state;
	}

 
}