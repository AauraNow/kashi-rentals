# Setting Up Google Analytics for Your Website

This guide will help you set up Google Analytics 4 (GA4) to track visitors and page views on your Varanasi Bike Rental website.

## Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com)
2. Sign in with your Google account
3. Click **"Start measuring"**
4. Enter your account details:
   - Account name: `Varanasi Bike Rental`
   - Check data sharing settings (recommended: all checked)
   - Click **"Next"**

## Step 2: Create a Property

1. Property name: `Varanasi Bike Rental Website`
2. Reporting time zone: `(GMT+05:30) India Standard Time`
3. Currency: `Indian Rupee (INR)`
4. Click **"Next"**

## Step 3: Set Up Data Stream

1. Select **"Web"** as your platform
2. Enter your website URL: `https://varanasibikerental.com`
3. Stream name: `Varanasi Bike Rental - Production`
4. Click **"Create stream"**

## Step 4: Get Your Measurement ID

After creating the stream, you'll see a **Measurement ID** like: `G-ABC12345XY`

**Copy this ID!** You'll need it for the next step.

## Step 5: Add the Measurement ID to Your Website

### For Development:
1. Open `.env.local` file
2. Update the line:
   ```env
   NEXT_PUBLIC_GA_ID=G-ABC12345XY
   ```
3. Replace `G-ABC12345XY` with your actual Measurement ID
4. Restart your dev server:
   ```bash
   npm run dev
   ```

### For Production (Vercel):
1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name**: `NEXT_PUBLIC_GA_ID`
   - **Value**: `G-ABC12345XY` (your actual ID)
   - **Environments**: Select all (Production, Preview, Development)
5. Click **"Save"**
6. Redeploy your website

### For Production (Other Platforms):
Add the environment variable in your hosting platform's dashboard:
- **Netlify**: Site settings → Environment variables
- **Railway**: Variables tab
- **Render**: Environment tab

## Step 6: Verify It's Working

1. After deploying, visit your website
2. Go back to Google Analytics
3. Click on **"Realtime"** in the left sidebar
4. You should see yourself as an active user!

## What Data Will You See?

### Realtime Reports
- **Current visitors** on your site
- **Which pages** they're viewing
- **Where they're from** (city, country)
- **How they found you** (Google search, direct, social media)

### Traffic Reports (After 24-48 hours)
Navigate to **Reports** → **Life cycle** → **Acquisition**:

#### 1. User Acquisition
- How users first discovered your site
- Organic Search (Google)
- Direct (typed URL)
- Referral (other websites)
- Social (Facebook, Instagram)

#### 2. Traffic Acquisition
- All traffic sources (including return visitors)
- See which channels bring most visitors

#### 3. Engagement
Go to **Reports** → **Life cycle** → **Engagement**:
- **Pages and screens**: Which pages get most visits
  - Homepage
  - Location pages (Sigra, BHU, etc.)
  - Blog posts
  - Pricing page
  - Contact page
- **Average engagement time** per page
- **Views per page**

### Key Metrics to Monitor

#### 1. Most Visited Pages
**Path**: Reports → Engagement → Pages and screens

Track which pages are popular:
- `/` (Homepage)
- `/locations/bhu` (BHU location)
- `/scooty-rental-in-varanasi`
- `/blog/best-way-to-travel-in-varanasi`
- `/pricing`

#### 2. User Demographics
**Path**: Reports → User → User attributes → Demographics

See:
- Age groups of visitors
- Gender distribution
- Interests

#### 3. Location Data
**Path**: Reports → User → User attributes → Demographics → Location

See:
- Which cities visitors are from
- Which countries (for tourists)
- Helps identify if you need location pages for new areas

#### 4. Search Queries (via Google Search Console)
After linking Google Search Console:
- See which keywords brought visitors
- Track ranking for "scooty rental in varanasi"
- Monitor blog post performance

## Understanding Your Data

### Scenario 1: High Traffic to BHU Page
**Insight**: Many visitors interested in BHU area
**Action**:
- Create more BHU-related content
- Offer BHU student discounts
- Focus on BHU in ads

### Scenario 2: Lots of Pricing Page Views
**Insight**: People are interested but not booking
**Action**:
- Make pricing clearer
- Add "Book Now" button more prominently
- Show customer testimonials

### Scenario 3: Blog Post Getting Traffic
**Insight**: SEO is working for that topic
**Action**:
- Write more similar blog posts
- Update the post to keep it fresh
- Add internal links to booking pages

### Scenario 4: High Bounce Rate on Contact Page
**Insight**: People leave without contacting
**Action**:
- Make WhatsApp button more visible
- Simplify the contact form
- Add phone number prominently

## Setting Up Custom Events (Advanced)

Track specific actions like:
- WhatsApp button clicks
- Phone number clicks
- Booking form submissions
- Filter usage on location pages

(This requires additional code - ask if needed!)

## Linking Google Search Console

1. Go to **Admin** (bottom left in GA)
2. Under **Product links**, click **Search Console links**
3. Click **"Link"**
4. Select your Search Console property
5. Click **"Confirm"**

Now you'll see:
- Which Google searches led to your site
- Impressions (how often you appear in search)
- Click-through rate
- Average position in search results

## Privacy & GDPR Compliance

Your current setup is compliant because:
- ✅ Google Analytics doesn't collect personal data without consent
- ✅ We're not using cookies for tracking (GA4 uses cookieless tracking)
- ✅ IP addresses are anonymized by default

**Optional**: Add a privacy policy page mentioning analytics usage.

## Troubleshooting

### Not Seeing Data?
1. Wait 24-48 hours (data takes time to process)
2. Check that `NEXT_PUBLIC_GA_ID` is set correctly
3. Make sure you redeployed after adding the variable
4. Use "Realtime" report to see immediate data

### Seeing Duplicate Page Views?
- This is normal in development (hot reload triggers events)
- Production data will be accurate

### Want to Exclude Your Own Visits?
1. In GA, go to **Admin** → **Data Streams** → Click your stream
2. Click **"Configure tag settings"**
3. Click **"Show advanced settings"**
4. Under **"Internal traffic"**, define your IP address

## Quick Analytics Dashboard

After 1 week of data, create a custom dashboard:

1. In GA, click **"Explore"** (left sidebar)
2. Click **"Blank"** template
3. Add these metrics:
   - Total users (last 7 days)
   - Top 10 pages
   - User acquisition sources
   - Geographic location
   - Device category (mobile vs desktop)

## Monthly Checklist

✅ Check total visitors (is it growing?)
✅ Identify top 5 pages (optimize them further)
✅ Check which cities visitors are from (expand to new areas?)
✅ Review bounce rate (are people staying on site?)
✅ Monitor blog post traffic (which topics work?)
✅ Check conversion from top pages to contact page

## Questions to Answer with Analytics

### Week 1:
- How many people visited?
- Which pages are most popular?
- Where are visitors from?

### Month 1:
- Is traffic growing?
- Which blog posts drive most traffic?
- What's the bounce rate?
- Mobile vs desktop ratio?

### Month 3:
- Which keywords bring visitors? (via Search Console)
- What's the user journey? (which pages do they visit in sequence)
- When do people visit most? (day/time)

## Need Help?

- Google Analytics Help: [https://support.google.com/analytics](https://support.google.com/analytics)
- GA4 YouTube Tutorials: Search "Google Analytics 4 tutorial"
- Documentation: See ANALYTICS_ADVANCED.md for custom event tracking

---

**Pro Tip**: Check analytics every Monday to see weekly trends. Make decisions based on data, not guesses! 📊
