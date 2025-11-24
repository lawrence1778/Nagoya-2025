"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Info, Navigation, Sun, CloudRain, Coffee, Camera, Train, ShoppingBag, Home, Star, ChevronRight, Users, Plane, X, Image as ImageIcon } from 'lucide-react';

// 圖片路徑已改為讀取 public 資料夾內的圖片
// 請確保您上傳的圖片檔名與下方 image 欄位一致 (不分大小寫，建議全小寫)
const itineraryData = [
  {
    date: "2025-11-25",
    label: "Day 1",
    weekday: "週二",
    weather: "晴時多雲",
    temp: "10°C - 16°C",
    activities: [
      { 
        time: "11:05", 
        title: "抵達中部國際機場", 
        type: "transport", 
        icon: "plane", 
        note: "CI0154 (07:35 TPE → 11:05 NGO)", 
        location: "中部国際空港",
        description: "日本中部的空中門戶。推薦前往「FLIGHT OF DREAMS」欣賞波音787初號機的壯觀英姿。",
        image: "/d1-airport.jpg"
      },
      { 
        time: "13:07", 
        title: "搭乘 μ-SKY", 
        type: "transport", 
        icon: "train", 
        note: "已購票，預計 13:37 抵達名古屋站", 
        location: "中部国際空港駅",
        description: "搭乘舒適的機場快速列車前往市區，藍白色的車身是其特徵。",
        image: "/d1-train.jpg"
      },
      { 
        time: "13:45", 
        title: "飯店寄放行李 & 午餐", 
        type: "food", 
        icon: "food", 
        note: "地點：Royal Park Iconic (榮)。先寄行李再用餐。", 
        location: "The Royal Park Hotel Iconic Nagoya", 
        transport: "地鐵 (名古屋→榮)",
        description: "位於榮商圈地標大廈的高級飯店，交通便利，周邊美食林立。",
        image: "/d1-hotel.jpg"
      },
      { 
        time: "15:30", 
        title: "名古屋市科學館", 
        type: "activity", 
        icon: "science", 
        note: "互動設施多，適合 3 歲幼兒，17:00 閉館", 
        location: "名古屋市科学館", 
        transport: "地鐵 (榮→伏見)",
        description: "擁有世界最大巨蛋天文館「Brother Earth」，銀色球體外觀是必拍地標。",
        image: "/d1-science.jpg"
      },
      { 
        time: "17:30", 
        title: "AEON Mall Noritake Garden", 
        type: "shopping", 
        icon: "shop", 
        note: "晚餐、購物、蔦屋書店", 
        location: "AEON Mall Nagoya Noritake Garden", 
        transport: "地鐵 (伏見→龜島)",
        description: "紅磚倉庫改建的複合設施，著名的蔦屋書店「巨大書牆」就在這裡。",
        image: "/d1-aeon.jpg"
      },
      { 
        time: "20:30", 
        title: "飯店 Check-in", 
        type: "hotel", 
        icon: "hotel", 
        note: "The Royal Park Hotel Iconic Nagoya", 
        location: "The Royal Park Hotel Iconic Nagoya", 
        transport: "地鐵 (龜島→榮)",
        description: "結束第一天的行程，回到舒適的客房休息。",
        image: "/d1-room.jpg"
      }
    ]
  },
  {
    date: "2025-11-26",
    label: "Day 2",
    weekday: "週三",
    weather: "晴朗",
    temp: "9°C - 15°C",
    activities: [
      { time: "08:30", title: "早餐：客美多咖啡", type: "food", icon: "coffee", note: "體驗名古屋特色早餐", location: "Komeda's Coffee Sakae", transport: "步行", description: "名古屋必吃早餐文化：點咖啡送厚片吐司與紅豆泥。", 
        image: "/d2-coffee.jpg" 
      },
      { time: "10:00", title: "樂高樂園 (LEGOLAND)", type: "activity", icon: "play", note: "平日暢玩，幼兒友善", location: "LEGOLAND Japan", transport: "地鐵 + 青波線", description: "繽紛的積木世界，專為兒童設計的夢幻樂園。", 
        image: "/d2-lego.jpg" 
      },
      { time: "15:00", title: "返回「榮」地區", type: "transport", icon: "train", note: "提早離園，爭取傍晚觀景時間", location: "Sakae Station", transport: "青波線 + 地鐵", description: "搭乘電車返回市區，避開尖峰時刻。", 
        image: "/d2-station.jpg" 
      },
      { time: "16:00", title: "Oasis 21 & 名古屋電視塔", type: "activity", icon: "camera", note: "欣賞黃昏與夜景，飯店就在附近", location: "Oasis 21", transport: "步行", description: "名古屋地標「水的宇宙船」，透明屋頂與電視塔相映成趣。", 
        image: "/d2-oasis.jpg" 
      },
      { time: "19:00", title: "晚餐：備長鰻魚飯", type: "food", icon: "food", note: "榮LACHIC店，建議預約", location: "Hitsumabushi Bincho Sakae Lachic", transport: "步行", description: "名古屋名物「鰻魚三吃」，炭火直烤香氣四溢。", 
        image: "/d2-eel.jpg" 
      },
      { time: "20:30", title: "甜點：HARBS 榮本店", type: "food", icon: "cake", note: "經典水果千層", location: "HARBS Sakae Main Store", transport: "步行", description: "層層堆疊的新鮮水果與鮮奶油，HARBS 的發源地就在這裡。", 
        image: "/d2-harbs.jpg" 
      }
    ]
  },
  {
    date: "2025-11-27",
    label: "Day 3",
    weekday: "週四",
    weather: "山區可能微雨",
    temp: "5°C - 12°C",
    activities: [
      { time: "08:00", title: "Toyota Rent a Car 取車", type: "car", icon: "car", note: "榮店取車，確認兒童座椅 & 雪胎", location: "Toyota Rent a Car Sakae", transport: "步行", description: "辦理租車手續，準備展開自駕之旅。", 
        image: "/d3-car.jpg" 
      },
      { time: "08:45", title: "出發前往郡上八幡", type: "transport", icon: "car", note: "自駕約 1.5 小時", location: "Gujo Hachiman", description: "沿著自動車道行駛，沿途欣賞日本鄉間風景。", 
        image: "/d3-road.jpg" 
      },
      { time: "10:15", title: "郡上八幡遊覽 & 午餐", type: "activity", icon: "camera", note: "停留約 2 小時，吃蕎麥麵", location: "Gujo Hachiman Castle Town", transport: "停車步行", description: "古色古香的城下町，清澈的水道流經家家戶戶。", 
        image: "/d3-gujo.jpg" 
      },
      { time: "12:15", title: "前往白川鄉合掌村", type: "transport", icon: "car", note: "自駕約 1 小時", location: "Shirakawa-go", description: "穿越群山隧道，前往世界遺產。", 
        image: "/d3-mountain.jpg" 
      },
      { time: "13:15", title: "白川鄉合掌村遊覽", type: "activity", icon: "camera", note: "停留 2.5 小時", location: "Shirakawa-go Observation Deck", transport: "停車步行", description: "童話般的合掌造聚落，如詩如畫的世界文化遺產。", 
        image: "/d3-shirakawa.jpg" 
      },
      { time: "16:00", title: "準時出發返回名古屋", type: "transport", icon: "car", note: "務必準時，趕 20:00 還車", location: "Nagoya", description: "回程可能遇到傍晚車潮，請預留充裕時間。", 
        image: "/d3-highway.jpg" 
      },
      { time: "20:00", title: "還車 (Nishiki Shop)", type: "car", icon: "car", note: "錦店還車", location: "Toyota Rent a Car Nagoya Nishiki", description: "歸還車輛，結束一日的自駕之旅。", 
        image: "/d3-return.jpg" 
      }
    ]
  },
  {
    date: "2025-11-28",
    label: "Day 4",
    weekday: "週五",
    weather: "多雲",
    temp: "8°C - 14°C",
    activities: [
      { time: "11:30", title: "午餐：馬喰一代", type: "food", icon: "food", note: "已預約，頂級飛騨牛", location: "Bakuroichidai Nagoya Sakae", transport: "地鐵 + 步行", description: "頂級飛驒牛專賣店，午間套餐CP值超高。", 
        image: "/d4-beef.jpg" 
      },
      { time: "13:30", title: "參觀名古屋城", type: "activity", icon: "camera", note: "建議買地鐵一日券", location: "Nagoya Castle", transport: "地鐵 (需轉乘)", description: "日本三大名城之一，金鯱與本丸御殿是必看重點。", 
        image: "/d4-castle.jpg" 
      },
      { time: "16:00", title: "返回 Royal Park 休息", type: "hotel", icon: "hotel", note: "帶小孩稍作午休，為夜楓保留體力", location: "The Royal Park Hotel Iconic Nagoya", description: "中場休息充電。", 
        image: "/d4-rest.jpg" 
      },
      { time: "17:30", title: "德川園 (夜楓)", type: "activity", icon: "tree", note: "日式庭園精緻夜楓", location: "Tokugawaen", transport: "地鐵 (榮→大曾根)", description: "日式庭園的夜間點燈，紅葉倒映在湖面上非常夢幻。", 
        image: "/d4-garden.jpg" 
      },
      { time: "20:00", title: "榮商圈 晚餐與購物", type: "shopping", icon: "shop", note: "週五夜晚熱鬧氣氛", location: "Sakae Shopping District", transport: "地鐵", description: "名古屋最繁華的商業區，摩天輪與霓虹燈閃爍。", 
        image: "/d4-sakae.jpg" 
      }
    ]
  },
  {
    date: "2025-11-29",
    label: "Day 5",
    weekday: "週六",
    weather: "晴朗",
    temp: "10°C - 17°C",
    activities: [
      { time: "08:00", title: "Check-out & 移動", type: "transport", icon: "taxi", note: "搭計程車至 JR 門樓酒店寄放行李", location: "Nagoya JR Gate Tower Hotel", transport: "計程車", description: "轉換住宿地點至名古屋車站上方，方便明日搭機。", 
        image: "/d5-taxi.jpg" 
      },
      { time: "10:30", title: "抵達鈴鹿賽道樂園", type: "activity", icon: "flag", note: "開園初期抵達，幼兒友善設施", location: "Suzuka Circuit Park", transport: "巴士 + 步行", description: "以賽車為主題的樂園，許多設施都可讓小朋友親自駕駛。", 
        image: "/d5-suzuka.jpg" 
      },
      { time: "12:30", title: "賽道挑戰者", type: "activity", icon: "car", note: "預約時段，請準時", location: "Suzuka Circuit Circuit Challenger", description: "在真實的F1賽道上駕駛電動賽車！", 
        image: "/d5-race.jpg" 
      },
      { time: "18:40", title: "晚餐與最後採購", type: "shopping", icon: "shop", note: "車站周邊 (高島屋/Bic Camera)", location: "Nagoya Station", description: "名古屋車站周邊百貨林立，最後採購的好地方。", 
        image: "/d5-shopping.jpg" 
      }
    ]
  },
  {
    date: "2025-11-30",
    label: "Day 6",
    weekday: "週日",
    weather: "晴朗",
    temp: "9°C - 15°C",
    activities: [
      { time: "07:00", title: "早餐：Doutor Coffee", type: "food", icon: "coffee", note: "快速解決早餐", location: "Doutor Coffee Nagoya", transport: "步行", description: "簡單快速的咖啡早餐，確保準時前往機場。", 
        image: "/d6-coffee.jpg" 
      },
      { time: "09:50", title: "搭乘 CI0151 返家", type: "flight", icon: "home", note: "09:50 NGO → 12:15 TPE", location: "Chubu Centrair International Airport", description: "帶著滿滿的回憶與戰利品，平安返家。", 
        image: "/d6-airport.jpg" 
      }
    ]
  }
];

// Icon mapping helper
const getIcon = (type) => {
  switch (type) {
    case 'transport': return <Train size={18} />;
    case 'food': return <Coffee size={18} />;
    case 'activity': return <Star size={18} />;
    case 'shopping': return <ShoppingBag size={18} />;
    case 'hotel': return <Home size={18} />;
    case 'car': return <Navigation size={18} />;
    case 'plane': return <Plane size={18} className="rotate-45" />;
    case 'science': return <Info size={18} />;
    case 'camera': return <Camera size={18} />;
    case 'tree': return <MapPin size={18} />;
    default: return <Clock size={18} />;
  }
};

const getColor = (type) => {
    switch (type) {
        case 'transport': return 'bg-blue-100 text-blue-700 border-blue-200';
        case 'food': return 'bg-orange-100 text-orange-700 border-orange-200';
        case 'activity': return 'bg-rose-100 text-rose-700 border-rose-200';
        case 'shopping': return 'bg-purple-100 text-purple-700 border-purple-200';
        case 'car': return 'bg-green-100 text-green-700 border-green-200';
        default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
}

export default function App() {
  const [activeDay, setActiveDay] = useState(0);
  const [showInstall, setShowInstall] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null); 

  // Check if running on iOS safely
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    // Simple check: if standard browser mode, show hint
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isIOS && !isStandalone) {
      setShowInstall(true);
    }
  }, []);

  const openMap = (location) => {
    const query = encodeURIComponent(location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const currentItinerary = itineraryData[activeDay];

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans max-w-md mx-auto shadow-2xl overflow-hidden relative">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 pt-8 pb-4 shrink-0 shadow-md">
        <div className="flex justify-between items-center mb-1">
            <h1 className="text-xl font-bold tracking-wide">名古屋親子六日遊</h1>
            <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                <Users size={14} />
                <span>2大1小(3歲)</span>
            </div>
        </div>
        <div className="flex items-center justify-between text-blue-100 text-sm">
            <span>2025/11/25 - 11/30</span>
            <div className="flex items-center space-x-1">
               {currentItinerary.weather.includes('雨') ? <CloudRain size={14} /> : <Sun size={14} />}
               <span>{currentItinerary.temp}</span>
            </div>
        </div>
      </div>

      {/* Date Tabs */}
      <div className="flex overflow-x-auto bg-white border-b border-gray-200 shrink-0 no-scrollbar">
        {itineraryData.map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveDay(index)}
            className={`flex-shrink-0 flex flex-col items-center justify-center px-5 py-3 min-w-[80px] transition-colors
              ${activeDay === index 
                ? 'border-b-4 border-blue-600 bg-blue-50 text-blue-700' 
                : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <span className="text-xs font-medium">{day.label}</span>
            <span className="text-sm font-bold">{day.weekday}</span>
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20 scroll-smooth">
        
        {/* Day Header */}
        <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold text-slate-800">{currentItinerary.date} 行程</h2>
            <span className="text-sm text-slate-500 bg-slate-200 px-2 py-1 rounded">
                {currentItinerary.weather}
            </span>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-3 space-y-6">
          {currentItinerary.activities.map((item, idx) => (
            <div key={idx} className="mb-6 ml-6 relative group">
              {/* Dot */}
              <div className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-white shadow-sm z-10 ${getColor(item.type).split(' ')[0].replace('bg-', 'bg-')}`}></div>
              
              {/* Card - Now Clickable */}
              <div 
                onClick={() => setSelectedActivity(item)}
                className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 active:scale-[0.98] transition-transform duration-100 cursor-pointer hover:shadow-md"
              >
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2">
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${getColor(item.type)}`}>
                            {item.time}
                        </span>
                    </div>
                    {/* Icon Circle */}
                    <div className={`p-1.5 rounded-full opacity-80 ${getColor(item.type)}`}>
                        {getIcon(item.type)}
                    </div>
                </div>

                <h3 className="text-base font-bold text-slate-800 mb-1 leading-tight flex items-center">
                    {item.title}
                    <Info size={14} className="ml-2 text-slate-300" />
                </h3>

                {item.note && item.note !== "-" && (
                    <p className="text-sm text-slate-500 mb-2 leading-relaxed">
                        {item.note}
                    </p>
                )}

                {/* Info Footer */}
                <div className="mt-3 pt-3 border-t border-slate-50 flex flex-col gap-2 text-xs text-slate-600">
                    {item.transport && item.transport !== "-" && (
                        <div className="flex items-center space-x-1.5">
                            <Train size={14} className="text-slate-400" />
                            <span>交通: {item.transport}</span>
                        </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center text-xs text-slate-400 py-6">
            已經到底了，記得早點休息！ 😴
        </div>
      </div>

      {/* Detail Modal */}
      {selectedActivity && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
            
            {/* Modal Image Area */}
            <div className="relative h-48 bg-slate-200 shrink-0">
               {selectedActivity.image ? (
                  <img 
                    src={selectedActivity.image} 
                    alt={selectedActivity.title} 
                    className="w-full h-full object-cover transition-opacity duration-300"
                    onError={(e) => {
                        e.target.onerror = null; 
                        e.target.style.display = 'none'; // Hide broken image
                        e.target.nextSibling.style.display = 'flex'; // Show fallback
                    }}
                  />
               ) : null}
               {/* Fallback Element (Hidden by default, shown on error) */}
               <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center bg-slate-100 text-slate-300" style={{display: selectedActivity.image ? 'none' : 'flex'}}>
                     <ImageIcon size={48} />
               </div>

               <button 
                  onClick={(e) => {
                      e.stopPropagation();
                      setSelectedActivity(null);
                  }}
                  className="absolute top-3 right-3 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full backdrop-blur-md transition-colors z-10"
                >
                  <X size={20} />
               </button>
               <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-md bg-white/90 z-10 ${getColor(selectedActivity.type).split(' ')[1]}`}>
                  {selectedActivity.time}
               </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto">
              <h2 className="text-xl font-bold text-slate-800 mb-3">{selectedActivity.title}</h2>
              
              <div className="space-y-4">
                 {/* Description */}
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                      {selectedActivity.description || "暫無詳細介紹。"}
                    </p>
                 </div>

                 {/* Note */}
                 {selectedActivity.note && (
                    <div className="flex items-start space-x-3 text-sm text-slate-500">
                        <Info size={18} className="shrink-0 mt-0.5 text-blue-400" />
                        <span>{selectedActivity.note}</span>
                    </div>
                 )}

                 {/* Transport Info */}
                 {selectedActivity.transport && (
                    <div className="flex items-start space-x-3 text-sm text-slate-500">
                        <Train size={18} className="shrink-0 mt-0.5 text-green-500" />
                        <span>交通：{selectedActivity.transport}</span>
                    </div>
                 )}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 shrink-0">
               <button 
                  onClick={() => openMap(selectedActivity.location)}
                  className="flex items-center justify-center w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
               >
                  <Navigation size={18} className="mr-2" />
                  Google Map 導航
               </button>
            </div>
          </div>
        </div>
      )}

      {/* iOS Install Hint Overlay */}
      {showInstall && (
        <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 text-white p-4 rounded-xl shadow-2xl backdrop-blur text-sm z-50 animate-in slide-in-from-bottom-5">
            <div className="flex justify-between items-start">
                <div>
                    <p className="font-bold mb-1">安裝到手機</p>
                    <p className="text-slate-300">點擊 Safari 下方的分享按鈕 <span className="inline-block px-1 bg-slate-700 rounded">⎋</span>，然後選擇「加入主畫面」。</p>
                </div>
                <button onClick={() => setShowInstall(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>
        </div>
      )}
    </div>
  );
}
