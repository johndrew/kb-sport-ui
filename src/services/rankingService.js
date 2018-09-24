const tmpGetRanking = async ({ gender } = {}) => {
  switch (gender) {
    case 'women':
      return 'MSIC';
    case 'men':
      return 'CMS';
    default:
      return 'none';
  }
};

class RankingService {
  async getRanking(params) {
    console.log('------------------------------------');
    console.log(params);
    console.log('------------------------------------');
    return tmpGetRanking(params);
  }
}

export default new RankingService();
