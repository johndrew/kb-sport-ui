const qaLink = 'https://03zvdlhqz0.execute-api.us-west-2.amazonaws.com/dev/getRanking';

class RankingService {
  createOptions(params) {
    return {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(params),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    };
  }

  async getRanking(params) {
    const options = this.createOptions(params);
    const url = qaLink;

    try {
      console.info('REQUEST', url, params);
      const result = await fetch(url, options);
      console.info('RESPONSE: Got result');

      if (result.status === 404) {
        console.warn('No ranking found');
        return null;
      }

      const { ranking } = await result.json();
      console.log('Found ranking', ranking);

      return ranking;
    } catch (e) {
      console.error('Could not get ranking', e);
      throw new Error('Could not get ranking');
    }
  }
}

export default new RankingService();
