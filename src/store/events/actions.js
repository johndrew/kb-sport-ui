import * as types from './actionTypes';
import rankingService from '../../services/rankingService';

export function getRanking({
  eventType = 'tmp',
  duration = 'tmp',
  repetitions = 'tmp',
  gender,
  weightCategory = 'tmp',
  kettlebellWeight = 'tmp',
} = {}) {
  return async (dispatch, getState) => {
    try {
      const params = {
        eventType,
        duration,
        repetitions,
        gender,
        weightCategory,
        kettlebellWeight,
      };
      const ranking = await rankingService.getRanking(params);

      dispatch({ type: types.RANKING_RETRIEVED, ranking });
    } catch (e) {
      throw new Error('Could not get ranking');
    }
  };
}