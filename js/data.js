/* ============ LUXEHAUS — Catalog Data ============ */
const U = (id, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  hero: U("photo-1560066984-138dadb4c035", 1600),
  salon: U("photo-1522337660859-02fbefca4702"),
  portrait: U("photo-1487412947147-5cebf100ffc2"),
  brushes: U("photo-1596462502278-27bfdc403348"),
  skincare: U("photo-1586495777744-4413f21062fa"),
  skincare2: U("photo-1571781926291-c477ebfd024b"),
  lips: U("photo-1512496015851-a90fb38ba796"),
  makeup: U("photo-1522335789203-aabd1fc54bc9"),
  hair1: U("photo-1605980776566-0486c3ac7617"),
  hair2: U("photo-1543968996-ee822b8176ba"),
  products: U("photo-1526758097130-bab247274f58"),
  curl: U("photo-1503104834685-7205e8607eb9"),
  tools: U("photo-1596462502278-27bfdc403348", 900),
  oil: U("photo-1608248543803-ba4f8c70ae0b")
};

const CATEGORIES = [
  { id: "wigs", name: "Wigs", image: IMG.hair1 },
  { id: "human-hair", name: "Human Hair", image: IMG.hair2 },
  { id: "bundles", name: "Bundles", image: IMG.salon },
  { id: "extensions", name: "Hair Extensions", image: IMG.curl },
  { id: "braiding", name: "Braiding Hair", image: IMG.portrait },
  { id: "hair-care", name: "Hair Care", image: IMG.oil },
  { id: "skincare", name: "Skincare", image: IMG.skincare },
  { id: "makeup", name: "Makeup", image: IMG.lips },
  { id: "lashes", name: "Lashes", image: IMG.makeup },
  { id: "accessories", name: "Beauty Accessories", image: IMG.products },
  { id: "tools", name: "Beauty Tools", image: IMG.brushes }
];

const WIG_COLORS = [
  { name: "Natural Black", hex: "#1c1a19" },
  { name: "Chestnut Brown", hex: "#5a3b26" },
  { name: "Honey Blonde", hex: "#c49a6c" },
  { name: "Burgundy", hex: "#5e1224" }
];
const HAIR_LENGTHS = ["14\"", "16\"", "18\"", "20\"", "22\"", "24\""];
const SHADES = [
  { name: "Universal", hex: "#e9d5c5" },
  { name: "Golden", hex: "#d4a97a" },
  { name: "Deep", hex: "#8a5a3b" }
];

function p(id, name, cat, price, sale, img, desc, o = {}) {
  return { id, name, cat, price, sale, img, desc, rating: o.r ?? 4.6, reviews: o.rc ?? 120, colors: o.c ?? [], lengths: o.l ?? [], tags: o.t ?? [] };
}

const PRODUCTS = [
  // Wigs
  p("hd-lace-body-wave", "HD Lace Front Wig — Body Wave", "wigs", 189, 149, IMG.hair1, "Pre-plucked HD lace front wig with soft body wave texture, invisible hairline and 150% density. Made from 100% premium human hair — bleached knots, natural parting, ready to wear.", { c: WIG_COLORS, l: HAIR_LENGTHS, r: 4.9, rc: 214, t: ["best", "sale"] }),
  p("glueless-deep-wave", "Glueless Wear & Go Wig — Deep Wave", "wigs", 219, null, IMG.hair2, "Our best-selling glueless wig with adjustable combs and elastic band. Bouncy deep wave human hair with a pre-cut lace — install in under 5 minutes, no glue or gel needed.", { c: WIG_COLORS, l: HAIR_LENGTHS, r: 4.8, rc: 186, t: ["best"] }),
  p("frontal-straight-24", "13x4 Frontal Wig — Straight 24\"", "wigs", 259, null, IMG.salon, "Silky straight 13x4 frontal wig with a flawless, free-parting lace area. Soft, tangle-free and full from root to tip — the perfect everyday luxury unit.", { c: WIG_COLORS, l: HAIR_LENGTHS, r: 4.7, rc: 142 }),
  p("360-water-wave", "360 Lace Wig — Water Wave 22\"", "wigs", 289, 249, IMG.curl, "360 lace water wave wig with full circumferential styling freedom — wear it up, down or in a ponytail. Double-drawn ends for a full, natural finish.", { c: WIG_COLORS, l: HAIR_LENGTHS, r: 4.8, rc: 98, t: ["sale"] }),

  // Human Hair
  p("brazilian-body-wave", "Brazilian Body Wave Bundle — 3 Pcs", "human-hair", 159, 129, IMG.salon, "Three bundles of luxury Brazilian body wave: thick, glossy and true to length. Retains curl beautifully and blends seamlessly with closures and frontals.", { c: WIG_COLORS, l: HAIR_LENGTHS, r: 4.9, rc: 268, t: ["best", "sale"] }),
  p("peruvian-straight", "Peruvian Straight Hair Bundle", "human-hair", 139, null, IMG.hair2, "Feather-soft Peruvian straight hair with a healthy natural shine. Single-donor cuticles aligned — minimal shedding, maximum longevity.", { c: WIG_COLORS, l: HAIR_LENGTHS, r: 4.6, rc: 131 }),
  p("raw-indian-curly", "Raw Indian Curly Bundle", "human-hair", 199, null, IMG.curl, "Ethically sourced raw Indian curly hair with deep, defined curls. A salon-grade texture that holds up to washing, co-washing and heat styling.", { c: WIG_COLORS, l: HAIR_LENGTHS, r: 4.9, rc: 87, t: ["new"] }),

  // Bundles
  p("bundle-deal-closure", "Bundle Deal — 4 Bundles + Closure", "bundles", 349, 299, IMG.salon, "Complete install in one box: four double-drawn bundles plus a matching 5x5 HD closure. Pre-matched texture and color for a flawless, seamless finish.", { c: WIG_COLORS, l: HAIR_LENGTHS, r: 4.9, rc: 154, t: ["sale"] }),
  p("malaysian-loose-wave", "Malaysian Loose Wave Bundle", "bundles", 149, null, IMG.hair1, "Effortless loose wave Malaysian hair — full body, low luster and incredibly soft. The perfect balance between straight and curly.", { c: WIG_COLORS, l: HAIR_LENGTHS, r: 4.7, rc: 118 }),

  // Extensions
  p("clip-in-natural-black", "Clip-In Extensions — Natural Black 20\"", "extensions", 119, null, IMG.curl, "8-piece seamless clip-in set with invisible wefts and sturdy clips. Adds instant length and volume in minutes — no damage, no commitment.", { c: WIG_COLORS, l: HAIR_LENGTHS, r: 4.8, rc: 202, t: ["best"] }),
  p("tape-in-extensions", "Tape-In Extensions — 22\"", "extensions", 99, null, IMG.hair2, "Salon-quality tape-ins with hypoallergenic adhesive strips. Lays flat and undetectable — reuses up to three times with proper care.", { c: WIG_COLORS, l: HAIR_LENGTHS, r: 4.5, rc: 76 }),
  p("halo-wire-extensions", "Halo Wire Extensions — 18\"", "extensions", 89, null, IMG.hair1, "One-piece halo extension with a hidden adjustable wire. Zero clips, zero damage — the quickest way to fuller, longer hair.", { c: WIG_COLORS, l: HAIR_LENGTHS, r: 4.6, rc: 64, t: ["new"] }),

  // Braiding
  p("pre-stretched-braid", "Pre-Stretched Braiding Hair — 6 Pack", "braiding", 24.99, null, IMG.portrait, "Pre-stretched, itch-free braiding hair with a natural yaki texture. Easy to grip, easy to braid, no dipping required — 6 packs per box.", { c: [{ name: "1B Off Black", hex: "#221f1e" }, { name: "2 Dark Brown", hex: "#3c2a1e" }, { name: "350 Copper", hex: "#a3542a" }], r: 4.7, rc: 245, t: ["best"] }),
  p("french-curl-braid", "French Curl Braiding Hair", "braiding", 29.99, null, IMG.curl, "Trendy french curl braiding hair with soft bouncy ends and a glossy finish. Lightweight on the scalp — perfect for boho knotless styles.", { c: [{ name: "1B Off Black", hex: "#221f1e" }, { name: "30 Light Brown", hex: "#8a5a2e" }], r: 4.8, rc: 132, t: ["new"] }),
  p("ocean-wave-braid", "Boho Ocean Wave Braiding Hair", "braiding", 34.99, null, IMG.hair2, "Loose ocean wave strands for boho braids and goddess styles. Pre-fluffed, tangle-free and kind to sensitive scalps.", { c: [{ name: "1B Off Black", hex: "#221f1e" }, { name: "Bug", hex: "#4a2c18" }], r: 4.6, rc: 88 }),

  // Hair care
  p("shampoo-duo", "Hydrating Shampoo & Conditioner Duo", "hair-care", 38.99, null, IMG.oil, "Sulfate-free duo with argan oil and biotin that cleanses gently and restores moisture. Safe for wigs, extensions and natural hair.", { r: 4.8, rc: 176, t: ["best"] }),
  p("thermal-protectant", "Silk Press Thermal Protectant", "hair-care", 19.99, null, IMG.products, "Lightweight heat protectant spray that shields up to 450°F. Leaves hair silky with a mirror shine — never greasy.", { r: 4.7, rc: 94 }),
  p("edge-control", "Edge Control Gel — Extreme Hold", "hair-care", 12.99, null, IMG.portrait, "Sleek edges that last all day — no flakes, no white residue, no crunch. Non-greasy formula with a soft shine finish.", { r: 4.9, rc: 310, t: ["best"] }),
  p("biotin-growth-oil", "Biotin Hair Growth Oil", "hair-care", 24.99, null, IMG.oil, "Rosemary, biotin and castor blend that nourishes the scalp and supports healthy growth. Lightweight and fast-absorbing.", { r: 4.7, rc: 121, t: ["new"] }),

  // Skincare
  p("vitamin-c-serum", "Vitamin C Glow Serum", "skincare", 32.99, null, IMG.skincare, "15% stabilized vitamin C with hyaluronic acid for a brighter, even-toned complexion. Non-sticky, layers beautifully under makeup.", { r: 4.9, rc: 205, t: ["best"] }),
  p("hyaluronic-cream", "Hyaluronic Dew Cream", "skincare", 28.99, null, IMG.skincare2, "A bouncy gel-cream that floods skin with 5 molecular weights of hyaluronic acid. Plumps, smooths and never clogs pores.", { r: 4.7, rc: 118 }),
  p("foaming-cleanser", "Gentle Foaming Cleanser", "skincare", 21.99, null, IMG.products, "pH-balanced foaming cleanser with green tea and aloe. Removes makeup and SPF without stripping your barrier.", { r: 4.6, rc: 89, t: ["new"] }),

  // Makeup
  p("satin-lipstick", "Satin Matte Liquid Lipstick", "makeup", 18.99, null, IMG.lips, "Weightless satin-matte liquid lipstick with all-day wear and a blurred, soft-focus finish. Non-drying and transfer resistant.", { c: [{ name: "Brick Nude", hex: "#b06a56" }, { name: "Mauve Silk", hex: "#a4707a" }, { name: "Cocoa Rose", hex: "#8e4a4a" }], r: 4.8, rc: 264, t: ["best"] }),
  p("nude-palette", "35-Shade Eyeshadow Palette — Nude Muse", "makeup", 39.99, 29.99, IMG.brushes, "35 buttery shades from soft nudes to smoked-out browns. Silk-matte and foil finishes that blend like a dream.", { r: 4.8, rc: 158, t: ["sale"] }),
  p("filter-foundation", "Flawless Filter Foundation", "makeup", 34.99, null, IMG.makeup, "Buildable medium coverage with a real-skin satin finish. 28 flexible shades, skincare-infused and comfortable all day.", { c: SHADES, r: 4.6, rc: 141 }),

  // Lashes
  p("mink-lashes-glam", "3D Faux Mink Lashes — Glam", "lashes", 12.99, null, IMG.makeup, "Reusable 3D faux mink lashes with a flexible cotton band. Full volume, featherlight feel — 15+ wears per pair.", { r: 4.7, rc: 176 }),
  p("lash-kit", "Lash Kit — Lashes + Liner", "lashes", 24.99, null, IMG.lips, "Two pairs of wispy lashes plus our clear-dry lash liner. No magnets, no mess — press and go in seconds.", { r: 4.6, rc: 92, t: ["new"] }),

  // Accessories
  p("satin-set", "Satin Bonnet & Pillowcase Set", "accessories", 27.99, null, IMG.products, "Double-layer satin bonnet and matching pillowcase that protect styles, reduce frizz and prevent breakage while you sleep.", { c: [{ name: "Champagne", hex: "#e3cfae" }, { name: "Noir", hex: "#1c1a19" }], r: 4.8, rc: 198, t: ["best"] }),
  p("gold-jewelry-set", "Gold-Plated Jewelry Set", "accessories", 45.99, null, IMG.products, "18k gold-plated hoop and chain set — hypoallergenic, tarnish resistant and everyday elegant.", { r: 4.5, rc: 61 }),

  // Tools
  p("hot-comb", "Professional Pressing Hot Comb", "tools", 29.99, null, IMG.tools, "Ceramic-coated electric hot comb with even heat distribution and 12 temperature settings. Sleek roots without damage.", { r: 4.6, rc: 84 }),
  p("ionic-dryer", "Ionic Hair Dryer — 1875W", "tools", 59.99, 49.99, IMG.tools, "Fast-drying ionic dryer with 3 heat and 2 speed settings, concentrator and diffuser attachments. Quiet, light and frizz-taming.", { r: 4.8, rc: 113, t: ["sale"] }),
  p("curling-wand-set", "5-in-1 Curling Wand Set", "tools", 69.99, null, IMG.curl, "Interchangeable ceramic barrels from 19mm to 32mm plus a wave attachment. Create everything from tight curls to loose waves.", { r: 4.7, rc: 97, t: ["new"] })
];

const COUPONS = { WELCOME15: .15, GLOW10: .10, LUXE20: .20 };

const TESTIMONIALS = [
  { name: "Amara J.", city: "Atlanta, GA", text: "The HD lace body wave wig is unreal — the hairline disappears and the hair is so soft. I've gotten compliments every single day since I installed it." },
  { name: "Simone R.", city: "London, UK", text: "Ordered bundles for my vacation install and the quality is genuinely salon-grade. Minimal shedding, true to length, and shipping was faster than expected." },
  { name: "Kayla M.", city: "Houston, TX", text: "Their skincare and lashes are now staples in my routine. Everything arrived beautifully packaged and the customer service replied within the hour." }
];

const REVIEW_POOL = [
  { n: "Jasmine T.", t: "Exactly as pictured and the quality exceeded my expectations. Shipping was quick and it was packaged so beautifully." },
  { n: "Dominique W.", t: "Second time ordering from LuxeHaus and they never miss. True to length, no shedding issues, gorgeous shine." },
  { n: "Brianna L.", t: "I was nervous to order online but customer service answered all my questions. The product is worth every penny." },
  { n: "Tasha O.", t: "Soft, full and perfect quality. My stylist even asked where I got it. Will definitely be back for more." },
  { n: "Renee P.", t: "Arrived in 3 days, beautifully wrapped with a little thank-you card. Small details like that make me a loyal customer." },
  { n: "Maya S.", t: "Honestly the best I've used. My sister ordered one after seeing mine and now half my friends have it too." },
  { n: "Alicia F.", t: "Great value for the price. I compared with more expensive brands and this holds its own. Highly recommend." },
  { n: "Chanel D.", t: "The texture is so natural and it blends perfectly with my hair. Zero complaints — ordering again soon." },
  { n: "Priya K.", t: "Fast delivery, gorgeous packaging and a lovely quality product. It has become part of my daily routine." },
  { n: "Lauren B.", t: "Five stars isn't enough. From the unboxing to using it every day — premium feel at an affordable price." }
];
