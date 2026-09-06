import { useState, useMemo } from 'react';
import { Search, X, Sparkles } from 'lucide-react';
import { Header } from './components/Header';
import { MacroMetrics } from './components/MacroMetrics';
import { FlowDiagram } from './components/FlowDiagram';
import { PolicyCard } from './components/PolicyCard';
import { ShareholderMatrix } from './components/ShareholderMatrix';
import { DetailModal } from './components/DetailModal';
import { AboutModal } from './components/AboutModal';
import { TrendingExplainer } from './components/TrendingExplainer';
import { trackerItemsData, recentTrendsData } from './data/mockData';
import type { CategoryType, TrackerItem } from './types/tracker';
import { useLanguage } from './context/LanguageContext';
import { translations } from './locales/translations';

export function App() {
  const { lang, isJa } = useLanguage();
  const t = translations[lang];

  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<TrackerItem | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);
  const [isFlowOpen, setIsFlowOpen] = useState<boolean>(false);
  const [activeMainTab, setActiveMainTab] = useState<'inflows' | 'matrix' | 'feed' | 'trends'>('inflows');

  const quickInquiries = [
    { labelJa: 'Nvidia独禁法調査', labelEn: 'Nvidia Antitrust Probe', query: 'Nvidia' },
    { labelJa: 'Microsoft/OpenAI規制', labelEn: 'MSFT/OpenAI Review', query: 'OpenAI' },
    { labelJa: 'ソニー買収防衛・IP', labelEn: 'Sony IP & Takeover', query: isJa ? 'ソニー' : 'Sony' },
    { labelJa: '原発とAI電力契約', labelEn: 'Nuclear & AI Power', query: isJa ? '原子力' : 'Nuclear' },
    { labelJa: 'TSMC半導体分散', labelEn: 'TSMC Reshoring', query: 'TSMC' },
  ];

  const categories: { id: CategoryType; label: string; count: number }[] = [
    { id: 'all', label: isJa ? '全セクター' : 'ALL SECTORS', count: trackerItemsData.length },
    { id: 'tech', label: 'AI & REGULATION', count: trackerItemsData.filter(i => i.category === 'tech').length },
    { id: 'gaming', label: 'GAMING / MEDIA', count: trackerItemsData.filter(i => i.category === 'gaming').length },
    { id: 'governance', label: 'TAKEOVER & CAPITAL', count: trackerItemsData.filter(i => i.category === 'governance').length },
    { id: 'macro_finance', label: 'DEFENSE & PENSION', count: trackerItemsData.filter(i => i.category === 'macro_finance').length },
    { id: 'energy', label: 'SCOPE 3 & ENERGY', count: trackerItemsData.filter(i => i.category === 'energy').length },
    { id: 'supply_chain', label: 'CHIPS & RESHORING', count: trackerItemsData.filter(i => i.category === 'supply_chain').length },
  ];

  // フィルタリング処理（セクター + リアルタイム検索）
  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return trackerItemsData.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      if (!matchCategory) return false;
      if (!query) return true;

      const titleMatch = (item.title?.toLowerCase().includes(query) || (item.titleEn?.toLowerCase().includes(query) ?? false));
      const institutionMatch = (item.institution?.toLowerCase().includes(query) || (item.institutionEn?.toLowerCase().includes(query) ?? false));
      const summaryMatch = item.summary.some(s => s.toLowerCase().includes(query)) || (item.summaryEn?.some(s => s.toLowerCase().includes(query)) ?? false);
      const tagsMatch = item.tags.some(t => t.toLowerCase().includes(query)) || (item.tagsEn?.some(t => t.toLowerCase().includes(query)) ?? false);
      const companyMatch = item.involvedCompanies.some(c => c.toLowerCase().includes(query));
      const policyMatch = item.primaryPolicy.description.toLowerCase().includes(query) || (item.primaryPolicy.descriptionEn?.toLowerCase().includes(query) ?? false);
      const incentiveMatch = item.capitalIncentive.description.toLowerCase().includes(query) || (item.capitalIncentive.descriptionEn?.toLowerCase().includes(query) ?? false);
      const impactMatch = item.industryImpact.description.toLowerCase().includes(query) || (item.industryImpact.descriptionEn?.toLowerCase().includes(query) ?? false);

      return titleMatch || institutionMatch || summaryMatch || tagsMatch || companyMatch || policyMatch || incentiveMatch || impactMatch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text flex flex-col font-sans">
      {/* ヘッダー */}
      <Header
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenFlow={() => setIsFlowOpen(true)}
      />

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full">
        
        {/* メイン機能切り替えナビゲーション */}
        <div className="border-b border-terminal-border mb-6">
          <div className="flex flex-wrap items-center gap-2 font-data text-xs pb-3">
            <button
              onClick={() => setActiveMainTab('inflows')}
              className={`px-4 py-2 border transition-all ${
                activeMainTab === 'inflows'
                  ? 'border-terminal-accent text-terminal-accent bg-terminal-surface font-semibold shadow-sm'
                  : 'border-terminal-border text-terminal-muted hover:text-terminal-text bg-terminal-bg'
              }`}
            >
              {t.tabInflows}
            </button>

            <button
              onClick={() => setActiveMainTab('matrix')}
              className={`px-4 py-2 border transition-all ${
                activeMainTab === 'matrix'
                  ? 'border-terminal-accent text-terminal-accent bg-terminal-surface font-semibold shadow-sm'
                  : 'border-terminal-border text-terminal-muted hover:text-terminal-text bg-terminal-bg'
              }`}
            >
              {t.tabMatrix}
            </button>

            <button
              onClick={() => setActiveMainTab('feed')}
              className={`px-4 py-2 border transition-all ${
                activeMainTab === 'feed'
                  ? 'border-terminal-accent text-terminal-accent bg-terminal-surface font-semibold shadow-sm'
                  : 'border-terminal-border text-terminal-muted hover:text-terminal-text bg-terminal-bg'
              }`}
            >
              {t.tabFeed} ({filteredItems.length})
            </button>

            <button
              onClick={() => setActiveMainTab('trends')}
              className={`px-4 py-2 border transition-all ${
                activeMainTab === 'trends'
                  ? 'border-terminal-accent text-terminal-accent bg-terminal-surface font-semibold shadow-sm'
                  : 'border-terminal-border text-terminal-muted hover:text-terminal-text bg-terminal-bg'
              }`}
            >
              {t.tabTrends} ({recentTrendsData.length})
            </button>
          </div>
        </div>

        {/* 画面1: 資金流入上位セクター */}
        {activeMainTab === 'inflows' && (
          <MacroMetrics />
        )}

        {/* 画面2: 主要運用会社＆保有マトリクス */}
        {activeMainTab === 'matrix' && (
          <ShareholderMatrix />
        )}

        {/* 画面3: 政策＆産業インパクト・フィード */}
        {activeMainTab === 'feed' && (
          <section className="bg-terminal-surface border border-terminal-border p-5">
            {/* セクションヘッダー */}
            <div className="pb-4 border-b border-terminal-border flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <div className="text-[10px] font-data text-terminal-accent uppercase tracking-wider mb-0.5">
                  DISCLOSURE & REGULATORY FEED
                </div>
                <h2 className="text-lg sm:text-xl font-serif text-white font-normal">
                  {t.feedTitle}
                </h2>
                <p className="text-xs text-terminal-muted mt-0.5">
                  {t.feedDesc}
                </p>
              </div>

              <div className="text-xs font-data text-terminal-muted">
                <span>FILTERED RESULTS: <strong className="text-terminal-accent">{filteredItems.length}</strong> RECORDS</span>
              </div>
            </div>

            {/* リアルタイム検索バー ＆ 日常トレンド逆引き */}
            <div className="py-3 border-b border-terminal-border bg-terminal-bg/80 -mx-5 px-5 my-0 space-y-2.5">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-terminal-muted absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full bg-terminal-panel border border-terminal-border pl-9 pr-24 py-2 text-xs text-white placeholder-terminal-muted font-sans focus:outline-none focus:border-terminal-accent transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 px-2 py-0.5 text-[10px] font-data text-terminal-muted hover:text-terminal-text bg-terminal-bg border border-terminal-border flex items-center gap-1 transition-colors"
                  >
                    <span>{t.clearSearch}</span>
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* 日常トレンド・クイックインクワイアリー */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-data">
                <span className="text-[10px] text-terminal-accent flex items-center gap-1 font-semibold">
                  <Sparkles className="w-3 h-3" />
                  {t.quickInquiriesLabel}
                </span>
                {quickInquiries.map((inq, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchQuery(inq.query);
                    }}
                    className={`px-2 py-0.5 border text-[10px] transition-all flex items-center gap-1 ${
                      searchQuery === inq.query
                        ? 'border-terminal-accent bg-terminal-accent text-terminal-bg font-bold shadow-sm'
                        : 'border-terminal-border/80 bg-terminal-bg text-terminal-muted hover:text-terminal-text hover:border-terminal-accent/60'
                    }`}
                  >
                    <span>#{isJa ? inq.labelJa : inq.labelEn}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* セクター選択ボタン */}
            <div className="py-3.5 border-b border-terminal-border bg-terminal-bg/50 -mx-5 px-5 my-0">
              <div className="text-[10px] font-data text-terminal-muted uppercase tracking-wider mb-2">
                FILTER BY SECTOR / AGENDA:
              </div>
              <div className="flex flex-wrap gap-1.5 font-data text-xs">
                {categories.map((cat) => {
                  const isSelected = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3 py-1.5 border text-[11px] transition-all flex items-center gap-1.5 ${
                        isSelected
                          ? 'border-terminal-accent bg-terminal-panel text-terminal-accent font-semibold shadow-sm'
                          : 'border-terminal-border bg-terminal-bg text-terminal-muted hover:text-terminal-text hover:border-terminal-borderLight'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className={`text-[9px] px-1 py-0.2 rounded font-mono ${
                        isSelected ? 'bg-terminal-accent text-terminal-bg font-bold' : 'bg-terminal-panel text-terminal-muted'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 記事カード一覧 */}
            <div className="mt-5">
              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredItems.map((item) => (
                    <PolicyCard
                      key={item.id}
                      item={item}
                      onSelect={setSelectedItem}
                    />
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center text-terminal-muted font-data text-xs bg-terminal-bg border border-terminal-border">
                  <p className="text-terminal-text font-medium mb-1">NO MATCHING DISCLOSURES</p>
                  <p className="text-terminal-muted">
                    {searchQuery
                      ? (isJa ? `「${searchQuery}」に一致する公的開示・トレンド記録は見つかりませんでした。` : `No disclosures matching "${searchQuery}" found.`)
                      : (isJa ? '選択したセクターに該当するデータがありません。' : 'No disclosures found for the selected sector.')}
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="px-4 py-1.5 bg-terminal-accent text-terminal-bg font-semibold text-[11px] transition-colors"
                      >
                        {isJa ? '検索ワードをクリア' : 'CLEAR SEARCH'}
                      </button>
                    )}
                    <button
                      onClick={() => {
                        setActiveCategory('all');
                        setSearchQuery('');
                      }}
                      className="px-4 py-1.5 bg-terminal-panel hover:bg-terminal-border text-terminal-text border border-terminal-border transition-colors text-[11px]"
                    >
                      {isJa ? 'すべてリセット' : 'RESET ALL FILTERS'}
                    </button>
                  </div>
                </div>
              )}
            </div>

          </section>
        )}

        {/* 画面4: よく分からないけど流行ってるもの */}
        {activeMainTab === 'trends' && (
          <TrendingExplainer />
        )}

      </main>

      {/* フッター */}
      <footer className="border-t border-terminal-border bg-terminal-bg py-6 text-xs text-terminal-muted font-data">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-terminal-text font-semibold">CAPGAZER // INSTITUTIONAL OBSERVATORY</span>
            <span className="mx-2 text-terminal-borderLight">|</span>
            <span>{t.footerNote}</span>
          </div>
          <div className="flex items-center gap-4 text-[10px]">
            <span>{t.lastUpdated}</span>
            <button onClick={() => setIsAboutOpen(true)} className="hover:text-terminal-text underline">
              {isJa ? 'データ方針' : 'DATA POLICY'}
            </button>
          </div>
        </div>
      </footer>

      {/* 詳細モーダル */}
      <DetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* マネーフローモーダル */}
      {isFlowOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-terminal-bg/85 backdrop-blur-sm">
          <div className="max-w-4xl w-full">
            <FlowDiagram onClose={() => setIsFlowOpen(false)} isModal={true} />
          </div>
        </div>
      )}

      {/* アバウトモーダル */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}

export default App;
