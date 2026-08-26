const url = "https://marketingos-4676w.ondigitalocean.app";
const components = [
  {
    code: "I-01",
    title: "Editorial intro (lead paragraph + drop cap)",
    section: "I",
    looks_like:
      "A standalone body paragraph with an oversized 48px drop-cap on the first letter.",
    use_for: [
      "Open an EDM with a personal note from a product owner, RM, or campaign lead.",
      "Anchor a story-driven campaign that needs context before any offer or list.",
      "Bridge from hero to body when the brief is more letter than promo.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-01.png`,
  },
  {
    code: "I-02",
    title: "Section divider (eyebrow + rule line)",
    section: "I",
    looks_like:
      "A short uppercase eyebrow with a thick clay tick on the left and a hairline rule on the right.",
    use_for: [
      'Break a long EDM into named chapters ("The offer", "How it works").',
      "Add structure to hybrid EDMs that mix promo and transactional sections.",
      "Quietly signal a topic change without a full chapter break.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-02.png`,
  },
  {
    code: "I-03",
    title: "Big offer headline (oversized number)",
    section: "I",
    looks_like:
      'An 84px bold number (e.g. "5×") with a clay-blue uppercase eyebrow above and a one-line qualifier below.',
    use_for: [
      "Card-spend campaigns where the multiplier is the pitch.",
      'Savings-rate launches ("4.50% p.a.") and discount campaigns.',
      "Any moment one number can carry the whole message.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-03.png`,
  },
  {
    code: "I-04",
    title: "Primary CTA button (solid, on white)",
    section: "I",
    looks_like:
      "A centered solid navy button (#072447 bg, white text, 6px radius) with 14px vertical padding.",
    use_for: [
      "The single most important action on a promotional EDM.",
      "Below an offer headline or hero subhead — first chance to click.",
      'Anywhere "Apply now", "Register", "Book", or "Activate" leads.',
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-04.png`,
  },
  {
    code: "I-05",
    title: "Spend-and-earn mechanic (3-step ladder)",
    section: "I",
    looks_like:
      'Three equal-width soft-bg tiles in a row, each with a "Step N" label and a one-line action.',
    use_for: [
      'Card-spend mechanics ("Spend → Earn → Fly").',
      'Multi-step campaign flows ("Apply → Activate → Use").',
      "Whenever the offer requires three sequential customer actions.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-05.png`,
  },
  {
    code: "I-06",
    title: "Reward tier ladder (spend X get Y)",
    section: "I",
    looks_like:
      "Three stacked rows with a coloured left accent border. The third tier inverts to navy with a clay-bright miles count.",
    use_for: [
      'Tiered card-spend campaigns ("Spend X get Y").',
      "Loyalty-tier breakdowns where the top tier needs visual emphasis.",
      "Savings products with stepped rates by deposit size.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-06.png`,
  },
  {
    code: "I-07",
    title: "Eligible categories grid (icon row, 4 columns)",
    section: "I",
    looks_like:
      "Four equal columns, each with a 48px circular icon, a category name, and a one-line subtitle.",
    use_for: [
      'Show "where the offer applies" — travel, dining, groceries, fuel.',
      "Product feature grids for cards working in specific MCC categories.",
      "Member benefits on premium card EDMs.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-07.png`,
  },
  {
    code: "I-08",
    title: "Promo code reveal block",
    section: "I",
    looks_like:
      "A centered block with a dashed clay-soft border and a 32px monospace code in deep navy.",
    use_for: [
      "Single-use redemption codes for partner offers.",
      "Welcome bonus codes for new card holders.",
      'Time-limited promo codes with a "use by" date below.',
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-08.png`,
  },
  {
    code: "I-09",
    title: "Limited-time deadline banner (urgency strip)",
    section: "I",
    looks_like:
      'A slim full-bleed deep-navy band with a centered "Offer ends..." line in white.',
    use_for: [
      "Time-pressure on promotional EDMs (use sparingly — once per email).",
      "Last-day reminder sends.",
      "Member-only deadline windows with a hard cut-off.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-09.png`,
  },
  {
    code: "I-10",
    title: "Two-column feature (image left, copy right)",
    section: "I",
    looks_like:
      "A 240px image on the left, with eyebrow + headline + body paragraph on the right.",
    use_for: [
      "Single-product or single-benefit feature highlight.",
      "Partner offer detail with a partner-supplied photo.",
      "Companion benefit explanation alongside the main offer.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-10.png`,
  },
  {
    code: "I-11",
    title: "Three-feature grid (equal columns)",
    section: "I",
    looks_like:
      "Three equal columns with oversized 32px clay-blue numbers (01/02/03) above a heading and one body line.",
    use_for: [
      "Quick scan of three benefits for a card or product.",
      "Pillars / principles / value props.",
      '"What\'s new" callouts after a relaunch.',
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-11.png`,
  },
  {
    code: "I-12",
    title: "Event details card (date / location / time)",
    section: "I",
    looks_like:
      "A navy calendar-style date block (month/day/year stacked) on the left, event title + location + time on the right, all on a soft bg.",
    use_for: [
      "Branch event invites, masterclasses, webinar EDMs.",
      "Customer-launch events for new products.",
      "Internal staff event invites.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-12.png`,
  },
  {
    code: "I-13",
    title: "Speaker / agenda lineup (2 columns, photo + bio)",
    section: "I",
    looks_like:
      "Two columns, each with a 56px circular avatar, name, role, and a one-line bio.",
    use_for: [
      "Event speaker reveals.",
      '"Meet the team" introductions.',
      "Roundtable / panel announcements.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-13.png`,
  },
  {
    code: "I-14",
    title: "RSVP / register button (secondary CTA pattern)",
    section: "I",
    looks_like:
      'A navy CTA button slightly smaller than primary, with a "Limited to 80 guests" line below.',
    use_for: [
      "Event registration.",
      "Capacity-limited offer claims.",
      'Anywhere a CTA needs a calming "fine print" line below.',
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-14.png`,
  },
  {
    code: "I-15",
    title: "Full-bleed dark band (pull-quote / breaker)",
    section: "I",
    looks_like:
      "A deep-navy full-bleed band with an oversized opening quote mark, an editorial pull-quote, and an attribution in clay-bright caps.",
    use_for: [
      "Mid-EDM rhythm break — once per email, max.",
      "Internal champion / spokesperson quotes.",
      "Customer voice quotes that anchor a brand argument.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-15.png`,
  },
  {
    code: "I-16",
    title: "Product card with badge (offer card)",
    section: "I",
    looks_like:
      'A bordered card with a hero image, eyebrow product name, headline, body line, and a green "NEW" badge in the top-right.',
    use_for: [
      "Headlining a single product in a collection EDM.",
      '"Just launched" feature spots.',
      "Limited-time offer with a status badge (NEW / LIMITED / EXCLUSIVE).",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-16.png`,
  },
  {
    code: "I-17",
    title: "Product collection (3-column card grid)",
    section: "I",
    looks_like:
      'Three equal columns, each with a small image, product name, one-line benefit, and a "See offer →" link.',
    use_for: [
      "Card portfolio overview.",
      'Cross-sell / "you might also like".',
      "Multi-product partner offer carousels.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-17.png`,
  },
  {
    code: "I-18",
    title: "Comparison table (3 plans / tiers)",
    section: "I",
    looks_like:
      'Three soft-bg tiles in a row; the middle inverts to navy as the "recommended" tier.',
    use_for: [
      "Card tier comparison (Standard / Signature / Reserve).",
      "Savings product comparison by deposit minimum.",
      "Subscription / plan picker EDMs.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-18.png`,
  },
  {
    code: "I-19",
    title: "Stat strip (3 KPIs in a row, on light bg)",
    section: "I",
    looks_like:
      "Three big 36px numbers on a soft bg, separated by hairline vertical rules, with a one-line label under each.",
    use_for: [
      'Annual review / "year in numbers" recaps.',
      "Partner onboarding proof points.",
      "Customer-impact summaries.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-19.png`,
  },
  {
    code: "I-20",
    title: "Customer testimonial (single, with photo)",
    section: "I",
    looks_like:
      "A bordered card with an italic quote, a 40px circular avatar, and a name + city/segment line.",
    use_for: [
      "Trust-building on promotional or product EDMs.",
      "Real customer voice for new feature launches.",
      "Closing block before final CTA.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-20.png`,
  },
  {
    code: "I-21",
    title: "How it works (numbered vertical list)",
    section: "I",
    looks_like:
      "Three rows, each with a 28px navy circle (white number) plus a step title and a body line.",
    use_for: [
      "Redemption flow walkthroughs.",
      "Sign-up / activation processes.",
      "New feature onboarding (3 steps tops — keep concise).",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-21.png`,
  },
  {
    code: "I-22",
    title: "Bullet list with icon-style checkmarks",
    section: "I",
    looks_like: "A vertical list with green ✓ markers and one-line items.",
    use_for: [
      '"What\'s included" eligibility lists.',
      "Feature inclusions for a new card or account.",
      "Compliance disclosures formatted as positive bullets.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-22.png`,
  },
  {
    code: "I-23",
    title: "FAQ block (Q/A pairs, expanded)",
    section: "I",
    looks_like:
      "A flat list of three questions with one-paragraph answers, each separated by a hairline rule.",
    use_for: [
      "Pre-empt the most common questions on any campaign EDM.",
      "Reduce customer-service load on launches.",
      "Compliance Q&A (eligibility / refunds / terms).",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-23.png`,
  },
  {
    code: "I-24",
    title: "Partner co-brand strip (logos in a row)",
    section: "I",
    looks_like:
      "A slim row with five partner names (or logos) in muted monochrome on white.",
    use_for: [
      "Showcase the partner ecosystem in a Skywards-style EDM.",
      "Co-marketing campaigns where multiple partners contribute.",
      "Mid-funnel trust signals before a CTA.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-24.png`,
  },
  {
    code: "I-25",
    title: "App download row (3 store badges)",
    section: "I",
    looks_like:
      "A soft-bg row with three navy buttons: App Store, Google Play, AppGallery.",
    use_for: [
      "Closing block on consumer EDMs.",
      '"Get the app" sections after a feature explanation.',
      "Newsletter footers reminding readers about mobile banking.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-25.png`,
  },
  {
    code: "I-26",
    title: "Statement / balance summary card",
    section: "I",
    looks_like:
      'A bordered card with line-item rows (label left, value right) and a final highlighted "available balance" row at the bottom.',
    use_for: [
      "Monthly statement EDMs.",
      "Balance-summary triggers (after a deposit, after a paycheck arrival).",
      "Annual financial snapshots.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-26.png`,
  },
  {
    code: "I-27",
    title: "Personal RM / contact card",
    section: "I",
    looks_like:
      "A soft-bg card with a 64px circular RM photo, name, role, phone, and email.",
    use_for: [
      "PRB / PB / CIB EDMs where the RM relationship matters.",
      "Onboarding sequences for premium customers.",
      'Re-engagement EDMs ("Your RM is here").',
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-27.png`,
  },
  {
    code: "I-28",
    title: "Secondary CTA + supporting line",
    section: "I",
    looks_like:
      "A white button with a navy outline border and navy text, centered.",
    use_for: [
      "Alternative to the primary CTA for traditional customers.",
      "Compliance-driven channels (calls preferred over forms).",
      '"Prefer to talk to someone?" support pathways.',
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-28.png`,
  },
  {
    code: "I-29",
    title: "Terms & conditions box (collapsible-feel)",
    section: "I",
    looks_like:
      'A soft-bg block with a "TERMS & CONDITIONS" eyebrow and a small-text paragraph plus a link to full terms.',
    use_for: [
      "Required on every promotional EDM in regulated markets.",
      "Promo eligibility disclosures.",
      "Multi-product compliance summaries.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-29.png`,
  },
  {
    code: "I-30",
    title: "Disclaimer + key facts link (regulator-required)",
    section: "I",
    looks_like:
      "A small-print paragraph with the Central Bank disclosure and a Key Facts Statement link, no background.",
    use_for: [
      "Final body block before the spine footer on credit / lending EDMs.",
      "Anything subject to UAE regulator review.",
      "Loans, mortgages, credit-card EDMs.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/I-30.png`,
  },
  {
    code: "II-01",
    title: "Editorial cover hero",
    section: "II",
    looks_like:
      'A full-bleed hero photo above a deep-navy block with eyebrow ("Volume 04 · Spring 2026"), display title, and a one-line standfirst.',
    use_for: [
      "Quarterly newsletter cover.",
      "Travel feature lead.",
      "Long-form editorial issue opener.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-01.png`,
  },
  {
    code: "II-02",
    title: "Issue masthead (volume / date / read time / TOC)",
    section: "II",
    looks_like:
      'An "In this issue" eyebrow, date / read-time meta, and three numbered table-of-contents rows.',
    use_for: [
      "Newsletter issue header.",
      "Long-EDM table-of-contents.",
      "Setting reading expectations for a multi-feature send.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-02.png`,
  },
  {
    code: "II-03",
    title: "Lead article (big image + dek + byline)",
    section: "II",
    looks_like:
      'A "Feature · Chapter 01" eyebrow, hero image with caption, large display headline, standfirst paragraph, and an avatar+byline row.',
    use_for: [
      "Newsletter lead story.",
      "Feature article EDM.",
      "PR-style content piece with author credit.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-03.png`,
  },
  {
    code: "II-04",
    title: "Editor's note (signed, italic display)",
    section: "II",
    looks_like:
      'A soft-bg card with a "FROM THE EDITOR" eyebrow, italic paragraph, and a stylized signature line.',
    use_for: [
      "Newsletter front-of-book column.",
      "Personal note from a senior leader.",
      "Issue rationale before the main content.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-04.png`,
  },
  {
    code: "II-05",
    title: "Photo essay strip (4 thumbs + captions)",
    section: "II",
    looks_like:
      "A row of four vertical photo thumbnails with one-line italic captions below each.",
    use_for: [
      "Travel feature atmosphere.",
      "Event recap photo gallery.",
      "Lifestyle / fashion mood-setting.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-05.png`,
  },
  {
    code: "II-06",
    title: "Section divider with chapter number",
    section: "II",
    looks_like:
      'A 64px display "02" in light clay, "Chapter Two" eyebrow, and an italic chapter title centered on a soft bg.',
    use_for: [
      "Multi-feature newsletters.",
      "Long-form story-driven content.",
      "Annual review chapter breaks.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-06.png`,
  },
  {
    code: "II-07",
    title: "Hotel listing card (hero + name + stars +",
    section: "II",
    looks_like:
      "Hero image, eyebrow location, display name, star-rating row with amenities, body description, then a price + CTA row.",
    use_for: [
      "Premium travel / hotel collection EDMs.",
      "Member-only stay offers.",
      "Curated property reviews.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-07.png`,
  },
  {
    code: "II-08",
    title: "Hotel amenities grid (icon row, 6 columns)",
    section: "II",
    looks_like:
      "A soft-bg block with six columns of icons (wifi, pool, spa, dining, valet, gym) and small labels.",
    use_for: [
      'Quick "what\'s included" scans for hotel listings.',
      "Property-specific feature comparison.",
      "Hospitality partner EDMs.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-08.png`,
  },
  {
    code: "II-09",
    title: "Hotel collection (3 stacked listings)",
    section: "II",
    looks_like:
      "Three rows, each with a 100px image, name, star-rating, body line, and a right-aligned price.",
    use_for: [
      'Compact "also worth seeing" hotel rows.',
      "Multi-property promo digests.",
      "Travel-feature sidebars.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-09.png`,
  },
  {
    code: "II-10",
    title: "Room type card (suite name, size, view, price)",
    section: "II",
    looks_like:
      "A bordered tile with a 200px image left, eyebrow room type, display name, spec line, availability tag (green), price + miles.",
    use_for: [
      "Hotel-specific room-picker EDMs.",
      "Suite upgrade campaigns.",
      'Loyalty redemption EDMs ("redeem for 240k miles").',
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-10.png`,
  },
  {
    code: "II-11",
    title: "Booking summary (check-in / check-out / total)",
    section: "II",
    looks_like:
      'A bordered card with a green "✓ RESERVATION CONFIRMED" header, a 2-column check-in/out date block, and a navy total strip at the bottom.',
    use_for: [
      "Post-booking confirmation EDMs.",
      "Itinerary recap.",
      "Pre-departure reminders.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-11.png`,
  },
  {
    code: "II-12",
    title: "Destination spotlight (big photo + meta panel)",
    section: "II",
    looks_like:
      "A full-bleed destination photo above a deep-navy panel with eyebrow country, italic city display, standfirst, and a 3-column meta row (best season / miles cost / stay).",
    use_for: [
      "Travel inspiration features.",
      '"Where your miles go" redemption EDMs.',
      "Destination-specific campaign launches.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-12.png`,
  },
  {
    code: "II-13",
    title: "Itinerary day-by-day timeline",
    section: "II",
    looks_like:
      'A vertical 3-row layout with each row showing a "Day NN" label and a display word on the left, body text on the right, separated by a vertical clay-soft line.',
    use_for: [
      "Trip planning EDMs.",
      "Suggested itineraries for member-only offers.",
      '"How to spend a weekend in..." editorial features.',
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-13.png`,
  },
  {
    code: "II-14",
    title: "City guide three-column (Eat / Stay / Do)",
    section: "II",
    looks_like:
      'Three image-led columns, each with a small "EAT" / "STAY" / "DO" eyebrow, place name, and a one-line recommendation.',
    use_for: [
      "Travel guides for a single city.",
      "Curated recommendations from a partner editor.",
      '"Insider\'s guide" content series.',
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-14.png`,
  },
  {
    code: "II-15",
    title: "Travel inspiration mosaic (2x2 image grid)",
    section: "II",
    looks_like:
      "A 2×2 grid of destination photos with captions below each (city + miles cost + flight time).",
    use_for: [
      "Multi-destination redemption inspiration.",
      '"Where to next" lifestyle blocks.',
      "Visual-led content with light copy.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-15.png`,
  },
  {
    code: "II-16",
    title: "Flight info card (origin → destination,",
    section: "II",
    looks_like:
      "A deep-navy card with two airport codes (display size) flanking an arrow with duration, and a separator row showing class + miles + tax.",
    use_for: [
      "Specific route campaigns.",
      "Award-flight redemption EDMs.",
      "Booking confirmation summaries.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-16.png`,
  },
  {
    code: "II-17",
    title: "Pull-quote with portrait photo",
    section: "II",
    looks_like:
      "Two columns — a 180px portrait photo on the left with italic caption, and an oversized italic pull-quote with attribution on the right.",
    use_for: [
      "Profile features.",
      "Customer / partner spotlights.",
      "Op-ed style pieces.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-17.png`,
  },
  {
    code: "II-18",
    title: "Section divider — chapter 03",
    section: "II",
    looks_like: 'Same pattern as II-06 with "03" instead of "02".',
    use_for: [
      "Same as II-06 — chapter break in long-form features.",
      "Consistent visual rhythm across multi-chapter newsletters.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-18.png`,
  },
  {
    code: "II-19",
    title: "How-to step with screenshot/photo",
    section: "II",
    looks_like:
      'Three full-bleed screenshots, each followed by a 60px "01" / "02" / "03" numeral plus a step heading and body line.',
    use_for: [
      "App / digital product tutorials.",
      '"How to use this feature" EDMs.',
      "Onboarding educational content.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-19.png`,
  },
  {
    code: "II-20",
    title: "Pro-tip callout box",
    section: "II",
    looks_like:
      'A soft-bg block with a clay-blue left border, "💡 PRO TIP" eyebrow, and a one-paragraph tip.',
    use_for: [
      "Inline tips inside how-to guides.",
      "Insider knowledge in editorial features.",
      '"Did you know" insights.',
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-20.png`,
  },
  {
    code: "II-21",
    title: "Curator's pick (single product/place + quote)",
    section: "II",
    looks_like:
      'A bordered card with a hero photo and a content area with "★ CURATOR\'S PICK" eyebrow, display name, italic first-person endorsement, and editor signoff.',
    use_for: [
      '"We tried it" product reviews.',
      "Editor-recommended hotels / restaurants / products.",
      "Trust-building lifestyle content.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-21.png`,
  },
  {
    code: "II-22",
    title: "Recipe-style card (ingredients + steps)",
    section: "II",
    looks_like:
      "A soft-bg block with a recipe title, two columns (ingredients list left, numbered method right) with a vertical separator.",
    use_for: [
      "Lifestyle content (cocktails, food).",
      "Step-based instructions structured like recipes.",
      "Partner content with a chef / sommelier.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-22.png`,
  },
  {
    code: "II-23",
    title: "Before/after image split",
    section: "II",
    looks_like:
      "Two side-by-side photos — left in grayscale (BEFORE label below in muted gray), right in color (AFTER in green).",
    use_for: [
      "Renovation / transformation reveals.",
      '"Without us / With us" feature comparisons.',
      "Product evolution narratives.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-23.png`,
  },
  {
    code: "II-24",
    title: "Article roundup (3 mini-articles, image+text)",
    section: "II",
    looks_like:
      "Three rows, each with a 120px image, category eyebrow, display title, and an author byline.",
    use_for: [
      '"Also in this issue" newsletter sections.',
      "Cross-promotion of related content.",
      "Editorial digest closing blocks.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-24.png`,
  },
  {
    code: "II-25",
    title: "Member-only offer band (bold full-bleed)",
    section: "II",
    looks_like:
      'A deep-navy full-bleed block with a clay-blue eyebrow ("MEMBERS ONLY · ENDS 31 MAY"), large display headline, body line, white CTA button, and a small "Available to..." line.',
    use_for: [
      "Exclusive offers for Skywards Infinite / PB customers.",
      "High-impact promotional inserts inside editorial EDMs.",
      "Member acquisition pushes.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-25.png`,
  },
  {
    code: "II-26",
    title: "Editorial photo with caption",
    section: "II",
    looks_like:
      "A full-bleed image followed by a single italic caption paragraph below.",
    use_for: [
      "Mid-feature breathing room.",
      "Photo-led storytelling.",
      '"Place setting" before a chapter.',
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-26.png`,
  },
  {
    code: "II-27",
    title: "Big editorial stat (number + supporting story)",
    section: "II",
    looks_like:
      "A 120px display number centered on white, followed by a 16px supporting line and a smaller body context paragraph.",
    use_for: [
      "Headline statistic in a feature.",
      '"73% of our members..." trust stats.',
      "Annual report standalone numbers.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-27.png`,
  },
  {
    code: "II-28",
    title: "Author byline with bio (in-depth)",
    section: "II",
    looks_like:
      'A bordered top/bottom block with a 60px circular author photo, name, role, two-line bio, and a "Read more from..." link.',
    use_for: [
      "End-of-feature credits.",
      "Author-driven editorial.",
      "Personal-branded content series.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-28.png`,
  },
  {
    code: "II-29",
    title: "Coming-up-next teaser (newsletter footer)",
    section: "II",
    looks_like:
      'A soft-bg card with a 180px image left, "UP NEXT · VOL 05" eyebrow, display title, body teaser, and a "Get a reminder →" link.',
    use_for: [
      "Newsletter retention.",
      "Series content where the next issue matters.",
      "Subscriber re-engagement.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-29.png`,
  },
  {
    code: "II-30",
    title: "Refer-a-friend / share block",
    section: "II",
    looks_like:
      'A soft-bg block with "FOR YOUR INBOX-TWIN" eyebrow, display headline, body paragraph, navy CTA button, and small social platform links below.',
    use_for: [
      "Referral program pushes.",
      "Newsletter growth flywheels.",
      "Community-building EDMs.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/II-30.png`,
  },
  {
    code: "III-01",
    title: "Black hero with whisper-quiet eyebrow",
    section: "III",
    looks_like:
      'A deep-navy block with a tiny "INTRODUCING" eyebrow, massive display word ("Reserve."), tagline, and a centered product image below.',
    use_for: [
      "Apple-style product reveal.",
      "Big launch moment EDMs.",
      '"We just shipped" announcements.',
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-01.png`,
  },
  {
    code: "III-02",
    title: '"Hello." oversized intro',
    section: "III",
    looks_like:
      'A 96px display "Hello, [First Name]." (italic accent on name) centered on white, followed by a manifesto paragraph below.',
    use_for: [
      "First module after a dramatic hero — calm beat.",
      "Personalized welcome for premium product launches.",
      "Strong-voice intros where personalization is the point.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-02.png`,
  },
  {
    code: "III-03",
    title: "Three-word headline + product reveal",
    section: "III",
    looks_like:
      'A soft-bg block with three short stacked display words ("Heavier. Quieter. More yours.") with the middle word in italic accent, followed by a product image.',
    use_for: [
      'Apple "Bigger. Faster. Better." pattern.',
      "Three-attribute product positioning.",
      "Feature-trio reveals.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-03.png`,
  },
  {
    code: "III-04",
    title: "Feature reveal — full-bleed image + floating",
    section: "III",
    looks_like:
      'A deep-navy full-bleed block with a hero image (slightly opaque), a "FEATURE 01" eyebrow, display feature name, and a one-line spec.',
    use_for: [
      "Anchoring each major feature in a launch.",
      "Full-stack feature walkthroughs.",
      "Hero-style feature blocks for any physical product.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-04.png`,
  },
  {
    code: "III-05",
    title: "Two-column feature deep-dive — text left,",
    section: "III",
    looks_like:
      "Half-half row with eyebrow + display headline + body on the left, and an image with rounded corners on the right.",
    use_for: [
      "Calm beat after a dramatic reveal.",
      "Detailed feature explanation.",
      "Product capability + visual proof.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-05.png`,
  },
  {
    code: "III-06",
    title: "Reverse two-column — image left, text right.",
    section: "III",
    looks_like: "Mirror of III-05 on a soft bg.",
    use_for: [
      "Alternating rhythm in feature walkthroughs.",
      "Visual variety in long product EDMs.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-06.png`,
  },
  {
    code: "III-07",
    title: "Single mega-stat — number takes the whole row",
    section: "III",
    looks_like:
      "A 160px display number centered on white, with a single supporting sentence below.",
    use_for: [
      'Apple "1 trillion transistors" pattern.',
      "Single-stat product proof.",
      "Closing standalone numbers before a CTA.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-07.png`,
  },
  {
    code: "III-08",
    title: "Three-column feature row (compact)",
    section: "III",
    looks_like:
      "Three columns on a soft bg, each with a glyph icon, short title, and a 2-line body description.",
    use_for: [
      "Quick value-prop summary.",
      'Mid-EDM "what\'s included" scans.',
      "Compact alternative to longer feature deep-dives.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-08.png`,
  },
  {
    code: "III-09",
    title: "TABLE — Specifications sheet (key/value)",
    section: "III",
    looks_like:
      "A two-column table with section headers and key/value rows, hairline borders.",
    use_for: [
      "Apple-style spec sheet.",
      "Product detail breakdown.",
      "Anything with measurable attributes (weight, materials, earn rates).",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-09.png`,
  },
  {
    code: "III-10",
    title: "TABLE — Tier comparison (✓ / —)",
    section: "III",
    looks_like:
      "A 4-column table with a feature column and three plan tiers across, with green ✓ for included and a hairline dash for excluded.",
    use_for: [
      "Card tier comparison.",
      "Subscription plan picker.",
      "Service-level differentiation.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-10.png`,
  },
  {
    code: "III-11",
    title: "TABLE — Pricing breakdown (financing rows)",
    section: "III",
    looks_like:
      "A 4-column table with term / per-month / total / APR, alternating soft bg rows.",
    use_for: [
      "Card / loan financing options.",
      "Instalment plans.",
      "Mortgage tenor breakdowns.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-11.png`,
  },
  {
    code: "III-12",
    title: "Designer / founder quote (single line)",
    section: "III",
    looks_like:
      "A 26px italic display quote centered on white with a small caps attribution below.",
    use_for: [
      "Apple-keynote pull quote.",
      "Internal champion / spokesperson voice.",
      "Mid-EDM rhythm break in product launches.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-12.png`,
  },
  {
    code: "III-13",
    title: "Color / finish picker (4 swatches)",
    section: "III",
    looks_like:
      'An "AVAILABLE IN" eyebrow + display headline, then four circular color swatches in a row with labels, then a centered product photo below.',
    use_for: [
      "Card / product colorway reveals.",
      "Material / finish picker.",
      '"Choose your..." selection EDMs.',
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-13.png`,
  },
  {
    code: "III-14",
    title: "TABLE — Schedule / timetable",
    section: "III",
    looks_like:
      "A 3-column table with a navy header row, then date / event / where rows alternating bg.",
    use_for: [
      "Launch week event schedules.",
      "Masterclass series timetables.",
      "Roadshow / city-tour announcements.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-14.png`,
  },
  {
    code: "III-15",
    title: "TABLE — KPI / performance metrics",
    section: "III",
    looks_like:
      "A 4-column table with metric / current / prior / YoY, with delta colored green for positive and clay for negative.",
    use_for: [
      "Quarterly results EDMs.",
      "Portfolio performance summaries.",
      "Corporate dashboard recaps.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-15.png`,
  },
  {
    code: "III-16",
    title: "TABLE — Transaction-style data table",
    section: "III",
    looks_like:
      "A 3-column statement-feel table with date / merchant / amount, totaled at the bottom.",
    use_for: [
      "Recent activity recaps.",
      "Statement EDMs.",
      "Spend digest / fraud confirmation.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-16.png`,
  },
  {
    code: "III-17",
    title: "Lifestyle scenario — full-bleed photo +",
    section: "III",
    looks_like:
      'A full-bleed lifestyle photo above a centered "DESIGNED FOR" eyebrow + display headline + body paragraph.',
    use_for: [
      "Aspirational product positioning.",
      '"Made for the way you live" framing.',
      "Closing chapters before pre-order CTAs.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-17.png`,
  },
  {
    code: "III-18",
    title: "Press review row (3 quotes)",
    section: "III",
    looks_like:
      'Three rows, each with a "★★★★★ · PUBLICATION" eyebrow, italic display quote, and an attribution.',
    use_for: [
      "Critical reception.",
      "Trust-building before purchase CTA.",
      "Industry validation.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-18.png`,
  },
  {
    code: "III-19",
    title: "Sustainability / values block",
    section: "III",
    looks_like:
      "An eyebrow + display headline + body paragraph, followed by three big-display number columns with single-line context lines (in moss green).",
    use_for: [
      "ESG / sustainability commitments.",
      "Brand values communication.",
      '"How we\'re different" stories.',
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-19.png`,
  },
  {
    code: "III-20",
    title: "In-the-box list (minimalist itemized)",
    section: "III",
    looks_like:
      'A deep-navy block with an "IN THE WELCOME KIT" eyebrow, display headline, then five display lines (alternating white / muted for rhythm).',
    use_for: [
      "Apple AirPods unboxing list.",
      "Welcome kit announcement.",
      '"What you get" minimalist run-down.',
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-20.png`,
  },
  {
    code: "III-21",
    title: "Side-by-side product family lineup (4 cards)",
    section: "III",
    looks_like:
      'Four equal columns, each with a small product image, name, and price line; the new product gets a navy border and "NEW" tag.',
    use_for: [
      "Product range introduction.",
      '"Family" line announcements where the new product joins existing ones.',
      "Cross-tier shopping.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-21.png`,
  },
  {
    code: "III-22",
    title: "Trade-in / upgrade block",
    section: "III",
    looks_like:
      'A soft-bg row with a left text column ("TRADE UP" eyebrow + display + body) and a right-side oversized "−50%" with a "FIRST YEAR" sub-label.',
    use_for: [
      "Card upgrade campaigns.",
      "Existing-customer migration to new tiers.",
      "Loyalty discount offers.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-22.png`,
  },
  {
    code: "III-23",
    title: "Pre-order / waitlist block (subtle urgency)",
    section: "III",
    looks_like:
      'An "AVAILABLE" eyebrow + 84px display date ("14.05") with the period in clay accent, body line, and a navy CTA.',
    use_for: [
      "Pre-order kick-off EDMs.",
      '"Coming soon" announcements.',
      "Reservation drives.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-23.png`,
  },
  {
    code: "III-24",
    title: "Founder's letter (signed, long-form)",
    section: "III",
    looks_like:
      'A soft-bg block with a "A NOTE FROM THE TEAM" eyebrow, display headline ("Why we built this."), three body paragraphs, and a display signature.',
    use_for: [
      "Brand-trust building.",
      "Premium product launches with story.",
      '"Our why" introductions.',
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-24.png`,
  },
  {
    code: "III-25",
    title: "Three-question FAQ (compact, expanded)",
    section: "III",
    looks_like:
      "Three rows separated by a 2px navy top border + 1px line rules; each row has a body-weight question and body answer.",
    use_for: [
      "Apple-style minimal FAQ.",
      "Pre-empt the three most common questions.",
      "Honest objections-and-answers.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-25.png`,
  },
  {
    code: "III-26",
    title: "Live demo / video card",
    section: "III",
    looks_like:
      'A deep-navy bordered card with a hero image (slightly opaque) and a strip below with "WATCH · 2 MIN" eyebrow + display title and a white "▶ Play" pill on the right.',
    use_for: [
      "Drive viewers to the launch video.",
      '"See it in action" demo links.',
      "Multi-channel campaigns where the email teases video.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-26.png`,
  },
  {
    code: "III-27",
    title: "Compatibility row (works with…)",
    section: "III",
    looks_like:
      'A soft-bg block with "WORKS WITH" eyebrow + display headline + 5 platform / partner names in a row.',
    use_for: [
      '"Works with iPhone, iPad, Mac" pattern.',
      "Wallet integrations (Apple Pay, Google Pay).",
      "Partner ecosystem callouts.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-27.png`,
  },
  {
    code: "III-28",
    title: "Diagonal split feature (two halves of one row)",
    section: "III",
    looks_like:
      "A 50/50 row with a deep-navy left half (text content) and an image-only right half.",
    use_for: [
      "Asymmetric balance for a single feature.",
      "Mood + meaning side-by-side.",
      "Differentiated rhythm in long EDMs.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-28.png`,
  },
  {
    code: "III-29",
    title: "Closing manifesto — big single sentence",
    section: "III",
    looks_like:
      "A 42px italic display sentence centered on white with the third line in italic accent.",
    use_for: [
      'Apple "And one more thing." energy.',
      "Final philosophical statement before CTA.",
      "Brand promise / credo.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-29.png`,
  },
  {
    code: "III-30",
    title: "Final CTA + small print",
    section: "III",
    looks_like:
      'A deep-navy full-bleed block with a "PRE-ORDERS OPEN..." eyebrow, white pill CTA button, and a small-print disclaimer with key facts link.',
    use_for: [
      "Last word before the spine footer.",
      "Strong CTA + regulatory close on credit / lending product launches.",
      'The "checkout" of a launch EDM.',
    ],
    thumbnail_url: `${url}/static/component-thumbs/III-30.png`,
  },
  {
    code: "IV-01",
    title: "CTA · solid navy on white (baseline)",
    section: "IV",
    looks_like:
      "A centered solid navy button (#072447 bg, white text, 6px radius), 14px vertical / 32px horizontal padding.",
    use_for: [
      "The canonical primary action — use whenever you don't have a reason to use something else.",
      "After an offer headline, hero subhead, or feature deep-dive.",
      'Anywhere "Apply", "Register", "Activate", "Book" leads.',
    ],
    thumbnail_url: `${url}/static/component-thumbs/IV-01.png`,
  },
  {
    code: "IV-02",
    title: "CTA · white pill on dark navy band",
    section: "IV",
    looks_like:
      "A full-bleed deep-navy band with a small clay-bright eyebrow above and a centered white pill button below.",
    use_for: [
      "Closing CTA on Apple-style product launches.",
      "Premium PB / PRB sends where the dark band reads as quiet luxury.",
      "Mid-EDM moment where you want the CTA to feel theatrical, not transactional.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/IV-02.png`,
  },
  {
    code: "IV-03",
    title: "CTA with card packshot",
    section: "IV",
    looks_like:
      "Two-column row on a soft bg: 160px card image on the left, product name + sub-line + navy button stacked on the right.",
    use_for: [
      "Card-product CTAs where seeing the card builds desire.",
      "Apply-flow EDMs that need product visualization.",
      "Cross-sells in collection EDMs where the packshot disambiguates which card.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/IV-03.png`,
  },
  {
    code: "IV-04",
    title: "CTA pair · primary + ghost side-by-side",
    section: "IV",
    looks_like:
      "Two centered buttons in a horizontal row — a navy primary plus an outline ghost — separated by a small gap.",
    use_for: [
      'When there\'s a meaningful "or" (apply now vs. learn more).',
      "Hesitant-buyer flows where a soft secondary keeps people in the email.",
      "Top-of-funnel sends where some readers aren't ready to apply yet.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/IV-04.png`,
  },
  {
    code: "IV-05",
    title: "CTA stacked · primary + supporting + secondary",
    section: "IV",
    looks_like:
      "Vertical stack: primary navy CTA, italic supporting line beneath, then a small text-link secondary at the bottom.",
    use_for: [
      "Calmer alternative to a 2-button row — primary still wins the eye.",
      'When the "or" is for existing customers ("Skip ahead").',
      'Removing friction from CTAs ("No documents needed").',
    ],
    thumbnail_url: `${url}/static/component-thumbs/IV-05.png`,
  },
  {
    code: "IV-06",
    title: "CTA with urgency timer line",
    section: "IV",
    looks_like:
      'Standard primary CTA with a clay-blue italic line beneath: "⏱ Offer ends in 24 hours".',
    use_for: [
      "Last-day deadline reminder sends.",
      "Limited-stock product launches.",
      "Anywhere a static deadline beats a live countdown.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/IV-06.png`,
  },
  {
    code: "IV-07",
    title: "CTA full-bleed band · clay-blue",
    section: "IV",
    looks_like:
      "Full-bleed clay-blue (#1E5BB8) strip with a white headline on top and a centered white pill button below.",
    use_for: [
      "Bold mid-EDM call-to-action that interrupts the white rhythm.",
      "Acquisition-focused sends where the colour blocks force attention.",
      "Promotional sends with one big chance to convert.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/IV-07.png`,
  },
  {
    code: "IV-08",
    title: "CTA + alternate channel",
    section: "IV",
    looks_like:
      'Centered primary CTA with a small "Or speak to your RM: +971 4 609 5555" line beneath.',
    use_for: [
      "PB / PRB / Mortgage EDMs where some customers prefer voice.",
      "High-value products that warrant human contact.",
      "Anything where the alternate channel is the actual highest-converting path.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/IV-08.png`,
  },
  {
    code: "IV-09",
    title: "Slim announcement bar (top-of-EDM strip)",
    section: "IV",
    looks_like:
      "A single-line full-bleed clay-blue strip carrying short brand news with an underlined inline link.",
    use_for: [
      "Goes ABOVE the spine header on broadcast EDMs.",
      'Campaign-wide announcements ("Live now: Vol. 04").',
      "Cross-promo across all sends in a launch week.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/IV-09.png`,
  },
  {
    code: "IV-10",
    title: "Trust badges row",
    section: "IV",
    looks_like:
      "A soft-bg row with four equal columns: encrypted / regulated / fraud-protected / 24-7 support, each with a glyph icon and label.",
    use_for: [
      "Mid-EDM trust signals on financial / lending products.",
      "Pre-CTA reassurance for hesitant first-time customers.",
      "Compliance-friendly social proof without making claims.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/IV-10.png`,
  },
  {
    code: "IV-11",
    title: "Countdown timer · 4 number boxes",
    section: "IV",
    looks_like:
      "Four navy boxes in a row showing days / hours / minutes / seconds with small clay-bright labels beneath.",
    use_for: [
      'Pre-order campaigns where a static "ends in X" beats live JS.',
      "Limited-time launch reveals.",
      "Last-call EDMs in a launch sequence.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/IV-11.png`,
  },
  {
    code: "IV-12",
    title: "Header · partnership co-brand variant",
    section: "IV",
    looks_like:
      'Slim navy strip with "Emirates NBD × Partner" co-branded line on the left and the AR toggle on the right.',
    use_for: [
      "Co-marketing EDMs (Skywards, DNATA, Lulu, etc.).",
      "Use INSTEAD of the standard single-brand header (replace the spine header for partnership sends).",
      "Anytime a third party is a primary stakeholder in the campaign.",
    ],
    thumbnail_url: `${url}/static/component-thumbs/IV-12.png`,
  },
  {
    code: "V-01",
    title: "KPI tile row (4 tiles · label + value + delta)",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-01.png`,
  },
  {
    code: "V-02",
    title: "Hero KPI block · single primary metric",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-02.png`,
  },
  {
    code: "V-03",
    title: "Status traffic-light row · 3 items",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-03.png`,
  },
  {
    code: "V-04",
    title: "Quarterly summary 2×2 grid",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-04.png`,
  },
  {
    code: "V-05",
    title: "Progress bar list · 3 rows",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-05.png`,
  },
  {
    code: "V-06",
    title: "Project milestone tracker (vertical)",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-06.png`,
  },
  {
    code: "V-07",
    title: "Big stat with caption (full-bleed)",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-07.png`,
  },
  {
    code: "V-08",
    title: "Process flow · 5 horizontal steps",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-08.png`,
  },
  {
    code: "V-09",
    title: "Comparison columns (3-col · X vs Y vs Z)",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-09.png`,
  },
  {
    code: "V-10",
    title: "Funnel cascade · 4 stages",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-10.png`,
  },
  {
    code: "V-11",
    title: "Breakdown bar · stacked-segment legend",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-11.png`,
  },
  {
    code: "V-12",
    title: "Horizontal timeline · 4 months",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-12.png`,
  },
  {
    code: "V-13",
    title: "Before / After comparison (2-col)",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-13.png`,
  },
  {
    code: "V-14",
    title: "Vertical bar chart · 5 bars",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-14.png`,
  },
  {
    code: "V-15",
    title: "Horizontal bar comparison · regional split",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-15.png`,
  },
  {
    code: "V-16",
    title: "Quartile ring · single metric with progress",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-16.png`,
  },
  {
    code: "V-17",
    title: "Data table · clean dashboard rows",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-17.png`,
  },
  {
    code: "V-18",
    title: "Sparkline cards · 3 mini-trend tiles",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-18.png`,
  },
  {
    code: "V-19",
    title: "Score card · letter-grade box",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-19.png`,
  },
  {
    code: "V-20",
    title: "Side-by-side trend · this vs last",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-20.png`,
  },
  {
    code: "V-21",
    title: "Index strip · 5 metrics ticker-style",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-21.png`,
  },
  {
    code: "V-22",
    title: "Cohort heatmap · 3×4 intensity grid",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-22.png`,
  },
  {
    code: "V-23",
    title: "Goal pacing · target vs current marker",
    section: "V",
    looks_like: "",
    use_for: [],
    thumbnail_url: `${url}/static/component-thumbs/V-23.png`,
  },
];

export default components;
