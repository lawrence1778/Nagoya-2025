"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Info, Navigation, Sun, CloudRain, Coffee, Camera, Train, ShoppingBag, Home, Star, ChevronRight, Users, Plane, X, Image as ImageIcon, Leaf } from 'lucide-react';

// 🍁 楓葉飄落動畫組件 🍁
const FallingLeaves = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    // 在客戶端生成隨機楓葉，避免 SSR 不匹配
    const leafCount = 15; // 畫面上的楓葉數量
    const newLeaves = Array.from({ length: leafCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // 隨機水平位置 (0-100%)
      animationDuration: 10 + Math.random() * 15, // 飄落時間 (10-25秒)，慢一點比較優雅
      delay: Math.random() * 20, // 隨機延遲，避免同時落下
      size: 12 + Math.random() * 14, // 大小變化
      rotation: Math.random() * 360, // 初始旋轉
      // 秋天配色：紅、橙、琥珀
      color: ['text-red-500/40', 'text-orange-500/40', 'text-amber-500/40', 'text-red-400/40'][Math.floor(Math.random() * 4)]
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1] h-full w-full" aria-hidden="true">
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(20px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className={`absolute top-[-20px] ${leaf.color}`}
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            animation: `fall ${leaf.animationDuration}s linear infinite`,
            animationDelay: `-${leaf.delay}s`, // 負數延遲讓動畫直接開始，不用等
            transform: `rotate(${leaf.rotation}deg)`
          }}
        >
          {/* 使用 lucide-react 的 Leaf icon，並填滿顏色 */}
          <Leaf size={leaf.size} fill="currentColor" strokeWidth={0.5} />
        </div>
      ))}
    </div>
  );
};

// 圖片路徑
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
        case 'transport': return 'bg-sky-100 text-sky-800 border-sky-200';
        case 'food': return 'bg-orange-100 text-orange-800 border-orange-200';
        case 'activity': return 'bg-rose-100 text-rose-800 border-rose-200';
        case 'shopping': return 'bg-amber-100 text-amber-800 border-amber-200';
        case 'hotel': return 'bg-stone-200 text-stone-700 border-stone-300';
        case 'car': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
        default: return 'bg-stone-100 text-stone-600 border-stone-200';
    }
}

export default function App() {
  const [activeDay, setActiveDay] = useState(0);
  const [showInstall, setShowInstall] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null); 

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
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
    <div className="flex flex-col h-screen bg-stone-50 font-sans max-w-md mx-auto shadow-2xl overflow-hidden relative text-stone-800">
      
      {/* 🍂 楓葉飄落動畫圖層 (放在最底層，但在背景之上) */}
      <FallingLeaves />

      {/* Header */}
      <div className="bg-gradient-to-br from-orange-700 via-red-700 to-red-800 text-white p-4 pt-10 pb-6 shrink-0 shadow-md relative overflow-hidden z-10">
        {/* 裝飾用背景大楓葉 */}
        <Leaf className="absolute top-4 right-4 text-white/10 w-24 h-24 -rotate-12" />
        <Leaf className="absolute bottom-[-10px] left-10 text-white/10 w-16 h-16 rotate-45" />

        <div className="flex justify-between items-center mb-2 relative z-10">
            <h1 className="text-2xl font-bold tracking-wide text-white drop-shadow-md">名古屋賞楓之旅</h1>
            <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-md border border-white/30">
                <Users size={14} />
                <span>2大1小</span>
            </div>
        </div>
        <div className="flex items-center justify-between text-orange-50 text-sm relative z-10 font-medium">
            <span>2025/11/25 - 11/30</span>
            <div className="flex items-center space-x-1">
               {currentItinerary.weather.includes('雨') ? <CloudRain size={16} /> : <Sun size={16} />}
               <span>{currentItinerary.temp}</span>
            </div>
        </div>
      </div>

      {/* Date Tabs: z-10 確保在楓葉之上 */}
      <div className="flex overflow-x-auto bg-white border-b border-stone-200 shrink-0 no-scrollbar z-10">
        {itineraryData.map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveDay(index)}
            className={`flex-shrink-0 flex flex-col items-center justify-center px-5 py-3 min-w-[80px] transition-all duration-300
              ${activeDay === index 
                ? 'border-b-4 border-red-600 bg-orange-50 text-red-700 font-bold' 
                : 'text-stone-400 hover:bg-stone-50 hover:text-stone-600'}`}
          >
            <span className="text-xs mb-0.5">{day.label}</span>
            <span className="text-sm">{day.weekday}</span>
          </button>
        ))}
      </div>

      {/* Main Content Area: 設定背景為透明或半透明，讓楓葉可以在背後顯示，或是設定內容卡片為不透明 */}
      {/* 這裡我將 content area 背景設為透明，讓楓葉可以貫穿整個畫面，但卡片是白色的所以文字清楚 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24 scroll-smooth z-10 relative">
        
        {/* Day Header */}
        <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-xl font-bold text-stone-800 flex items-center">
              <span className="w-1.5 h-6 bg-red-600 rounded-full mr-2"></span>
              {currentItinerary.date} 行程
            </h2>
            <span className="text-xs font-medium text-stone-500 bg-stone-200/60 px-2 py-1 rounded border border-stone-200 backdrop-blur-sm">
                {currentItinerary.weather}
            </span>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-stone-300 ml-3 space-y-8">
          {currentItinerary.activities.map((item, idx) => (
            <div key={idx} className="mb-6 ml-6 relative group">
              {/* Dot */}
              <div className={`absolute -left-[33px] top-1 w-4 h-4 rounded-full border-2 border-stone-50 shadow-sm z-10 ${getColor(item.type).split(' ')[0].replace('bg-', 'bg-')}`}></div>
              
              {/* Card */}
              <div 
                onClick={() => setSelectedActivity(item)}
                className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-stone-100 active:scale-[0.98] transition-all duration-200 cursor-pointer hover:shadow-md hover:border-orange-200"
              >
                <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-2">
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm ${getColor(item.type)}`}>
                            {item.time}
                        </span>
                    </div>
                    {/* Icon Circle */}
                    <div className={`p-2 rounded-full opacity-90 ${getColor(item.type)}`}>
                        {getIcon(item.type)}
                    </div>
                </div>

                <h3 className="text-lg font-bold text-stone-800 mb-1 leading-tight flex items-center">
                    {item.title}
                    <Info size={16} className="ml-auto text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                {item.note && item.note !== "-" && (
                    <p className="text-sm text-stone-500 mb-3 leading-relaxed">
                        {item.note}
                    </p>
                )}

                {/* Info Footer */}
                <div className="mt-3 pt-3 border-t border-stone-100 flex items-center text-xs text-stone-500 font-medium">
                    {item.transport && item.transport !== "-" && (
                        <div className="flex items-center space-x-1.5">
                            <Train size={14} className="text-stone-400" />
                            <span>{item.transport}</span>
                        </div>
                    )}
                    <span className="ml-auto text-orange-400 flex items-center text-[10px]">
                       查看詳情 <ChevronRight size={12} />
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center text-xs text-stone-400 py-8">
            🍁 祝您有個美好的賞楓之旅 🍁
        </div>
      </div>

      {/* Detail Modal: z-50 最上層 */}
      {selectedActivity && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200 ring-1 ring-black/5">
            
            {/* Modal Image Area */}
            <div className="relative h-56 bg-stone-200 shrink-0 group">
               {selectedActivity.image ? (
                  <img 
                    src={selectedActivity.image} 
                    alt={selectedActivity.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                        e.target.onerror = null; 
                        e.target.style.display = 'none'; 
                        e.target.nextSibling.style.display = 'flex'; 
                    }}
                  />
               ) : null}
               {/* Fallback Element */}
               <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center bg-stone-100 text-stone-300" style={{display: selectedActivity.image ? 'none' : 'flex'}}>
                     <ImageIcon size={48} />
               </div>

               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

               <button 
                  onClick={(e) => {
                      e.stopPropagation();
                      setSelectedActivity(null);
                  }}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-1.5 rounded-full backdrop-blur-md transition-colors z-10"
                >
                  <X size={20} />
               </button>
               
               <div className="absolute bottom-4 left-4 text-white z-10">
                  <div className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mb-1 shadow-sm backdrop-blur-md border border-white/20 ${getColor(selectedActivity.type)}`}>
                      {selectedActivity.time}
                  </div>
                  <h2 className="text-xl font-bold leading-tight shadow-black drop-shadow-md">{selectedActivity.title}</h2>
               </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto bg-white">
              <div className="space-y-5">
                 {/* Description */}
                 <div className="text-stone-600 text-sm leading-7 whitespace-pre-line">
                      {selectedActivity.description || "暫無詳細介紹。"}
                 </div>

                 <div className="border-t border-stone-100 pt-4 space-y-3">
                    {/* Note */}
                    {selectedActivity.note && (
                        <div className="flex items-start space-x-3 text-sm text-stone-600 bg-stone-50 p-3 rounded-lg">
                            <Info size={18} className="shrink-0 mt-0.5 text-orange-500" />
                            <span>{selectedActivity.note}</span>
                        </div>
                    )}

                    {/* Transport Info */}
                    {selectedActivity.transport && (
                        <div className="flex items-start space-x-3 text-sm text-stone-600 bg-stone-50 p-3 rounded-lg">
                            <Train size={18} className="shrink-0 mt-0.5 text-emerald-600" />
                            <span>交通：{selectedActivity.transport}</span>
                        </div>
                    )}
                 </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 border-t border-stone-100 bg-stone-50 shrink-0">
               <button 
                  onClick={() => openMap(selectedActivity.location)}
                  className="flex items-center justify-center w-full py-3.5 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-xl font-bold shadow-lg shadow-orange-200 transition-all active:scale-[0.98]"
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
        <div className="absolute bottom-6 left-6 right-6 bg-stone-800/95 text-white p-5 rounded-2xl shadow-2xl backdrop-blur-md text-sm z-50 animate-in slide-in-from-bottom-10 border border-white/10">
            <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                    <p className="font-bold mb-1 text-base">加入主畫面</p>
                    <p className="text-stone-300 leading-relaxed">點擊 Safari 下方的分享按鈕 <span className="inline-block px-1.5 py-0.5 bg-stone-700 rounded mx-1">⎋</span>，然後選擇「加入主畫面」即可獲得最佳體驗。</p>
                </div>
                <button onClick={() => setShowInstall(false)} className="text-stone-400 hover:text-white p-1">✕</button>
            </div>
        </div>
      )}
    </div>
  );
}
