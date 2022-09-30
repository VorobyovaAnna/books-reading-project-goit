export const getStatistics = ({ statistics }) => statistics;
export const getStatisticsById = (state, statisticId) =>
  state.statistics.find(({ _id }) => _id === statisticId);
