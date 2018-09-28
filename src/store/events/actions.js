import * as types from './actionTypes';
import rankingService from '../../services/rankingService';
import * as eventSelectors from './reducer';

export function setLifterData(field, value) {
  return (dispatch, getState) => {
    const data = {
      [field]: value,
    };
    dispatch({ type: types.LIFTER_DATA_ADDED, data });
  };
}

export function getRanking() {
  return async (dispatch, getState) => {
    try {
      const params = eventSelectors.getLifterParams(getState()).toJS();

      dispatch({ type: types.RANKING_REQUEST_STARTED });
      const ranking = await rankingService.getRanking(params);

      if (ranking !== null) {
        dispatch({ type: types.RANKING_RETRIEVED, ranking });
      } else {
        dispatch({ type: types.RANKING_NOT_FOUND });
      }
    } catch (e) {
      dispatch({ type: types.RANKING_RETRIEVE_ERROR });
    }
  };
}