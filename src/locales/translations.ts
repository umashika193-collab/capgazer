export const translations = {
  ja: {
    brandTitle: 'CapGazer',
    brandSub: '資本ゲイザー — 世の中のお金の流れを眺める',
    tagline: 'CAPGAZER // 世界機関投資家マネーフロー ＆ 政策観測所',
    headerDesc: '世界の巨大資本（BlackRock等）の保有株式、投資方針、および産業現場への波及を米SEC一次開示から淡々と眺めるデータプラットフォーム',
    navFlow: '[ 構造プロセス図 ]',
    navAbout: '[ データ基準 ]',
    
    // Main Tabs
    tabInflows: '[ 01. 資金流入上位セクター ]',
    tabMatrix: '[ 02. 主要運用会社 ＆ 保有マトリクス ]',
    tabFeed: '[ 03. 政策 ＆ 産業インパクト・フィード ]',
    tabTrends: '[ 04. なんか最近よく見るな～ ]',

    // Tab 1: Inflows
    inflowsTitle: '現在最も資金が流入している5大セクター（2026年8月 リアルタイムマネーフロー）',
    inflowsDesc: '米SEC Form 13F / ETF資金移動データに基づく、機関投資家マネー集中セクターのリアルタイム観測',
    inflowAmountLabel: '四半期流入推定額',
    inflowGrowthLabel: '前年比成長率 (YoY)',
    shareRatioLabel: '資金集中度シェア',
    topTargetStocksLabel: '主要組み入れ銘柄',
    dominantBuyersLabel: '主な買い手（主要ファンド）',
    drivingForceLabel: '資金流入の背景・構造的要因',

    // Tab 2: Shareholder Matrix
    matrixTitle: '世界トップ10 資産運用会社 ＆ 保有株式マトリクス（2026年最新公開報告準拠）',
    matrixDesc: '米SEC Form 13F / 年次スチュワードシップ報告書に基づく、巨大資本の運用資産規模（AUM）・主要保有株式・コア要求方針',
    rankLabel: '順位',
    managerNameLabel: '運用会社名',
    hqLabel: '拠点・SEC CIK',
    aumLabel: '運用資産残高 (AUM)',
    typeLabel: '投資スタイル',
    majorHoldingsLabel: '主要保有株式（抜粋）',
    coreDemandsLabel: '主要スチュワードシップ方針（コア要求）',
    votingStyleLabel: '議決権行使の特徴',
    recentShiftLabel: '最新の方針転換',

    // Tab 3: Feed
    feedTitle: 'アジェンダ別 政策分析 ＆ 産業インパクト・フィード',
    feedDesc: '米SEC EDGAR公式開示（Form 13F/13G/8-K/10-K/20-F/DEF 14A）から直接抽出・検証された政策とマネーフローの連動記録',
    feedFilterAll: '全セクター',
    impactScoreLabel: '影響度スコア',
    openDetail: '詳細・一次情報リンクを表示',
    threeBlocks: '3大分析ブロック',
    primaryPolicy: '01. 政策・規制・開示の要点',
    capitalIncentive: '02. 資本・金融的インセンティブ（なぜ資金が動くのか）',
    industryImpact: '03. 産業現場・実体経済への具体的影響',
    sourceLabel: '一次情報ソース',
    tagsLabel: '関連タグ',
    involvedLabel: '関連主要企業',
    searchPlaceholder: '銘柄コード、企業名、日常の疑問（例: マイケル、マンジャロ、YouTube、テレビ）で検索...',
    quickInquiriesLabel: '💡 日常の疑問・トレンドから資本を調べる:',
    clearSearch: 'クリア',

    // Tab 4: Trends
    trendsTitle: 'なんか最近よく見るな～（トレンドの背景 ＆ 資本リサーチ）',
    trendsDesc: 'YouTubeやテレビで「なんか最近よく見るな～」と思うトレンド。なぜ今これが話題なのか、背後で動いている企業や大型投資・SEC公式開示をAIが客観的にリサーチ（直近30日保持・毎朝07:00自動更新）',

    // Modal Common
    closeModal: '閉じる',
    viewOriginalFiling: 'SEC公式一次開示原本を閲覧する ↗',

    // Footer
    footerNote: 'CapGazer (資本ゲイザー) — 米国SEC EDGAR公的開示書類および機関投資家公式報告書に基づく客観的観測データ。投資助言ではありません。',
    lastUpdated: '最終更新: 2026年8月27日 (日次自動同期)',
  },
  en: {
    brandTitle: 'CapGazer',
    brandSub: 'Observing Global Capital Flows & Power Structures',
    tagline: 'CAPGAZER // INSTITUTIONAL MONEY FLOW & POLICY OBSERVATORY',
    headerDesc: 'Objective observatory tracking global megacap asset managers (BlackRock, Vanguard, etc.), portfolio holdings, proxy guidelines, and their real-world industrial impact directly from US SEC EDGAR primary filings.',
    navFlow: '[ Process Flow ]',
    navAbout: '[ Data Standards ]',
    
    // Main Tabs
    tabInflows: '[ 01. Top Capital Inflow Sectors ]',
    tabMatrix: '[ 02. Top 10 Asset Managers & Holdings ]',
    tabFeed: '[ 03. Policy & Industrial Impact Feed ]',
    tabTrends: '[ 04. Trending Now: Why Is It Everywhere? ]',

    // Tab 1: Inflows
    inflowsTitle: 'Top 5 Sectors Receiving Major Capital Inflows (August 2026 Live Flow)',
    inflowsDesc: 'Real-time monitoring of institutional capital concentration based on SEC Form 13F filings & ETF flow data',
    inflowAmountLabel: 'Est. Quarterly Inflow',
    inflowGrowthLabel: 'YoY Growth Rate',
    shareRatioLabel: 'Capital Concentration Share',
    topTargetStocksLabel: 'Key Target Equities',
    dominantBuyersLabel: 'Dominant Buyers (Key Funds)',
    drivingForceLabel: 'Underlying Structural Catalysts',

    // Tab 2: Shareholder Matrix
    matrixTitle: 'Global Top 10 Asset Managers & Portfolio Matrix (2026 Verified Reports)',
    matrixDesc: 'Assets Under Management (AUM), major holdings, and core stewardship guidelines extracted directly from SEC Form 13F filings & annual stewardship codes',
    rankLabel: 'Rank',
    managerNameLabel: 'Institution Name',
    hqLabel: 'Headquarters & SEC CIK',
    aumLabel: 'Assets Under Management (AUM)',
    typeLabel: 'Investment Style',
    majorHoldingsLabel: 'Major Holdings (Excerpt)',
    coreDemandsLabel: 'Core Stewardship Demands & Proxy Rules',
    votingStyleLabel: 'Voting & Allocation Profile',
    recentShiftLabel: 'Recent Strategic Pivot',

    // Tab 3: Feed
    feedTitle: 'Agenda-Based Policy Analysis & Industrial Impact Feed',
    feedDesc: 'Directly extracted and verified records of money flow mechanics from US SEC EDGAR filings (Form 13F/13G/8-K/10-K/20-F/DEF 14A)',
    feedFilterAll: 'ALL SECTORS',
    impactScoreLabel: 'Impact Score',
    openDetail: 'View Detail & Primary Source',
    threeBlocks: 'Three Core Analysis Blocks',
    primaryPolicy: '01. Primary Policy & Regulatory Disclosure',
    capitalIncentive: '02. Capital & Financial Incentives (Why Capital Moves)',
    industryImpact: '03. Real-World Industrial & Economic Impact',
    sourceLabel: 'Primary Source Filing',
    tagsLabel: 'Relevant Tags',
    involvedLabel: 'Involved Corporations',
    searchPlaceholder: 'Search by ticker, company, or daily trend (e.g., Michael, Mounjaro, YouTube, TV)...',
    quickInquiriesLabel: '💡 TRENDING INQUIRIES & CAPITAL MANDATES:',
    clearSearch: 'Clear',

    // Tab 4: Trends
    trendsTitle: 'Trending Now: Why Is It Everywhere? (Underlying Capital & Corporate Moves)',
    trendsDesc: 'Ever wondered why certain topics flood your YouTube or TV feeds? Objective AI research tracking the corporate investments, SEC filings, and capital flows behind current media trends (30-day rolling retention).',

    // Modal Common
    closeModal: 'Close',
    viewOriginalFiling: 'View Original SEC Filing ↗',

    // Footer
    footerNote: 'CapGazer — Objective data observatory based on US SEC EDGAR public filings and official institutional disclosures. Not investment advice.',
    lastUpdated: 'Last Synchronized: August 27, 2026 (Daily Automated Pipeline)',
  }
};
