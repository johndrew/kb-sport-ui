import * as types from './actionTypes';
import rankingService from '../../services/rankingService';
import * as eventSelectors from './reducer';

export function setLifterData(field, value) {
  return (dispatch, getState) => {
    const data = {
      [field]: value,
    };
    console.log('------------------------------------');
    console.log(data);
    console.log('------------------------------------');

    dispatch({ type: types.LIFTER_DATA_ADDED, data });
  };
}

export function getRanking() {
  return async (dispatch, getState) => {
    try {
      const params = eventSelectors.getLifterParams(getState()).toJS();
      const ranking = await rankingService.getRanking(params);

      dispatch({ type: types.RANKING_RETRIEVED, ranking });
    } catch (e) {
      throw new Error('Could not get ranking');
    }
  };
}