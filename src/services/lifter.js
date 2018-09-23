import _ from 'lodash';
import uuid from 'uuid/v4';

class LifterService {
  async getLifters() {
    return [
      {
        id: uuid(),
        about: {
          firstName: 'John',
          lastName: 'Smith',
          weight: '103kg',
          weightClass: 'Heavyweight',
          gender: 'male',
        },
        events: [
          {
            id: uuid(),
            name: 'Long Cycle',
            duration: '5min',
            kettlebellWeight: '24kg',
            results: undefined,
          }
        ]
      },
      {
        id: uuid(),
        about: {
          firstName: 'Judy',
          lastName: 'Sullivan',
          weight: '62kg',
          weightClass: 'Flyweight',
          gender: 'female',
        },
        events: [
          {
            id: uuid(),
            name: 'Long Cycle',
            duration: '5min',
            kettlebellWeight: '20kg',
            results: undefined,
          }
        ]
      },
      {
        id: uuid(),
        about: {
          firstName: 'Kristy',
          lastName: 'Johnson',
          weight: '71kg',
          weightClass: 'Lightweight',
          gender: 'female',
        },
        events: [
          {
            id: 'longCycle5min', // will be replaced with a persisted uuid
            name: 'Snatch',
            duration: '5min',
            kettlebellWeight: '20kg',
            results: undefined,
          }
        ]
      }
    ];
  }
}

export default new LifterService();
