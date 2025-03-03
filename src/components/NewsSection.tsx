import React from 'react';
import { Calendar } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  category: 'match' | 'player' | 'event';
  imageUrl?: string;
}

interface NewsSectionProps {
  limit?: number;
}

const NewsSection: React.FC<NewsSectionProps> = ({ limit }) => {
  // サンプルデータ
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: '千葉県3部リーグ第3節 FCinvertie vs FC千葉 試合結果',
      date: '2025-01-16',
      summary: '先日行われた千葉県3部リーグ第3節、FC千葉との試合は2-1で勝利しました。前半は互角の展開でしたが、後半に決勝点を奪い、貴重な勝ち点3を獲得しました。',
      category: 'match',
      imageUrl: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: '新加入選手のお知らせ',
      date: '2025-01-10',
      summary: 'この度、FCinvertieに新しく3名の選手が加入することになりましたのでお知らせします。今後のチームの活躍にご期待ください。',
      category: 'player'
    },
    {
      id: 3,
      title: '八千代市リーグ 第2節の試合結果',
      date: '2025-01-30',
      summary: '八千代市リーグ第2節、八千代FCとの試合は0-0の引き分けに終わりました。互いに決定機を作りながらも得点には至らず、勝ち点1を獲得しました。',
      category: 'match'
    },
    {
      id: 4,
      title: 'チーム合宿のお知らせ',
      date: '2025-01-05',
      summary: '来月、チーム強化のための合宿を予定しています。詳細は後日お知らせします。',
      category: 'event',
      imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'ユニフォームスポンサー決定のお知らせ',
      date: '2024-12-20',
      summary: '来シーズンのユニフォームスポンサーが決定しました。詳細は近日中に発表いたします。',
      category: 'event'
    }
  ];

  // 日付をフォーマットする関数
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  // カテゴリに応じたバッジの色を返す関数
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'match':
        return <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">試合</span>;
      case 'player':
        return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">選手</span>;
      case 'event':
        return <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">イベント</span>;
      default:
        return null;
    }
  };

  // 表示するニュース数を制限
  const displayedNews = limit ? newsItems.slice(0, limit) : newsItems;

  return (
    <div className="space-y-6">
      {displayedNews.map((news) => (
        <div key={news.id} className="border-b pb-4 last:border-b-0 last:pb-0">
          <div className="flex items-center space-x-2 mb-2">
            {getCategoryBadge(news.category)}
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar size={14} className="mr-1" />
              <span>{formatDate(news.date)}</span>
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">{news.title}</h3>
          {news.imageUrl && (
            <div className="mb-3">
              <img 
                src={news.imageUrl} 
                alt={news.title} 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}
          <p className="text-gray-700">{news.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;