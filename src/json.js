export default
{
  team: {
    // Team
    id: 1,
    year: 0,
    competition_level: 'Club',
    gender_division: 'Mixed',
    players: [
    /* id to UUID */
      {
        1: {
  	      name: 'P1N',
  	      gender: 'M',
  	    },
        2: {
  	      name: 'P2N',
  	      gender: 'F',
  	    },
        3: {
  	      name: 'P3N',
  	      gender: 'M',
  	    },
        4: {
  	      name: 'P4N',
  	      gender: 'F',
  	    },
        5: {
  	      name: 'P5N',
  	      gender: 'M',
  	    },
        6: {
  	      name: 'P6N',
  	      gender: 'M',
  	    },
        7: {
  	      name: 'P7N',
  	      gender: 'F',
  	    },
      },
    ],
    positions: [
      {
        key: 1,
        uuid: 1,
        name: 'Handler',
      },
      {
        key: 2,
        uuid: 2,
        name: 'Cutter',
      },
    ],
    offenses: [
      {
      /* id to UUID */
        key: 1,
        id: 1,
        name: 'Ho Stack',
        positions: [
          {
            name: 'Handler',
            players: [], /* ??? */
          },
          {
            name: 'Handler',
          },
          {
            name: 'Handler',
          },
          {
            name: 'Handler',
          },
          {
            name: 'Cutter',
          },
          {
            name: 'Cutter',
          },
          {
            name: 'Cutter',
          },
        ],
      },
    ],
    defenses: [
      {
        key: 2,
        id: 2,
        name: 'Person D',
        positions: [
          {
            name: 'Handler',
            players: [], /* ??? */
          },
          {
            name: 'Handler',
          },
          {
            name: 'Handler',
          },
          {
            name: 'Cutter',
          },
          {
            name: 'Cutter',
          },
          {
            name: 'Cutter',
          },
          {
            name: 'Cutter',
          },
        ],
      },
    ],
  },

  game: {
    // Game
    id: 1,
    date: 0,
    time: 0,
    teamOneStart: true,
    tournament: {},
    rosters: [
      {
        1: {
  	      name: 'P1N',
  	      gender: 'M',
  	    },
      2: {
  	      name: 'P2N',
  	      gender: 'F',
  	    },
        3: {
  	      name: 'P3N',
  	      gender: 'M',
  	    },
        4: {
  	      name: 'P4N',
  	      gender: 'F',
  	    },
        5: {
  	      name: 'P5N',
  	      gender: 'M',
  	    },
        6: {
  	      name: 'P6N',
  	      gender: 'M',
  	    },
        7: {
  	      name: 'P7N',
  	      gender: 'F',
  	    },
      },
      // Other team
      {},
    ],
    lines: [
      {
  
      },
    ],
  },
};
