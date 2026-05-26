export const siteInfo = {
  name: "굽네치킨 홍대점",
  nameEn: "Goobne Chicken Hongdae",
  phone: "02-000-0000",
  address: "서울 마포구 잔다리로2길 17 1층~2층",
  addressEn: "1F–2F, 17 Jandari-ro 2-gil, Mapo-gu, Seoul",
  addressDetail: "홍대입구역 2번 출구 도보 5분",
  addressDetailEn: "5 min walk from Hongdae Stn. Exit 2",
  hours: {
    weekday: "오전 11:00 — 오전 02:00",
    weekdayEn: "Mon–Thu, Sun  11:00 AM – 2:00 AM",
    weekend: "오전 11:00 — 오전 03:00",
    weekendEn: "Fri–Sat  11:00 AM – 3:00 AM",
  },
  kakao: "#",
  instagram: "https://www.instagram.com/goobne_hongdae",
  youtube: "https://www.youtube.com/@goobne",
  threads: "https://www.threads.net/@goobne_hongdae",
  naverMap: "#",
};

export const navLinks = [
  { label: "메뉴", labelEn: "Menu", href: "#menu" },
  { label: "이벤트", labelEn: "Event", href: "#event" },
  { label: "매장소개", labelEn: "About", href: "#about" },
  { label: "오시는 길", labelEn: "Visit", href: "#contact" },
];

export const heroContent = {
  eyebrow: "홍대 No.1 오븐구이 치킨",
  eyebrowEn: "Hongdae's Favourite Oven-Grilled Chicken",
  headline: "바삭한 오븐구이,\n진짜 맛을 만나다",
  headlineEn: "Crispy Oven-Grilled.\nAuthentically Delicious.",
  body: "직화 오븐에서 구워낸 건강한 치킨. 홍대 한복판에서 굽네치킨의 깊은 맛을 경험하세요.",
  bodyEn: "Not fried—oven-grilled. Healthier, crispier, and bursting with flavour right in the heart of Hongdae.",
  primaryCta: { label: "전화 주문", labelEn: "Call Now", href: `tel:02-000-0000` },
  secondaryCta: { label: "오시는 길", labelEn: "Get Directions", href: "#contact" },
};

export const cards = [
  {
    id: 1,
    image: "/images/card1.png",
    badge: "BEST",
    title: "고추바사삭",
    titleEn: "Gochu Basasak",
    description: "매콤달콤한 소스와 바삭한 오븐구이의 조화. 홍대점 부동의 1위.",
    descriptionEn: "Sweet-spicy sauce meets crispy oven-roasted chicken. Our all-time #1.",
    link: "#menu",
  },
  {
    id: 2,
    image: "/images/card2.png",
    badge: "HOT",
    title: "볼케이노",
    titleEn: "Volcano",
    description: "불맛 가득한 화끈한 매운맛. 매운 것을 좋아하는 분께 강력 추천.",
    descriptionEn: "Fiery heat, smoky kick. For spice lovers who mean business.",
    link: "#menu",
  },
  {
    id: 3,
    image: "/images/card3.png",
    badge: "PICK",
    title: "오리지널",
    titleEn: "Original",
    description: "굽네의 시작, 담백하고 바삭한 오리지널. 오븐구이 본연의 맛을 느낄 수 있는 시그니처 메뉴.",
    descriptionEn: "Where it all began—clean, crispy, oven-roasted perfection. Goobne's signature classic.",
    link: "#menu",
  },
];

export const aboutContent = {
  image: "/images/about.jpg",
  eyebrow: "매장소개",
  eyebrowEn: "About Us",
  headline: "오븐으로 굽는 건강한 치킨",
  headlineEn: "Oven-Grilled the Healthy Way",
  paragraphs: [
    "굽네치킨은 직화 오븐에서 구워낸 치킨으로, 기름에 튀기지 않아 더욱 건강하고 바삭한 식감을 자랑합니다.",
    "홍대점은 2026년 6월 새롭게 오픈합니다. 홍대·연남동의 새로운 치킨 맛집을 기대해주세요. 신선한 재료와 정직한 조리법을 고집합니다.",
    "주식회사 지앤푸드(G&Food)의 굽네치킨 브랜드 가맹점으로, 본사의 품질 기준을 그대로 준수합니다.",
  ],
  paragraphsEn: [
    "Goobne Chicken is oven-grilled, not deep-fried—giving you a healthier bite that's still incredibly crispy.",
    "Our Hongdae branch opens June 2026. Get ready for the newest chicken spot in the neighborhood.",
    "We're a franchisee of G&Food's Goobne brand and uphold every quality standard they set.",
  ],
  stats: [
    { label: "오픈 예정", labelEn: "Opening", value: "2026.06" },
    { label: "전국 매장 수", labelEn: "Nationwide", value: "1,000+" },
    { label: "대표 메뉴", labelEn: "Menu Items", value: "20+" },
  ],
};

export const deliveryContent = {
  eyebrow: "배달 주문",
  eyebrowEn: "Order Delivery",
  headline: "지금 바로 배달 주문하세요",
  headlineEn: "Get It Delivered Now",
  subline: "앱으로 간편하게 주문하고 집에서 즐기세요.",
  sublineEn: "Order in seconds. Delivered to your door.",
  platforms: [
    { name: "홈페이지 주문", nameEn: "Goobne App", href: "https://www.goobne.co.kr/menu/new_p?gubun=app_download", color: "#E51D1A" },
    { name: "배달의민족", nameEn: "Baemin", href: "#", color: "#00AFFE" },
    { name: "쿠팡이츠", nameEn: "Coupang Eats", href: "#", color: "#EE2E24" },
    { name: "요기요", nameEn: "Yogiyo", href: "#", color: "#FA1F5A" },
    { name: "땡겨요", nameEn: "Ddangyo", href: "#", color: "#FF6B00" },
  ],
};
