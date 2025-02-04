module.exports = {
  language: {
    zhName: '简体中文',
    enName: 'English',
    zh: 'ZH',
    en: 'EN',
  },
  navbar: {
    flag:"zh",
    blockHeight: '区块高度',
    wallet: '钱包',
    blocks: '区块列表',
    addrs: '地址列表',
    tarns: '交易列表',
    ontIds: 'ONT ID 列表',
    top: {
      blockchain: '区块链',
      contracts: '合约',
      tokens: '通证',
      ontId: 'ONT ID',
      apis: 'API文档',
      mainNet: '主网',
      testNet: '测试网',
      nodes: '节点',
      stake: '质押授权',
      nodeMap: '节点地图',
      blocks: '区块',
      txns: '交易',
      accounts: '账户',
      oep4: 'OEP-4 概述',
      oep5: 'OEP-5 概述',
      oep8: 'OEP-8 概述',
      statistics: '统计',
      tool: '工具',
      apiDocUrl:"https://dev-docs.ont.io/#/docs-cn/explorer/overview"
    }
  },
  all: {
    more: '>>',
    return: '返回',
    block: '区块',
    hash: '哈希',
    status: '状态',
    time: '时间',
    height: '高度',
    byte: '字节',
    num: '数量',
    fee: '费用',
    amount: '总额',
    address: '地址',
    ontId: 'ONT ID',
    content: '内容',
    confirmed: '已确认',
    failed: '失败',
    description: '描述信息',
    token: 'Token',
    txn: '交易',
    txns: '交易',
    pk:"公钥"
  },
  ontPagination: {
    total: '共有 ',
    data: ' 条数据'
  },
  searchInput: {
    search: '查询',
    placeholder: ' ONT ID，区块高度，交易哈希，合约哈希，资产地址',
    slogan: '区块链浏览器 & 可信验证器'
  },
  runStatus: {
    name: '全网运行状态',
    RunningTime: '全网运行时间: ',
    CurrentHeight: '当前区块高度: ',
    BlockInterval: '平均出块时间',
    TxnCount: '当前交易笔数：',
    NodeCount: '共识节点数量: ',
    addressCount: '注册地址数量',
    second: '秒',
    address: "地址数",
    ontid: "ONT ID 总数："
  },
  ontIdList: {
    name: '最新 ONT ID 事件'
  },
  ontIdDetail: {
    nickname: 'ONT ID 详情',
    name: 'ONT ID: ',
    msgName: 'ONT ID 事件记录',
    TxnId: '交易 id',
    Height: '区块高度',
    TxnType: '交易类型',
    TxnTime: '区块时间',
    Description: '操作描述',
    events: '在这个 ONT ID 上的事件',
    owner: '所属人',
    failed: '没有找到数据。'
  },
  blockList: {
    name: '最新区块',
    Height: '区块高度',
    TxnNum: '交易',
    bookkeeper: '记账人',
    BlockSize: '大小',
    BlockTime: '出块时间',
    bookkeeperCount: '记账人'
  },
  addressList: {
    rank: '排名',
    name: '地址',
    nickname: '持仓排名',
    balance: '余额',
    percent: '占比'
  },
  addressDetail: {
    name: '地址详情',
    address: '地址： ',
    ontBalance: 'ONT： ',
    ongBalance: 'ONG： ',
    claimable: '可提取的 ONG： ',
    unbound: '未解绑的 ONG： ',
    txOnAddr: '笔交易在这个地址上：',
    txns: '交易列表:',
    oep8Assets: 'OEP-8 资产：',
    oep4Assets: 'OEP-4 资产：',
    oep5Assets: 'OEP-5 资产：',
    oepOtherAssets: '其他的 OEP 资产:'
  },
  assetName: {
    ont: 'ONT',
    ong: 'ONG',
    pumpkin01: '红南瓜',
    pumpkin02: '橘南瓜',
    pumpkin03: '黄南瓜',
    pumpkin04: '绿南瓜',
    pumpkin05: '靛南瓜',
    pumpkin06: '蓝南瓜',
    pumpkin07: '紫南瓜',
    pumpkin08: '金南瓜'
  },
  blockDetail: {
    nickname: '区块详情',
    name: '区块高度：',
    BlockSize: '区块大小：',
    BlockTime: '生成时间：',
    keeper: '记账人地址：',
    hash: '哈希值：',
    TxnNum: '区块内交易笔数：',
    Hash: '当前区块哈希：',
    PrevBlock: '上一个区块：',
    LastBlock: '最后一个区块：',
    NextBlock: '下一个区块：',
    merkle: 'Merkle 根：',
    Consensus: '共识数据：',
    txOnBlock: '条交易记录在这个区块：'
  },
  transList: {
    name: '最新交易'
  },
  txDetail: {
    name: '交易详情',
    txHash: '哈希：',
    time: '时间：',
    type: '类型： ',
    deploySC: 'Deploy Smart Contract',
    sc: 'Invoke Smart Contract',
    height: '高度： ',
    status: '状态： ',
    fee: '费用： ',
    issuer: '发行人  ONT ID',
    detial:'事件：',
    open:'详情',
    close:'收起'
  },
  claimDetail: {
    name: '认证详情'
  },
  addressMsg: {
    name: '地址信息',
    address: '地址',
    latestDealTime: '最新交易时间',
    dealNumber: '交易次数',
    addressGenerationTime: '地址生成时间',
    balance: '余额'
  },
  page: {
    First: "首页",
    PreviousPage: "上一页",
    NextPage: "下一页",
    Last: "末页"
  },
  nodes: {
    stakeListTit: '质押授权',
    rank: '排名',
    name: '名称',
    proportion: '下一轮节点/用户的奖励比例',
    reward: '奖励',
    stake: '质押',
    process: '进度',
    toNextRound: '到下一轮： ',
    blocks: '块',
    detailTit: '节点详情',
    nodeName: '节点名称： ',
    ontId: 'ONT ID：',
    address: '地址：',
    rewardRate: '奖励比例：',
    rank2: '排名：',
    stake2: '质押：',
    stakeOWallet: '在 Owallet 上质押 →',
    process2: '进度：',
    ip: 'IP地址：',
    email: '邮箱：',
    intro: '介绍：',
    vision: '愿景：',
    website: '官网：',
    guideTxt: '要参与质押授权，请找到分步指南：',
    here: '点击这里。',
    tooltipTit: '这是在下一轮共识中，节点选择与他们授权质押的用户，共享的奖励部分。',
    processTip: '正在计算实时数据中。 请等待一会： '
  },
  contracts: {
    list: {
      name: '合约',
      tit: {
        currently: '当前共有',
        contracts: '条合约',
        checkIn: '申请录入'
      },
      tab: {
        hash: '合约哈希',
        name: '合约名称',
        time: '创建时间',
        txns: '交易数量',
        desc: '合约描述',
        logo: 'Logo'
      }
    },
    detail: {
      name: '合约详情',
      hash: '哈希：',
      overview: '合约概览',
      desc: '合约描述',
      txOn: '条交易记录在这个合约：',
      creator: '创建者：',
      createdTime: '创建时间：',
      contractInfo: '信息',
      logo: 'Logo',
      ontFlow: 'ONT 流水总量：',
      ongFlow: 'ONG 流水总量：',
      amount: '流水总量：'
    }
  },
  tokens: {
    list: {
      name: '通证列表',
      tab: {
        hash: '合约哈希',
        name: '合约名称',
        time: '创建时间',
        txns: '交易数量',
        desc: '合约描述',
        logo: 'Logo',
        symbol: '通证',
        creator: '创建者',
        totalSupply: '总量',
        decimals: '精度',
        addressCount: '持币地址'
      }
    },
    detail: {
      name: '通证详情',
      hash: '哈希：',
      overview: '合约概览',
      desc: '合约描述',
      txOn: '条交易记录在这个合约：',
      creator: '创建者：',
      createdTime: '创建时间：',
      contractInfo: '信息',
      logo: 'Logo',
      ontFlow: 'ONT 流水总量：',
      ongFlow: 'ONG 流水总量：',
      amount: '流水总量：',
      txn: '交易总数',
      volume: '流水总量',
      code: '字节代码',
      abi: 'ABI',
      totalSupply: '发行总量：',
      decimals: '精度位数：',
      statistic: '数据统计',
      tokenLbl: '通证标签',
      tokenImg: '通证图片',
      tip: '注意：该项为累积统计，可能有最多10分钟的统计差异。'
    }
  },
  statistics: {
    name: '历史统计',
    day: '天',
    newAddressLbl: '新增地址数',
    activeAddressLbl: '活动地址数',
    blockLbl: '新增区块数',
    newOntIdLbl: '新增 ONT ID 数',
    activeOntIdLbl: '活动 ONT ID 数',
    sumAddressLbl: '地址增长',
    sumOntIdLbl: 'ONT ID 增长',
    txnLbl: '交易数',
    ontLbl: 'ONT 交易总额',
    ongLbl: 'ONG 交易总额'
  },
  footer:{
    flag:"zh",
    Development: '开发',
    DeveloperCenter: '开发者中心',
    dApp:"dApp 信息",
    Tutorials:'教程',
    Documentation:'文档',
    Bounty:'悬赏',
    SmartX:'SmartX',
    Github:'Github',
    Cooperation:'合作',
    CooperateWithOntology:'与本体合作',
    TrustEcosystem:'信任生态',
    Nodes:'节点',
    About:'关于',
    Press:'新闻',
    TechNews:'本体视点',
    Team:'团队',
    AboutOntology:'关于本体',
    WhitePaper:'白皮书',
    Explorer:'区块链浏览器',
    dApps:'dApps',
    dAppsList:'dApps 列表',
    SubmitAdApp:'提交 dApp',
  },
  error:{
    format:"对不起，无法找到您输入的搜索内容。",
    copied:"已复制!",
    pagesize:"pageSize limit 20",
    searching:"查询中"
  }
};
