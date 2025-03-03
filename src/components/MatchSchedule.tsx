import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface Match {
  id: number;
  date: string;
  time: string;
  opponent: string;
  location: string;
  competition: string;
  result?: string;
}

interface MatchScheduleProps {
  limit?: number;
}

const MatchSchedule: React.FC<MatchScheduleProps> = ({ limit }) => {
  // サンプルデータ
  const matches: Match[] = [
    {
      id: 1,
      date: '2025-01-15',
      time: '14:00',
      opponent: 'FC千葉',
      location: '八千代市総合運動公園',
      competition: '千葉県3部リーグ',
      result: '2-1'
    },
    {
      id: 2,
      date: '2025-01-29',
      time: '15:30',
      opponent: '八千代FC',
      location: '八千代市民グラウンド',
      competition: '八千代市リーグ',
      result: '0-0'
    },
    {
      id: 3,
      date: '2025-02-12',
      time: '13:00',
      opponent: '市川サッカークラブ',
      location: '市川市スポーツセンター',
      competition: '千葉県3部リーグ'
    },
    {
      id: 4,
      date: '2025-02-26',
      time: '16:00',
      opponent: '船橋ユナイテッド',
      location: '船橋市運動公園',
      competition: '千葉県3部リーグ'
    },
    {
      id: 5,
      date: '2025-03-10',
      time: '14:30',
      opponent: '八千代スターズ',
      location: '八千代市総合運動公園',
      competition: '八千代市リーグ'
    }
  ];

  // 日付をフォーマットする関数
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short'
    }).format(date);
  };

  // 表示する試合数を制限
  const displayedMatches = limit ? matches.slice(0, limit) : matches;

  return (
    <div className="space-y-4">
      {displayedMatches.map((match) => (
        <div 
          key={match.id} 
          className={`border-l-4 ${match.result ? 'border-gray-500' : 'border-red-500'} bg-gray-50 p-4 rounded-r shadow-sm`}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <div className="flex items-center text-gray-600 mb-1">
                <Calendar size={16} className="mr-1" />
                <span>{formatDate(match.date)}</span>
                <Clock size={16} className="ml-3 mr-1" />
                <span>{match.time}</span>
              </div>
              <h3 className="font-bold text-lg">
                FCinvertie vs {match.opponent}
              </h3>
              <p className="text-sm text-gray-600">{match.competition}</p>
              <p className="text-sm text-gray-600">{match.location}</p>
            </div>
            {match.result && (
              <div className="mt-2 md:mt-0 bg-gray-200 px-4 py-2 rounded-full font-bold">
                {match.result}
              </div>
            )}
            {!match.result && (
              <div className="mt-2 md:mt-0 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
                試合予定
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchSchedule;