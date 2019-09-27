'use strict';

module.exports = {
  NODE_ENV: '"production"',

  // 单独提供给addresses页面的接口，golang实现的
  EXPLORE_URL: '"https://explorer.ont.io/"',
  TEST_EXPLORE_URL: '"https://polarisexplorer.ont.io/"',

  // 基础API接口
  API_URL: '"http://52.77.140.175:8686/v2"',
  TEST_API_URL: '"https://polarisexplorer.ont.io/v2"',

  // 提供节点统计信息计算查询的接口：
  DAPP_NODE_URL: '"https://dappnode1.ont.io:10334"',
  TEST_DAPP_NODE_URL: '"https://polaris1.ont.io:10334"',

  NET:true
};
