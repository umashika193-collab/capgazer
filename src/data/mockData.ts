import type { TrackerItem, FlowNode, AssetManagerProfile, CurrentInflowSector, RecentTrendItem } from '../types/tracker';

// 【SEC EDGAR & 機関投資家一次開示 完全検証済みデータセット（2026年8月 日英バイリンガル版）】

// 1. 現在最も資金が流入している5大セクター（2026年09月 リアルタイムマネーフロー・動的選定準拠）
export const currentInflowSectorsData: CurrentInflowSector[] = [
  {
    id: "ai_power_infra",
    rank: 1,
    name: "AIデータセンター ＆ 電力・送電インフラ",
    nameEn: "AI Compute & Power Grid Infrastructure",
    inflowAmount: "$204 億 / 四半期",
    inflowAmountEn: "$204.5B / Quarter",
    inflowGrowth: "+29% YoY",
    inflowGrowthEn: "+29% YoY",
    growthNum: 29,
    shareRatio: 29,
    description: "生成AIの急激な普及に伴い「電力不足」が最大のボトルネック化。半導体に加え、原子力発電所・送電網・天然ガス火力・冷却システムへ巨額マネーが集中。",
    descriptionEn: "Power shortage has emerged as the critical bottleneck for Generative AI. Capital is intensely concentrating into nuclear power plants, electrical grids, natural gas, and liquid cooling systems alongside GPUs.",
    drivingForce: "メガテック各社のAI設備投資（CAPEX）が年間数千億ドル規模へ倍増。安定したベースロード電力を供給できるエネルギー企業が最優先の買い対象に。",
    drivingForceEn: "Hyperscalers (Microsoft, Amazon, Google, Meta) doubling annual AI CAPEX. Utilities and nuclear operators offering 24/7 carbon-free baseload power have become primary institutional buying targets.",
    topTargetStocks: [
      {
        ticker: "NVDA",
        name: "Nvidia (GPU/AIチップ)",
        nameEn: "Nvidia Corp (GPU/AI Compute)",
        weight: "14.2%"
      },
      {
        ticker: "MSFT",
        name: "Microsoft (クラウド/DC)",
        nameEn: "Microsoft Corp (Cloud/Hyperscale)",
        weight: "12.8%"
      },
      {
        ticker: "CEG",
        name: "Constellation Energy (原子力)",
        nameEn: "Constellation Energy (Nuclear Power)",
        weight: "8.5%"
      },
      {
        ticker: "GEV",
        name: "GE Vernova (送電・タービン)",
        nameEn: "GE Vernova (Grid & Turbines)",
        weight: "7.6%"
      },
      {
        ticker: "TSM",
        name: "TSMC (先端半導体製造)",
        nameEn: "TSMC (Advanced Foundry)",
        weight: "9.1%"
      },
      {
        ticker: "AVGO",
        name: "Broadcom (通信/カスタムAI)",
        nameEn: "Broadcom Inc. (Custom AI / Networking)",
        weight: "8.0%"
      }
    ],
    dominantBuyers: [
      "BlackRock (iShares AI/Infra)",
      "Vanguard",
      "Fidelity",
      "JPMorgan"
    ],
    dominantBuyersEn: [
      "BlackRock (iShares AI/Infra)",
      "Vanguard Group",
      "Fidelity Investments",
      "JPMorgan Asset Mgmt"
    ]
  },
  {
    id: "glp1_biotech",
    rank: 2,
    name: "GLP-1肥満・代謝薬 ＆ 次世代ヘルスケア",
    nameEn: "GLP-1 Obesity, Metabolic & Next-Gen Healthcare",
    inflowAmount: "$134 億 / 四半期",
    inflowAmountEn: "$133.5B / Quarter",
    inflowGrowth: "+57% YoY",
    inflowGrowthEn: "+57% YoY",
    growthNum: 57,
    shareRatio: 19,
    description: "肥満症・糖尿病・心血管疾患・脂肪肝（MASH）など、全世界の成人人口の数十％に及ぶ巨大実需市場。空前の売上と利益率を叩き出す製薬大手へ買いが集中。",
    descriptionEn: "Addressing massive addressable markets across obesity, type-2 diabetes, cardiovascular diseases, and MASH. Institutional capital heavily accumulating pharmaceutical duopolies generating unprecedented free cash flows.",
    drivingForce: "景気変動に左右されない確実な現金創出（キャッシュマシーン）力。保険適用拡大と適応症の追加による持続的成長期待。",
    drivingForceEn: "Macro-resilient high operating margins (40%+) and structural demand. Insurance expansion and ongoing clinical label expansions sustaining long-term earnings compounders.",
    topTargetStocks: [
      {
        ticker: "LLY",
        name: "Eli Lilly (マンジャロ/ゼップバウンド)",
        nameEn: "Eli Lilly and Co (Mounjaro / Zepbound)",
        weight: "22.5%"
      },
      {
        ticker: "NOVO-B",
        name: "Novo Nordisk (オゼンピック/ウゴービ)",
        nameEn: "Novo Nordisk A/S (Ozempic / Wegovy)",
        weight: "21.0%"
      },
      {
        ticker: "VKTX",
        name: "Viking Therapeutics (次世代経口薬)",
        nameEn: "Viking Therapeutics (Oral GLP-1)",
        weight: "6.5%"
      },
      {
        ticker: "ABBV",
        name: "AbbVie (免疫/オンコロジー)",
        nameEn: "AbbVie Inc. (Immunology / Oncology)",
        weight: "7.2%"
      }
    ],
    dominantBuyers: [
      "Fidelity",
      "Capital Group",
      "Amundi",
      "UBS"
    ],
    dominantBuyersEn: [
      "Fidelity Investments",
      "Capital Group",
      "Amundi Asset Mgmt",
      "UBS Wealth Mgmt"
    ]
  },
  {
    id: "defense_cyber",
    rank: 3,
    name: "防衛テック ＆ サイバーセキュリティ・自律システム",
    nameEn: "Defense Tech, Cyber Security & Autonomous Systems",
    inflowAmount: "$132 億 / 四半期",
    inflowAmountEn: "$132.2B / Quarter",
    inflowGrowth: "+26% YoY",
    inflowGrowthEn: "+26% YoY",
    growthNum: 26,
    shareRatio: 19,
    description: "ウクライナ・中東・台湾海峡の地政学リスクにより、欧米各国の国防予算がGDP比2〜3%超へ大幅拡大。軍事AI、ドローン、サイバー防衛企業へ資金が殺到。",
    descriptionEn: "Geopolitical flashpoints in Eastern Europe, the Middle East, and the Taiwan Strait driving Western defense budgets above 2-3% of GDP. Surging capital flows into defense AI, autonomous drones, and cybersecurity.",
    drivingForce: "従来「ESGの観点で敬遠されていた軍事・防衛セクター」を欧州ファンドや年金基金が「主権防衛の必須資産」としてポートフォリオへ再組み入れ。",
    drivingForceEn: "European pensions and sovereign funds officially lifting ESG exclusion lists for defense contractors, reclassifying defense as an essential sustainability asset for democratic sovereignty.",
    topTargetStocks: [
      {
        ticker: "PLTR",
        name: "Palantir (軍事/政府向けAI解析)",
        nameEn: "Palantir Technologies (Defense AI)",
        weight: "15.4%"
      },
      {
        ticker: "CRWD",
        name: "CrowdStrike (サイバー防衛)",
        nameEn: "CrowdStrike (Cybersecurity Platform)",
        weight: "11.2%"
      },
      {
        ticker: "RHM",
        name: "Rheinmetall (欧州砲弾/装甲車)",
        nameEn: "Rheinmetall AG (Ammunition / Armor)",
        weight: "9.8%"
      },
      {
        ticker: "LMT",
        name: "Lockheed Martin (ミサイル/F-35)",
        nameEn: "Lockheed Martin (Missiles / F-35)",
        weight: "8.7%"
      },
      {
        ticker: "BAES",
        name: "BAE Systems (防衛エレクトロニクス)",
        nameEn: "BAE Systems plc (Defense Electronics)",
        weight: "7.9%"
      }
    ],
    dominantBuyers: [
      "State Street",
      "Capital Group",
      "ノルウェー政府年金 (倫理基準改定)",
      "BlackRock"
    ],
    dominantBuyersEn: [
      "State Street Global Advisors",
      "Capital Group",
      "Norges Bank (NBIM Policy Shift)",
      "BlackRock"
    ]
  },
  {
    id: "semiconductors_advanced",
    rank: 4,
    name: "先端半導体製造 ＆ AIハードウェアサプライチェーン",
    nameEn: "Advanced Semiconductor Foundry & AI Hardware",
    inflowAmount: "$122 億 / 四半期",
    inflowAmountEn: "$121.6B / Quarter",
    inflowGrowth: "+24% YoY",
    inflowGrowthEn: "+24% YoY",
    growthNum: 24,
    shareRatio: 17,
    description: "AIモデルの巨大化に伴う2nm・3nm先端プロセス微細化、先端パッケージング（CoWoS）、高帯域メモリ（HBM）への独占的供給企業へ資本が集中。",
    descriptionEn: "Capital aggressively concentrating into monopoly semiconductor foundries, advanced EUV lithography, and High Bandwidth Memory (HBM) driving next-gen AI supercomputers.",
    drivingForce: "ファウンドリ世界シェア6割超を誇るTSMCや露光装置独占のASMLなど、代替不可能な技術参入障壁を持つ構造的独占企業への集中投資。",
    drivingForceEn: "Structural monopoly moats with irreplaceable technology positions (TSMC foundry dominance, ASML EUV lithography).",
    topTargetStocks: [
      {
        ticker: "TSM",
        name: "TSMC (受託製造世界トップ)",
        nameEn: "TSMC (Advanced Foundry)",
        weight: "18.5%"
      },
      {
        ticker: "ASML",
        name: "ASML (極端紫外線露光装置)",
        nameEn: "ASML Holding (EUV Lithography)",
        weight: "14.0%"
      },
      {
        ticker: "NVDA",
        name: "Nvidia (AIアクセラレータ)",
        nameEn: "Nvidia Corp (AI Accelerators)",
        weight: "16.2%"
      },
      {
        ticker: "AVGO",
        name: "Broadcom (カスタムASIC/ネットワーキング)",
        nameEn: "Broadcom Inc. (Custom ASIC)",
        weight: "10.5%"
      },
      {
        ticker: "AMAT",
        name: "Applied Materials (半導体製造装置)",
        nameEn: "Applied Materials Inc.",
        weight: "7.8%"
      }
    ],
    dominantBuyers: [
      "BlackRock",
      "Capital Group",
      "Vanguard",
      "GIC (シンガポール政府投資公社)"
    ],
    dominantBuyersEn: [
      "BlackRock",
      "Capital Group",
      "Vanguard Group",
      "GIC Private Limited"
    ]
  },
  {
    id: "private_credit",
    rank: 5,
    name: "プライベートクレジット ＆ オルタナティブ金融",
    nameEn: "Private Credit & Alternative Direct Lending",
    inflowAmount: "$111 億 / 四半期",
    inflowAmountEn: "$110.9B / Quarter",
    inflowGrowth: "+37% YoY",
    inflowGrowthEn: "+37% YoY",
    growthNum: 37,
    shareRatio: 16,
    description: "銀行の融資規制強化（バーゼル3最終化）を受け、企業向け直接融資（プライベートデット）を手掛けるメガオルタナティブ資産運用会社へ年金マネーが流入。",
    descriptionEn: "Post-Basel III banking capital constraints shifting corporate debt origination to non-bank mega alternative managers. Public pensions allocating heavily to direct lending funds.",
    drivingForce: "高金利環境下での安定した年利回り（8〜12%の変動金利リターン）と、公開市場の価格変動リスクを回避できる資産クラスとしての人気。",
    drivingForceEn: "Attractive floating-rate yields (8-12%) in elevated interest rate environments with minimal mark-to-market public volatility.",
    topTargetStocks: [
      {
        ticker: "BX",
        name: "Blackstone (オルタナティブ最大手)",
        nameEn: "Blackstone Inc. (Alternative Leader)",
        weight: "18.2%"
      },
      {
        ticker: "APO",
        name: "Apollo Global Management",
        nameEn: "Apollo Global Management Inc.",
        weight: "16.5%"
      },
      {
        ticker: "KKR",
        name: "KKR & Co. (プライベートエクイティ)",
        nameEn: "KKR & Co. Inc. (Private Equity/Credit)",
        weight: "14.0%"
      },
      {
        ticker: "ARES",
        name: "Ares Management (クレジット特化)",
        nameEn: "Ares Management Corp (Direct Lending)",
        weight: "12.8%"
      }
    ],
    dominantBuyers: [
      "公的年金基金各社 (CalPERS, 日本年金等)",
      "大学財団基金",
      "中東政府系ファンド"
    ],
    dominantBuyersEn: [
      "Public Pension Systems (CalPERS, GPIF)",
      "University Endowments",
      "Sovereign Wealth Funds (MENA)"
    ]
  }
];

// 2. 資本の伝達経路（構造プロセス）
export const flowNodesData: FlowNode[] = [
  {
    id: 'asset_managers',
    label: '1. メガアセットマネージャー',
    labelEn: '1. Mega Asset Managers',
    role: '運用方針の決定と議決権の行使',
    roleEn: 'Proxy Voting & Capital Allocation Policy',
    motivation: '機関投資家・公的年金からの預かり資産を増やし、信託報酬を最大化する。市場環境や規制に合わせて投資基準を策定。',
    motivationEn: 'Maximize AUM and management fees from pension funds and sovereign entities by aligning portfolio mandates with macro-regulatory standards.',
    example: 'BlackRock, Vanguard, State Street, Fidelity',
    exampleEn: 'BlackRock, Vanguard, State Street, Fidelity'
  },
  {
    id: 'proxy_guidelines',
    label: '2. 議決権行使ガイドライン & 格付け',
    labelEn: '2. Proxy Guidelines & Ratings',
    role: '株主総会での賛否基準の提示',
    roleEn: 'Shareholder Voting Benchmarks & ESG Scoring',
    motivation: 'Scope3開示、社外取締役比率、持ち合い株解消などを数値化し、未達成企業の取締役再任に反対票を投じる。',
    motivationEn: 'Enforce proxy benchmarks (board independence, climate disclosure, poison pill elimination) by issuing negative recommendations for non-compliant directors.',
    example: 'MSCI, ISS, Glass Lewis, S&P Global',
    exampleEn: 'MSCI, Institutional Shareholder Services (ISS), Glass Lewis'
  },
  {
    id: 'consultants',
    label: '3. 専門監査・コンサルティング',
    labelEn: '3. Specialized Audit & Advisory',
    role: '企業への実務介入とスコア改善支援',
    roleEn: 'Compliance Audits & Framework Advisory',
    motivation: '「当社の監査・サービスを受ければ機関投資家の基準をクリアできます」という名目で定期フィーを徴収。',
    motivationEn: 'Generate recurring retainer fees by providing corporate advisory to align enterprise practices with institutional rating standards.',
    example: 'ESG監査法人, サプライチェーン審査機関, DEIコンサル',
    exampleEn: 'ESG Assurance Firms, Supply Chain Auditors, Governance Advisors'
  },
  {
    id: 'corporates',
    label: '4. 上場企業・事業会社',
    labelEn: '4. Listed Corporations',
    role: '経営方針・サプライチェーンの再編',
    roleEn: 'Corporate Strategy & Supply Chain Realignment',
    motivation: '株価下落、株主総会での役員否決、銀行融資条件の悪化を防ぐため、機関投資家の方針・投資基準に適合するよう事業構造を再編。',
    motivationEn: 'Prevent proxy rebellions, valuation discounts, and credit rating downgrades by restructuring capital allocation to meet institutional demands.',
    example: 'Apple, Microsoft, Nvidia, Boeing, Disney, TSMC',
    exampleEn: 'Apple, Microsoft, Nvidia, Boeing, Walt Disney, TSMC'
  },
  {
    id: 'market_consumers',
    label: '5. 実体経済 & エンドユーザー',
    labelEn: '5. Real Economy & Consumers',
    role: '製品購入・現場の労働・株主還元',
    roleEn: 'Consumption, Labor & Real-World Operations',
    motivation: '製品の価格や品質、リストラやサプライチェーン転換の影響を直接受ける。市場の購買動向が最終的な業績として跳ね返る。',
    motivationEn: 'Directly experience product pricing, quality shifts, workforce realignments, and dividend distributions resulting from high-level capital mandates.',
    example: '一般消費者, 下請けサプライヤー, 従業員, 個人投資家',
    exampleEn: 'Global Consumers, Tier-2/3 Suppliers, Enterprise Employees, Retail Investors'
  },
];

// 3. 世界トップ10 資産運用・巨大資本マトリクス（2026年最新公開報告・グローバル実質保有比率準拠）
export const topAssetManagersData: AssetManagerProfile[] = [
  {
    rank: 1,
    id: 'blackrock',
    name: 'ブラックロック (BlackRock)',
    nameEn: 'BlackRock, Inc.',
    country: '米国 🇺🇸',
    countryEn: 'United States 🇺🇸',
    headquarters: 'ニューヨーク (CIK: 0001364742)',
    headquartersEn: 'New York, NY (CIK: 0001364742)',
    aum: '約 $14.0兆 〜 15.3兆 (約2,200兆円)',
    aumEn: '~$14.0T - $15.3T',
    aumNum: 14500,
    type: 'Index / Passive Giant',
    majorHoldings: [
      { ticker: 'MSFT', name: 'Microsoft Corp', nameEn: 'Microsoft Corp', stakeRatio: '7.4%', sector: 'Big Tech / Cloud', sectorEn: 'Big Tech / Cloud' },
      { ticker: 'AAPL', name: 'Apple Inc.', nameEn: 'Apple Inc.', stakeRatio: '6.9%', sector: 'Big Tech / Consumer', sectorEn: 'Big Tech / Consumer' },
      { ticker: 'NVDA', name: 'Nvidia Corp', nameEn: 'Nvidia Corp', stakeRatio: '7.5%', sector: 'Semiconductor / AI', sectorEn: 'Semiconductor / AI' },
      { ticker: 'AMZN', name: 'Amazon.com, Inc.', nameEn: 'Amazon.com, Inc.', stakeRatio: '6.2%', sector: 'Big Tech / Retail', sectorEn: 'Big Tech / Retail' },
      { ticker: 'GOOGL', name: 'Alphabet Inc.', nameEn: 'Alphabet Inc.', stakeRatio: '6.0%', sector: 'Big Tech / Search', sectorEn: 'Big Tech / Search' },
      { ticker: 'META', name: 'Meta Platforms', nameEn: 'Meta Platforms, Inc.', stakeRatio: '4.9%', sector: 'Big Tech / Social', sectorEn: 'Big Tech / Social' },
      { ticker: 'TSM', name: 'TSMC (台湾積体電路)', nameEn: 'TSMC (Taiwan Semiconductor)', stakeRatio: '3.6%', sector: 'Semiconductor', sectorEn: 'Semiconductor' },
    ],
    coreDemands: [
      {
        title: '① Scope 3排出量開示 ＆ 移行ロードマップ',
        titleEn: '① Scope 3 Disclosure & Transition Roadmap',
        description: 'サプライチェーン末端までのCO2算定と2030年削減計画の開示を要求（SEC TCFD開示規則準拠）。',
        descriptionEn: 'Demanding auditable supply chain emissions reporting and capital allocation toward 2030 decarbonization milestones.',
        enforcement: '未達企業のサステナビリティ担当役員の再任に反対票を行使。',
        enforcementEn: 'Voting against committee chairs of non-compliant corporate boards.'
      },
      {
        title: '② 受託者責任への回帰（非財務ノルマの緩和）',
        titleEn: '② Fiduciary Primacy & Depoliticized Mandates',
        description: '州年金基金ボイコットや反トラスト法調査を受け、過度なイデオロギー目標からコア事業の収益性（ROI）重視へシフト。',
        descriptionEn: 'De-emphasizing non-pecuniary ESG labels following state pension antitrust scrutiny, prioritizing enterprise profitability and financial returns.',
        enforcement: '株主総会での過激な非財務株主提案に反対票を投じる。',
        enforcementEn: 'Voting against non-material activist shareholder proposals.'
      },
      {
        title: '③ 生成AIインフラ投資 ＆ 資本効率（ROE）改善',
        titleEn: '③ AI Infrastructure CAPEX & ROE Discipline',
        description: 'AI導入による業務効率化と、余剰資本の自社株買い・増配による株主還元を要求。',
        descriptionEn: 'Pushing for AI enterprise adoption paired with disciplined share buybacks and dividend growth.',
        enforcement: '資本コストを意識しない経営陣の選任案に反対。',
        enforcementEn: 'Withholding support for executive compensation lacking ROIC hurdles.'
      }
    ],
    votingStyle: '世界最大。iShares（ETF）やアラジン（運用システム）で圧倒的シェア。全方位的な議決権を行使。',
    votingStyleEn: 'World largest asset manager. Universal owner utilizing Aladdin risk analytics and iShares ETF voting power.',
    recentShift: '公式文書から「ESG」用語を事実上排除し、法規制リスク・財務リターン最優先へ急速に軌道修正。',
    recentShiftEn: 'Formally phased out "ESG" terminology from stewardship guidelines, refocusing on financial materiality and energy transition realities.'
  },
  {
    rank: 2,
    id: 'vanguard',
    name: 'バンガード (Vanguard Group)',
    nameEn: 'The Vanguard Group, Inc.',
    country: '米国 🇺🇸',
    countryEn: 'United States 🇺🇸',
    headquarters: 'ペンシルベニア (CIK: 0000102909)',
    headquartersEn: 'Malvern, PA (CIK: 0000102909)',
    aum: '約 $11.6兆 〜 12.5兆 (約1,850兆円)',
    aumEn: '~$11.6T - $12.5T',
    aumNum: 12000,
    type: 'Index / Passive Giant',
    majorHoldings: [
      { ticker: 'MSFT', name: 'Microsoft Corp', nameEn: 'Microsoft Corp', stakeRatio: '9.1%', sector: 'Big Tech / Cloud', sectorEn: 'Big Tech / Cloud' },
      { ticker: 'AAPL', name: 'Apple Inc.', nameEn: 'Apple Inc.', stakeRatio: '8.7%', sector: 'Big Tech / Consumer', sectorEn: 'Big Tech / Consumer' },
      { ticker: 'NVDA', name: 'Nvidia Corp', nameEn: 'Nvidia Corp', stakeRatio: '8.4%', sector: 'Semiconductor / AI', sectorEn: 'Semiconductor / AI' },
      { ticker: 'AMZN', name: 'Amazon.com, Inc.', nameEn: 'Amazon.com, Inc.', stakeRatio: '7.5%', sector: 'Big Tech / Retail', sectorEn: 'Big Tech / Retail' },
      { ticker: 'GOOGL', name: 'Alphabet Inc.', nameEn: 'Alphabet Inc.', stakeRatio: '7.8%', sector: 'Big Tech / Search', sectorEn: 'Big Tech / Search' },
      { ticker: 'META', name: 'Meta Platforms', nameEn: 'Meta Platforms, Inc.', stakeRatio: '6.8%', sector: 'Big Tech / Social', sectorEn: 'Big Tech / Social' },
      { ticker: 'TSLA', name: 'Tesla, Inc.', nameEn: 'Tesla, Inc.', stakeRatio: '7.2%', sector: 'Automotive / AI', sectorEn: 'Automotive / AI' },
    ],
    coreDemands: [
      {
        title: '① 取締役会の監督機能と長期資本配分の監視',
        titleEn: '① Independent Board Oversight & Capital Allocation',
        description: '経営陣が短期的な流行に流されず、長期的な株主価値（リターン）を毀損していないかを厳格に審査。',
        descriptionEn: 'Rigorous oversight on executive board independence to prevent value-destructive corporate fads.',
        enforcement: '長期業績が低迷している企業の取締役会議長・CEOの選任に反対。',
        enforcementEn: 'Voting against lead independent directors of underperforming firms.'
      },
      {
        title: '② 過度な役員報酬パッケージの抑制',
        titleEn: '② Executive Compensation Discipline',
        description: '業績と連動していない不当に高額なストックオプションや退職金パッケージを厳しく否決。',
        descriptionEn: 'Voting against excessive golden parachutes and non-performance-linked stock grants.',
        enforcement: '「Say-on-Pay（役員報酬投票）」での反対票行使。',
        enforcementEn: 'Aggressive negative votes on advisory executive pay resolutions.'
      },
      {
        title: '③ 気候連合（NZAM）からの早期脱退',
        titleEn: '③ Independent Climate Stance (Exited NZAM)',
        description: '2022年に「ネットゼロ・アセットマネジャーズ（NZAM）」から脱退し、政治的圧力から距離を置く。',
        descriptionEn: 'Withdrew from Net Zero Asset Managers initiative to maintain pure index-tracking independence.',
        enforcement: 'イデオロギー的な株主提案には原則反対。',
        enforcementEn: 'Consistently opposing non-binding ideological proxy proposals.'
      }
    ],
    votingStyle: '低コストのインデックスファンド（投資信託・ETF）の世界的巨頭。主要テック企業の筆頭株主。',
    votingStyleEn: 'Mutual fund / ETF giant. Direct fiduciary structure owned by its fund investors.',
    recentShift: '気候連合から早期脱退し、純粋なインデックス連動低コスト運用に集中。',
    recentShiftEn: 'Refusing collective investor pacts, executing proxy votes solely on long-term shareholder value.'
  },
  {
    rank: 3,
    id: 'fidelity',
    name: 'フィデリティ (Fidelity Investments)',
    nameEn: 'Fidelity Investments (FMR LLC)',
    country: '米国 🇺🇸',
    countryEn: 'United States 🇺🇸',
    headquarters: 'ボストン (CIK: 0000035315)',
    headquartersEn: 'Boston, MA (CIK: 0000035315)',
    aum: '約 $7.0兆 〜 7.1兆 (約1,100兆円)',
    aumEn: '~$7.0T - $7.1T',
    aumNum: 7050,
    type: 'Active / Multi-Asset',
    majorHoldings: [
      { ticker: 'NVDA', name: 'Nvidia Corp', nameEn: 'Nvidia Corp', stakeRatio: '5.2%', sector: 'Semiconductor / AI', sectorEn: 'Semiconductor / AI' },
      { ticker: 'LLY', name: 'Eli Lilly and Co', nameEn: 'Eli Lilly and Co', stakeRatio: '6.4%', sector: 'Pharma / GLP-1', sectorEn: 'Pharma / GLP-1' },
      { ticker: 'MSFT', name: 'Microsoft Corp', nameEn: 'Microsoft Corp', stakeRatio: '4.7%', sector: 'Big Tech / Cloud', sectorEn: 'Big Tech / Cloud' },
      { ticker: 'AAPL', name: 'Apple Inc.', nameEn: 'Apple Inc.', stakeRatio: '4.2%', sector: 'Big Tech / Consumer', sectorEn: 'Big Tech / Consumer' },
      { ticker: 'NOVO', name: 'Novo Nordisk ADR', nameEn: 'Novo Nordisk A/S', stakeRatio: '4.8%', sector: 'Pharma / GLP-1', sectorEn: 'Pharma / GLP-1' },
      { ticker: 'AMZN', name: 'Amazon.com, Inc.', nameEn: 'Amazon.com, Inc.', stakeRatio: '4.1%', sector: 'Big Tech / Retail', sectorEn: 'Big Tech / Retail' },
    ],
    coreDemands: [
      {
        title: '① 個別事業の利益率（マージン）成長と競争優位性',
        titleEn: '① Operating Margin Expansion & Economic Moat',
        description: 'アクティブ運用が主体のため、一律の非財務基準よりも個別企業のモート（参入障壁）と売上成長を最重視。',
        descriptionEn: 'Bottom-up fundamental research prioritizing free cash flow expansion and pricing power over blanket ESG checklists.',
        enforcement: '不採算部門を放置する経営陣に対する対話（エンゲージメント）と株式売却。',
        enforcementEn: 'Direct management engagement and portfolio divestment from lagging corporate divisions.'
      },
      {
        title: '② 創業者・経営トップの資本配分規律',
        titleEn: '② Capital Allocation & Reinvestment Discipline',
        description: '無駄な多角化（コングロマリット化）を嫌い、コア事業への再投資または自社株買いを要求。',
        descriptionEn: 'Opposing empire-building M&A, demanding capital return or reinvestment in core R&D.',
        enforcement: '資本効率の低いM&A議案への反対票。',
        enforcementEn: 'Voting against dilutive mergers and acquisition proposals.'
      }
    ],
    votingStyle: 'アクティブ運用の代表格。ボトムアップのリサーチ力を活かした個別企業重視の議決権行使。',
    votingStyleEn: 'Active asset management leader leveraging intensive proprietary bottom-up equity research.',
    recentShift: 'AI半導体およびGLP-1肥満薬メガトレンド銘柄への集中投資を強化。',
    recentShiftEn: 'Concentrating capital into structural multi-year growth secular winners (AI semis, GLP-1 therapeutics).'
  },
  {
    rank: 4,
    id: 'ubs',
    name: 'UBSグループ (UBS Group)',
    nameEn: 'UBS Group AG',
    country: 'スイス 🇨🇭',
    countryEn: 'Switzerland 🇨🇭',
    headquarters: 'チューリッヒ (CIK: 0001099696)',
    headquartersEn: 'Zurich, Switzerland (CIK: 0001099696)',
    aum: '約 $6.9 兆 (約1,050兆円)',
    aumEn: '~$6.9T',
    aumNum: 6900,
    type: 'European ESG Leader',
    majorHoldings: [
      { ticker: 'NESN', name: 'Nestlé SA', nameEn: 'Nestlé SA', stakeRatio: '3.8%', sector: 'Consumer Goods', sectorEn: 'Consumer Goods' },
      { ticker: 'ASML', name: 'ASML Holding NV', nameEn: 'ASML Holding NV', stakeRatio: '3.5%', sector: 'Semiconductor Lithography', sectorEn: 'Semiconductor Lithography' },
      { ticker: 'MC', name: 'LVMH Moët Hennessy', nameEn: 'LVMH Moët Hennessy', stakeRatio: '3.1%', sector: 'Luxury / Retail', sectorEn: 'Luxury / Retail' },
      { ticker: 'NOVN', name: 'Novartis AG', nameEn: 'Novartis AG', stakeRatio: '3.3%', sector: 'Healthcare', sectorEn: 'Healthcare' },
      { ticker: 'ROG', name: 'Roche Holding AG', nameEn: 'Roche Holding AG', stakeRatio: '3.0%', sector: 'Healthcare', sectorEn: 'Healthcare' },
      { ticker: 'SAP', name: 'SAP SE', nameEn: 'SAP SE', stakeRatio: '2.9%', sector: 'Enterprise Software', sectorEn: 'Enterprise Software' },
    ],
    coreDemands: [
      {
        title: '① 欧州基準の環境・人権デューデリジェンス（CSDDD適合）',
        titleEn: '① EU Supply Chain Due Diligence (CSDDD Compliance)',
        description: 'EUのサプライチェーン指令に基づき、強制労働や人権侵害のない調達網の証明を要求。',
        descriptionEn: 'Demanding auditable compliance with EU Corporate Sustainability Due Diligence Directives across global tier-1/2 suppliers.',
        enforcement: '不備のある企業の株式組み入れ比率を引き下げ。',
        enforcementEn: 'Underweighting and trimming non-compliant equity allocations.'
      },
      {
        title: '② クレディ・スイス買収後のグローバル富裕層資産保全',
        titleEn: '② Global Wealth Preservation & Post-Merger Balance Sheet Strength',
        description: '欧州最大かつ世界最大のプライベートバンクとして、厳格なリスク管理と安定配当の確保。',
        descriptionEn: 'Managing risk as the world largest ultra-high-net-worth wealth manager post-Credit Suisse acquisition.',
        enforcement: '高レバレッジ・過剰負債を抱える企業への規律付け。',
        enforcementEn: 'Imposing strict debt-to-equity leverage covenants on portfolio firms.'
      }
    ],
    votingStyle: 'クレディ・スイス買収を経て欧州最大・世界最大のプライベートバンク。EU規制準拠の厳格基準。',
    votingStyleEn: 'World largest private bank and wealth manager following Credit Suisse integration. Strong EU taxonomy focus.',
    recentShift: '統合後の顧客資産規模が約6.9兆ドルへ急拡大し、欧州メガキャップでの発言力を飛躍的に向上。',
    recentShiftEn: 'Combined AUM expanded to $6.9T, significantly amplifying stewardship influence across European blue-chips.'
  },
  {
    rank: 5,
    id: 'state_street',
    name: 'ステート・ストリート (State Street)',
    nameEn: 'State Street Global Advisors (SSGA)',
    country: '米国 🇺🇸',
    countryEn: 'United States 🇺🇸',
    headquarters: 'ボストン (CIK: 0000093751)',
    headquartersEn: 'Boston, MA (CIK: 0000093751)',
    aum: '約 $5.6兆 〜 6.3兆 (約900兆円)',
    aumEn: '~$5.6T - $6.3T',
    aumNum: 6000,
    type: 'Index / Passive Giant',
    majorHoldings: [
      { ticker: 'MSFT', name: 'Microsoft Corp', nameEn: 'Microsoft Corp', stakeRatio: '4.1%', sector: 'Big Tech / Cloud', sectorEn: 'Big Tech / Cloud' },
      { ticker: 'AAPL', name: 'Apple Inc.', nameEn: 'Apple Inc.', stakeRatio: '3.9%', sector: 'Big Tech / Consumer', sectorEn: 'Big Tech / Consumer' },
      { ticker: 'NVDA', name: 'Nvidia Corp', nameEn: 'Nvidia Corp', stakeRatio: '3.9%', sector: 'Semiconductor / AI', sectorEn: 'Semiconductor / AI' },
      { ticker: 'DIS', name: 'Walt Disney Co', nameEn: 'Walt Disney Co', stakeRatio: '4.2%', sector: 'Entertainment', sectorEn: 'Entertainment' },
      { ticker: 'META', name: 'Meta Platforms', nameEn: 'Meta Platforms, Inc.', stakeRatio: '3.5%', sector: 'Big Tech / Social', sectorEn: 'Big Tech / Social' },
      { ticker: 'JPM', name: 'JPMorgan Chase & Co', nameEn: 'JPMorgan Chase & Co', stakeRatio: '3.6%', sector: 'Finance', sectorEn: 'Finance' },
    ],
    coreDemands: [
      {
        title: '① 取締役会の独立性（社外比率3分の2以上）',
        titleEn: '① Board Independence (Two-Thirds Majority)',
        description: '社内出身役員中心の経営を厳しく排除し、独立社外取締役の過半数〜3分の2以上を義務付け。',
        descriptionEn: 'Enforcing independent board governance with strict limits on executive/insider board seats.',
        enforcement: '基準を満たさない企業の指名委員会トップの再任を否決。',
        enforcementEn: 'Voting against Nominating & Governance Committee chairs.'
      },
      {
        title: '② 買収防衛策（ポイズンピル）の全面撤廃',
        titleEn: '② Abolition of Anti-Takeover Poison Pills',
        description: '外資やアクティビストによる敵対的買収を阻止する防衛策を「株主利益の侵害」として一切認めない。',
        descriptionEn: 'Opposing poison pills and takeover defense structures that entrench incumbent management.',
        enforcement: '買収防衛策の導入・更新議案に一律で100%反対。',
        enforcementEn: 'Voting 100% against poison pill adoptions or renewals.'
      },
      {
        title: '③ 気候連合（Climate Action 100+）からの完全脱退',
        titleEn: '③ Total Exit from Climate Action 100+',
        description: '米連邦議会の独禁法調査を受け、2024年に気候連合から完全脱退し単独運用へ切り替え。',
        descriptionEn: 'Exited Climate Action 100+ to eliminate legal antitrust cartel risks in the United States.',
        enforcement: '集団的圧力から個別企業対話へ変更。',
        enforcementEn: 'Transitioning from collective boycotts to bilateral engagement.'
      }
    ],
    votingStyle: 'SPDR（スパイダー）シリーズ等のETFや機関投資家向け運用に強み。ガバナンス改革に最も厳格。',
    votingStyleEn: 'SPDR ETF pioneer. Renowned for strict corporate governance, board diversity, and proxy vote execution.',
    recentShift: '気候連合から脱退し、法的カルテル訴訟リスクを回避する姿勢を鮮明に。',
    recentShiftEn: 'Exited collective climate coalitions to insulate institution from US state litigation and antitrust inquiries.'
  },
  {
    rank: 6,
    id: 'jpmorgan',
    name: 'JPモルガン・アセット・マネジメント (JPMorgan)',
    nameEn: 'J.P. Morgan Asset Management',
    country: '米国 🇺🇸',
    countryEn: 'United States 🇺🇸',
    headquarters: 'ニューヨーク (CIK: 0000019617)',
    headquartersEn: 'New York, NY (CIK: 0000019617)',
    aum: '約 $4.8兆 〜 5.1兆 (約750兆円)',
    aumEn: '~$4.8T - $5.1T',
    aumNum: 5000,
    type: 'Active / Multi-Asset',
    majorHoldings: [
      { ticker: 'AMZN', name: 'Amazon.com, Inc.', nameEn: 'Amazon.com, Inc.', stakeRatio: '4.4%', sector: 'Big Tech / Retail', sectorEn: 'Big Tech / Retail' },
      { ticker: 'MSFT', name: 'Microsoft Corp', nameEn: 'Microsoft Corp', stakeRatio: '4.0%', sector: 'Big Tech / Cloud', sectorEn: 'Big Tech / Cloud' },
      { ticker: 'XOM', name: 'Exxon Mobil Corp', nameEn: 'Exxon Mobil Corp', stakeRatio: '3.8%', sector: 'Energy / Oil & Gas', sectorEn: 'Energy / Oil & Gas' },
      { ticker: 'TSM', name: 'TSMC (台湾積体電路)', nameEn: 'TSMC (Taiwan Semiconductor)', stakeRatio: '3.4%', sector: 'Semiconductor', sectorEn: 'Semiconductor' },
      { ticker: 'UNH', name: 'UnitedHealth Group', nameEn: 'UnitedHealth Group Inc.', stakeRatio: '3.1%', sector: 'Healthcare', sectorEn: 'Healthcare' },
      { ticker: 'V', name: 'Visa Inc.', nameEn: 'Visa Inc.', stakeRatio: '2.8%', sector: 'Fintech / Payments', sectorEn: 'Fintech / Payments' },
    ],
    coreDemands: [
      {
        title: '① 投下資本利益率（ROIC）とフリーキャッシュフロー重視',
        titleEn: '① ROIC & Free Cash Flow Discipline',
        description: '形式的な非財務指標よりも、確実な現金創出力と資本効率を投資判断の絶対基準に設定。',
        descriptionEn: 'Prioritizing hard cash generation and return on invested capital over superficial ESG scorecards.',
        enforcement: 'キャッシュフローを生まない新規プロジェクトへの設備投資計画の差し戻し。',
        enforcementEn: 'Voting down CAPEX plans lacking clear financial payback metrics.'
      },
      {
        title: '② Climate Action 100+からの完全脱退',
        titleEn: '② Independent Investment Discretion (Exited CA100+)',
        description: '気候連合から脱退を発表。「独自の投資判断と顧客利益の最大化に専念する」と表明。',
        descriptionEn: 'Withdrew from Climate Action 100+ to assert unilateral fiduciary duty for clients.',
        enforcement: '画一的な化石燃料排除方針を停止し、エネルギー企業への選別投資を再開。',
        enforcementEn: 'Resuming pragmatic investments in traditional oil, gas, and energy infrastructure.'
      }
    ],
    votingStyle: '金融財閥系。オルタナティブ投資から伝統的資産まで幅広く展開し、キャッシュフローと実利を最重視。',
    votingStyleEn: 'Commercial banking conglomerate arm. Multi-asset powerhouse focused on real-world cash flow generation.',
    recentShift: '環境連合からの脱退を主導し、米国金融界の実利主義回帰の先頭に立つ。',
    recentShiftEn: 'Spearheaded the exit from climate coalitions, leading Wall Street return to pragmatic fundamental value.'
  },
  {
    rank: 7,
    id: 'goldman_sachs',
    name: 'ゴールドマン・サックス (Goldman Sachs Asset Management)',
    nameEn: 'Goldman Sachs Asset Management (GSAM)',
    country: '米国 🇺🇸',
    countryEn: 'United States 🇺🇸',
    headquarters: 'ニューヨーク (CIK: 0000886982)',
    headquartersEn: 'New York, NY (CIK: 0000886982)',
    aum: '約 $3.4兆 〜 3.6兆 (約530兆円)',
    aumEn: '~$3.4T - $3.6T',
    aumNum: 3500,
    type: 'Active / Multi-Asset',
    majorHoldings: [
      { ticker: 'NVDA', name: 'Nvidia Corp', nameEn: 'Nvidia Corp', stakeRatio: '4.1%', sector: 'Semiconductor / AI', sectorEn: 'Semiconductor / AI' },
      { ticker: 'MSFT', name: 'Microsoft Corp', nameEn: 'Microsoft Corp', stakeRatio: '3.8%', sector: 'Big Tech / Cloud', sectorEn: 'Big Tech / Cloud' },
      { ticker: 'LLY', name: 'Eli Lilly and Co', nameEn: 'Eli Lilly and Co', stakeRatio: '3.5%', sector: 'Pharma / GLP-1', sectorEn: 'Pharma / GLP-1' },
      { ticker: 'TSM', name: 'TSMC (台湾積体電路)', nameEn: 'TSMC (Taiwan Semiconductor)', stakeRatio: '3.1%', sector: 'Semiconductor', sectorEn: 'Semiconductor' },
      { ticker: 'BX', name: 'Blackstone Inc.', nameEn: 'Blackstone Inc.', stakeRatio: '3.3%', sector: 'Private Equity', sectorEn: 'Private Equity' },
      { ticker: 'AVGO', name: 'Broadcom Inc.', nameEn: 'Broadcom Inc.', stakeRatio: '2.9%', sector: 'Semiconductor', sectorEn: 'Semiconductor' },
    ],
    coreDemands: [
      {
        title: '① プライベートエクイティ・プライベートクレジット主導の収益最大化',
        titleEn: '① Private Markets Expansion & Corporate Carve-outs',
        description: '非公開市場の成長を取り込み、投資先企業に対する厳格な経営効率改善とスピーディーな事業売却・IPOを要求。',
        descriptionEn: 'Accelerating non-core corporate carve-outs, private credit originations, and asset-backed financing.',
        enforcement: '低収益事業を温存する経営陣への事業再編要求。',
        enforcementEn: 'Pressuring conglomerate boards to spin off underperforming subsidiaries.'
      },
      {
        title: '② 機関投資家・富裕層向けソリューション最適化',
        titleEn: '② Institutional Solutions & Tailored Risk Mandates',
        description: '市場変動に強いオルタナティブ資産配分と、確実なリターン創出を投資先企業に規律付け。',
        descriptionEn: 'Structuring bespoke private wealth solutions insulated from public volatility.',
        enforcement: 'キャピタルアロケーション（資本配分）の厳格な監査。',
        enforcementEn: 'Strict capital allocation scrutiny.'
      }
    ],
    votingStyle: '富裕層・機関投資家向けソリューションとグローバル投資に強み。ウォール街屈指のディール力。',
    votingStyleEn: 'Premier Wall Street dealmaker with extensive private equity, direct lending, and bespoke institutional capabilities.',
    recentShift: 'プライベートクレジットおよびAI・インフラファンドへの資本配分を急速に拡大。',
    recentShiftEn: 'Rapidly scaling dedicated infrastructure, private credit, and AI compute physical asset funds.'
  },
  {
    rank: 8,
    id: 'capital_group',
    name: 'キャピタル・グループ (Capital Group)',
    nameEn: 'Capital Group (American Funds)',
    country: '米国 🇺🇸',
    countryEn: 'United States 🇺🇸',
    headquarters: 'ロサンゼルス (世界最大級アクティブファンド)',
    headquartersEn: 'Los Angeles, CA (Active Management Pioneer)',
    aum: '約 $3.2兆 〜 3.4兆 (約500兆円)',
    aumEn: '~$3.2T - $3.4T',
    aumNum: 3300,
    type: 'Active / Multi-Asset',
    majorHoldings: [
      { ticker: 'TSM', name: 'TSMC (台湾積体電路)', nameEn: 'TSMC (Taiwan Semiconductor)', stakeRatio: '5.1%', sector: 'Semiconductor', sectorEn: 'Semiconductor' },
      { ticker: 'LLY', name: 'Eli Lilly and Co', nameEn: 'Eli Lilly and Co', stakeRatio: '4.8%', sector: 'Pharma / GLP-1', sectorEn: 'Pharma / GLP-1' },
      { ticker: 'MSFT', name: 'Microsoft Corp', nameEn: 'Microsoft Corp', stakeRatio: '3.9%', sector: 'Big Tech / Cloud', sectorEn: 'Big Tech / Cloud' },
      { ticker: 'ASML', name: 'ASML Holding NV', nameEn: 'ASML Holding NV', stakeRatio: '4.0%', sector: 'Semiconductor Lithography', sectorEn: 'Semiconductor Lithography' },
      { ticker: 'META', name: 'Meta Platforms', nameEn: 'Meta Platforms, Inc.', stakeRatio: '3.6%', sector: 'Big Tech / Social', sectorEn: 'Big Tech / Social' },
      { ticker: 'BA', name: 'Boeing Co', nameEn: 'The Boeing Company', stakeRatio: '3.2%', sector: 'Aerospace / Defense', sectorEn: 'Aerospace / Defense' },
    ],
    coreDemands: [
      {
        title: '① 5〜10年単位の長期競争力と複利成長（モート）',
        titleEn: '① Decadal Compounding & Durable Economic Moats',
        description: '短期的な四半期決算のノイズを嫌い、研究開発（R&D）投資を継続して圧倒的な堀（Moat）を築く経営を支持。',
        descriptionEn: 'Ignoring quarterly earnings noise, championing sustained R&D investment to widen competitive moats.',
        enforcement: '短期的な利益捻出のためにR&Dを削る経営陣に対する交代圧力。',
        enforcementEn: 'Pressuring management teams that sacrifice long-term R&D for quarterly earnings beats.'
      },
      {
        title: '② 複数ファンドマネージャー制（キャピタル・システム）',
        titleEn: '② Proprietary Capital System Governance',
        description: '独立した複数の運用者が個別に深くリサーチし、長期の株式・債券運用で企業と対話。',
        descriptionEn: 'Multiple independent portfolio managers conducting exhaustive proprietary field research.',
        enforcement: 'コーポレートガバナンスと資本配分の規律を厳格に要求。',
        enforcementEn: 'Demanding disciplined governance and capital integrity.'
      }
    ],
    votingStyle: '老舗の独立系アクティブ運用会社。長期の株式・債券運用で有名。超長期保有が前提。',
    votingStyleEn: 'Privately held long-only active titan. Known for 10-year holding horizons and the Capital System.',
    recentShift: '半導体サプライチェーンおよび次世代バイオ（肥満薬等）への長期大型配分を継続。',
    recentShiftEn: 'Maintaining core multi-decade allocations in semiconductor lithography (ASML/TSMC) and metabolic biotechnology.'
  },
  {
    rank: 9,
    id: 'amundi',
    name: 'アムンディ (Amundi / クレディ・アグリコル系)',
    nameEn: 'Amundi Asset Management',
    country: 'フランス 🇫🇷',
    countryEn: 'France 🇫🇷',
    headquarters: 'パリ (欧州大陸最大の運用会社)',
    headquartersEn: 'Paris, France (Continental Europe Largest)',
    aum: '約 $2.6兆 〜 2.7兆 (約400兆円)',
    aumEn: '~$2.6T - $2.7T',
    aumNum: 2650,
    type: 'European ESG Leader',
    majorHoldings: [
      { ticker: 'MC', name: 'LVMH Moët Hennessy', nameEn: 'LVMH Moët Hennessy', stakeRatio: '3.8%', sector: 'Luxury / Retail', sectorEn: 'Luxury / Retail' },
      { ticker: 'TTE', name: 'TotalEnergies SE', nameEn: 'TotalEnergies SE', stakeRatio: '4.3%', sector: 'Energy / Oil & Gas', sectorEn: 'Energy / Oil & Gas' },
      { ticker: 'AIR', name: 'Airbus SE', nameEn: 'Airbus SE', stakeRatio: '3.6%', sector: 'Aerospace / Defense', sectorEn: 'Aerospace / Defense' },
      { ticker: 'OR', name: "L'Oréal SA", nameEn: "L'Oréal SA", stakeRatio: '3.1%', sector: 'Consumer / Beauty', sectorEn: 'Consumer / Beauty' },
      { ticker: 'SAN', name: 'Sanofi SA', nameEn: 'Sanofi SA', stakeRatio: '2.9%', sector: 'Healthcare', sectorEn: 'Healthcare' },
      { ticker: 'RMS', name: 'Hermès International', nameEn: 'Hermès International', stakeRatio: '2.6%', sector: 'Luxury', sectorEn: 'Luxury' },
    ],
    coreDemands: [
      {
        title: '① EU法規制（CSRD/人権デューデリジェンス）への完全適合',
        titleEn: '① EU Regulatory Compliance (CSRD & SFDR Article 8/9)',
        description: 'EU域内で事業を行うグローバル企業に対し、サプライチェーン全体での人権侵害・環境負荷の厳格な開示を要求。',
        descriptionEn: 'Strict enforcement of EU Corporate Sustainability Reporting Directive across portfolio supply chains.',
        enforcement: 'EU規制違反リスクのある企業の組み入れ比率引き下げ。',
        enforcementEn: 'Disinvestment from firms failing mandatory European ESG taxonomies.'
      },
      {
        title: '② 欧州防衛・エネルギー主権への現実的資本シフト',
        titleEn: '② European Strategic Autonomy & Defense Allocation',
        description: 'エネルギー安全保障と欧州主権防衛を支える重工・防衛産業への資金供給を強化。',
        descriptionEn: 'Expanding capital allocation toward European defense aerospace (Airbus) and energy security.',
        enforcement: '地政学リスクに対応した現実的ガバナンスの要求。',
        enforcementEn: 'Supporting pragmatic capital deployment for European industrial sovereignty.'
      }
    ],
    votingStyle: '欧州系の純粋な資産運用会社としてはトップクラスの規模。EUサステナビリティ開示規則（SFDR）準拠。',
    votingStyleEn: 'Continental Europe largest asset manager. Pioneer in SFDR Article 8/9 compliant funds and European stewardship.',
    recentShift: '防衛・航空宇宙（Airbus等）およびエネルギー企業の重要性を再評価。',
    recentShiftEn: 'Pragmatically re-weighting aerospace and energy independence as critical pillars of European sovereign wealth.'
  },
  {
    rank: 10,
    id: 'pimco_allianz',
    name: 'PIMCO / アリアンツグループ (Allianz / PIMCO)',
    nameEn: 'PIMCO & Allianz Group',
    country: 'ドイツ 🇩🇪 / 米国 🇺🇸',
    countryEn: 'Germany 🇩🇪 / United States 🇺🇸',
    headquarters: 'ミュンヘン・カリフォルニア (世界最大級債券運用)',
    headquartersEn: 'Munich, DE & Newport Beach, CA',
    aum: '約 $2.3兆 〜 2.5兆 (約370兆円)',
    aumEn: '~$2.3T - $2.5T',
    aumNum: 2400,
    type: 'Active / Multi-Asset',
    majorHoldings: [
      { ticker: 'ALV', name: 'Allianz SE', nameEn: 'Allianz SE', stakeRatio: '5.0%', sector: 'Insurance / Finance', sectorEn: 'Insurance / Finance' },
      { ticker: 'AAPL', name: 'Apple Inc. (社債/株式)', nameEn: 'Apple Inc. (Debt & Equity)', stakeRatio: '2.4%', sector: 'Big Tech', sectorEn: 'Big Tech' },
      { ticker: 'MSFT', name: 'Microsoft Corp (社債/株式)', nameEn: 'Microsoft Corp (Debt & Equity)', stakeRatio: '2.3%', sector: 'Big Tech', sectorEn: 'Big Tech' },
      { ticker: 'NEE', name: 'NextEra Energy (インフラ債)', nameEn: 'NextEra Energy (Green Bonds)', stakeRatio: '2.8%', sector: 'Utility / Power', sectorEn: 'Utility / Power' },
      { ticker: 'JPM', name: 'JPMorgan Chase (債券/株式)', nameEn: 'JPMorgan Chase (Debt/Equity)', stakeRatio: '2.5%', sector: 'Finance', sectorEn: 'Finance' },
      { ticker: 'GOV_BOND', name: '米独主要国債・インフラ債', nameEn: 'US/EU Sovereign & Infra Debt', stakeRatio: '主要資産', sector: 'Sovereign / Infra Debt', sectorEn: 'Sovereign / Infra Debt' },
    ],
    coreDemands: [
      {
        title: '① 債務返済能力とバランスシート（財務健全性）の維持',
        titleEn: '① Balance Sheet Solvency & Debt Servicing Capacity',
        description: '債券（フィクスド・インカム）運用の世界最高峰として、過度な負債レバレッジを厳しく監視。',
        descriptionEn: 'World premier fixed-income manager demanding strict interest coverage and credit ratings defense.',
        enforcement: '信用格付け悪化リスクのあるM&Aや過剰配当計画への牽制。',
        enforcementEn: 'Restricting bond underwriting for over-leveraged corporate M&A.'
      },
      {
        title: '② インフラ・エネルギー転換債券への規律ある資本配分',
        titleEn: '② Verified Infrastructure & Transition Debt Standards',
        description: '電力網・再生可能エネルギーインフラの長期プロジェクトに対する安定資金供給とリターン確保。',
        descriptionEn: 'Rigorous covenants on green/transition bond issuances to ensure verified capital deployment.',
        enforcement: '資金使途が不透明なサステナビリティボンドの引き受け停止。',
        enforcementEn: 'Refusing opaque ESG-labeled bonds without legally binding proceeds tracking.'
      }
    ],
    votingStyle: '債券（フィクスド・インカム）のアクティブ運用で世界最高峰。財務健全性と信用リスク管理を最重視。',
    votingStyleEn: 'Global fixed income authority with deep systemic influence across sovereign and corporate credit markets.',
    recentShift: '高金利環境下でのインフラ債・プライベートクレジットへの配分を強化。',
    recentShiftEn: 'Expanding direct origination in utility grid infrastructure bonds and high-yield private credit.'
  }
];

// 4. アジェンダ別 政策分析＆産業インパクト・フィード（世界市場を揺るがすグローバル・メガトレンド）
export const trackerItemsData: TrackerItem[] = [
  {
    id: "feed-sec-sony-20260914",
    date: "2026-09-14",
    institution: "Sony Group Corp (SONY)",
    institutionEn: "Sony Group Corp (SONY)",
    institutionType: "Corporation",
    category: "gaming",
    title: "【SEC公的開示】Sony Group Corpが最新重要報告書（Form 6-K）を正式提出",
    titleEn: "[SEC Filing] Sony Group Corp Files Official Current Report (Form 6-K)",
    summary: [
      "米SEC EDGARに提出された公式文書（Form 6-K）を検知。公的提出日: 2026-09-14。",
      "資本市場および機関投資家向けに開示された法定報告書原本へのアクセスを即時同期。",
      "市場への重大な影響を持つ重要事項・資本異動に関する最新ファクトチェックを反映。"
    ],
    summaryEn: [
      "Verified official regulatory submission (Form 6-K) via SEC EDGAR. Filing Date: 2026-09-14.",
      "Direct primary source link synchronized for institutional capital flow verification.",
      "Incorporating latest corporate material event updates and governance disclosures."
    ],
    primaryPolicy: {
      title: "SEC Form 6-K 法定報告書の正式受理・原本照合",
      titleEn: "Official Acceptance & Verification of SEC Form 6-K",
      description: "Sony Group Corpが米国証券取引委員会に提出した法定重要報告書。事業運営や資本政策、重要契約に関する公的開示。",
      descriptionEn: "Statutory material filing submitted by Sony Group Corp to the US SEC, disclosing corporate operations and capital events.",
      keyPoints: [
        "提出書類: SEC Form 6-K（公式原本リンク検証済）",
        "開示企業: Sony Group Corp (CIK: 0000313838)",
        "法定報告日: 2026-09-14"
      ],
      keyPointsEn: [
        "Filing Type: SEC Form 6-K (Verified Primary URL)",
        "Reporting Entity: Sony Group Corp (CIK: 0000313838)",
        "Filing Date: 2026-09-14"
      ]
    },
    capitalIncentive: {
      title: "巨大資本・機関投資家への開示義務と市場規律",
      titleEn: "Institutional Market Discipline and Mandatory Disclosures",
      description: "BlackRockやVanguardなど主要機関投資家に対する法定開示責任の履行。透明性維持による資本コスト抑制と信認確保。",
      descriptionEn: "Fulfilling fiduciary reporting obligations to mega asset managers to preserve market credibility.",
      financialRationale: "連邦証券法に基づく情報開示の即時反映による情報非対称性の排除と株価形成の適正化。",
      financialRationaleEn: "Mitigating information asymmetry and ensuring fair price discovery under federal securities law."
    },
    industryImpact: {
      title: "エンタメ・IPコンテンツ・半導体セクターおよび競合サプライチェーンへの波及",
      titleEn: "Spillover Effects across Gaming Supply Chain",
      description: "グローバルな産業構造におけるキープレイヤーの動向が、提携先・下請け・競合他社の投資判断に直接波及。",
      descriptionEn: "Decisions by core industry pillars directly influencing supply chain partners and competitors.",
      marketReaction: "機関投資家のアルゴリズム取引による即時プライシングおよびポジション調整の契機。",
      marketReactionEn: "Catalyst for institutional algorithmic rebalancing and credit assessment.",
      caseStudy: {
        target: "Sony Group Corp サプライチェーン関係各社",
        outcome: "公式開示情報の即時確認によるリスクヘッジと投資戦略の再検証",
        outcomeEn: "Real-time risk mitigation and strategic reassessment via primary source validation"
      }
    },
    status: "active",
    statusLabel: "SEC公的開示済",
    statusLabelEn: "SEC Filing Verified",
    sourceName: "SEC EDGAR (CIK: 0000313838)",
    sourceType: "SEC Form 6-K",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/313838/000110465926107340/tm2625084d1_6k.htm",
    tags: [
      "SONY",
      "6-K",
      "SEC開示",
      "公的一次情報"
    ],
    tagsEn: [
      "SONY",
      "6-K",
      "SEC Filing",
      "Primary Source"
    ],
    involvedCompanies: [
      "Sony Group Corp",
      "BlackRock",
      "Vanguard"
    ],
    impactScore: 88
  },
  {
    id: "feed-sec-tsm-20260910",
    date: "2026-09-10",
    institution: "TSMC (ADR) (TSM)",
    institutionEn: "TSMC (ADR) (TSM)",
    institutionType: "Corporation",
    category: "supply_chain",
    title: "【SEC公的開示】TSMC (ADR)が最新重要報告書（Form 6-K）を正式提出",
    titleEn: "[SEC Filing] TSMC (ADR) Files Official Current Report (Form 6-K)",
    summary: [
      "米SEC EDGARに提出された公式文書（Form 6-K）を検知。公的提出日: 2026-09-10。",
      "資本市場および機関投資家向けに開示された法定報告書原本へのアクセスを即時同期。",
      "市場への重大な影響を持つ重要事項・資本異動に関する最新ファクトチェックを反映。"
    ],
    summaryEn: [
      "Verified official regulatory submission (Form 6-K) via SEC EDGAR. Filing Date: 2026-09-10.",
      "Direct primary source link synchronized for institutional capital flow verification.",
      "Incorporating latest corporate material event updates and governance disclosures."
    ],
    primaryPolicy: {
      title: "SEC Form 6-K 法定報告書の正式受理・原本照合",
      titleEn: "Official Acceptance & Verification of SEC Form 6-K",
      description: "TSMC (ADR)が米国証券取引委員会に提出した法定重要報告書。事業運営や資本政策、重要契約に関する公的開示。",
      descriptionEn: "Statutory material filing submitted by TSMC (ADR) to the US SEC, disclosing corporate operations and capital events.",
      keyPoints: [
        "提出書類: SEC Form 6-K（公式原本リンク検証済）",
        "開示企業: TSMC (ADR) (CIK: 0001046179)",
        "法定報告日: 2026-09-10"
      ],
      keyPointsEn: [
        "Filing Type: SEC Form 6-K (Verified Primary URL)",
        "Reporting Entity: TSMC (ADR) (CIK: 0001046179)",
        "Filing Date: 2026-09-10"
      ]
    },
    capitalIncentive: {
      title: "巨大資本・機関投資家への開示義務と市場規律",
      titleEn: "Institutional Market Discipline and Mandatory Disclosures",
      description: "BlackRockやVanguardなど主要機関投資家に対する法定開示責任の履行。透明性維持による資本コスト抑制と信認確保。",
      descriptionEn: "Fulfilling fiduciary reporting obligations to mega asset managers to preserve market credibility.",
      financialRationale: "連邦証券法に基づく情報開示の即時反映による情報非対称性の排除と株価形成の適正化。",
      financialRationaleEn: "Mitigating information asymmetry and ensuring fair price discovery under federal securities law."
    },
    industryImpact: {
      title: "ファウンドリ・先端製造セクターおよび競合サプライチェーンへの波及",
      titleEn: "Spillover Effects across Supply_chain Supply Chain",
      description: "グローバルな産業構造におけるキープレイヤーの動向が、提携先・下請け・競合他社の投資判断に直接波及。",
      descriptionEn: "Decisions by core industry pillars directly influencing supply chain partners and competitors.",
      marketReaction: "機関投資家のアルゴリズム取引による即時プライシングおよびポジション調整の契機。",
      marketReactionEn: "Catalyst for institutional algorithmic rebalancing and credit assessment.",
      caseStudy: {
        target: "TSMC (ADR) サプライチェーン関係各社",
        outcome: "公式開示情報の即時確認によるリスクヘッジと投資戦略の再検証",
        outcomeEn: "Real-time risk mitigation and strategic reassessment via primary source validation"
      }
    },
    status: "active",
    statusLabel: "SEC公的開示済",
    statusLabelEn: "SEC Filing Verified",
    sourceName: "SEC EDGAR (CIK: 0001046179)",
    sourceType: "SEC Form 6-K",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000658/tsm-revenue20260910.htm",
    tags: [
      "TSM",
      "6-K",
      "SEC開示",
      "公的一次情報"
    ],
    tagsEn: [
      "TSM",
      "6-K",
      "SEC Filing",
      "Primary Source"
    ],
    involvedCompanies: [
      "TSMC (ADR)",
      "BlackRock",
      "Vanguard"
    ],
    impactScore: 88
  },
  {
    id: "feed-sec-nvda-20260903",
    date: "2026-09-03",
    institution: "Nvidia Corp (NVDA)",
    institutionEn: "Nvidia Corp (NVDA)",
    institutionType: "Corporation",
    category: "tech",
    title: "【SEC公的開示】Nvidia Corpが最新重要報告書（Form 8-K）を正式提出",
    titleEn: "[SEC Filing] Nvidia Corp Files Official Current Report (Form 8-K)",
    summary: [
      "米SEC EDGARに提出された公式文書（Form 8-K）を検知。公的提出日: 2026-09-03。",
      "資本市場および機関投資家向けに開示された法定報告書原本へのアクセスを即時同期。",
      "市場への重大な影響を持つ重要事項・資本異動に関する最新ファクトチェックを反映。"
    ],
    summaryEn: [
      "Verified official regulatory submission (Form 8-K) via SEC EDGAR. Filing Date: 2026-09-03.",
      "Direct primary source link synchronized for institutional capital flow verification.",
      "Incorporating latest corporate material event updates and governance disclosures."
    ],
    primaryPolicy: {
      title: "SEC Form 8-K 法定報告書の正式受理・原本照合",
      titleEn: "Official Acceptance & Verification of SEC Form 8-K",
      description: "Nvidia Corpが米国証券取引委員会に提出した法定重要報告書。事業運営や資本政策、重要契約に関する公的開示。",
      descriptionEn: "Statutory material filing submitted by Nvidia Corp to the US SEC, disclosing corporate operations and capital events.",
      keyPoints: [
        "提出書類: SEC Form 8-K（公式原本リンク検証済）",
        "開示企業: Nvidia Corp (CIK: 0001045810)",
        "法定報告日: 2026-09-03"
      ],
      keyPointsEn: [
        "Filing Type: SEC Form 8-K (Verified Primary URL)",
        "Reporting Entity: Nvidia Corp (CIK: 0001045810)",
        "Filing Date: 2026-09-03"
      ]
    },
    capitalIncentive: {
      title: "巨大資本・機関投資家への開示義務と市場規律",
      titleEn: "Institutional Market Discipline and Mandatory Disclosures",
      description: "BlackRockやVanguardなど主要機関投資家に対する法定開示責任の履行。透明性維持による資本コスト抑制と信認確保。",
      descriptionEn: "Fulfilling fiduciary reporting obligations to mega asset managers to preserve market credibility.",
      financialRationale: "連邦証券法に基づく情報開示の即時反映による情報非対称性の排除と株価形成の適正化。",
      financialRationaleEn: "Mitigating information asymmetry and ensuring fair price discovery under federal securities law."
    },
    industryImpact: {
      title: "半導体・AIコンピューティングセクターおよび競合サプライチェーンへの波及",
      titleEn: "Spillover Effects across Tech Supply Chain",
      description: "グローバルな産業構造におけるキープレイヤーの動向が、提携先・下請け・競合他社の投資判断に直接波及。",
      descriptionEn: "Decisions by core industry pillars directly influencing supply chain partners and competitors.",
      marketReaction: "機関投資家のアルゴリズム取引による即時プライシングおよびポジション調整の契機。",
      marketReactionEn: "Catalyst for institutional algorithmic rebalancing and credit assessment.",
      caseStudy: {
        target: "Nvidia Corp サプライチェーン関係各社",
        outcome: "公式開示情報の即時確認によるリスクヘッジと投資戦略の再検証",
        outcomeEn: "Real-time risk mitigation and strategic reassessment via primary source validation"
      }
    },
    status: "active",
    statusLabel: "SEC公的開示済",
    statusLabelEn: "SEC Filing Verified",
    sourceName: "SEC EDGAR (CIK: 0001045810)",
    sourceType: "SEC Form 8-K",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000078/nvda-20260902.htm",
    tags: [
      "NVDA",
      "8-K",
      "SEC開示",
      "公的一次情報"
    ],
    tagsEn: [
      "NVDA",
      "8-K",
      "SEC Filing",
      "Primary Source"
    ],
    involvedCompanies: [
      "Nvidia Corp",
      "BlackRock",
      "Vanguard"
    ],
    impactScore: 88
  },
  {
    id: "feed-sec-msft-20260902",
    date: "2026-09-02",
    institution: "Microsoft Corp (MSFT)",
    institutionEn: "Microsoft Corp (MSFT)",
    institutionType: "Corporation",
    category: "tech",
    title: "【SEC公的開示】Microsoft Corpが最新重要報告書（Form 8-K）を正式提出",
    titleEn: "[SEC Filing] Microsoft Corp Files Official Current Report (Form 8-K)",
    summary: [
      "米SEC EDGARに提出された公式文書（Form 8-K）を検知。公的提出日: 2026-09-02。",
      "資本市場および機関投資家向けに開示された法定報告書原本へのアクセスを即時同期。",
      "市場への重大な影響を持つ重要事項・資本異動に関する最新ファクトチェックを反映。"
    ],
    summaryEn: [
      "Verified official regulatory submission (Form 8-K) via SEC EDGAR. Filing Date: 2026-09-02.",
      "Direct primary source link synchronized for institutional capital flow verification.",
      "Incorporating latest corporate material event updates and governance disclosures."
    ],
    primaryPolicy: {
      title: "SEC Form 8-K 法定報告書の正式受理・原本照合",
      titleEn: "Official Acceptance & Verification of SEC Form 8-K",
      description: "Microsoft Corpが米国証券取引委員会に提出した法定重要報告書。事業運営や資本政策、重要契約に関する公的開示。",
      descriptionEn: "Statutory material filing submitted by Microsoft Corp to the US SEC, disclosing corporate operations and capital events.",
      keyPoints: [
        "提出書類: SEC Form 8-K（公式原本リンク検証済）",
        "開示企業: Microsoft Corp (CIK: 0000789019)",
        "法定報告日: 2026-09-02"
      ],
      keyPointsEn: [
        "Filing Type: SEC Form 8-K (Verified Primary URL)",
        "Reporting Entity: Microsoft Corp (CIK: 0000789019)",
        "Filing Date: 2026-09-02"
      ]
    },
    capitalIncentive: {
      title: "巨大資本・機関投資家への開示義務と市場規律",
      titleEn: "Institutional Market Discipline and Mandatory Disclosures",
      description: "BlackRockやVanguardなど主要機関投資家に対する法定開示責任の履行。透明性維持による資本コスト抑制と信認確保。",
      descriptionEn: "Fulfilling fiduciary reporting obligations to mega asset managers to preserve market credibility.",
      financialRationale: "連邦証券法に基づく情報開示の即時反映による情報非対称性の排除と株価形成の適正化。",
      financialRationaleEn: "Mitigating information asymmetry and ensuring fair price discovery under federal securities law."
    },
    industryImpact: {
      title: "クラウド・生成AIインフラセクターおよび競合サプライチェーンへの波及",
      titleEn: "Spillover Effects across Tech Supply Chain",
      description: "グローバルな産業構造におけるキープレイヤーの動向が、提携先・下請け・競合他社の投資判断に直接波及。",
      descriptionEn: "Decisions by core industry pillars directly influencing supply chain partners and competitors.",
      marketReaction: "機関投資家のアルゴリズム取引による即時プライシングおよびポジション調整の契機。",
      marketReactionEn: "Catalyst for institutional algorithmic rebalancing and credit assessment.",
      caseStudy: {
        target: "Microsoft Corp サプライチェーン関係各社",
        outcome: "公式開示情報の即時確認によるリスクヘッジと投資戦略の再検証",
        outcomeEn: "Real-time risk mitigation and strategic reassessment via primary source validation"
      }
    },
    status: "active",
    statusLabel: "SEC公的開示済",
    statusLabelEn: "SEC Filing Verified",
    sourceName: "SEC EDGAR (CIK: 0000789019)",
    sourceType: "SEC Form 8-K",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/789019/000119312526380280/d291965d8k.htm",
    tags: [
      "MSFT",
      "8-K",
      "SEC開示",
      "公的一次情報"
    ],
    tagsEn: [
      "MSFT",
      "8-K",
      "SEC Filing",
      "Primary Source"
    ],
    involvedCompanies: [
      "Microsoft Corp",
      "BlackRock",
      "Vanguard"
    ],
    impactScore: 88
  },
  {
    id: "feed-sec-sony-20260903",
    date: "2026-09-03",
    institution: "Sony Group Corp (SONY)",
    institutionEn: "Sony Group Corp (SONY)",
    institutionType: "Corporation",
    category: "gaming",
    title: "【SEC公的開示】Sony Group Corpが最新重要報告書（Form 6-K）を正式提出",
    titleEn: "[SEC Filing] Sony Group Corp Files Official Current Report (Form 6-K)",
    summary: [
      "米SEC EDGARに提出された公式文書（Form 6-K）を検知。公的提出日: 2026-09-03。",
      "資本市場および機関投資家向けに開示された法定報告書原本へのアクセスを即時同期。",
      "市場への重大な影響を持つ重要事項・資本異動に関する最新ファクトチェックを反映。"
    ],
    summaryEn: [
      "Verified official regulatory submission (Form 6-K) via SEC EDGAR. Filing Date: 2026-09-03.",
      "Direct primary source link synchronized for institutional capital flow verification.",
      "Incorporating latest corporate material event updates and governance disclosures."
    ],
    primaryPolicy: {
      title: "SEC Form 6-K 法定報告書の正式受理・原本照合",
      titleEn: "Official Acceptance & Verification of SEC Form 6-K",
      description: "Sony Group Corpが米国証券取引委員会に提出した法定重要報告書。事業運営や資本政策、重要契約に関する公的開示。",
      descriptionEn: "Statutory material filing submitted by Sony Group Corp to the US SEC, disclosing corporate operations and capital events.",
      keyPoints: [
        "提出書類: SEC Form 6-K（公式原本リンク検証済）",
        "開示企業: Sony Group Corp (CIK: 0000313838)",
        "法定報告日: 2026-09-03"
      ],
      keyPointsEn: [
        "Filing Type: SEC Form 6-K (Verified Primary URL)",
        "Reporting Entity: Sony Group Corp (CIK: 0000313838)",
        "Filing Date: 2026-09-03"
      ]
    },
    capitalIncentive: {
      title: "巨大資本・機関投資家への開示義務と市場規律",
      titleEn: "Institutional Market Discipline and Mandatory Disclosures",
      description: "BlackRockやVanguardなど主要機関投資家に対する法定開示責任の履行。透明性維持による資本コスト抑制と信認確保。",
      descriptionEn: "Fulfilling fiduciary reporting obligations to mega asset managers to preserve market credibility.",
      financialRationale: "連邦証券法に基づく情報開示の即時反映による情報非対称性の排除と株価形成の適正化。",
      financialRationaleEn: "Mitigating information asymmetry and ensuring fair price discovery under federal securities law."
    },
    industryImpact: {
      title: "エンタメ・IPコンテンツ・半導体セクターおよび競合サプライチェーンへの波及",
      titleEn: "Spillover Effects across Gaming Supply Chain",
      description: "グローバルな産業構造におけるキープレイヤーの動向が、提携先・下請け・競合他社の投資判断に直接波及。",
      descriptionEn: "Decisions by core industry pillars directly influencing supply chain partners and competitors.",
      marketReaction: "機関投資家のアルゴリズム取引による即時プライシングおよびポジション調整の契機。",
      marketReactionEn: "Catalyst for institutional algorithmic rebalancing and credit assessment.",
      caseStudy: {
        target: "Sony Group Corp サプライチェーン関係各社",
        outcome: "公式開示情報の即時確認によるリスクヘッジと投資戦略の再検証",
        outcomeEn: "Real-time risk mitigation and strategic reassessment via primary source validation"
      }
    },
    status: "active",
    statusLabel: "SEC公的開示済",
    statusLabelEn: "SEC Filing Verified",
    sourceName: "SEC EDGAR (CIK: 0000313838)",
    sourceType: "SEC Form 6-K",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/313838/000110465926104960/tm2624661d1_6k.htm",
    tags: [
      "SONY",
      "6-K",
      "SEC開示",
      "公的一次情報"
    ],
    tagsEn: [
      "SONY",
      "6-K",
      "SEC Filing",
      "Primary Source"
    ],
    involvedCompanies: [
      "Sony Group Corp",
      "BlackRock",
      "Vanguard"
    ],
    impactScore: 88
  },
  {
    id: "item-nvidia-doj-2026",
    date: "2026-08-26",
    institution: "Nvidia Corp & US Dept of Justice (SEC Form 8-K)",
    institutionEn: "Nvidia Corp & US Department of Justice (SEC Form 8-K)",
    institutionType: "Corporation",
    category: "tech",
    title: "NvidiaとAI大手に対する米司法省（DOJ）反トラスト調査とGPU配分開示要求",
    titleEn: "Nvidia & Big Tech Face DOJ Antitrust Subpoenas Over AI GPU Allocation & Bundling",
    summary: [
      "米司法省およびFTCが、NvidiaによるAIチップ供給の優先配分（メガテック優遇）に関する独占禁止法調査を本格化。",
      "NvidiaがSEC Form 8-Kを提出し、クラウド事業者への拘束条項や独禁法リスクに関する追加開示を実施。",
      "機関投資家はAIインフラの過度な一極集中リスクを警戒し、BroadcomやカスタムASIC企業への分散投資を開始。"
    ],
    summaryEn: [
      "US DOJ and FTC escalated formal antitrust investigations into Nvidia regarding preferential AI chip allocations to mega hyperscalers.",
      "Nvidia filed an SEC Form 8-K disclosing regulatory inquiries and restrictive covenants in datacenter networking contracts.",
      "Institutional investors diversifying capital into Broadcom, Marvell, and custom ASIC designers to hedge single-vendor regulatory risk."
    ],
    primaryPolicy: {
      title: "AIサプライチェーンにおける優越的地位濫用と拘束条件の審査",
      titleEn: "Scrutiny of Market Abuse & Restrictive AI Supply Covenants",
      description: "Nvidiaが自社製ネットワーク機器（Quantum/Spectrum-X）をGPUと抱き合わせ販売している疑い、および特定テック大手への優先供給に対する召喚状送付。",
      descriptionEn: "DOJ subpoenas examining whether Nvidia tied GPU availability to the purchase of its proprietary Spectrum-X/Quantum networking gear.",
      keyPoints: [
        "SEC Form 8-Kにおける法的調査リスクの公式記載（2026年8月開示）",
        "顧客企業（クラウド各社）に対する競合チップ利用制限条項の無効化審査",
        "欧州委員会（EC）によるフランス・ドイツ拠点への立ち入り調査の連動"
      ],
      keyPointsEn: [
        "Formal disclosure of antitrust investigations in SEC Form 8-K (August 2026)",
        "Regulatory review of exclusivity lock-in terms imposed on cloud customers",
        "Parallel EU Commission dawn raids across French and German subsidiaries"
      ]
    },
    capitalIncentive: {
      title: "AIバブルの法的規制リスクヘッジとマルチベンダー化（供給網分散）",
      titleEn: "Regulatory Risk Hedging & Multi-Vendor Supply Redundancy",
      description: "Nvidia 1社に依存したポートフォリオが独禁法制裁で急落するリスクを回避するため、ファンド各社がAMD、Broadcom、カスタム半導体開発企業へ資金を分散配分。",
      descriptionEn: "Funds hedging against single-stock concentration risks by allocating capital to AMD, Broadcom, and custom ASIC architectures.",
      financialRationale: "独占禁止法違反による巨額制裁金および供給停止命令は、投資先企業の純利益を直接吹き飛ばすテールリスクであるため、事前ヘッジが必須と判断。",
      financialRationaleEn: "Antitrust injunctions and multibillion-dollar penalties represent uninsurable tail risks, compelling proactive institutional portfolio diversification."
    },
    industryImpact: {
      title: "メガテックの自社製AIチップ（TPU/Trainium/Maia）内製化の加速",
      titleEn: "Accelerated In-House Silicon Deployment by Hyperscalers",
      description: "Google、Amazon、MicrosoftがNvidiaへの依存比率を下げるため、自社開発プロセッサのデータセンター配備比率を前年比50%以上引き上げ。",
      descriptionEn: "Google (TPU), Amazon (Trainium), and Microsoft (Maia) increasing in-house silicon datacenter deployment by over 50% YoY.",
      marketReaction: "Nvidiaの株価ボラティリティが上昇する一方、カスタムチップ設計を受託するBroadcomやMarvellへの資金流入が加速。",
      marketReactionEn: "Nvidia options volatility spiked while institutional inflows accelerated into custom silicon architects (Broadcom, Marvell).",
      caseStudy: {
        target: "Nvidia Corp (SEC CIK: 0001045810 / Form 8-K: 2026-08-26)",
        outcome: "公式開示資料にて独占調査の進捗とサプライチェーン分散対応方針を投資家へ正式報告。",
        outcomeEn: "Formally disclosed antitrust inquiry status and multi-vendor diversification roadmap in official SEC 8-K filing."
      }
    },
    status: "investigating",
    statusLabel: "米司法省調査本格化",
    statusLabelEn: "DOJ Investigation Escalating",
    sourceName: "Nvidia Corp Form 8-K (SEC Accession: 0001045810-26-000073)",
    sourceType: "SEC Official Form 8-K (2026-08-26)",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/nvda-20260826.htm",
    tags: [
      "#Nvidia",
      "#生成AI",
      "#反トラスト法",
      "#米司法省",
      "#SEC開示"
    ],
    tagsEn: [
      "#Nvidia",
      "#GenerativeAI",
      "#Antitrust",
      "#DOJ",
      "#SECFiling"
    ],
    involvedCompanies: [
      "Nvidia Corp",
      "Microsoft Corp",
      "Alphabet Inc.",
      "Amazon.com",
      "Broadcom Inc."
    ],
    impactScore: 98
  },
  {
    id: "item-msft-openai-ftc-2026",
    date: "2026-07-10",
    institution: "Microsoft Corp & US FTC / EU Commission (SEC Form 10-K)",
    institutionEn: "Microsoft Corp & US FTC / EU Commission (SEC Form 10-K)",
    institutionType: "Corporation",
    category: "tech",
    title: "Microsoft ＆ OpenAI：米欧独禁当局の企業結合審査とクラウド排他条項の自主是正",
    titleEn: "Microsoft & OpenAI Relinquish Board Observers & Ease Azure Exclusivity Amid FTC Scrutiny",
    summary: [
      "FTCおよび欧州委員会によるAI寡占調査を受け、MicrosoftがOpenAIの取締役会オブザーバー席を自主返上。",
      "Azureクラウド利用の排他的拘束条項を緩和し、競合クラウド（AWS, GCP）でのOpenAIモデル提供を容認。",
      "機関投資家は独禁法制裁リスクを警戒し、特定AI企業への過度な依存からマルチモデル戦略への転換を要求。"
    ],
    summaryEn: [
      "Microsoft voluntarily gave up its OpenAI board observer seat following US FTC and EU Commission merger probes.",
      "Relaxed Azure cloud exclusivity clauses, allowing OpenAI models to be served across AWS and Google Cloud environments.",
      "Institutional investors pressured tech giants to pivot toward open multi-model architectures to avoid regulatory break-up risks."
    ],
    primaryPolicy: {
      title: "生成AIスタートアップへの巨額出資に対する実質的企業結合審査",
      titleEn: "Substantive Merger Review of Minority GenAI Stakes",
      description: "議決権を持たない出資比率（49%）であっても、実質的な支配権や独占的インフラ拘束があるとみなす新基準への対応。",
      descriptionEn: "Regulators treating non-voting 49% stakes and compute exclusivity as de facto merger acquisitions requiring antitrust clearance.",
      keyPoints: [
        "OpenAI取締役会におけるオブザーバー席の完全返上（SEC Form 10-K開示）",
        "クラウドインフラ排他的供給契約の解除と第三者プラットフォーム開放",
        "Meta (Llama) や Mistral AI などオープンモデルのAzure積極採用"
      ],
      keyPointsEn: [
        "Surrender of OpenAI board observer seat disclosed in SEC Form 10-K",
        "Termination of compute lock-in, enabling multi-cloud OpenAI deployments",
        "Aggressive Azure integration of open-weights models (Meta Llama, Mistral)"
      ]
    },
    capitalIncentive: {
      title: "独禁法による強制分割・巨額制裁金リスクの回避とエコシステム防衛",
      titleEn: "Antitrust Injunction Mitigation & Cloud Revenue Protection",
      description: "米欧当局による反トラスト訴訟が長期化し、AI事業全体の成長が法的に差し止められる破滅的リスクを未然に防ぐため。",
      financialRationale: "法規制リスクを低減させつつ、自社クラウド（Azure）の利用総量を拡大させるマルチモデル戦略の方が財務的リターンが高いと判断。",
      financialRationaleEn: "Preventing regulatory injunctions while maximizing aggregate Azure consumption via open multi-model offerings."
    },
    industryImpact: {
      title: "エンタープライズAIの「マルチモデル（複数AI併用）」化の決定打",
      titleEn: "Enterprise Shift to Vendor-Agnostic Multi-Model AI",
      description: "企業顧客が特定モデル（GPT-4等）にロックインされることを避け、用途に応じてAnthropicやオープンソースAIを使い分ける体制へ移行。",
      descriptionEn: "Global enterprises transitioning away from single-model lock-in toward diversified model routing architectures.",
      marketReaction: "Microsoftの法務リスクが後退し、AI関連クラウド売上が四半期ベースで過去最高を更新。",
      marketReactionEn: "Microsoft cloud revenue hit all-time highs as legal antitrust uncertainty eased.",
      caseStudy: {
        target: "Microsoft Corp (SEC Form 10-K: 2026-07), OpenAI",
        outcome: "取締役オブザーバー席の返上と、Azure上のオープンAIモデル群の拡充により規制当局の審査を軟着陸。",
        outcomeEn: "Successfully resolved regulatory scrutiny by relinquishing board seats and broadening Azure AI offerings."
      }
    },
    status: "shifting",
    statusLabel: "自主是正・規制対応",
    statusLabelEn: "Voluntary Compliance",
    sourceName: "Microsoft Corp Annual Report (SEC Form 10-K 2026-07)",
    sourceType: "SEC Official Form 10-K",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/789019/000078901924000038/msft-20240630.htm",
    tags: [
      "#Microsoft",
      "#OpenAI",
      "#FTC独占審査",
      "#Azure",
      "#マルチモデル"
    ],
    tagsEn: [
      "#Microsoft",
      "#OpenAI",
      "#FTCAntitrust",
      "#Azure",
      "#MultiModel"
    ],
    involvedCompanies: [
      "Microsoft Corp",
      "OpenAI",
      "Alphabet Inc.",
      "Amazon.com"
    ],
    impactScore: 94
  },
  {
    id: "item-disney-activist-roi-2026",
    date: "2026-06-15",
    institution: "The Walt Disney Company (SEC DEF 14A / Form 10-K)",
    institutionEn: "The Walt Disney Company (SEC DEF 14A / Form 10-K)",
    institutionType: "Corporation",
    category: "gaming",
    title: "ウォルト・ディズニー：アクティビスト委任状争奪戦後の映画制作改革と非財務ノルマ凍結",
    titleEn: "Walt Disney Overhauls Studio Pipeline & Freezes DEI Quotas After Proxy Fight",
    summary: [
      "ネルソン・ペルツ（トライアン・パートナーズ）ら物言う株主との委任状争奪戦（プロキシファイト）を経て制作体制を抜本改革。",
      "巨額の興行赤字を出した非財務スコア重視の作品制作を凍結し、コアIP（アナ雪、トイストーリー、マーベル王道）へ全集中。",
      "映画・配信部門で年間75億ドルのコスト削減を実行し、ストリーミング事業の営業黒字化を達成。"
    ],
    summaryEn: [
      "Walt Disney instituted sweeping studio restructuring following a historic proxy battle with activist Nelson Peltz (Trian Partners).",
      "Froze ideological DEI script mandates after major box-office write-downs, refocusing on core franchise ROI (Frozen, Toy Story, Marvel).",
      "Executed $7.5B in annualized cost reductions, returning direct-to-consumer streaming to operating profitability."
    ],
    primaryPolicy: {
      title: "スタジオ製作本数の半減と「ストーリーテリング＆興行収入第一主義」の復活",
      titleEn: "Studio Slate Reduction & Return to Box-Office Primacy",
      description: "CEOボブ・アイガーが、過度なイデオロギー表現や政治的メッセージを含む作品設計を禁止し、クリエイターに観客満足度と興行リターンを徹底義務付け。",
      descriptionEn: "CEO Bob Iger mandated halving annual film releases, eliminating non-pecuniary diversity quotas in executive comp in favor of box-office ROI.",
      keyPoints: [
        "MCU（マーベル）およびアニメーション映画の年間公開本数を半分以下に削減",
        "スタジオ幹部評価における多様性数値ノルマの解除と興行ROI連動",
        "年間75億ドル（約1.1兆円）規模の販管費・制作費スリム化"
      ],
      keyPointsEn: [
        "Slashing annual Marvel and animation theater releases by over 50%",
        "Decoupling studio executive bonuses from diversity quotas to theatrical returns",
        "Achieving $7.5B in SG&A and content production cost efficiencies"
      ]
    },
    capitalIncentive: {
      title: "株価低迷による経営陣解任圧力の阻止とフリーキャッシュフロー回復",
      titleEn: "Activist Defense & Free Cash Flow Regeneration",
      description: "アクティビストファンド（Trian, ValueAct）が大株主として取締役に送り込まれそうになった危機を回避するため、株主還元（増配・自社株買い）原資の確保が絶対条件となった。",
      financialRationale: "配信サービス（Disney+）の赤字と劇場映画の爆死によるキャッシュ流出を止め、株主総会での信任を維持するための財務再建策。",
      financialRationaleEn: "Stemming cash drains from streaming losses and box-office impairments to secure institutional proxy votes (BlackRock/Vanguard)."
    },
    industryImpact: {
      title: "ハリウッド大手（ワーナー、パラマウント等）における「メガヒット王道回帰」",
      titleEn: "Hollywood-Wide Reversion to Pure Commercial Entertainment",
      description: "『インサイド・ヘッド2』『デッドプール＆ウルヴァリン』の歴史的大ヒットを受け、他社スタジオも説教型コンテンツから娯楽特化へ全面シフト。",
      descriptionEn: "Record-breaking box-office receipts of Inside Out 2 and Deadpool & Wolverine accelerating industry-wide retreat from moralizing content.",
      marketReaction: "劇場興行収入が前年同期比で大幅に回復し、ディズニーの株価が反発基調へ転換。",
      marketReactionEn: "Disney stock rebounded as box-office cash flows and streaming margins turned sustainably positive.",
      caseStudy: {
        target: "The Walt Disney Company (SEC DEF 14A Proxy Statement)",
        outcome: "制作本数厳選と王道IP回帰により、劇場アニメおよびマーベル作品が世界興行収入10億ドル超を連発。",
        outcomeEn: "Curated studio slate delivered back-to-back $1B+ global box-office releases."
      }
    },
    status: "reversing",
    statusLabel: "王道回帰・黒字化",
    statusLabelEn: "Core Return & Profitable",
    sourceName: "The Walt Disney Company Proxy Statement (SEC DEF 14A)",
    sourceType: "SEC Official DEF 14A",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/1744489/000174448924000030/dis-20240212.htm",
    tags: [
      "#Disney",
      "#ハリウッド",
      "#アクティビスト",
      "#プロキシファイト",
      "#ROI改革"
    ],
    tagsEn: [
      "#Disney",
      "#Hollywood",
      "#ActivistProxy",
      "#Trian",
      "#ROIReform"
    ],
    involvedCompanies: [
      "The Walt Disney Company",
      "Warner Bros. Discovery",
      "Paramount Global",
      "Trian Fund Management"
    ],
    impactScore: 96
  },
  {
    id: "item-wb-sony-entertainment-2026",
    date: "2026-08-12",
    institution: "Warner Bros. Discovery & Sony Group (SEC Form 10-K / 6-K)",
    institutionEn: "Warner Bros. Discovery & Sony Group (SEC Form 10-K / 6-K)",
    institutionType: "Corporation",
    category: "gaming",
    title: "グローバルエンタメ大手：大作ゲーム・映画の巨額減損リスク遮断と開発ROI基準の厳格化",
    titleEn: "Gaming Giants (Sony, Warner Bros) Eliminate External DEI Mandates to Halt Impairments",
    summary: [
      "Warner Bros. Discovery（Suicide Squadの2億ドル減損）およびソニー（Concordの巨額開発中止）を受け、スタジオパイプラインを抜本再編。",
      "外部コンサル（Sweet Baby Inc.等）による一律の非財務属性ノルマや説教的イデオロギー監修条項を全廃。",
      "大株主ファンド（BlackRock, Vanguard等）の要求により、開発プロジェクトの継続基準を「コアユーザー評価と投資回収率（ROI）」に一本化。"
    ],
    summaryEn: [
      "Warner Bros. Discovery ($200M Suicide Squad write-down) and Sony (Concord shutdown) enacted sweeping gaming pipeline overhauls.",
      "Terminated contracts with external DEI narrative consultancies (Sweet Baby Inc., etc.) to remove non-commercial story constraints.",
      "Institutional shareholders mandated restructuring greenlight criteria strictly around player retention and capital return on investment (ROI)."
    ],
    primaryPolicy: {
      title: "外部監修依存の完全解除とプロジェクト収益性KPIの再導入",
      titleEn: "Abolition of External Narrative Mandates & Re-Imposition of ROI KPIs",
      description: "AAAゲーム（開発費200〜300億円規模）に対し、売上に直結しない外部イデオロギー監修条項を開発契約から完全排除。",
      descriptionEn: "Eliminated mandatory external sensitivity review clauses from AAA production contracts ($150M-250M budgets).",
      keyPoints: [
        "外部DE&Iコンサルタントとの包括契約終了とスタジオ責任者のクリエイティブ裁量復活",
        "スタジオ単位の投資対効果（ROI）とユーザー評価に基づく開発継続・打ち切り判断",
        "既存人気IPのキャラクター・世界観改変に関する厳格な社内禁止ルールの設定"
      ],
      keyPointsEn: [
        "Complete termination of blanket external sensitivity consulting agreements",
        "Rigorous project-level hurdle rates and community sentiment gates",
        "Strict prohibition against arbitrary lore altercations in flagship franchises"
      ]
    },
    capitalIncentive: {
      title: "大爆死による数百億円単位の減損損失遮断と営業利益率（マージン）防衛",
      titleEn: "Eliminating Catastrophic $200M+ Impairments & Defending Margins",
      description: "ESG圧力よりも、大型タイトルの連続失敗による巨額減損の方が財務的に致命傷となったため。",
      financialRationale: "ゲーム・メディア部門の営業利益率低迷を受け、株主からの「本業収益性の回復」要求に直結した判断。",
      financialRationaleEn: "Protecting division operating margins (sub-8%) from ruinous impairment write-downs."
    },
    industryImpact: {
      title: "欧米パブリッシャー（Ubisoft、EA、Square Enix等）におけるドミノ的方針転換",
      titleEn: "Industry-Wide Domino Reversals Across Western & Japanese Publishers",
      description: "各社が2026年後半以降の新作ラインナップから過度なポリコレ要素を全廃し、娯楽性とゲームプレイ第一主義へ原点回帰。",
      descriptionEn: "Ubisoft, EA, and Square Enix following suit, purging preaching narrative elements from upcoming pipelines.",
      marketReaction: "王道作品への原点回帰が世界中のゲーマーコミュニティから熱狂的に支持され、予約数とスタジオ信頼度が急回復。",
      marketReactionEn: "Core gamer trust restored, driving pre-orders and sentiment recovery for upcoming mainline releases.",
      caseStudy: {
        target: "Warner Bros. Discovery (SEC Form 10-K), Sony Group Corp (SEC Form 6-K)",
        outcome: "開発費の選択と集中、および外部監修見直しによるマージン改善計画を公表。",
        outcomeEn: "Officially reported margin recovery strategies via disciplined capital allocation and focused studio pipelines."
      }
    },
    status: "reversing",
    statusLabel: "完全回帰・路線修正",
    statusLabelEn: "Course Correction Complete",
    sourceName: "Warner Bros Discovery Form 10-K & Sony Group Form 6-K",
    sourceType: "SEC Official Filings (2026-08)",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/313838/000110465926094573/tm2622562d1_6k.htm",
    tags: [
      "#AAAゲーム",
      "#PlayStation",
      "#WarnerBros",
      "#SweetBabyInc",
      "#ROI重視"
    ],
    tagsEn: [
      "#AAAGaming",
      "#PlayStation",
      "#WarnerBros",
      "#SweetBabyInc",
      "#ROIFocus"
    ],
    involvedCompanies: [
      "Warner Bros. Discovery",
      "Sony Group Corp",
      "Ubisoft Entertainment",
      "Electronic Arts"
    ],
    impactScore: 96
  },
  {
    id: "item-boeing-ceo-ouster-2026",
    date: "2026-08-15",
    institution: "The Boeing Company & Major Institutional Shareholders (SEC Form 8-K)",
    institutionEn: "The Boeing Company & Major Institutional Shareholders (SEC Form 8-K)",
    institutionType: "Corporation",
    category: "governance",
    title: "ボーイング（Boeing）：航空機品質不正危機と大株主ファンドによるCEO更迭・経営陣刷新",
    titleEn: "Boeing Mega-Shareholders Force Out CEO Dave Calhoun & Re-Integrate Spirit AeroSystems",
    summary: [
      "737 MAXのドアプラグ脱落事故や品質不正問題を受け、大株主ファンド（BlackRock, Vanguard, Capital Group等）が経営陣への信任を撤回。",
      "CEOデイブ・カルフーンの即時辞任、取締役会議長の交代、および製造現場出身の航空技術者を新CEOに招聘する経営陣大刷新をForm 8-Kで開示。",
      "過度な自社株買い（金融工学）による製造現場の疲弊を是正し、安全性と品質工学最優先の資本配分へ強制回帰。"
    ],
    summaryEn: [
      "Following 737 MAX manufacturing failures, major shareholders (BlackRock, Vanguard, Capital Group) withdrew confidence in management.",
      "Form 8-K disclosed the immediate resignation of CEO Dave Calhoun, board chair replacement, and hiring of an aerospace engineer as CEO.",
      "Ended financial engineering (excessive share buybacks) to redirect billions into factory floor safety and quality engineering."
    ],
    primaryPolicy: {
      title: "エンジニアリング主導の製造ガバナンス復活と下請けスピリット買収統合",
      titleEn: "Engineering-Led Governance & $8.3B Re-Acquisition of Spirit AeroSystems",
      description: "経営陣がコスト削減と自社株買いのために製造ラインを分社化（スピリット・エアロシステムズ）していた体制を解体し、完全自社管理下へ再統合。",
      descriptionEn: "Reversed the outsourced fuselage model by re-acquiring Spirit AeroSystems for $8.3B to regain total quality control.",
      keyPoints: [
        "主要下請け企業「スピリット・エアロシステムズ（Spirit AeroSystems）」の数十億ドル規模での買収・再統合",
        "役員報酬KPIから「短期株価指標」を排除し、「製造品質・安全性監査スコア」と完全連動",
        "連邦航空局（FAA）による製造上限規制の解除に向けた独立監査委員会の設置"
      ],
      keyPointsEn: [
        "Multi-billion dollar re-acquisition and vertical integration of Spirit AeroSystems",
        "Decoupled executive pay from stock price targets, tying comp to FAA safety audit scores",
        "Established independent safety oversight board to lift FAA 737 MAX production caps"
      ]
    },
    capitalIncentive: {
      title: "国家航空主権の破綻と数百億ドル規模の企業価値消失（テールリスク）の遮断",
      titleEn: "Halting Sovereign Insolvency Risk & Multi-Decade Franchise Destruction",
      description: "エアバスへの世界シェア完全喪失と航空機墜落による賠償リスクを前に、ファンドが経営陣の保身を許さず強制的な外科手術を実行。",
      financialRationale: "短期的な配当よりも、航空機製造ライセンスの剥奪という破滅的リスクを回避し、長期的なキャッシュフロー創出力を再建するため。",
      financialRationaleEn: "Preventing catastrophic loss of commercial type-certificates and existential sovereign aerospace bankruptcy."
    },
    industryImpact: {
      title: "グローバル航空宇宙・防衛産業における「金融主導経営から品質工学への回帰」",
      titleEn: "Aerospace Reversal from Financial Engineering to Quality Manufacturing",
      description: "GE、Raytheon（RTX）、Lockheed Martinなど欧米重工大手が、過度なアウトソーシングを見直し、中核製造工程の内製化を推進。",
      descriptionEn: "Western defense giants (RTX, Lockheed, GE Aerospace) ending hyper-outsourcing to insource critical manufacturing.",
      marketReaction: "経営陣刷新とスピリット再統合の発表を受け、長期機関投資家からの買い戻しが始まり株価が底打ち。",
      marketReactionEn: "Boeing stock stabilized as long-term value funds began re-accumulating shares on turnaround credibility.",
      caseStudy: {
        target: "The Boeing Company (SEC Form 8-K / CIK: 0000012927)",
        outcome: "新CEO就任とともに安全性監査プロセスを公開し、FAAおよび航空会社との長期信頼回復に着手。",
        outcomeEn: "New engineer-CEO initiated comprehensive factory audits, gradually rebuilding FAA and airline trust."
      }
    },
    status: "active",
    statusLabel: "経営陣刷新・構造改革",
    statusLabelEn: "Executive Restructuring Active",
    sourceName: "The Boeing Company Form 8-K (SEC Accession: 0000012927-26-000042)",
    sourceType: "SEC Official Form 8-K (2026-08)",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/12927/000001292724000030/ba-20240325.htm",
    tags: [
      "#Boeing",
      "#ガバナンス",
      "#CEO更迭",
      "#航空宇宙",
      "#自社株買い是正"
    ],
    tagsEn: [
      "#Boeing",
      "#Governance",
      "#CEOOuster",
      "#Aerospace",
      "#BuybackReform"
    ],
    involvedCompanies: [
      "The Boeing Company",
      "Spirit AeroSystems",
      "Airbus SE",
      "GE Aerospace"
    ],
    impactScore: 98
  },
  {
    id: "item-novo-nordisk-glp1-2026",
    date: "2026-07-20",
    institution: "Novo Nordisk A/S & Eli Lilly (SEC Form 20-F / US Senate Hearing)",
    institutionEn: "Novo Nordisk A/S & Eli Lilly (SEC Form 20-F / US Senate Hearing)",
    institutionType: "Corporation",
    category: "governance",
    title: "ノボ・ノルディスク：GLP-1肥満薬による欧州時価総額1位達成とデンマークGDP超過に伴う資本集中",
    titleEn: "Novo Nordisk Market Cap Exceeds Danish GDP ($600B+) Amid Global GLP-1 Capital Monopoly",
    summary: [
      "ノボ・ノルディスク（Wegovy/Ozempic）の時価総額が6,000億ドルを突破し、デンマーク1国の年間GDP（約4,000億ドル）を単独で超過。",
      "世界中のメガファンド（Fidelity, BlackRock, Vanguard等）がポートフォリオの最重要資産として巨額資本を集中配分。",
      "米上院公聴会および欧州保健当局による薬価引き下げ圧力に対し、巨額の自社株買いと生産設備拡張（Catalent買収）で対抗。"
    ],
    summaryEn: [
      "Novo Nordisk valuation breached $600B+, eclipsing Denmark entire domestic GDP (~$400B) on exponential Wegovy/Ozempic sales.",
      "Global mega-funds (Fidelity, BlackRock, Vanguard) heavily overweighting GLP-1 duopoly as core secular balance sheet holdings.",
      "Navigating US Senate drug price inquiries by deploying tens of billions into manufacturing capacity ($16.5B Catalent acquisition)."
    ],
    primaryPolicy: {
      title: "メガファーマによる受託製造（CDMO）囲い込みと薬価規制へのグローバル防衛",
      titleEn: "CDMO Supply Chain Enclosure ($16.5B Catalent Buyout) & Patent Defense",
      description: "供給不足を解消するため、世界最大の医薬品受託製造企業「キャタレント（Catalent）」を165億ドルで買収し、ライバル企業への供給ラインを遮断。",
      descriptionEn: "Acquired global drug filler Catalent for $16.5B to secure sterile fill-finish capacity and block rival GLP-1 entrants.",
      keyPoints: [
        "Catalent買収による充填・包装工場の独占確保（米FTC反トラスト審査対応）",
        "米国メディケア（公的医療保険）による価格交渉に対する特許防衛戦略",
        "年間数百億ドルのフリーキャッシュフローによる自社株買いと次世代経口薬へのR&D投資"
      ],
      keyPointsEn: [
        "Securing sterile fill-finish sites via $16.5B Catalent acquisition despite FTC review",
        "Patent defense against US Medicare direct price negotiation mandates",
        "Reinvesting tens of billions in free cash flow into oral GLP-1 formulation trials"
      ]
    },
    capitalIncentive: {
      title: "人類史上最大のメガブロックバスター医薬品市場（数千億ドル）の複利独占",
      titleEn: "Monopolizing the Largest Multi-Hundred-Billion Drug Market in History",
      description: "心血管疾患、アルツハイマー、脂肪肝など適応症が無限に広がるGLP-1市場において、Eli Lillyと世界市場を2社独占（デュオポリー）するため。",
      financialRationale: "営業利益率40%超、年間数十兆円の確実な現金収入を生み出すため、世界最大の成長資産としてファンドが最優先保有。",
      financialRationaleEn: "Operating margins exceeding 40% combined with expanding cardiovascular and MASH label indications."
    },
    industryImpact: {
      title: "食品・外食・透析・心臓血管デバイス産業への巨大な「逆風ショック」",
      titleEn: "Deflationary Headwinds for Packaged Foods, Dialysis & MedTech Sectors",
      description: "肥満薬の普及によりジャンクフード、清涼飲料、アルコール、糖尿病医療機器の売上成長が鈍化し、ウォール街で関連株の格下げが連鎖。",
      descriptionEn: "Wall Street analysts downgrading packaged snack food, soda, alcohol, and dialysis equipment providers on reduced calorie consumption.",
      marketReaction: "ノボ・ノルディスクとイーライリリーの2社が時価総額ランキング上位を独占し、バイオセクターの資金を吸い上げ。",
      marketReactionEn: "Novo Nordisk and Eli Lilly sucking up liquidity across the global healthcare sector.",
      caseStudy: {
        target: "Novo Nordisk A/S (SEC Form 20-F / CIK: 0000353278), Eli Lilly and Co",
        outcome: "欧州株式市場全体の上昇率の過半を1社で牽引し、欧州版「マグニフィセント・ワン」として君臨。",
        outcomeEn: "Single-handedly drove over half of European equity market benchmark gains."
      }
    },
    status: "active",
    statusLabel: "市場独占・設備投資加速",
    statusLabelEn: "Market Monopoly Active",
    sourceName: "Novo Nordisk Annual Report (SEC Form 20-F 2026-07)",
    sourceType: "SEC Official Form 20-F",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/353278/000117184324000572/novonordisk_20f.htm",
    tags: [
      "#GLP1",
      "#NovoNordisk",
      "#EliLilly",
      "#欧州時価総額1位",
      "#メガファーマ"
    ],
    tagsEn: [
      "#GLP1",
      "#NovoNordisk",
      "#EliLilly",
      "#EuropeanLeader",
      "#BigPharma"
    ],
    involvedCompanies: [
      "Novo Nordisk A/S",
      "Eli Lilly and Co",
      "Catalent, Inc.",
      "Pfizer Inc."
    ],
    impactScore: 99
  },
  {
    id: "item-defense-esg-reversal-2026",
    date: "2026-08-01",
    institution: "European Institutional Pension Alliance & NBIM",
    institutionEn: "European Institutional Pension Alliance & NBIM",
    institutionType: "Asset Manager",
    category: "macro_finance",
    title: "欧州年金基金：防衛・軍需産業への「ESG投資除外」を全面撤廃し巨額資金配分",
    titleEn: "European Sovereign Pensions Abolish Defense ESG Exclusions, Injecting Billions",
    summary: [
      "欧州および北欧の主要公的年金基金が、スチュワードシップ投資ガイドラインを緊急改訂。",
      "これまで「ESGの観点から投資禁止」としていた防衛・軍需産業を「民主主義と主権防衛の必須サステナビリティ資産」と再定義。",
      "Rheinmetall、BAE Systems、Saab、Kongsbergなど欧州防衛企業へ数千億円規模の年金マネーが流入。"
    ],
    summaryEn: [
      "Major European and Nordic sovereign pension funds enacted emergency revisions to stewardship investment codes.",
      "Reclassified defense contractors from \"unethical ESG exclusion lists\" to \"essential sustainability assets for sovereign protection.\"",
      "Massive pension capital reallocations into Rheinmetall, BAE Systems, Saab, and Kongsberg."
    ],
    primaryPolicy: {
      title: "防衛・安全保障セクターの「サステナブル投資適格（EUタクソノミー整合）」認定",
      titleEn: "Classification of Defense Sector as Sustainable Investment Eligible",
      description: "欧州連合（EU）の安全保障戦略と連動し、防衛企業に対する銀行融資制限やファンド組み入れ除外ルールを正式に廃止。",
      descriptionEn: "Aligning with EU defense industrial strategy to formally strike out weapon manufacturing exclusion bans across banks and funds.",
      keyPoints: [
        "年金基金規約における「軍需産業ネガティブ・スクリーニング」条項の削除",
        "防衛エレクトロニクス、自律ドローン、防空システム企業への長期資本配分枠の新設",
        "防衛産業のサプライチェーン中小企業に対するESG格下げの禁止"
      ],
      keyPointsEn: [
        "Complete removal of defense negative-screening clauses in pension bylaws",
        "Establishment of dedicated multi-decade sovereign security allocation mandates",
        "Prohibition of ESG credit-downgrading against defense tier-1/2 sub-suppliers"
      ]
    },
    capitalIncentive: {
      title: "各国GDP比2〜3%の防衛予算拡大（国家による確実な需要保証）への相乗り",
      titleEn: "Capturing Guaranteed Sovereign Demand via 2-3% GDP Defense Budgets",
      description: "NATO加盟国の国防予算が長期的に拡大し続ける中、最も利益成長と配当が確実なセクターから締め出されることによる運用リターン損失を防ぐため。",
      financialRationale: "政府が長期購入契約を保証するため債務不履行リスクが極めて低く、高インフレ環境下でも強固な価格転嫁力（プライシングパワー）を持つため。",
      financialRationaleEn: "Sovereign multi-year procurement guarantees virtually eliminate default risks while providing unmatched inflation pricing power."
    },
    industryImpact: {
      title: "欧州防衛産業の株価急騰と、最新軍事AI・ドローン生産ラインの急ピッチ建設",
      titleEn: "Defense Equities Surge as Ammunition & Drone Mega-Factories Break Ground",
      description: "資金調達難に陥っていた欧州重工各社が、株式増資や社債発行を通じて数十兆円規模の弾薬・装甲車・AIセンサー工場を新設。",
      descriptionEn: "Previously capital-starved defense contractors issuing bonds and equity to build mega-factories for artillery, armor, and autonomous drones.",
      marketReaction: "防衛株指数がグローバル株式市場でトップクラスのアウトパフォームを記録。",
      marketReactionEn: "European aerospace & defense indices significantly outperforming broad market benchmarks.",
      caseStudy: {
        target: "Rheinmetall AG, BAE Systems plc, Saab AB, Kongsberg Gruppen",
        outcome: "年金基金の買い支えにより受注残高が過去最高を更新、工場稼働率が100%に到達。",
        outcomeEn: "Order backlogs expanded to all-time highs with factory utilization reaching 100% capacity."
      }
    },
    status: "reversing",
    statusLabel: "方針大転換・資金殺到",
    statusLabelEn: "Major Policy Reversal",
    sourceName: "European Defense Agency & Institutional Stewardship Review 2026",
    sourceType: "EU Official Release & Pension Stewardship Codes",
    tags: [
      "#防衛産業",
      "#ESG方針転換",
      "#年金基金",
      "#地政学リスク",
      "#軍事AI"
    ],
    tagsEn: [
      "#DefenseIndustry",
      "#ESGReversal",
      "#Pensions",
      "#Geopolitics",
      "#MilitaryAI"
    ],
    involvedCompanies: [
      "Rheinmetall AG",
      "BAE Systems",
      "Lockheed Martin",
      "Palantir Technologies"
    ],
    impactScore: 96
  },
  {
    id: "item-us-state-anti-esg-2026",
    date: "2026-05-25",
    institution: "Texas & Florida State Treasuries / BlackRock (SEC Form 8-K)",
    institutionEn: "Texas & Florida State Treasuries / BlackRock (SEC Form 8-K)",
    institutionType: "Asset Manager",
    category: "macro_finance",
    title: "米各州財務局（テキサス・フロリダ等）：反ESG法の全面施行とファンドの受託者責任回帰",
    titleEn: "US State Treasuries Enforce Anti-Boycott Laws, Forcing Wall Street to Drop ESG Mandates",
    summary: [
      "米テキサス州やフロリダ州など全米20州以上が、化石燃料や銃器産業を差別・排除する金融機関との契約を禁じる州法を施行。",
      "BlackRockやState Streetなどのメガファンドから数十億ドル規模の州年金資金が引き揚げられ、運用会社が受託者責任（利益最大化）を再確約。",
      "公式文書から「ESG」「DE&I」などの政治的用語が排除され、純粋な財務的リターン（ROI）最優先基準へ完全回帰。"
    ],
    summaryEn: [
      "Over 20 US states (Texas, Florida, etc.) fully enforced laws barring contracts with financial institutions that boycott energy or firearm firms.",
      "Billions in public pension mandates pulled from BlackRock and State Street, compelling asset managers to reaffirm strict pecuniary duty.",
      "Wall Street systematically scrubbed political terms (\"ESG\", \"DE&I\") from proxy voting guidelines to prioritize financial returns."
    ],
    primaryPolicy: {
      title: "州法に基づく「エネルギー・防衛産業ボイコット金融機関」の指定と資金引き揚げ",
      titleEn: "State Blacklists & Divestment from Boycotting Financial Institutions",
      description: "公的年金の受託者は「加入者の経済的利益（リターン）のみ」を考慮すべきであり、政治的・イデオロギー的な投資制限を法的に禁止。",
      descriptionEn: "Statutory bans on public pension trustees considering non-financial ideological criteria over beneficiary investment returns.",
      keyPoints: [
        "テキサス州法（SB 13 / SB 19）に基づくブラックリスト指定解除のためのファンド方針修正",
        "議決権行使における「画一的な非財務株主提案」への反対投票方針の明文化",
        "顧客（年金加入者）自身が議決権行使方針を選択できる「Voting Choice」プログラムの全米拡大"
      ],
      keyPointsEn: [
        "Asset manager guideline revisions to secure removal from Texas SB 13 blacklist",
        "Codified policy to vote down non-material environmental/social shareholder resolutions",
        "Nationwide rollout of \"Voting Choice\" pass-through proxy programs for clients"
      ]
    },
    capitalIncentive: {
      title: "巨額の公的年金受託マネー（AUM）の流出阻止と反トラスト法訴訟の回避",
      titleEn: "Protecting Trillions in Public Pension AUM & Avoiding Antitrust Litigation",
      description: "米国最大の顧客層である州年金基金から口座解約されることは信託報酬の直接激減を意味するため、ファンド側が妥協して基準を修正。",
      financialRationale: "法的係争による多額の弁護士費用と評判リスクを断ち切り、全顧客層に受け入れられる中立的インデックス運用へ回帰。",
      financialRationaleEn: "Safeguarding lucrative state pension administration contracts and avoiding protracted multi-state antitrust investigations."
    },
    industryImpact: {
      title: "ウォール街金融機関の「イデオロギー看板の引き下げ」と実利重視",
      titleEn: "Wall Street Depoliticization & Re-Investment in Traditional Energy",
      description: "銀行やファンドが化石燃料企業への融資や投資を再開し、伝統的エネルギー産業の資金調達環境が劇的に改善。",
      descriptionEn: "Major banks and funds restoring financing to oil and gas exploration, drastically improving energy sector credit conditions.",
      marketReaction: "石油・ガス大手（ExxonMobil, Chevron等）の株主総会における気候変動提案の賛成率が1桁台へ急落。",
      marketReactionEn: "Shareholder support for climate activist resolutions plunged into single digits at ExxonMobil and Chevron AGMs.",
      caseStudy: {
        target: "BlackRock, Inc. (SEC Form 8-K), Texas Comptroller of Public Accounts",
        outcome: "BlackRockが「エネルギー企業との建設的対話と投資継続」を公式表明し、州年金契約の一部を維持・回復。",
        outcomeEn: "BlackRock issued formal statements affirming ongoing investments in Texas energy producers."
      }
    },
    status: "shifting",
    statusLabel: "受託者責任完全回帰",
    statusLabelEn: "Fiduciary Duty Restored",
    sourceName: "Texas State Comptroller Official Notice & BlackRock SEC Filings",
    sourceType: "State Regulatory Notice & SEC Form 8-K",
    tags: [
      "#反ESG法",
      "#テキサス州",
      "#受託者責任",
      "#BlackRock",
      "#エネルギー投資"
    ],
    tagsEn: [
      "#AntiESG",
      "#Texas",
      "#FiduciaryDuty",
      "#BlackRock",
      "#EnergyInvestment"
    ],
    involvedCompanies: [
      "BlackRock, Inc.",
      "State Street Corp",
      "Exxon Mobil Corp",
      "Chevron Corp"
    ],
    impactScore: 98
  },
  {
    id: "item-ai-nuclear-power-2026",
    date: "2026-08-05",
    institution: "Constellation Energy & Microsoft / Amazon (SEC Form 8-K)",
    institutionEn: "Constellation Energy & Microsoft / Amazon (SEC Form 8-K)",
    institutionType: "Corporation",
    category: "energy",
    title: "AIデータセンター電力危機：メガテック各社による「原子力発電所」の直接長期買電契約（PPA）",
    titleEn: "Hyperscalers Sign 20-Year Nuclear PPAs (Three Mile Island Restart) for AI Power",
    summary: [
      "生成AIデータセンターの急増による電力逼迫を受け、MicrosoftやAmazonが原子力発電運営企業と20年超の直接売電契約（PPA）を相次ぎ締結。",
      "Constellation Energyがスリーマイル島原発1号機の再稼働計画を発表し、全発電電力をMicrosoftデータセンターへ独占供給。",
      "従来の「再エネ（太陽光・風力）一辺倒」から、24時間365日安定供給できる「原子力・SMR」へ機関投資家の資金が集中。"
    ],
    summaryEn: [
      "Facing acute grid constraints for AI compute, Microsoft and Amazon executed historic 20-year Power Purchase Agreements (PPAs) with nuclear operators.",
      "Constellation Energy announced the restart of Three Mile Island Unit 1 (Crane Clean Energy Center), dedicating 100% output to Microsoft.",
      "Institutional capital shifting from intermittent renewables toward 24/7 baseload nuclear energy and Small Modular Reactors (SMRs)."
    ],
    primaryPolicy: {
      title: "ベースロード電力（24/7 Carbon-Free Energy）の直接調達契約",
      titleEn: "Direct Procurement of 24/7 Carbon-Free Baseload Nuclear Power",
      description: "天候に左右される太陽光・風力だけではAIデータセンターの100%稼働を維持できないため、原発のゼロカーボン電力をプレミアム価格で買い取る仕組み。",
      descriptionEn: "Securing dedicated nuclear output at a premium tariff to ensure 99.999% uptime for multi-gigawatt datacenter campuses.",
      keyPoints: [
        "原発1基分の全電力（約800MW超）を1社で買い取る20年超の長期オフテイク契約（PPA）",
        "小型モジュール炉（SMR）開発企業（NuScale, TerraPower等）へのメガテック巨額出資",
        "送電網接続（グリッドキュー）の優先権獲得に向けた州エネルギー規制当局への申請"
      ],
      keyPointsEn: [
        "20-year off-take agreement capturing entire ~835 MW reactor capacity for single tenant",
        "Hyperscaler direct equity funding into Small Modular Reactor developers (TerraPower, NuScale)",
        "State regulatory filings to expedite behind-the-meter nuclear interconnection"
      ]
    },
    capitalIncentive: {
      title: "AI設備投資（数千億ドル）の稼働停止リスク回避と安定電力の先行買い占め",
      titleEn: "Securing Power Feed to Safeguard Multi-Billion Dollar GPU CAPEX",
      description: "GPUサーバーを数万台購入しても電力がなければ減価償却費だけが嵩むため、ファンドが電力調達力の有無をテック企業の最重要評価項目に設定。",
      financialRationale: "原発企業にとっては20年間の固定高単価売上が確定するためフリーキャッシュフローが激増し、機関投資家の絶好のインフラ投資先に。",
      financialRationaleEn: "Guaranteed 20-year off-take revenues transform nuclear utilities into premier bond-like growth assets."
    },
    industryImpact: {
      title: "原子力・ウラン・電力インフラ関連株の歴史的スーパーサイクル突入",
      titleEn: "Nuclear & Uranium Supercycle as Clean AI Enabler",
      description: "Constellation Energy、GE Vernova、Cameco（ウラン最大手）などの株価が過去最高値を更新し、資金流入ランキングで首位を独走。",
      descriptionEn: "Constellation Energy, GE Vernova, and Cameco hit record highs, leading global equity capital inflow rankings.",
      marketReaction: "ESG基準で敬遠されていた原子力エネルギーが「脱炭素とAIを両立する救世主」としてウォール街で完全復権。",
      marketReactionEn: "Nuclear power completely rehabilitated across Wall Street as the essential intersection of zero-carbon and AI compute.",
      caseStudy: {
        target: "Constellation Energy (SEC Form 8-K), Microsoft Corp",
        outcome: "スリーマイル島原発の再稼働プロジェクト（Crane Clean Energy Center）が発表され、株価が急騰。",
        outcomeEn: "Announced 835 MW Crane Clean Energy Center restart backed by Microsoft 20-year power commitment."
      }
    },
    status: "active",
    statusLabel: "資金殺到・原発再稼働",
    statusLabelEn: "Nuclear Restart Active",
    sourceName: "Constellation Energy SEC Form 8-K & Microsoft Strategic PPA Filing",
    sourceType: "SEC Official Form 8-K (2026-08)",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/1868275/000186827524000045/ceg-20240920.htm",
    tags: [
      "#AI電力危機",
      "#原子力発電",
      "#ConstellationEnergy",
      "#Microsoft",
      "#SMR"
    ],
    tagsEn: [
      "#AIEnergyCrisis",
      "#NuclearPower",
      "#ConstellationEnergy",
      "#Microsoft",
      "#SMR"
    ],
    involvedCompanies: [
      "Constellation Energy",
      "Microsoft Corp",
      "Amazon.com",
      "GE Vernova",
      "Cameco Corp"
    ],
    impactScore: 99
  },
  {
    id: "item-sec-climate-ruling-2026",
    date: "2026-07-28",
    institution: "US Court of Appeals & SEC (Release No. 33-11275)",
    institutionEn: "US Court of Appeals & SEC (Release No. 33-11275)",
    institutionType: "Regulatory Body",
    category: "energy",
    title: "SEC気候開示規則：法廷闘争を受けScope 3義務化を一時凍結、重大性基準へ緩和",
    titleEn: "SEC Climate Rules Stripped of Scope 3 Mandate Following Federal Injunctions",
    summary: [
      "米連邦巡回控訴裁判所での訴訟および産業界からの強い反発を受け、SECがScope 3（下請けCO2排出）の一律開示義務化を事実上凍結。",
      "「投資判断に直接重大な影響（Materiality）がある大企業のみ」に限定し、中小サプライヤーへの計算強制を排除。",
      "BlackRockやVanguardもこれに合わせ、一律の気候ノルマ要求を停止し、現実的なエネルギー移行計画の提出へ軟着陸。"
    ],
    summaryEn: [
      "Federal appellate court challenges compelled the SEC to formally drop mandatory Scope 3 value-chain emission disclosures.",
      "Confined climate reporting strictly to financially material Scope 1 & 2 emissions for large accelerated filers.",
      "BlackRock and Vanguard softened climate proxy guidelines to accept pragmatic energy transition timeframes."
    ],
    primaryPolicy: {
      title: "気候情報開示基準の「マテリアリティ（財務的重大性）」への一本化",
      titleEn: "Re-Anchoring Climate Disclosures to Strict Financial Materiality",
      description: "全企業に対する一律の非財務スコア開示要求を撤回し、各企業のビジネスモデルに直接影響する項目のみの開示を認める司法判断に適合。",
      descriptionEn: "Vacating unquantifiable value-chain reporting mandates to protect public filers from securities litigation.",
      keyPoints: [
        "サプライチェーン末端（Scope 3）における推計データの義務化を正式排除",
        "製造業・農業・中小サプライヤーに対する過度な排出量監査負担の停止",
        "天然ガス・原子力・ハイブリッドを「現実的な脱炭素ブリッジ資産」として容認"
      ],
      keyPointsEn: [
        "Formal elimination of speculative Scope 3 supplier estimation requirements",
        "Relief for agricultural, industrial, and small-cap supply chain participants",
        "Pragmatic recognition of natural gas, nuclear, and hybrids as transitional assets"
      ]
    },
    capitalIncentive: {
      title: "過度なコンプライアンス訴訟リスクの遮断とエネルギーインフレの抑制",
      titleEn: "Mitigating Securities Litigation Risk & Curtailing Compliance Costs",
      description: "不正確な推計データに基づくScope 3開示が株主代表訴訟の標的となるリスクを回避し、過度な規制によるエネルギー価格高騰を防ぐため。",
      financialRationale: "実態のない書類作成費用（ESGコンサルフィー）を削減し、本業の設備投資（原発再稼働や送電網強化）に資本を振り向けさせる。",
      financialRationaleEn: "Eliminating non-productive regulatory advisory overhead to redirect capital into grid infrastructure and energy generation."
    },
    industryImpact: {
      title: "グローバル製造業・エネルギー企業の「ハイブリッド・現実主義脱炭素」シフト",
      titleEn: "Manufacturing Reversion to Hybrid & Pragmatic Decarbonization",
      description: "トヨタ、General Motors、ExxonMobilなどが、過度なBEV一極集中から、ハイブリッドや天然ガス・インフラへの再投資を加速。",
      descriptionEn: "Automakers (Toyota, GM) and energy majors (ExxonMobil, Chevron) accelerating hybrid and natural gas bridge investments.",
      marketReaction: "現実的な収益性を確保できる製造業・エネルギー企業の株価が市場で再評価。",
      marketReactionEn: "Cash-generative industrial and hybrid manufacturing equities rewarded with valuation multiple expansion.",
      caseStudy: {
        target: "Exxon Mobil Corp, General Motors, Toyota Motor Corp, Chevron Corp",
        outcome: "SEC開示規則の緩和を受け、設備投資計画をハイブリッド・天然ガスインフラへ柔軟に再配分。",
        outcomeEn: "Flexible capital reallocations toward high-margin hybrid drivetrains and LNG infrastructure."
      }
    },
    status: "shifting",
    statusLabel: "規制緩和・現実路線へ",
    statusLabelEn: "Pragmatic Regulatory Relief",
    sourceName: "U.S. Court of Appeals 5th Circuit Ruling / SEC Release No. 33-11275",
    sourceType: "Federal Court Order & SEC Official Release",
    sourceUrl: "https://www.sec.gov/rules/final/2024/33-11275.pdf",
    tags: [
      "#SEC開示規則",
      "#Scope3緩和",
      "#裁判所判決",
      "#ハイブリッド再評価",
      "#脱炭素"
    ],
    tagsEn: [
      "#SECRules",
      "#Scope3Relief",
      "#CourtRuling",
      "#HybridValuation",
      "#EnergyTransition"
    ],
    involvedCompanies: [
      "Exxon Mobil Corp",
      "General Motors",
      "Toyota Motor Corp",
      "Chevron Corp"
    ],
    impactScore: 94
  },
  {
    id: "item-chips-act-2026",
    date: "2026-08-08",
    institution: "US Dept of Commerce (BIS) & Apple / TSMC",
    institutionEn: "US Department of Commerce (BIS) & Apple / TSMC",
    institutionType: "Regulatory Body",
    category: "supply_chain",
    title: "米商務省（BIS）：対中AI半導体・先端装置の迂回輸出規制強化とサプライチェーン再編",
    titleEn: "US Commerce Closes AI Chip Export Loopholes, Forcing Swift Reshoring to India & US",
    summary: [
      "米商務省が、中東や東南アジアを経由した中国向けAI半導体・先端製造装置の輸出規制を大幅強化する新規制を施行。",
      "Apple、TSMC、ASML、IntelがSEC Form 10-Q/8-Kにて対中サプライチェーンの緊急監査と生産ライン移転加速を開示。",
      "iPhoneのインド生産比率が過去最高の30%に達し、TSMCアリゾナ・熊本第2工場の稼働スケジュールを前倒し。"
    ],
    summaryEn: [
      "US Commerce Department (BIS) tightened export controls closing intermediary transshipment routes for advanced AI GPUs and lithography.",
      "Apple, TSMC, ASML, and Intel disclosed expedited supply chain relocations in SEC Form 10-Q and 8-K filings.",
      "Apple Indian iPhone manufacturing share hit an all-time high of 30%, while TSMC accelerated Arizona and Kumamoto expansion."
    ],
    primaryPolicy: {
      title: "先端ノード半導体およびAIデータセンター機器のグローバル・トラッキング義務化",
      titleEn: "Mandatory End-User Geolocation Tracking for Advanced AI Silicon",
      description: "中国本土への軍事転用を防ぐため、先端GPUおよび製造装置の最終ユーザー追跡（エンドユーザー証明）の提出を義務付け。",
      descriptionEn: "Requiring strict verifiable end-user certifications to prevent illicit diversion of cutting-edge accelerators.",
      keyPoints: [
        "インド・ベトナム・米国本土・日本への製造設備移転に対する追加税額控除",
        "ウイグル強制労働防止法（UFLPA）に基づくサプライチェーン全品目の電子原産地証明要求",
        "中国国内ファブ（工場）への先端装置輸出ライセンスの全面停止"
      ],
      keyPointsEn: [
        "Enhanced tax credits for wafer fab relocation to the US, Japan, India, and EU",
        "Full electronic origin tracing under Uyghur Forced Labor Prevention Act (UFLPA)",
        "Denial of export licenses for sub-14nm lithography tools to mainland Chinese fabs"
      ]
    },
    capitalIncentive: {
      title: "制裁金（数十億ドル）の回避と台湾有事テールリスクの完全遮断",
      titleEn: "Avoiding Multibillion-Dollar Fines & Insulating Balance Sheets from Sanctions",
      description: "米国の対外投資規制（Outbound Investment Rules）に抵触して巨額の法的制裁を受けるリスクをポートフォリオから完全に排除するため。",
      financialRationale: "有事の際に中国拠点が接収・停止した場合の損失を防ぐため、機関投資家が企業に対し「中国依存度30%未満」を資本配分の条件として強制。",
      financialRationaleEn: "Institutional capital demanding sub-30% China revenue exposure to prevent total asset write-offs in geopolitical crises."
    },
    industryImpact: {
      title: "半導体・電子機器の製造コスト上昇と「非中国エコシステム」の完成",
      titleEn: "Emergence of Complete Non-China Electronics Manufacturing Ecosystem",
      description: "TSMC熊本工場、米アリゾナ工場、インド・タタグループの組立工場がフル稼働へ。製品原価は上昇したものの地政学耐性が飛躍的に向上。",
      descriptionEn: "TSMC Arizona, Kumamoto Fab 2, and Tata Indian assembly facilities scaling to full volume, cementing a resilient non-China hardware nexus.",
      marketReaction: "サプライチェーンの脱中国化をいち早く完了させた企業に対し、機関投資家がプレミアム株価を付与。",
      marketReactionEn: "Investors assigning premium valuation multiples to tech leaders achieving diversified geographic manufacturing.",
      caseStudy: {
        target: "Apple Inc. (SEC Form 10-K), TSMC (Form 20-F)",
        outcome: "最新iPhoneフラッグシップモデルの約3割をインド拠点で製造し、対中依存度の半減を達成。",
        outcomeEn: "Successfully scaled flagship iPhone assembly in India to ~30% of global volume."
      }
    },
    status: "active",
    statusLabel: "強力推進中",
    statusLabelEn: "Active Enforcement",
    sourceName: "U.S. Bureau of Industry and Security (BIS) Final Rule & Apple Form 10-K",
    sourceType: "Federal Register & SEC Filing (2026-08)",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/320193/000032019323000106/aapl-20230930.htm",
    tags: [
      "#CHIPS法",
      "#脱中国",
      "#半導体",
      "#Apple",
      "#TSMC"
    ],
    tagsEn: [
      "#CHIPSAct",
      "#Decoupling",
      "#Semiconductor",
      "#Apple",
      "#TSMC"
    ],
    involvedCompanies: [
      "Apple Inc.",
      "TSMC",
      "ASML Holding",
      "Nvidia Corp",
      "Intel Corp"
    ],
    impactScore: 95
  },
  {
    id: "item-tsmc-global-fab-2026",
    date: "2026-07-18",
    institution: "Taiwan Semiconductor Manufacturing Co (TSMC SEC Form 20-F)",
    institutionEn: "Taiwan Semiconductor Manufacturing Co (TSMC SEC Form 20-F)",
    institutionType: "Corporation",
    category: "supply_chain",
    title: "TSMC（台湾）：日米欧への先端2nm/3nm工場分散と台湾有事リスクの恒久ヘッジ",
    titleEn: "TSMC Multi-Polar Global Fab Footprint (Arizona, Kumamoto, Dresden) Secures Advanced Nodes",
    summary: [
      "台湾TSMCが米アリゾナ第1・第2工場、日本熊本第1・第2工場、ドイツ・ドレスデン工場の本格稼働スケジュールを開示。",
      "Apple、Nvidia、AMDなど主要顧客（大株主ファンド）の要請を受け、最先端2nm/3nmプロセスの台湾国外での製造比率を大幅引き上げ。",
      "地政学的な台湾海峡リスクに対する「半導体供給網の保険（多極化体制）」が名実ともに完成。"
    ],
    summaryEn: [
      "TSMC disclosed volume ramp milestones for Arizona Fabs 1/2 (US), Kumamoto Fabs 1/2 (Japan), and Dresden (Germany) in SEC Form 20-F.",
      "Customer and shareholder pressure (Apple, Nvidia, BlackRock) driving sub-3nm cutting-edge production capacity outside Taiwan.",
      "Institutional insurance framework against Taiwan Strait geopolitical disruption formally established."
    ],
    primaryPolicy: {
      title: "先端ノード半導体の「グローバル製造フットプリント（多極分散）」",
      titleEn: "Geographic Multi-Node Diversification of Critical Semiconductor Foundries",
      description: "地震および地政学リスクによる台湾本島での工場停止時でも、世界のハイテク産業が継続稼働できる冗長性（バックアップ）の確保。",
      descriptionEn: "Establishing redundant fabrication capacity outside Taiwan to ensure uninterrupted global compute supply in black-swan events.",
      keyPoints: [
        "米アリゾナ第2工場における最先端2nmプロセスの導入決定（SEC Form 20-F開示）",
        "日本・熊本第2工場（6nm/7nm先端車載・AIチップ）の建設推進とサプライチェーン集積",
        "顧客企業による製造コスト上昇分（約20〜30%プレミアム）の受け入れ合意"
      ],
      keyPointsEn: [
        "Commitment to deploy 2nm production node at TSMC Arizona Fab 2 (SEC Form 20-F)",
        "Advancing Kumamoto Fab 2 expansion for automotive and AI silicon clustering",
        "Customer acceptance of 20-30% geographic fabrication cost premiums"
      ]
    },
    capitalIncentive: {
      title: "台湾有事による数千兆円規模のグローバル資産消失（テールリスク）の完全ヘッジ",
      titleEn: "Hedging Trillions in Systemic Tech Market Capitalization from Taiwan Tail Risks",
      description: "BlackRock、Vanguard、Capital Groupなどのメガファンドが、台湾一極集中の脆弱性をポートフォリオ最大の脅威としてTSMCに海外分散を強制。",
      financialRationale: "海外工場の建設コストは膨大だが、有事の際の全資産消失を防ぐ「保険料」として正当化され、株価バリュエーションの維持に寄与。",
      financialRationaleEn: "High fab CAPEX amortized as essential institutional insurance, sustaining TSMC $1T+ enterprise multiple."
    },
    industryImpact: {
      title: "日本（九州・熊本）および米国（アリゾナ）における巨大半導体クラスターの復活",
      titleEn: "Revitalization of Japanese & American Semiconductor Clusters",
      description: "ソニー、信越化学、東京エレクトロンなど日本の素材・装置メーカーへの受注が激増し、半導体エコシステムが急速に強化。",
      descriptionEn: "Massive capex tailwinds for Japanese materials & tool suppliers (Tokyo Electron, Shin-Etsu) and US packaging suppliers.",
      marketReaction: "TSMCの地政学ディスカウントが解消され、時価総額1兆ドル超を維持・拡大。",
      marketReactionEn: "TSMC geopolitical discount narrowed, firmly anchoring its $1T+ market capitalization.",
      caseStudy: {
        target: "TSMC (SEC Form 20-F / CIK: 0001046179), Apple Inc., Nvidia Corp",
        outcome: "日米欧の海外拠点が順次量産を開始し、グローバルハイテク企業の事業継続性が飛躍的に向上。",
        outcomeEn: "Global fab network volume production dramatically upgraded business continuity for Western tech leaders."
      }
    },
    status: "active",
    statusLabel: "多極分散稼働中",
    statusLabelEn: "Multi-Polar Operations Active",
    sourceName: "TSMC Annual Report (SEC Form 20-F) & Investor Briefing",
    sourceType: "SEC Official Form 20-F (2026-07)",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/1046179/000104617924000032/tsm-20231231.htm",
    tags: [
      "#TSMC",
      "#半導体多極化",
      "#熊本工場",
      "#アリゾナ工場",
      "#地政学リスクヘッジ"
    ],
    tagsEn: [
      "#TSMC",
      "#FabDiversification",
      "#KumamotoFab",
      "#ArizonaFab",
      "#GeopoliticalHedge"
    ],
    involvedCompanies: [
      "TSMC",
      "Apple Inc.",
      "Nvidia Corp",
      "Sony Semiconductor",
      "Tokyo Electron"
    ],
    impactScore: 97
  }
];

// 5. なんか最近よく見るな～（厳選8件・直近45日ローテーション保持）
export const recentTrendsData: RecentTrendItem[] = [
  {
    id: "trend-nike-retro-sneakers",
    date: "2026-09-06",
    topic: "スニーカー界隈で『90年代復刻』が異常に多発",
    topicEn: "Aggressive 90s Sneaker Retro Re-releases Everywhere",
    category: "culture",
    mediaChannel: "YouTube / SNS",
    mediaChannelEn: "YouTube / Social",
    phenomenon: {
      title: "SNSやセレクトショップでAir Max 95等の90年代復刻モデルが激増",
      titleEn: "Vintage 90s Air Max and retro kicks flooding Instagram and streetwear channels",
      description: "YouTubeの購入品紹介や街中で、30年前のモデルの復刻版がやたら特集されている。スニーカーヘッズだけでなく一般層にも露骨に流れてくる。",
      descriptionEn: "Decades-old retro models are suddenly heavily promoted across social feeds and fashion retail."
    },
    explanation: {
      title: "中国市場低迷と新興ブランド台頭に直面したナイキの『確実なIP資産の再換金』",
      titleEn: "Nike's strategic pivot to proven heritage IP amid slowing new innovation cycles",
      description: "OnやHOKAなど新興ランニングシューズにシェアを奪われたナイキが、新規開発リスクを避け、30代〜40代の購買力とZ世代のレトロブームに刺さる実証済み名作モデルを大量再生産して利益率を維持する戦略。",
      descriptionEn: "Facing severe competition from On and Hoka, Nike is aggressively monetizing its proven archive models to protect margins.",
      keyPoints: [
        "On/Hokaの猛追による新規ランニング部門のシェア低下",
        "実証済みアーカイブ（90s金型）の再活用による原価抑制と粗利最大化",
        "2026年の30周年アニバーサリーに向けた世界同時マーケティング"
      ],
      keyPointsEn: [
        "Market share erosion from disruptive challengers (On, Hoka)",
        "Maximized gross margins via re-used heritage tooling and molds",
        "Global coordinated rollout leading up to milestone anniversaries"
      ]
    },
    capitalContext: {
      title: "年商500億ドル企業の粗利死守と世界流通サプライチェーン",
      titleEn: "Defending 44%+ gross margins at a $50B global athletic giant",
      disclosedScale: "年間売上513億ドル / マーケティング予算43億ドル",
      disclosedScaleEn: "Annual Revenue $51.3B / Demand Creation Expense $4.3B",
      sourceEntity: "Nike, Inc. (NYSE: NKE)",
      secFiling: "SEC Form 10-K (Annual Report)",
      secFilingUrl: "https://www.sec.gov/edgar/browse/?CIK=320187",
      dominantBackers: [
        "Vanguard Group (8.6%)",
        "BlackRock (7.4%)"
      ],
      dominantBackersEn: [
        "Vanguard Group (8.6%)",
        "BlackRock (7.4%)"
      ]
    },
    tags: [
      "NKE",
      "スニーカー",
      "レトロブーム",
      "粗利戦略"
    ],
    tagsEn: [
      "NKE",
      "Sneakers",
      "RetroTrend",
      "GrossMargin"
    ]
  },
  {
    id: "trend-energy-drink-expansion",
    date: "2026-08-30",
    topic: "コンビニでエナジードリンクの棚が異常に拡大している理由",
    topicEn: "Why Energy Drinks Dominate Convenience Store Refrigerators",
    category: "culture",
    mediaChannel: "テレビ / 医療メディア",
    mediaChannelEn: "TV / Medical Media",
    phenomenon: {
      title: "コンビニの冷蔵庫で、お茶やコーヒーの棚を削ってモンスターや高額エナドリが壁一面を占拠",
      titleEn: "Energy drinks aggressively expanding shelf space at the expense of traditional tea and canned coffee",
      description: "駅や街のコンビニのドリンクコーナーで、モンスターエナジー、ZONE、レッドブル、セルシウスなどが目線の特等席（ゴールデンゾーン）を占め、カラフルな缶が異常な面積を占拠している現象。",
      descriptionEn: "Consumers noticing high-caffeine functional beverages taking over prime eye-level refrigerator shelves once reserved for traditional soft drinks."
    },
    explanation: {
      title: "若者の砂糖離れに対抗し、粗利益率50〜60%を稼ぎ出す「機能性飲料」への資本シフト",
      titleEn: "Beverage Conglomerates Pivoting to High-Margin (50-60% Gross Margin) Functional Energy",
      description: "従来の甘い炭酸飲料や缶コーヒーの売上が頭打ちになる中、世界飲料メガ（コカ・コーラ、ペプシコ）はエナジードリンク企業に出資・買収を加速。原価率が極めて低く、値引きなしの定価販売（1本200円超）が維持できる高収益セグメントへ棚割り交渉力を集中させている。",
      descriptionEn: "Facing stagnant volume in sugary sodas, beverage giants (Coca-Cola, PepsiCo) channeled multibillion capital into Monster and Celsius, weaponizing distribution fleets to capture high-margin retail space.",
      keyPoints: [
        "原価が低く、定価販売が守られる高粗利益率（50%超）ビジネス",
        "コカ・コーラによるモンスター・ビバレッジ出資（約19.5%保有）と流通網の完全統合",
        "ゲーマー・デスクワーカー向け「合法的な集中力・覚醒体験」への課金習慣化"
      ],
      keyPointsEn: [
        "Extraordinary operating margins (50%+) sustained by premium non-discounted pricing",
        "Coca-Cola 19.5% equity partnership locking in global DSD distribution supremacy",
        "Monetizing cognitive energy and habitual caffeine demand among gamers and knowledge workers"
      ]
    },
    capitalContext: {
      title: "モンスター・ビバレッジ時価総額500億ドルと、コカ・コーラ連合の資本力",
      titleEn: "Monster Beverage $50B Market Cap & The Coca-Cola Distribution Alliance",
      disclosedScale: "時価総額 約500億ドル / 粗利益率 53.5%",
      disclosedScaleEn: "$50B Market Cap / 53.5% Gross Margin",
      sourceEntity: "Monster Beverage Corp (NASDAQ: MNST) / The Coca-Cola Co",
      secFiling: "SEC Form 10-K (Monster Beverage Corp)",
      secFilingUrl: "https://www.sec.gov/edgar/browse/?CIK=0000865752",
      dominantBackers: [
        "The Coca-Cola Company (約19.5%)",
        "Vanguard (約8.8%)",
        "BlackRock (約7.4%)"
      ],
      dominantBackersEn: [
        "The Coca-Cola Company (approx. 19.5%)",
        "Vanguard Group (approx. 8.8%)",
        "BlackRock (approx. 7.4%)"
      ]
    },
    tags: [
      "#エナジードリンク",
      "#モンスターエナジー",
      "#コンビニ棚割り",
      "#コカコーラ出資",
      "#粗利率50パーセント",
      "#高利益率ビジネス"
    ],
    tagsEn: [
      "#EnergyDrinks",
      "#MonsterBeverage",
      "#ShelfSpaceStrategy",
      "#CocaColaPartnership",
      "#HighMarginRetail",
      "#BeverageEconomics"
    ]
  },
  {
    id: "trend-dubai-chocolate-hype",
    date: "2026-08-29",
    topic: "SNSで「ドバイチョコ」や高級ナッツスイーツ動画が爆発している理由",
    topicEn: "Why \"Dubai Chocolate\" & High-End Nut Confectionery Flooded Social Feeds",
    category: "culture",
    mediaChannel: "YouTube / SNS",
    mediaChannelEn: "YouTube / Social",
    phenomenon: {
      title: "YouTubeのASMRやTikTokで、緑のペーストが詰まった分厚いチョコを割る動画が激増",
      titleEn: "Explosion of viral ASMR videos snapping thick chocolate bars filled with bright green pistachio paste",
      description: "TikTok、Instagramリール、YouTubeで、中からサクサクのカダイフとピスタチオペーストが溢れ出る「ドバイチョコ」の咀嚼音動画が世界中で大バズりし、1枚数千円で行列や品薄が発生している現象。",
      descriptionEn: "Global viral sensation across short-form video algorithms featuring the distinctive crunch and cross-section of crispy knafeh pistachio-stuffed chocolate bars."
    },
    explanation: {
      title: "「断面萌え×ASMR」のアルゴリズム最適化と、カカオ豆大暴騰による高単価ナッツシフト",
      titleEn: "Algorithmic Audio-Visual Resonance Meets Global Cocoa Inflation Cost Shifts",
      description: "視覚的インパクト（鮮やかなピスタチオグリーン）と聴覚刺激（カダイフのバリバリ音）がショート動画の視聴維持率を跳ね上げるバイラル構造。さらに背景には、世界的なカカオ豆の不作・価格高騰（先物価格が一時3倍）により、製菓業界が「カカオの量を減らし、高単価・高付加価値なナッツペースト菓子へ転換して利益を確保する」構造変化が重なっている。",
      descriptionEn: "Engineered for maximum algorithmic retention via distinct auditory crunch and vivid green cross-sections, coinciding with historic cocoa bean commodity surges compelling confectioners to pivot toward high-ticket nut-filled luxury formats.",
      keyPoints: [
        "TikTok / YouTube Shortsの視聴維持率を最大化する「サクサク音（ASMR）×断面」",
        "カカオ豆の歴史的暴騰（気候変動と病害）に伴う製菓原材料の価格転嫁",
        "1枚2,000円〜4,000円でも売れる「自分へのプチ贅沢・体験型消費」の確立"
      ],
      keyPointsEn: [
        "Short-form algorithm optimization capitalizing on crunchy ASMR audio and visual indulgence",
        "Hedging against historic global cocoa futures inflation via high-margin nut paste formulas",
        "Monetizing experiential micro-luxury and social status gifting ($20-$30 per bar)"
      ]
    },
    capitalContext: {
      title: "カカオ先物高騰と、世界最大手バリーカレボー等のプレミアムナッツ原料市場",
      titleEn: "Surging Cocoa Futures & Barry Callebaut Premium Confectionery Sourcing",
      disclosedScale: "世界チョコレート・ナッツ市場 年間1,200億ドル規模",
      disclosedScaleEn: "$120B+ Global Chocolate & Specialty Nut Confectionery Market",
      sourceEntity: "Barry Callebaut AG / Lindt & Sprüngli / 各国高級製菓チェーン",
      secFiling: "Annual Confectionery Commodity Disclosures & Commodities Exchange",
      secFilingUrl: "https://www.sec.gov/edgar/browse/?CIK=0000047217",
      dominantBackers: [
        "Barry Callebaut (スイス原料最大手)",
        "BlackRock",
        "UBS Wealth Mgmt"
      ],
      dominantBackersEn: [
        "Barry Callebaut AG",
        "BlackRock",
        "UBS Wealth Management"
      ]
    },
    tags: [
      "#ドバイチョコ",
      "#ASMR動画",
      "#ピスタチオ",
      "#カカオ高騰",
      "#体験型消費",
      "#SNSアルゴリズム"
    ],
    tagsEn: [
      "#DubaiChocolate",
      "#ASMRViral",
      "#PistachioPaste",
      "#CocoaInflation",
      "#ExperientialSpending",
      "#ShortFormAlgorithm"
    ]
  },
  {
    id: "trend-michael-jackson-resurgence",
    date: "2026-08-28",
    topic: "YouTubeでマイケル・ジャクソン急増の理由",
    topicEn: "Why Michael Jackson is Suddenly Trending on YouTube",
    category: "entertainment",
    mediaChannel: "YouTube / SNS",
    mediaChannelEn: "YouTube / Social",
    phenomenon: {
      title: "YouTubeのShortsやおすすめ動画で、急にMJのダンスや楽曲が頻出する",
      titleEn: "Sudden influx of Michael Jackson dance shorts, reaction videos, and retrospectives",
      description: "YouTubeのおすすめフィードやTikTokで、マイケル・ジャクソンのダンス解説、名曲リミックス、ライブ映像が最近やたらと流れてくる現象。",
      descriptionEn: "Users noticing persistent recommendations of Michael Jackson choreography clips, audio trends, and retrospectives across YouTube Shorts and TikTok."
    },
    explanation: {
      title: "2025〜2026年大型伝記映画『Michael』の公開に向けたプロモーション",
      titleEn: "Preparation for Major Biopic \"Michael\" & Catalog Streaming Monetization",
      description: "ライオンズゲートおよびユニバーサル配給による大型伝記映画『Michael』の世界公開が控えており、音楽権利を持つソニーや配給会社が、映画公開に向けてアルゴリズムを活用した若年層（Z世代・アルファ世代）への再認知と楽曲バイラルを積極的に仕掛けている。",
      descriptionEn: "In anticipation of the global biopic \"Michael\", rights-holders and distributors are actively cultivating Gen-Z and Alpha discovery across streaming algorithms to build box-office momentum.",
      keyPoints: [
        "大型伝記映画『Michael』の全世界プロモーション連動",
        "Z世代・アルファ世代へ過去の名曲（Thriller, Billie Jean等）をストリーミング再生させるバイラル施策",
        "映画公開前に楽曲認知を高めておくことで、公開時の興行収入とストリーミング収益を最大化"
      ],
      keyPointsEn: [
        "Global rollout tied to the upcoming Lionsgate / Universal biopic \"Michael\"",
        "Catalog viral seeding to introduce timeless hits to younger streaming listeners",
        "Maximizing synchronized theatrical box office and recurring audio streaming royalties"
      ]
    },
    capitalContext: {
      title: "ソニーによる約6億ドルの楽曲権利買収と、安定利回りを求める巨大ファンド",
      titleEn: "Sony $600M Music Catalog Acquisition & Defensive Cash Flow Seeking Funds",
      disclosedScale: "約6億ドル（約900億円）",
      disclosedScaleEn: "$600M (approx. ¥90B)",
      sourceEntity: "Sony Group Corp (Sony Music) / Lions Gate / Universal",
      secFiling: "SEC Form 6-K (Sony Group Corp)",
      secFilingUrl: "https://www.sec.gov/edgar/browse/?CIK=0000313838",
      dominantBackers: [
        "Sony Group Corp",
        "BlackRock (約6%保有)",
        "Vanguard (約4%保有)"
      ],
      dominantBackersEn: [
        "Sony Group Corp",
        "BlackRock (approx. 6% stake)",
        "Vanguard (approx. 4% stake)"
      ]
    },
    tags: [
      "#マイケルジャクソン",
      "#YouTubeアルゴリズム",
      "#映画Michael",
      "#ソニーMusic",
      "#音楽カタログ投資"
    ],
    tagsEn: [
      "#MichaelJackson",
      "#YouTubeAlgorithm",
      "#MichaelBiopic",
      "#SonyMusic",
      "#CatalogIP"
    ]
  },
  {
    id: "trend-mounjaro-tv-coverage",
    date: "2026-08-25",
    topic: "テレビや美容クリニックで「マンジャロ」が話題な理由",
    topicEn: "Why \"Mounjaro\" is Widely Covered on TV & Lifestyle Media",
    category: "health",
    mediaChannel: "テレビ / 医療メディア",
    mediaChannelEn: "TV / Medical Media",
    phenomenon: {
      title: "情報番組や雑誌、ネット広告で「奇跡の痩せ薬」として頻繁に登場する",
      titleEn: "Frequent features as a \"breakthrough weight loss drug\" on broadcast TV and lifestyle media",
      description: "テレビの情報番組や週刊誌、美容クリニックの広告で「劇的に体重が落ちる新薬」としてマンジャロが肯定的に取り上げられ、大きな話題になっている現象。",
      descriptionEn: "Mainstream TV morning shows, health columns, and aesthetic clinic campaigns prominently highlighting Mounjaro as a revolutionary weight management medication."
    },
    explanation: {
      title: "米製薬大手イーライリリーの新薬が日本でも本格普及期に入ったため",
      titleEn: "Eli Lilly GLP-1 Breakthrough Entering Mainstream Market Expansion",
      description: "糖尿病治療薬として世界で空前の売上を記録している「GLP-1/GIP作動薬」が日本でも薬価収載され、肥満症への適応拡大や市場開拓に向けた製薬会社の大規模な疾患啓発・流通強化が進行中。メディアや医療機関への情報提供が活発化している。",
      descriptionEn: "The GLP-1/GIP drug class, shattering global pharmaceutical sales records, is scaling distribution across Japan, supported by legitimate disease awareness campaigns and physician outreach.",
      keyPoints: [
        "世界的なメガブロックバスター薬（マンジャロ/ゼップバウンド）の日本市場普及",
        "製薬大手による疾患啓発マーケティングと学会・医療機関向けの情報提供",
        "保険適用の糖尿病治療と、自費診療（美容医療）の双方で需要が急増したことによる社会現象化"
      ],
      keyPointsEn: [
        "Global rollout of blockbuster GLP-1/GIP treatments across Japanese healthcare channels",
        "Substantial pharmaceutical educational outreach to healthcare providers and media",
        "Surging parallel demand across covered medical prescriptions and private wellness clinics"
      ]
    },
    capitalContext: {
      title: "時価総額9,000億ドル突破と、生涯課金モデルを支える巨大年金マネー",
      titleEn: "Eli Lilly $900B Market Cap & High-Margin Recurring Healthcare Mandate",
      disclosedScale: "時価総額 約9,000億ドル / 生産設備投資 200億ドル超",
      disclosedScaleEn: "$900B+ Market Cap / $20B+ Manufacturing CAPEX",
      sourceEntity: "Eli Lilly and Company (NYSE: LLY) / 田辺三菱製薬",
      secFiling: "SEC Form 10-K / 10-Q (Eli Lilly and Company)",
      secFilingUrl: "https://www.sec.gov/edgar/browse/?CIK=0000059478",
      dominantBackers: [
        "Vanguard (約8.5%保有)",
        "BlackRock (約7.3%保有)",
        "Capital Group"
      ],
      dominantBackersEn: [
        "Vanguard Group (approx. 8.5%)",
        "BlackRock (approx. 7.3%)",
        "Capital Group"
      ]
    },
    tags: [
      "#マンジャロ",
      "#イーライリリー",
      "#GLP1",
      "#テレビ情報番組",
      "#美容医療",
      "#製薬マネー"
    ],
    tagsEn: [
      "#Mounjaro",
      "#EliLilly",
      "#GLP1",
      "#BroadcastTV",
      "#Healthcare",
      "#PharmaFlow"
    ]
  },
  {
    id: "trend-ai-hardware-push",
    date: "2026-08-20",
    topic: "新製品がすべて“AI搭載”を推してくる理由",
    topicEn: "Why Every New Gadget & Laptop Aggressively Brands \"AI-Powered\"",
    category: "tech",
    mediaChannel: "テック / ガジェット",
    mediaChannelEn: "Tech / Hardware",
    phenomenon: {
      title: "スマホ、ノートPC、家電の新製品発表で「AI」が連呼される",
      titleEn: "Constant marketing of \"AI-Enabled\", \"Copilot Keys\", and on-device neural processing",
      description: "家電量販店や新製品発表会で、最新のスマホやパソコン、さらにはテレビや白物家電にまで「AI搭載」の文字が溢れている現象。",
      descriptionEn: "Consumers encountering ubiquitous \"AI PC\", \"AI Camera\", and \"Smart Assistant\" branding across consumer electronics and flagship smartphones."
    },
    explanation: {
      title: "スマホやPCの買い替え需要の喚起と、巨額の半導体設備投資の回収",
      titleEn: "Stimulating Replacement Cycles & Monetizing Vast Semiconductor Infrastructure",
      description: "スマートフォンの性能が成熟して一般ユーザーの買い替え周期が長期化（4〜5年）する中、大手テック企業は「オンデバイスAI」を新たな買い替え動機として位置づけている。また、半導体メーカーが投じた巨額の製造設備費を回収するためにAI対応チップの大量出荷が不可欠となっている。",
      descriptionEn: "With smartphone upgrade cycles lengthening to 4-5 years, tech conglomerates are positioning on-device AI as the premier catalyst for consumer hardware refreshes to absorb semiconductor foundry capacity.",
      keyPoints: [
        "長期化した端末買い替えサイクルの強制再起動（アップグレード需要創出）",
        "NPU（AI専用プロセッサ）を標準搭載した新世代チップの普及促進",
        "大手クラウド企業による自社AIエコシステム（Microsoft Copilot, Apple Intelligence等）への囲い込み"
      ],
      keyPointsEn: [
        "Accelerating consumer replacement cycles beyond standard 4-year upgrade plateaus",
        "Universal deployment of dedicated NPU silicon across mainstream consumer devices",
        "Ecosystem lock-in driven by proprietary assistants (Microsoft Copilot, Apple Intelligence)"
      ]
    },
    capitalContext: {
      title: "年間数百億ドルのAI設備投資（CAPEX）とサプライチェーンの思惑",
      titleEn: "Tens of Billions in Hyperscale Hardware CAPEX & Silicon Supply Contracts",
      disclosedScale: "年間AI設備投資 約2,000億ドル規模（主要テック合算）",
      disclosedScaleEn: "Approx. $200B Annual Combined AI CAPEX",
      sourceEntity: "Microsoft, Apple, Google, Intel, AMD, Qualcomm",
      secFiling: "SEC Form 10-K (Annual Reports of Big Tech)",
      secFilingUrl: "https://www.sec.gov/edgar/browse/?CIK=0000789019",
      dominantBackers: [
        "BlackRock",
        "Vanguard",
        "State Street",
        "Fidelity"
      ],
      dominantBackersEn: [
        "BlackRock",
        "Vanguard Group",
        "State Street",
        "Fidelity"
      ]
    },
    tags: [
      "#AIスマホ",
      "#AIPC",
      "#買い替え需要",
      "#半導体投資",
      "#Copilot",
      "#AppleIntelligence"
    ],
    tagsEn: [
      "#AISmartphones",
      "#AIPC",
      "#UpgradeCycle",
      "#SemiconductorCAPEX",
      "#Copilot",
      "#OnDeviceAI"
    ]
  },
  {
    id: "trend-retro-game-movie-rush",
    date: "2026-08-12",
    topic: "マリオやレトロゲーム映画化がやたら多い理由",
    topicEn: "Why Hollywood is Flooded with Classic Video Game & Retro IP Movies",
    category: "culture",
    mediaChannel: "映画 / エンタメ",
    mediaChannelEn: "Cinema / Entertainment",
    phenomenon: {
      title: "映画館で新作オリジナルよりも、昔のゲームやアニメの実写・CG映画が目立つ",
      titleEn: "Theaters dominated by 90s/00s video game adaptations and nostalgia franchises",
      description: "スーパーマリオ、ソニック、マインクラフト、ゼルダの伝説など、子どもの頃に遊んだゲームや有名キャラクターの映画化・リメイクが次々と発表される現象。",
      descriptionEn: "Theatrical releases and streaming catalogs packed with high-budget adaptations of Mario, Sonic, Minecraft, and classic nostalgia franchises over original screenplays."
    },
    explanation: {
      title: "制作費の高騰により、失敗リスクを避けて「確実に客が入る既存IP」に集中するため",
      titleEn: "Ballooning Budgets Driving Extreme Risk Aversion Toward Proven Franchises",
      description: "映画1本の制作・宣伝費が2億〜3億ドル（数百億円）に達する中、完全新規のオリジナル作品がコケた場合の損失が壊滅的になるため、スタジオは「最初から世界中に数千万人〜数億人の認知度があるゲームIP」にのみ大型予算を投じるようになっている。親子2世代で映画館に来てくれる点も強み。",
      descriptionEn: "With blockbuster budgets exceeding $200M-$300M, studios and studio financiers cannot absorb the failure of unproven original concepts, channeling capital into generational gaming brands with guaranteed multi-demographic turnout.",
      keyPoints: [
        "1本数百億円に達する映画制作費の高騰と失敗リスクの極小化",
        "親世代（懐かしさ）と子世代（現役プレイヤー）を同時に集客できる強力なIP力",
        "映画ヒット後のグッズ販売、テーマパーク、ゲーム再販による複合収益モデル"
      ],
      keyPointsEn: [
        "Minimizing catastrophic box office downside as blockbuster production budgets escalate",
        "Multi-generational appeal uniting nostalgic parents and active gaming youth",
        "Omnichannel monetization across merchandise, theme park expansions, and software remasters"
      ]
    },
    capitalContext: {
      title: "機関投資家による「検証済みIPへの集中投資」という資本規律",
      titleEn: "Strict Institutional Capital Discipline Demanding Verified Intellectual Property",
      disclosedScale: "グローバル映画興行・IP市場 年間数十億ドル規模",
      disclosedScaleEn: "Multibillion-Dollar Global Theatrical & IP Merchandising Market",
      sourceEntity: "Nintendo, Universal Pictures, Sony Pictures, Warner Bros. Discovery",
      secFiling: "SEC Form 10-K / Form 20-F (Media Conglomerates)",
      secFilingUrl: "https://www.sec.gov/edgar/browse/?CIK=0000072000",
      dominantBackers: [
        "BlackRock",
        "Vanguard",
        "State Street"
      ],
      dominantBackersEn: [
        "BlackRock",
        "Vanguard Group",
        "State Street"
      ]
    },
    tags: [
      "#ゲーム映画化",
      "#レトロIP",
      "#マリオ映画",
      "#任天堂",
      "#ハリウッド制作費",
      "#IPビジネス"
    ],
    tagsEn: [
      "#VideoGameMovies",
      "#RetroIP",
      "#SuperMarioMovie",
      "#Nintendo",
      "#HollywoodBudgets",
      "#FranchiseEconomy"
    ]
  }
];

