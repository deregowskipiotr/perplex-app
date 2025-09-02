const navigation = [
  {
    id: "header",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "products",
    title: "Products",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const products = [
  {
    title: "The Macallan 81-Year-Old in Lalique",
    description:
      "A legendary expression boasting over eight decades of unparalleled maturation, encased in a handcrafted Lalique crystal decanter.",
    subDescription:
      "This extraordinary whisky represents the zenith of time and craftsmanship, aged for 81 years with meticulous attention to every cask and barrel. Its complex aroma weaves dried fruits, rich spices, and deep oak, culminating in a finish that lingers like a timeless tale. The Lalique crystal decanter itself is a masterpiece, reflecting the spirit’s exclusivity and grandeur. As a Master Distiller, I recognize this as an embodiment of patience and perfection, crafted only for the most discerning collectors. It transcends mere whisky; it is a legacy in liquid form, unmatched in rarity and prestige.",
    subDesc: "Golden hue, floral aroma.",
    img: "/images/maccallan.png",
  },
  {
    title: "Glenfiddich 50-Year-Old Excellence Release",
    description:
      "A refined and velvety whisky celebrating fifty years of impeccable aging with layers of honey, vanilla, and crisp orchard fruits.",
    subDescription:
      "Crafted with an unwavering commitment to heritage, this 50-year-old Glenfiddich is a testament to the art of slow maturation. Its silky texture is enriched by warm vanilla sweetness, honeyed nectar, and the fresh brightness of orchard fruits. Each sip delivers a harmonious balance—grounded in oak nuance with a subtle, lingering spice. For me, this whisky is a heartfelt journey through decades of mastery, capturing the essence of Glenfiddich’s finest traditions. It’s a rare gem, exquisitely bottled for those who cherish both history and refined taste.",
    img: "/images/glen50.png",
  },
  {
    title: "Yamazaki 50-Year Single Malt",
    description:
      "Japan’s crowning jewel of whisky craftsmanship, offering floral delicacy and profound complexity after half a century of refinement.",
    subDescription:
      "The Yamazaki 50-Year Single Malt stands as a magnificent symbol of Japanese whisky artistry, aged to transcend ordinary perception. This whisky opens with a graceful bouquet of florals, layered with luscious fruit and tantalizing hints of smoke. Every drop exudes depth and emotion, revealing the painstaking care of master coopers and distillers. Owning this expression means embracing the essence of Japanese elegance and patience, traits revered in the whisky world. It’s an exceptionally rare treasure, with a taste profile so unique it inspires awe and reverence alike.",
    img: "/images/yamazaki.png",
  },
  {
    title: "Dalmore 64 Trinitas – Limited Edition",
    description:
      "One of the rarest whiskies known, blending aged sherry casks with unrivaled complexity and decadence in just three bottles worldwide.",
    subDescription:
      "Dalmore 64 Trinitas is a pinnacle of exclusivity, combining rich heritage with innovative blending excellence. Crafted from the finest sherry-seasoned casks, it cascades flavors of deep caramel, bittersweet chocolate, and evocative spices. As a Master Distiller, I marvel at the precision behind its creation—an ode to tradition and creativity. This triad of bottles is not only a feast for the senses but also a rare artifact of whisky lore. Owning one is joining a privileged elite who appreciate whisky as a true work of art.",
    img: "/images/dalmore.png",
  },
  {
    title: "Springbank 40 Year Old Single Malt",
    description:
      "A robust, maritime-influenced whisky matured for four decades, showcasing bold peat, sea salt, and creamy vanilla undertones.",
    subDescription:
      "Springbank’s 40 Year Old Single Malt exemplifies the soul of the Scottish coastline, marrying rugged peat smoke with the freshness of sea air. Its flavor profile is a layered story of bold saltiness, soft vanilla, and rich malt complexities, crafted in the traditional Campbeltown style. Each bottle reveals the craft of small-batch artisans shaped by decades of time and environment. This whisky is not for the faint-hearted but for lovers of character and depth in every dram. It’s a masterclass in how patience and place shape an unforgettable spirit.",
    img: "/images/spring.png",
  },
  {
    title: "Highland Park 50 Year Old Viking Pride",
    description:
      "A majestic Highland 50 years old whisky, fifty years in the making, balancing honeyed sweetness with earthy peat and island mystique.",
      subDescription: "Highland Park Viking Pride is the embodiment of northern heritage, aged fifty years with a careful blend of sweet honey and smoky peat. Its rich taste journey reflects the ancient traditions and wild landscapes of the islands, where every drop breathes the salty air and rugged culture. For a Master Distiller, this whisky is a narrative of balance—earth and sweetness entwined in timeless harmony. This prestige bottling stands as a tribute to endurance, passion, and respect for nature’s gifts. It’s a crown jewel for collectors seeking depth, history, and a taste of the mysterious north.",
    img: "/images/park.png",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/images/sarah.jpg",
    review:
      "The craftsmanship and quality truly shine through every bottle. It's like drinking art.",
    position: "Chief Innovation Alchemist",
    company: "— at Verdant Horizon Spirits",
  },
  {
    id: 2,
    name: "Michael Lee",
    image: "/images/michael.jpg",
    review:
      "An exquisite collection that caters to true connoisseurs. Their selection is unmatched.",
    position: "Master of Flavor Narratives",
    company: "— at Golden Oak Distillers",
  },
  {
    id: 3,
    name: "Emma Davis",
    image: "/images/emma.jpg",
    review:
      "Sip by sip, you can taste the heritage and passion. It's a journey into history.",
    position: "Director of Liquid Craftsmanship",
    company: "— at Celestial Barrel Co.",
  },
  {
    id: 4,
    name: "James Wilson",
    image: "/images/james.jpeg",
    review:
      "The attention to detail and limited editions make this collection incredibly special.",
    position: "Head of Artisan Excellence",
    company: "— at Heritage Spirits Collective",
  },
  {
    id: 5,
    name: "Olivia Brown",
    image: "/images/olivia.jpg",
    review:
      "Every bottle tells a story of master distillers and artisanal craftsmanship. A true delight.",
    position: "Guardian of Legacy Blends",
    company: "— at Noble Oak Whisky Works",
  },
];

const aboutDescription = [
  "What fuels our passion is the relentless pursuit of perfection in every drop we craft.",
  "It’s the harmony of time-honored tradition and meticulous innovation, where patience meets precision.",
  "We honor the raw essence of nature—pure water, the finest grains, and rare botanicals—with unwavering respect and reverence.",
  "Each barrel tells a story, bearing the marks of aging, terroir, and masterful hands shaping unforgettable character.",
  "This dedication to excellence transcends mere production; it’s a lifelong devotion to creating spirits that elevate the senses and celebrate heritage."
];

export {
  navigation,
  products,
  testimonials,
  aboutDescription,
};

