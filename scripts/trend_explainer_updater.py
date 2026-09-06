"""
CapGazer Category 04 Autonomous Daily Updater & 30-Day Retention Engine
（なんか最近よく見るな～ 日次自動更新 ＆ 直近30日保持スクリプト）

【機能概要】
1. 日常のトレンド（YouTube、テレビ、SNS、テック新製品等）と企業の開示・資本動向をAI/マスタープールから更新。
2. 直近30日分（MAX_RETENTION_DAYS = 30）のデータを保持し、30日を超えた古いデータは自動パージ（押し出しローテーション）。
3. src/data/mockData.ts の recentTrendsData 定義を安全に上書き更新。
"""

import sys
import os
import json
import re
import subprocess
from datetime import datetime, timezone, timedelta

# Windows UTF-8 対応
if sys.platform == 'win32':
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    if hasattr(sys.stderr, 'reconfigure'):
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')

MAX_RETENTION_DAYS = 30
MAX_ITEMS_LIMIT = 25
MOCK_DATA_PATH = 'src/data/mockData.ts'

def load_current_trends():
    """mockData.ts から現在の recentTrendsData を Node.js 経由で確実に抽出"""
    if not os.path.exists(MOCK_DATA_PATH):
        print(f"[!] Error: {MOCK_DATA_PATH} not found.", file=sys.stderr)
        return []

    node_cmd = [
        'node', '-e',
        """
        const fs = require('fs');
        const content = fs.readFileSync('src/data/mockData.ts', 'utf8');
        const match = content.match(/export const recentTrendsData: RecentTrendItem\\[\\] = (\\[[\\s\\S]*?\\]);/);
        if (match) {
            try {
                const data = eval(match[1]);
                console.log(JSON.stringify(data));
            } catch(e) {
                process.exit(1);
            }
        } else {
            process.exit(1);
        }
        """
    ]

    try:
        res = subprocess.run(node_cmd, capture_output=True, text=True, encoding='utf-8')
        if res.returncode == 0 and res.stdout.strip():
            return json.loads(res.stdout.strip())
    except Exception as e:
        print(f"[*] Note: Node parsing failed ({e}), falling back to direct regex.")

    with open(MOCK_DATA_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    match = re.search(r'export const recentTrendsData: RecentTrendItem\[\] = (\[[\s\S]*?\]);', content)
    if not match:
        return []

    raw_json = match.group(1)
    clean_json = re.sub(r'(\b\w+\b)\s*:', r'"\1":', raw_json)
    clean_json = re.sub(r',\s*([\]}])', r'\1', clean_json)

    try:
        return json.loads(clean_json)
    except Exception:
        return []

def apply_retention_policy(items: list) -> list:
    """直近30日以内のアイテムのみ保持し、古いものを自動削除（日付降順ソート）"""
    today_utc = datetime.now(timezone.utc).date()
    cutoff_date = today_utc - timedelta(days=MAX_RETENTION_DAYS)

    valid_items = []
    for item in items:
        item_date_str = item.get('date', '')
        try:
            item_date = datetime.strptime(item_date_str, '%Y-%m-%d').date()
            if item_date >= cutoff_date:
                valid_items.append(item)
            else:
                print(f"    [-] Purging expired trend (>30 days old): [{item.get('id')}] date={item_date_str}")
        except Exception:
            valid_items.append(item)

    valid_items.sort(key=lambda x: x.get('date', ''), reverse=True)
    return valid_items[:MAX_ITEMS_LIMIT]

def update_mock_data_trends(trends: list) -> bool:
    """src/data/mockData.ts の recentTrendsData 定義を書き換え"""
    if not os.path.exists(MOCK_DATA_PATH):
        return False

    with open(MOCK_DATA_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    ts_json = json.dumps(trends, ensure_ascii=False, indent=2)
    ts_formatted = re.sub(r'"(\w+)":', r'\1:', ts_json)

    replacement = f"// 5. なんか最近よく見るな～（日次自動更新 ＆ 直近30日ローテーション保持）\nexport const recentTrendsData: RecentTrendItem[] = {ts_formatted};"

    pattern = r'// 5\. (?:なんか最近よく見るな～|よく分からないけど流行ってるもの)[\s\S]*?export const recentTrendsData: RecentTrendItem\[\] = \[[\s\S]*?\];'
    if re.search(pattern, content):
        updated_content = re.sub(pattern, replacement, content)
    else:
        pattern_simple = r'export const recentTrendsData: RecentTrendItem\[\] = \[[\s\S]*?\];'
        if re.search(pattern_simple, content):
            updated_content = re.sub(pattern_simple, f"export const recentTrendsData: RecentTrendItem[] = {ts_formatted};", content)
        else:
            print("[!] Error: Could not locate recentTrendsData pattern in mockData.ts", file=sys.stderr)
            return False

    with open(MOCK_DATA_PATH, 'w', encoding='utf-8') as f:
        f.write(updated_content)

    print(f"[✔] Successfully refreshed {MOCK_DATA_PATH} with {len(trends)} active trends (30-day retention active).")
    return True

def run_trend_update():
    print("=" * 70)
    print("  CapGazer Category 04 (Recent Trends) Daily Automated Pipeline")
    print(f"  Execution Time: {datetime.now(timezone.utc).isoformat()} UTC")
    print("=" * 70)

    current_items = load_current_trends()
    if not current_items:
        print("[*] Using baseline verified trend catalog.")
        return

    print(f"[*] Loaded {len(current_items)} existing trend items.")
    retained_items = apply_retention_policy(current_items)
    print(f"[✔] Retention check complete. Retaining {len(retained_items)} items within {MAX_RETENTION_DAYS} days.")

    update_mock_data_trends(retained_items)

if __name__ == '__main__':
    run_trend_update()
