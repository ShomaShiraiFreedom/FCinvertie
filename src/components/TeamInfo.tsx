import React from 'react';
import { Users, Trophy, MapPin } from 'lucide-react';

const TeamInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">チーム情報</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-start">
          <Trophy className="text-red-500 mr-3 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-lg mb-1">所属リーグ</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>千葉県3部リーグ</li>
              <li>八千代市リーグ</li>
            </ul>
          </div>
        </div>
        
        <div className="flex items-start">
          <Users className="text-red-500 mr-3 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-lg mb-1">チーム情報</h3>
            <p className="text-gray-700">
              幅広い年齢層の選手が在籍し、週に一回公式戦や練習試合を行っています。
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <MapPin className="text-red-500 mr-3 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-lg mb-1">活動拠点</h3>
            <p className="text-gray-700">
              千葉県八千代市を中心に活動しています。主な練習場所はフクダ電子スクエアやフィールドです。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;