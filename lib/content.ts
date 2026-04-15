export const siteInfo = {
  name: "굽네치킨 홍대점",
  nameEn: "Goobne Chicken Hongdae",
  phone: "02-000-0000",
  address: "서울 마포구 와우산로 000 1층",
  addressEn: "1F, 000 Wausan-ro, Mapo-gu, Seoul",
  addressDetail: "홍대입구역 2번 출구 도보 5분",
  addressDetailEn: "5 min walk from Hongdae Stn. Exit 2",
  hours: {
    weekday: "오전 11:00 — 자정 12:00",
    weekdayEn: "Mon–Fri  11:00 AM – Midnight",
    weekend: "오전 11:00 — 오전 01:00",
    weekendEn: "Sat–Sun  11:00 AM – 1:00 AM",
  },
  kakao: "#",
  instagram: "#",
  naverMap: "#",
};

export const navLinks = [
  { label: "메뉴", labelEn: "Menu", href: "#menu" },
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
    image: "/images/card1.svg",
    badge: "BEST",
    title: "고추바사삭",
    titleEn: "Gochu Basasak",
    description: "매콤달콤한 소스와 바삭한 오븐구이의 조화. 홍대점 부동의 1위.",
    descriptionEn: "Sweet-spicy sauce meets crispy oven-roasted chicken. Our all-time #1.",
    link: "#menu",
  },
  {
    id: 2,
    image: "/images/card2.svg",
    badge: "HOT",
    title: "볼케이노",
    titleEn: "Volcano",
    description: "불맛 가득한 화끈한 매운맛. 매운 것을 좋아하는 분께 강력 추천.",
    descriptionEn: "Fiery heat, smoky kick. For spice lovers who mean business.",
    link: "#menu",
  },
  {
    id: 3,
    image: "/images/card3.svg",
    badge: "PICK",
    title: "오리지널 스노잉",
    titleEn: "Original Snowing",
    description: "눈처럼 내려앉은 치즈 파우더. 남녀노소 모두 좋아하는 스테디셀러.",
    descriptionEn: "A snowfall of cheese powder on golden chicken. A timeless crowd-pleaser.",
    link: "#menu",
  },
];

export const aboutContent = {
  image: "/images/about.svg",
  eyebrow: "매장소개",
  eyebrowEn: "About Us",
  headline: "오븐으로 굽는 건강한 치킨",
  headlineEn: "Oven-Grilled the Healthy Way",
  paragraphs: [
    "굽네치킨은 직화 오븐에서 구워낸 치킨으로, 기름에 튀기지 않아 더욱 건강하고 바삭한 식감을 자랑합니다.",
    "홍대점은 2015년 오픈 이래 홍대·연남동 지역의 대표 치킨 맛집으로 자리잡았습니다. 신선한 재료와 정직한 조리법을 고집합니다.",
    "주식회사 지앤푸드(G&Food)의 굽네치킨 브랜드 가맹점으로, 본사의 품질 기준을 그대로 준수합니다.",
  ],
  paragraphsEn: [
    "Goobne Chicken is oven-grilled, not deep-fried—giving you a healthier bite that's still incredibly crispy.",
    "Since opening in 2015, our Hongdae branch has become the go-to chicken spot for locals and visitors alike.",
    "We're a franchisee of G&Food's Goobne brand and uphold every quality standard they set.",
  ],
  stats: [
    { label: "오픈", labelEn: "Est.", value: "2015" },
    { label: "누적 방문객", labelEn: "Guests", value: "500K+" },
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
    { name: "배달의민족", nameEn: "Baemin", href: "#", color: "#00AFFE" },
    { name: "쿠팡이츠", nameEn: "Coupang Eats", href: "#", color: "#EE2E24" },
    { name: "요기요", nameEn: "Yogiyo", href: "#", color: "#FA1F5A" },
  ],
};
