import reduce, {
  initialState,
  getLifterParams,
  getRanking,
} from './reducer';
import * as types from './actionTypes';

describe('Events Reducer Unit Tests', () => {
  describe('#reduce', () => {
    describe('when initial state has not been changed', () => {
      it('returns initial state by default', () => {
        const actual = reduce().toJS();
        const expected = initialState.toJS();

        expect(actual).toEqual(expected);
      });
    });

    describe(types.LIFTER_DATA_ADDED, () => {
      it('sets new data to state', () => {
        const key = 'eventType';
        const newData = { [key]: 'Long Cycle' };
        const action = { type: types.LIFTER_DATA_ADDED, data: newData };

        const actual = reduce(initialState, action).getIn(['lifter', key]);
        const expected = newData[key];

        expect(actual).toEqual(expected);
      });

      it('adds new data when some data is already set', () => {
        const data = { eventType: 'Long Cycle' };
        let action = { type: types.LIFTER_DATA_ADDED, data };
        const state = reduce(initialState, action);
        const key = 'gender';
        const newData = { [key]: 'women' };
        action.data = newData;

        const actual = reduce(state, action).getIn(['lifter', key]);
        const expected = newData[key];

        expect(actual).toEqual(expected);
      });

      it('persists old data when new is added', () => {
        const key = 'eventType';
        const data = { [key]: 'Long Cycle' };
        let action = { type: types.LIFTER_DATA_ADDED, data };
        const state = reduce(initialState, action);
        action.data = { 'gender': 'women' };

        const foo = reduce(state, action);
        const actual = foo.getIn(['lifter', key]);
        const expected = data[key];

        expect(actual).toEqual(expected);
      });
    });

    describe(types.RANKING_RETRIEVED, () => {
      it('sets ranking to state', () => {
        const ranking = 'MSIC';
        const action = { type: types.RANKING_RETRIEVED, ranking };

        const actual = reduce(initialState, action).getIn(['lifter', 'ranking']);
        const expected = ranking;

        expect(actual).toEqual(expected);
      });
    });
  });
});