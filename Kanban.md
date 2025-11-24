# Music Matching App - 8 Day Sprint Kanban Board

**Team:** 4 Developers (2 Pairs)  
**Duration:** 8 Days  
**Tech Stack:** React Native, Node.js, Express, MongoDB, Socket.IO

---

## �� BACKLOG

### TICKET-1: Project Setup & Environment Configuration
**Points:** 3 | **Pair:** All 4 devs  
**Description:** Initialize repos, set up dev environment, establish workflow

**Tasks:**
- [ ] Create Git repos (backend + frontend)
- [ ] Set up Node.js/Express + MongoDB Atlas
- [ ] Initialize React Native with navigation
- [ ] Configure environment variables
- [ ] Create README with setup instructions
- [ ] Establish branch strategy
- [ ] Verify both projects run locally for all devs
- [ ] Create basic health check endpoint

---

### TICKET-2: Spotify OAuth Backend Implementation
**Points:** 5 | **Pair:** Pair A  
**Description:** Complete Spotify OAuth 2.0 flow with user model

**Tasks:**
- [ ] Create Spotify app in Developer Dashboard
- [ ] Create User schema in MongoDB
- [ ] Build `/api/auth/spotify` endpoint
- [ ] Build `/api/auth/callback` endpoint
- [ ] Implement token encryption and storage
- [ ] Build token refresh mechanism
- [ ] Create `/api/auth/me` endpoint
- [ ] Add unique index on spotifyId

---

### TICKET-3: Login Screen & Auth Integration
**Points:** 5 | **Pair:** Pair B  
**Description:** Build login UI and connect to OAuth backend

**Tasks:**
- [ ] Design login screen with Spotify button
- [ ] Implement OAuth flow (browser/webview)
- [ ] Handle OAuth callback
- [ ] Set up auth context/state management
- [ ] Store tokens securely (AsyncStorage/SecureStore)
- [ ] Implement navigation logic (onboarding vs home)
- [ ] Add loading states
- [ ] Add error handling

---

### TICKET-4: Song Search & Audio Features Backend
**Points:** 5 | **Pair:** Pair A  
**Description:** Implement Spotify search and profile song storage

**Tasks:**
- [ ] Build `GET /api/spotify/search` endpoint
- [ ] Return track data (id, name, artist, album art, preview)
- [ ] Build `POST /api/users/profile-songs` endpoint
- [ ] Fetch audio features from Spotify API
- [ ] Calculate averaged musicVector
- [ ] Update user document with profileSongs and musicVector
- [ ] Add input validation
- [ ] Add error handling

---

### TICKET-5: Song Selection Onboarding Flow
**Points:** 5 | **Pair:** Pair B  
**Description:** Build complete song selection experience

**Tasks:**
- [ ] Create search bar component
- [ ] Display search results with album art
- [ ] Implement song selection (max 5)
- [ ] Show selected count and visual indicators
- [ ] Add 30s preview playback
- [ ] Create "Continue" button (disabled until 5 selected)
- [ ] Connect to backend API
- [ ] Implement navigation to home
- [ ] Add loading states and animations
- [ ] Add error handling

---

### TICKET-6: Matching Algorithm & Swipe Backend
**Points:** 5 | **Pair:** Pair A  
**Description:** Build matching algorithm and swipe logic

**Tasks:**
- [ ] Build `GET /api/matches/potential` endpoint
- [ ] Implement compatibility score calculation
- [ ] Sort users by compatibility
- [ ] Exclude liked/passed/matched users
- [ ] Add pagination support
- [ ] Build `POST /api/matches/swipe` endpoint
- [ ] Update liked/passed arrays
- [ ] Detect mutual likes
- [ ] Create Match model
- [ ] Return match status

---

### TICKET-7: Swipeable Profile Cards & Match Detection
**Points:** 5 | **Pair:** Pair B  
**Description:** Build Tinder-style swipe interface

**Tasks:**
- [ ] Create profile card component
- [ ] Implement swipe gestures (left/right)
- [ ] Add like/pass buttons
- [ ] Add card animations
- [ ] Implement song preview playback
- [ ] Fetch potential matches from API
- [ ] Send swipe actions to backend
- [ ] Create "It's a Match!" modal with animations
- [ ] Add "Send Message" and "Keep Swiping" buttons
- [ ] Handle end of matches (empty state)
- [ ] Add all loading states

---

### TICKET-8: Matches List Backend & Message Schema
**Points:** 3 | **Pair:** Pair A  
**Description:** Create matches endpoint and message database

**Tasks:**
- [ ] Build `GET /api/matches` endpoint
- [ ] Return matches with user details
- [ ] Include last message preview
- [ ] Calculate unread counts
- [ ] Sort by most recent activity
- [ ] Create Message model in MongoDB
- [ ] Build `GET /api/messages/:matchId` endpoint
- [ ] Add indexes (matchId, sentAt)
- [ ] Add pagination for message history

---

### TICKET-9: Matches List Screen
**Points:** 3 | **Pair:** Pair B  
**Description:** Build matches list interface

**Tasks:**
- [ ] Create matches list component
- [ ] Display user photos and names
- [ ] Show last message preview
- [ ] Add unread badge
- [ ] Show timestamps
- [ ] Implement navigation to chat
- [ ] Add pull to refresh
- [ ] Create empty state
- [ ] Add loading skeleton

---

### TICKET-10: Socket.IO Server & Real-Time Events
**Points:** 5 | **Pair:** Pair A  
**Description:** Implement complete real-time messaging backend

**Tasks:**
- [ ] Integrate Socket.IO with Express
- [ ] Implement connection authentication
- [ ] Set up user room joining
- [ ] Build `sendMessage` event handler
- [ ] Build `newMessage` event emitter
- [ ] Implement `typing` and `stopTyping` events
- [ ] Add message delivery confirmation
- [ ] Handle disconnection/reconnection
- [ ] Create REST fallback endpoint
- [ ] Update match lastMessageAt and unreadCount
- [ ] Configure CORS for React Native

---

### TICKET-11: Chat UI & Socket.IO Client
**Points:** 5 | **Pair:** Pair B  
**Description:** Build complete chat interface with real-time

**Tasks:**
- [ ] Create chat screen with message bubbles
- [ ] Style sender/receiver messages differently
- [ ] Add text input with send button
- [ ] Integrate Socket.IO client
- [ ] Connect to server with auth
- [ ] Fetch message history on open
- [ ] Send messages via socket
- [ ] Receive real-time messages
- [ ] Implement auto-scroll
- [ ] Add typing indicator
- [ ] Display timestamps
- [ ] Handle keyboard properly
- [ ] Add connection error handling
- [ ] Implement mark as read

---

### TICKET-12: Profile Screens (Own & Match Profiles)
**Points:** 3 | **Pair:** Pair B  
**Description:** Build user profile views

**Tasks:**
- [ ] Create own profile screen (name, photo, songs)
- [ ] Add "Edit Songs" button
- [ ] Add logout button
- [ ] Create match profile screen
- [ ] Display compatibility score
- [ ] Show shared genres/artists
- [ ] Enable song preview playback
- [ ] Make accessible from matches list and chat
- [ ] Create basic settings screen

---

### TICKET-13: Error Handling & User Feedback
**Points:** 3 | **Pair:** Pair A  
**Description:** Comprehensive error handling

**Tasks:**
- [ ] Backend: Add input validation to all endpoints
- [ ] Backend: Create consistent error response format
- [ ] Backend: Use proper HTTP status codes
- [ ] Backend: Implement error logging
- [ ] Frontend: Add network error messages
- [ ] Frontend: Add loading spinners everywhere
- [ ] Frontend: Implement retry mechanisms
- [ ] Frontend: Create user-friendly error toasts
- [ ] Handle token expiration and refresh
- [ ] Handle Spotify API rate limits

---

### TICKET-14: Integration Testing & Bug Fixes
**Points:** 5 | **Pair:** Both pairs together  
**Description:** End-to-end testing and critical bug fixes

**Tasks:**
- [ ] Test signup → onboarding → matching → messaging flow
- [ ] Test with multiple users simultaneously
- [ ] Verify real-time messaging across devices
- [ ] Test token refresh mechanism
- [ ] Test edge cases (no internet, empty states)
- [ ] Fix all critical bugs
- [ ] Verify no crashes under normal usage
- [ ] Test performance on real devices

---

### TICKET-15: UI Polish & Documentation
**Points:** 3 | **Pair:** Split - Pair A (docs), Pair B (UI)  
**Description:** Final polish and deployment prep

**Tasks:**
- [ ] Pair B: Ensure consistent styling
- [ ] Pair B: Polish all animations
- [ ] Pair B: Add app icon and splash screen
- [ ] Pair B: Final UI/UX review
- [ ] Pair A: Write README with setup instructions
- [ ] Pair A: Document all API endpoints
- [ ] Pair A: Document environment variables
- [ ] Pair A: Create deployment guide
- [ ] Both: Add code comments for complex logic

---

## �� IN PROGRESS

*Move tickets here when work begins*

---

## ✅ DONE

*Move tickets here when complete and tested*

---

## �� Sprint Timeline

| Day | Tickets | Pairs |
|-----|---------|-------|
| **Day 1 AM** | TICKET-1 | All 4 devs |
| **Day 1 PM - Day 2** | TICKET-2 & TICKET-3 | Pair A & Pair B (parallel) |
| **Day 2-3** | TICKET-4 & TICKET-5 | Pair A & Pair B (parallel) |
| **Day 3-5** | TICKET-6 & TICKET-7 | Pair A & Pair B (parallel) |
| **Day 5** | TICKET-8 & TICKET-9 | Pair A & Pair B (parallel) |
| **Day 6-7** | TICKET-10 & TICKET-11 | Pair A & Pair B (parallel) |
| **Day 7 PM** | TICKET-12 & TICKET-13 | Pair A & Pair B (parallel) |
| **Day 8** | TICKET-14 & TICKET-15 | Collaborate/Split |

---

## �� Daily Rituals

**Morning Standup (15 min)**
- What we did yesterday
- What we're doing today
- Any blockers

**Mid-Day Sync (15 min)**
- Share progress between pairs
- Align on API contracts

**End-of-Day Review (30 min)**
- Demo what was built
- Merge PRs
- Plan tomorrow

**Pair Programming**
- Switch driver/navigator every 30-45 min
- Communicate API contracts early
- Regular integration checkpoints

---

## �� Sprint Progress

**Total Story Points:** 55  
**Completed:** 0  
**In Progress:** 0  
**Remaining:** 55

**Velocity Target:** ~7 points/day