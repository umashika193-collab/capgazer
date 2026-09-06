import React, { useState, useMemo } from 'react';
import { recentTrendsData } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';
import { ExternalLink, Search, Sparkles, Calendar, Tv, Video, Cpu, Film } from 'lucide-react';

export const TrendingExplainer: React.FC = () => {
  const { lang, isJa } = useLanguage();
  const t = translations[lang];

  const [activeChannel, setActiveChannel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const channels = [
    { id: 'all', labelJa: 'すべて', labelEn: 'ALL MEDIA', icon: Sparkles },
    { id: 'YouTube / SNS', labelJa: 'YouTube / SNS', labelEn: 'YouTube / Social', icon: Video },
    { id: 'テレビ / 医療メディア', labelJa: 'テレビ / 医療', labelEn: 'TV / Medical Media', icon: Tv },
    { id: 'テック / ガジェット', labelJa: 'テック / ガジェット', labelEn: 'Tech / Gadgets', icon: Cpu },
    { id: '映画 / エンタメ', labelJa: '映画 / エンタメ', labelEn: 'Cinema / Entertainment', icon: Film },
  ];

  const filteredTrends = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return recentTrendsData.filter((item) => {
      const channelMatch = activeChannel === 'all' || item.mediaChannel === activeChannel;
      if (!channelMatch) return false;
      if (!q) return true;

      const topicMatch = item.topic.toLowerCase().includes(q) || (item.topicEn?.toLowerCase().includes(q) ?? false);
      const phenomMatch = item.phenomenon.description.toLowerCase().includes(q) || (item.phenomenon.descriptionEn?.toLowerCase().includes(q) ?? false);
      const explMatch = item.explanation.description.toLowerCase().includes(q) || (item.explanation.descriptionEn?.toLowerCase().includes(q) ?? false);
      const capMatch = item.capitalContext.title.toLowerCase().includes(q) || item.capitalContext.sourceEntity.toLowerCase().includes(q);
      const tagsMatch = item.tags.some(t => t.toLowerCase().includes(q)) || (item.tagsEn?.some(t => t.toLowerCase().includes(q)) ?? false);

      return topicMatch || phenomMatch || explMatch || capMatch || tagsMatch;
    });
  }, [activeChannel, searchQuery]);

  return (
    <section className="bg-terminal-surface border border-terminal-border p-5 mb-8">
      {/* セクションヘッダー */}
      <div className="pb-4 border-b border-terminal-border flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[10px] font-data text-terminal-accent uppercase tracking-wider">
              SECTION 04 // RECENT TRENDS & CAPITAL CONTEXT
            </span>
            <span className="text-[9px] px-1.5 py-0.2 bg-terminal-accent/15 border border-terminal-accent/40 text-terminal-accent font-data">
              {isJa ? '毎朝07:00自動更新（直近30日保持）' : 'DAILY 07:00 JST AUTO-UPDATE (30-DAY RETENTION)'}
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-serif text-white font-normal">
            {t.trendsTitle}
          </h2>
          <p className="text-xs text-terminal-muted mt-0.5 font-sans">
            {t.trendsDesc}
          </p>
        </div>

        <div className="text-xs font-data text-terminal-muted flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-terminal-accent" />
          <span>ACTIVE ENTRIES: <strong className="text-terminal-accent font-bold">{filteredTrends.length}</strong> / {recentTrendsData.length}</span>
        </div>
      </div>

      {/* 検索バー ＆ メディアフィルター */}
      <div className="py-3.5 border-b border-terminal-border bg-terminal-bg/50 -mx-5 px-5 my-0 space-y-3">
        {/* 検索入力 */}
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-terminal-muted absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isJa ? 'トレンド名、現象、企業名、キーワードで検索...' : 'Search by trend, phenomenon, entity, or keyword...'}
            className="w-full bg-terminal-panel border border-terminal-border pl-9 pr-20 py-2 text-xs text-white placeholder-terminal-muted font-sans focus:outline-none focus:border-terminal-accent transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 px-2 py-0.5 text-[10px] font-data text-terminal-muted hover:text-terminal-text bg-terminal-bg border border-terminal-border transition-colors"
            >
              {isJa ? 'クリア' : 'CLEAR'}
            </button>
          )}
        </div>

        {/* チャンネル選択ボタン */}
        <div className="flex flex-wrap items-center gap-1.5 font-data text-xs">
          <span className="text-[10px] text-terminal-muted uppercase tracking-wider mr-1">
            {isJa ? '媒体別:' : 'CHANNEL:'}
          </span>
          {channels.map((ch) => {
            const isSelected = activeChannel === ch.id;
            const Icon = ch.icon;
            const count = ch.id === 'all' 
              ? recentTrendsData.length 
              : recentTrendsData.filter(i => i.mediaChannel === ch.id).length;

            return (
              <button
                key={ch.id}
                onClick={() => setActiveChannel(ch.id)}
                className={`px-3 py-1.5 border text-[11px] transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'border-terminal-accent bg-terminal-panel text-terminal-accent font-semibold shadow-sm'
                    : 'border-terminal-border bg-terminal-bg text-terminal-muted hover:text-terminal-text hover:border-terminal-borderLight'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{isJa ? ch.labelJa : ch.labelEn}</span>
                <span className={`text-[9px] px-1 py-0.2 rounded font-mono ${
                  isSelected ? 'bg-terminal-accent text-terminal-bg font-bold' : 'bg-terminal-panel text-terminal-muted'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* トレンド解説カード一覧 */}
      <div className="mt-5 space-y-6">
        {filteredTrends.length > 0 ? (
          filteredTrends.map((trend) => {
            const topic = isJa ? trend.topic : (trend.topicEn || trend.topic);
            const channel = isJa ? trend.mediaChannel : (trend.mediaChannelEn || trend.mediaChannel);
            const phenomTitle = isJa ? trend.phenomenon.title : (trend.phenomenon.titleEn || trend.phenomenon.title);
            const phenomDesc = isJa ? trend.phenomenon.description : (trend.phenomenon.descriptionEn || trend.phenomenon.description);
            const explTitle = isJa ? trend.explanation.title : (trend.explanation.titleEn || trend.explanation.title);
            const explDesc = isJa ? trend.explanation.description : (trend.explanation.descriptionEn || trend.explanation.description);
            const keyPoints = isJa ? trend.explanation.keyPoints : (trend.explanation.keyPointsEn || trend.explanation.keyPoints);
            const capTitle = isJa ? trend.capitalContext.title : (trend.capitalContext.titleEn || trend.capitalContext.title);
            const disclosedScale = isJa ? trend.capitalContext.disclosedScale : (trend.capitalContext.disclosedScaleEn || trend.capitalContext.disclosedScale);
            const backers = isJa ? trend.capitalContext.dominantBackers : (trend.capitalContext.dominantBackersEn || trend.capitalContext.dominantBackers);
            const tags = isJa ? trend.tags : (trend.tagsEn || trend.tags);

            return (
              <article
                key={trend.id}
                className="bg-terminal-surface border border-terminal-border hover:border-terminal-accent/60 p-5 transition-all shadow-sm flex flex-col justify-between"
              >
                {/* ヘッダー情報 */}
                <div className="pb-3 border-b border-terminal-border flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 font-data text-xs">
                    <span className="px-2 py-0.5 border border-terminal-accent/60 bg-terminal-accent/10 text-terminal-accent text-[10px] font-bold">
                      {channel}
                    </span>
                    <span className="text-terminal-borderLight">|</span>
                    <span className="text-terminal-muted text-[11px]">{trend.date}</span>
                  </div>

                  <div className="text-[11px] font-data text-terminal-muted">
                    <span>RECORDED WITHIN 30-DAY WINDOW</span>
                  </div>
                </div>

                {/* トピックタイトル */}
                <h3 className="text-lg sm:text-xl font-serif text-white font-normal mt-3 mb-4 leading-snug">
                  {topic}
                </h3>

                {/* 3段構成解説ブロック */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 text-xs font-sans">
                  
                  {/* ステップ1: 最近よく見かける現象 */}
                  <div className="p-3.5 bg-terminal-bg border border-terminal-border flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] font-data text-terminal-muted uppercase tracking-wider mb-1.5">
                        <span className="text-terminal-accent">01</span>
                        <span>{isJa ? '最近よく見かける現象' : 'OBSERVED PHENOMENON'}</span>
                      </div>
                      <h4 className="font-medium text-white mb-2 leading-snug">
                        {phenomTitle}
                      </h4>
                      <p className="text-terminal-muted text-[11px] leading-relaxed">
                        {phenomDesc}
                      </p>
                    </div>
                  </div>

                  {/* ステップ2: なぜ今話題なのか？ */}
                  <div className="p-3.5 bg-terminal-panel border border-terminal-border flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] font-data text-terminal-accent uppercase tracking-wider mb-1.5 font-semibold">
                        <span>02</span>
                        <span>{isJa ? 'なぜ今話題なのか？（背景）' : 'WHY NOW (UNDERLYING DRIVER)'}</span>
                      </div>
                      <h4 className="font-medium text-white mb-2 leading-snug">
                        {explTitle}
                      </h4>
                      <p className="text-terminal-text text-[11px] leading-relaxed mb-3">
                        {explDesc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-terminal-border/60 space-y-1 text-[10px] text-terminal-muted font-sans">
                      {keyPoints.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <span className="text-terminal-accent font-data shrink-0">✔</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ステップ3: 動いているお金 ＆ 公式開示 */}
                  <div className="p-3.5 bg-terminal-bg border border-terminal-border flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] font-data text-terminal-accentGreen uppercase tracking-wider mb-1.5 font-semibold">
                        <span>03</span>
                        <span>{isJa ? '動いているお金 ＆ 公式開示' : 'CAPITAL SCALE & OFFICIAL FILINGS'}</span>
                      </div>
                      <h4 className="font-medium text-white mb-2 leading-snug">
                        {capTitle}
                      </h4>
                      
                      <div className="bg-terminal-panel p-2.5 border border-terminal-border/70 mb-3 space-y-1 font-data text-[11px]">
                        <div className="flex items-center justify-between text-terminal-muted text-[10px]">
                          <span>DISCLOSED CAPITAL:</span>
                          <span className="font-bold text-terminal-accent">{disclosedScale}</span>
                        </div>
                        <div className="text-[10px] text-terminal-muted truncate">
                          ENTITY: <span className="text-terminal-text">{trend.capitalContext.sourceEntity}</span>
                        </div>
                      </div>

                      <div className="text-[10px] font-data text-terminal-muted mb-2">
                        <span>DOMINANT SHAREHOLDERS:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {backers.map((b, idx) => (
                            <span key={idx} className="bg-terminal-panel px-1.5 py-0.5 border border-terminal-border text-terminal-text text-[9px]">
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {trend.capitalContext.secFilingUrl && (
                      <div className="pt-2 border-t border-terminal-border flex items-center justify-between text-[11px] font-data">
                        <span className="text-terminal-muted text-[10px]">{trend.capitalContext.secFiling}</span>
                        <a
                          href={trend.capitalContext.secFilingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-terminal-accent hover:underline text-[10px]"
                        >
                          <span>{isJa ? 'SEC公式開示' : 'SEC Official'}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>

                </div>

                {/* フッタータグ */}
                <div className="mt-3.5 pt-3 border-t border-terminal-border flex flex-wrap items-center gap-1.5 font-data text-[10px]">
                  {tags.map((tag, idx) => (
                    <span key={idx} className="bg-terminal-panel px-1.5 py-0.5 border border-terminal-border text-terminal-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })
        ) : (
          <div className="p-12 text-center text-terminal-muted font-data text-xs bg-terminal-bg border border-terminal-border">
            <p className="text-terminal-text font-medium mb-1">NO TRENDS FOUND</p>
            <p className="text-terminal-muted">
              {isJa ? '該当するトレンド項目が見つかりませんでした。' : 'No matching trends found for the current query.'}
            </p>
            <button
              onClick={() => {
                setActiveChannel('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-1.5 bg-terminal-panel hover:bg-terminal-border text-terminal-text border border-terminal-border text-[11px]"
            >
              {isJa ? '条件をリセット' : 'RESET FILTERS'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
