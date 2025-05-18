export interface Location {
  id: number;
  name: string;
  type: 'landmark' | 'restaurant' | 'fountain';
  background: string;
  icon: string;
}

/**
 * Define location data
 * To replace the background images:
 * 1. Upload your own images to a hosting service (like Imgur, Cloudinary, etc.)
 * 2. Replace the URL in the background property
 * 3. Make sure the image is publicly accessible
 */
export const locations: Location[] = [
  { 
    id: 0, 
    name: "海底撈餐廳 (Haidilao)", 
    type: "restaurant",
    background: "./images/locations/haidilao.jpg", 
    icon: "🍲"
  },
  { 
    id: 1, 
    name: "Panni 餐廳", 
    type: "restaurant", 
    background: "./images/locations/panni.jpg", 
    icon: "🍽️"
  },
  { 
    id: 2, 
    name: "旗津海邊 (Qijin Seaside)", 
    type: "landmark", 
    background: "./images/locations/qijin.jpg", 
    icon: "🏖️"
  },
  { 
    id: 3, 
    name: "台南酒吧 (Tainan Bar)", 
    type: "restaurant", 
    background: "./images/locations/tainan.jpg", 
    icon: "🍸"
  },
  { 
    id: 4, 
    name: "我們的家 (Our Home)", 
    type: "landmark", 
    background: "./images/locations/home.jpg", 
    icon: "🏠"
  },
  { 
    id: 5, 
    name: "520 慶祝日 (Special Day)", 
    type: "landmark", 
    background: "./images/locations/520.jpg", 
    icon: "❤️"
  }
];

// Location specific dialog sequences
export const fountainDialogs = [
  // Haidilao dialogs
  "牛牛: 這是我們第一次見面的地方！",
  "狗狗: 沒錯，在海底撈！我們常常一起來這裡吃飯。",
  
  // Panni dialogs
  "牛牛: 這是寶寶最愛的餐廳！",
  "狗狗: 沒錯，這裡的食物真的很好吃！",
  
  // Qijin seaside dialogs
  "牛牛: 記得我們一起看的那次落日嗎？",
  "狗狗: 在海邊吹著微風，然後晚上騎電動滑板車在駁二港口！",
  
  // Tainan bar dialogs
  "牛牛: 我們的第一次旅行！",
  "狗狗: 在台南喝了好多好喝的酒，真的很開心！",
  
  // Home dialogs
  "牛牛: 這是我們的家！",
  "狗狗: 我們常常待在家裡一起吃好吃的食物看好看的影片，好快樂！",
  
  // 520 celebration dialogs
  "牛牛: 慶祝 520！我愛你！",
  "狗狗: 你永遠是我的牛牛寶貝！今年有你，明年也要有你，以後都要是你！❤️"
];
