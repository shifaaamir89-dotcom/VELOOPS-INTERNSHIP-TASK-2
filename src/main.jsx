import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';

const games = [
  { name: 'Roblox Mobile', type: 'Battle Royale', img: 'https://i.pinimg.com/736x/2d/df/5d/2ddf5d9f1bc6e478e01beac00ea3d8ca.jpg' },
  { name: 'Free Fire', type: 'Battle Royale', img: 'https://i.pinimg.com/736x/25/f9/9a/25f99a9e30ff598ef5278ab40bee4bdd.jpg' },
  { name: 'Minecraft', type: 'FPS', img: 'https://i.pinimg.com/1200x/f2/d3/31/f2d331ed984fbafbd40769dc34cacbb2.jpg' },
  { name: 'Angry Birds', type: 'Strategy', img: 'https://i.pinimg.com/736x/cb/8d/80/cb8d80a706a8e9e9503043c9da25a15b.jpg' },
  { name: 'Subway Surfers', type: 'RPG', img: 'https://i.pinimg.com/736x/60/75/39/607539eec69f797f89661ecf5fab9e10.jpg' }
];


const trendingGames = [
  { name: 'Valorant', type: 'Tactical FPS', rating: '98%', img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=900&q=85' },
  { name: 'Fortnite', type: 'Battle Royale', rating: '95%', img: 'https://images.unsplash.com/photo-1603481546238-487240415921?auto=format&fit=crop&w=900&q=85' },
  { name: 'Apex Legends', type: 'Battle Royale', rating: '93%', img: 'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?auto=format&fit=crop&w=900&q=85' },
  { name: 'GTA V', type: 'Action Adventure', rating: '91%', img: 'https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?auto=format&fit=crop&w=900&q=85' }
];

const missions = [
  ['bi-controller', 'Play 3 Games', 'Complete three different games today.', '250 VCoins', '2/3'],
  ['bi-trophy', 'Win a Match', 'Finish in the top 3 in any game.', '500 VCoins', '0/1'],
  ['bi-people', 'Invite a Friend', 'Invite a friend and start earning together.', '750 VCoins', '1/2']
];


const features = [
  ['bi-shield-check', 'Secure & Fair', 'Your data and rewards are always protected.'],
  ['bi-lightning-charge', 'Instant Payouts', 'Get your rewards quickly and easily.'],
  ['bi-layers', 'Multiple Ways to Earn', 'Play, complete tasks, refer and earn more.'],
  ['bi-headset', '24/7 Support', 'We are always here when you need help.']
];
const rewards = [['bi-google-play', 'Google Play Card', '$5 – $100'], ['bi-steam', 'Steam Wallet', '$10 – $100'], ['bi-paypal', 'PayPal Cash', '$10 – $100']];
const faqs = [
  ['How do I join VELOOP?', 'Create your free account in seconds, choose a game or mission, and start earning VCoins.'],
  ['How can I redeem my rewards?', 'Open the Rewards section, choose an available reward, and redeem your VCoins.'],
  ['Is my information safe?', 'Yes. VELOOP is designed around secure accounts, protected reward data and safe redemptions.'],
  ['How often are new games added?', 'New games, missions and limited-time challenges can be added regularly. Check the Games and Events sections for updates.']
];
function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [activeGame, setActiveGame] = useState(null);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return <div className="app">
    <nav className="navbar navbar-expand-lg fixed-top"><div className="container nav-inner">
      <a className="brand" href="#home"><span className="brand-icon">V</span><span>VELOOP<small>PLAY • EARN • REDEEM</small></span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"><i className="bi bi-list" /></button>
      <div className="collapse navbar-collapse" id="mainNav"><ul className="navbar-nav mx-auto">
        {[
          ['Home', 'home'],
          ['Games', 'games'],
          ['Play & Earn', 'earn'],
          ['Rewards', 'rewards'],
          ['Leaderboard', 'leaderboard'],
          ['Events', 'events']
        ].map(([name, page]) => (
          <li key={name}>
            <a
              href="#"
              className={currentPage === page ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                goToPage(page);
              }}
            >
              {name}
            </a>
          </li>
        ))}
        <li><a href="#faq">More <i className="bi bi-chevron-down" /></a></li>
      </ul><div className="nav-actions"><i className="bi bi-search" /><i className="bi bi-bell" /><button className="profile"><span className="avatar">SA</span> Shifa_Aamir <i className="bi bi-chevron-down" /></button><a className="btn btn-primary" href="#games">Get Started <i className="bi bi-arrow-right" /></a></div></div>
    </div></nav>

    <main id="home">

      {currentPage === 'home' && (
        <>

          <section className="hero"><div className="container hero-grid">
            <div className="hero-copy"><span className="eyebrow">PLAY • EARN • REDEEM</span><h1>Turn Your Passion<br />Into <em>Real Rewards</em></h1><p>Play your favorite games, complete missions, earn rewards, and turn your time into real value with VELOOP.</p>
              <div className="hero-actions"><a className="btn btn-primary btn-lg" href="#games">Start Earning Now <i className="bi bi-arrow-right" /></a><button className="watch"><span><i className="bi bi-play-fill" /></span><b>Watch Intro<small>1 min</small></b></button></div>
              <div className="trust"><div className="avatars"><span>AM</span><span>BK</span><span>ZH</span><span>MK</span><span>+</span></div><div><b>Join 250K+ gamers</b><small>★★★★★ 4.8/5 <i>(Trusted by players)</i></small></div></div>
            </div>
            <div className="hero-visual"><div className="hero-glow one" /><div className="hero-glow two" /><div className="hero-ring" /><img src="/hero-character.png" alt="Futuristic gamer playing with a controller" /><span className="float-tag tag-one"><i className="bi bi-controller" /> Play</span><span className="float-tag tag-two"><i className="bi bi-lightning-charge-fill" /> Earn</span><span className="float-tag tag-three"><i className="bi bi-gift-fill" /> Rewards</span></div>
          </div></section>

          <section className="stats container"><Stat icon="bi-people-fill" title="Active Gamers" value="250K+" change="+12% this week" /><Stat icon="bi-gift-fill" title="Total Rewards" value="$13M+" change="+18% this month" /><Stat icon="bi-clipboard-check-fill" title="Tasks Completed" value="20M+" change="+22% this month" /><Stat icon="bi-star-fill" title="User Rating" value="4.8/5" change="★★★★★ trusted" /></section>

          <section className="section features-section" id="play---earn"><div className="container feature-wrap"><div className="section-intro"><span className="eyebrow">WHY CHOOSE VELOOP?</span><h2>More Than Just<br /><em>A Gaming Platform</em></h2><p>We believe your time has value. That is why we bring games, rewards and opportunities together in one place.</p><a className="outline-btn" href="#rewards">Explore All Features <i className="bi bi-arrow-right" /></a></div><div className="feature-grid">{features.map(f => <article className="feature" key={f[1]}><span className="icon-box"><i className={'bi ' + f[0]} /></span><h3>{f[1]}</h3><p>{f[2]}</p></article>)}</div></div></section>

          <section className="section how-section"><div className="container"><div className="center-head"><span className="eyebrow">SIMPLE STEPS, BIG REWARDS</span><h2>How It Works</h2><p>Getting started is easy. Just follow these three simple steps.</p></div><div className="steps"><Step n="01" icon="bi-person-plus" title="Sign Up" text="Create your free account in seconds." /><Step n="02" icon="bi-controller" title="Play & Complete" text="Enjoy games and missions to earn VCoins." /><Step n="03" icon="bi-gift" title="Redeem Rewards" text="Turn your VCoins into real rewards." /></div></div></section>

          <section className="section games-section" id="games"><div className="container"><div className="section-heading"><div><span className="eyebrow">POPULAR GAMES</span><h2>Play Your Favorite Games</h2><p>From battle royales to strategy, find your next adventure and earn rewards while you play.</p></div><a className="outline-btn" href="#games">Browse All Games <i className="bi bi-arrow-right" /></a></div><div className="game-grid">{games.map(g => <article className="game-card" key={g.name}><img src={g.img} alt={g.name} /><div className="game-shade" /><div className="game-content"><span>{g.type}</span><h3>{g.name}</h3><button onClick={() => setActiveGame(g.name)}>
            Play Now <i className="bi bi-arrow-right" />
          </button></div></article>)}</div></div></section>



          <section className="section trending-section">
            <div className="container">

              <div className="section-heading">
                <div>
                  <span className="eyebrow">🔥 TRENDING THIS WEEK</span>
                  <h2>Games Everyone Is Playing</h2>
                  <p>
                    Discover the hottest games this week and earn while you play.
                  </p>
                </div>

                <a className="outline-btn" href="#games">
                  Explore Trending <i className="bi bi-arrow-right" />
                </a>
              </div>

              <div className="trending-list">
                {trendingGames.map((g, i) => (
                  <article className="trending-item" key={g.name}>

                    <div className="trending-image">
                      <img src={g.img} alt={g.name} />
                    </div>

                    <div className="trending-info">
                      <span>{g.type}</span>
                      <h3>{g.name}</h3>
                      <small>
                        <i className="bi bi-fire" /> Trending #{i + 1}
                      </small>
                    </div>

                    <div className="trending-rating">
                      <strong>{g.rating}</strong>
                      <small>Players love it</small>
                    </div>

                    <button className="trending-play">
                      Play <i className="bi bi-arrow-right" />
                    </button>

                  </article>
                ))}
              </div>

            </div>
          </section>


          <section className="section missions-section">
            <div className="container">

              <div className="mission-head">
                <div>
                  <span className="eyebrow">🎯 DAILY CHALLENGES</span>
                  <h2>Complete Missions. Earn More.</h2>
                  <p>
                    Finish simple daily challenges and collect bonus VCoins.
                  </p>
                </div>

                <div className="mission-streak">
                  <i className="bi bi-fire" />
                  <div>
                    <strong>7 Day Streak</strong>
                    <small>Keep playing daily</small>
                  </div>
                </div>
              </div>

              <div className="mission-grid">

                {missions.map((m, i) => (
                  <article className="mission-card" key={m[1]}>

                    <div className="mission-icon">
                      <i className={'bi ' + m[0]} />
                    </div>

                    <div className="mission-content">
                      <span>DAILY MISSION 0{i + 1}</span>
                      <h3>{m[1]}</h3>
                      <p>{m[2]}</p>

                      <div className="mission-progress">
                        <div>
                          <small>Progress</small>
                          <strong>{m[4]}</strong>
                        </div>

                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{
                              width: i === 0 ? '66%' : i === 2 ? '50%' : '15%'
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mission-reward">
                      <i className="bi bi-coin" />
                      <strong>{m[3]}</strong>
                      <button>Claim</button>
                    </div>

                  </article>
                ))}

              </div>

            </div>
          </section>




          <section className="section rewards-section" id="rewards"><div className="container rewards-wrap"><div className="section-intro"><span className="eyebrow">EARN & REDEEM</span><h2>Real Rewards,<br /><em>Real Value</em></h2><p>Collect VCoins and redeem them for exciting rewards, gift cards, and more.</p><a className="outline-btn" href="#faq">View All Rewards <i className="bi bi-arrow-right" /></a></div><div className="reward-grid"><article className="coin-card"><div className="coin-orb">V</div><h3>VCoins</h3><p>Play • Earn • Redeem</p></article>{rewards.map(r => <article className="reward-card" key={r[0]}><i className={'bi ' + r[0]} /><h3>{r[1]}</h3><span>{r[2]}</span></article>)}</div></div></section>

          <section className="section tournament-section">
            <div className="container">

              <div className="tournament-banner">

                <div className="tournament-content">

                  <span className="event-pill">
                    LIVE TOURNAMENT
                  </span>

                  <span className="eyebrow">
                    🏆 WEEKLY CHALLENGE
                  </span>

                  <h2>
                    Dominate The Leaderboard.
                    <em> Win Big.</em>
                  </h2>

                  <p>
                    Compete with thousands of players this week and
                    win exclusive VCoins and rewards.
                  </p>

                  <div className="tournament-meta">
                    <div>
                      <small>PRIZE POOL</small>
                      <strong>50,000 VC</strong>
                    </div>

                    <div>
                      <small>PLAYERS</small>
                      <strong>12,480+</strong>
                    </div>

                    <div>
                      <small>ENDS IN</small>
                      <strong>02 : 14 : 36</strong>
                    </div>
                  </div>

                  <button className="btn btn-primary">
                    Join Tournament
                    <i className="bi bi-arrow-right" />
                  </button>

                </div>

                <div className="tournament-art">
                  <div className="trophy-glow">
                    <i className="bi bi-trophy-fill" />
                  </div>

                  <span className="floating-coin coin-one">V</span>
                  <span className="floating-coin coin-two">V</span>
                  <span className="floating-coin coin-three">V</span>
                </div>

              </div>

            </div>
          </section>




          <section className="section split-section"><div className="container split-grid"><article className="panel" id="leaderboard"><div className="panel-head"><div><span className="eyebrow">COMPETE & WIN</span><h2>Top Players This Week</h2><p>Compete, climb the ranks and win exclusive rewards.</p></div><i className="bi bi-trophy-fill panel-icon" /></div><div className="ranks">{['GamerX_99', 'PixelPrincess', 'ShadowKing', 'You (Shifa_Aamir)'].map((n, i) => <div className={'rank ' + (i === 3 ? 'active' : '')} key={n}><b>{i + 1}</b><span className="rank-avatar">{n[0]}</span><span>{n}</span><strong>{['12,450', '11,230', '10,870', '2,450'][i]} <small>VC</small></strong></div>)}</div></article>
            <article className="panel" id="events"><div className="panel-head"><div><span className="eyebrow">LATEST EVENTS</span><h2>Special Events & Challenges</h2><p>Join limited-time events, complete challenges and earn exclusive rewards.</p></div><i className="bi bi-calendar-event-fill panel-icon cyan" /></div><div className="event-banner"><div><span className="event-pill">LIVE EVENT</span><h3>Summer Gaming Fest</h3><p>Play • Complete • Win</p><small>Jul 15 – Aug 15</small></div><div className="event-art"><i className="bi bi-controller" /><i className="bi bi-gift-fill" /></div><button>Join Now <i className="bi bi-arrow-right" /></button></div></article>
          </div></section>

          <section className="section testimonials"><div className="container"><div className="section-heading"><div><span className="eyebrow">REAL PLAYERS, REAL STORIES</span><h2>What Our Players Say</h2><p>Join thousands of happy players who are already earning with VELOOP.</p></div><a className="outline-btn" href="#faq">Read More Reviews <i className="bi bi-arrow-right" /></a></div><div className="review-grid">{[['Ayesha Khan', 'VELOOP is honestly the best app I have used. I have received so many rewards and the process is super fast!'], ['Bilal Ahmed', 'Super easy to use, amazing games and legit payouts. Highly recommended!'], ['Zainab Malik', 'I love the variety of games and the daily missions. It is fun and actually pays you!']].map((r, i) => <article className="review" key={r[0]}><div className="review-top"><span className="review-avatar">{r[0][0]}</span><div><b>{r[0]}</b><small>Verified Player</small></div></div><p>“{r[1]}”</p><div className="stars">★★★★★</div></article>)}</div></div></section>

          <section className="section faq-section" id="faq"><div className="container faq-grid"><div className="section-intro"><span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span><h2>Got Questions?</h2><p>Find answers to the most common questions about VELOOP and how it works.</p><a className="outline-btn" href="mailto:support@veloop.example">Contact Support <i className="bi bi-arrow-right" /></a></div><div className="faq-list">{faqs.map((f, i) => <button className={'faq ' + (openFaq === i ? 'open' : '')} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} key={f[0]}><span><b>{f[0]}</b>{openFaq === i && <small>{f[1]}</small>}</span><i className={'bi ' + (openFaq === i ? 'bi-dash' : 'bi-plus')} /></button>)}</div></div></section>



          <section className="section community-section">
            <div className="container">

              <div className="community-banner">

                <div className="community-icon">
                  <i className="bi bi-discord" />
                </div>

                <div className="community-content">

                  <span className="eyebrow">
                    👥 JOIN THE COMMUNITY
                  </span>

                  <h2>
                    More Players.
                    <em> More Fun.</em>
                  </h2>

                  <p>
                    Connect with gamers, discover new challenges,
                    share your wins and stay updated with everything
                    happening on VELOOP.
                  </p>

                  <div className="community-stats">
                    <span>
                      <strong>250K+</strong>
                      <small>Gamers</small>
                    </span>

                    <span>
                      <strong>120+</strong>
                      <small>Countries</small>
                    </span>

                    <span>
                      <strong>24/7</strong>
                      <small>Community</small>
                    </span>
                  </div>

                  <button className="btn btn-primary">
                    Join Community
                    <i className="bi bi-arrow-right" />
                  </button>

                </div>

                <div className="community-visual">
                  <span className="community-orb">V</span>
                  <i className="bi bi-controller" />
                  <i className="bi bi-headset" />
                  <i className="bi bi-people-fill" />
                </div>

              </div>

            </div>
          </section>



          <section className="container final-cta"><div className="cta-copy"><span className="eyebrow">READY TO EARN?</span><h2>Your Free Time Can <em>Earn More</em></h2><p>Join VELOOP today and start your journey to real rewards.</p><a className="btn btn-light" href="#games">Get Started Now <i className="bi bi-arrow-right" /></a></div><div className="cta-visual"><div className="mini-orb">V</div><i className="bi bi-controller controller-big" /></div><div className="cta-stats"><b>250K+<small>Active Gamers</small></b><b>$13M+<small>Rewards Given</small></b><b>20M+<small>Tasks Completed</small></b></div></section>
        </>
      )}



      {currentPage !== 'home' && (
        <SimplePage
          page={currentPage}
          goToPage={goToPage}
        />
      )}

      {activeGame === 'Roblox Mobile' && (
        <RobloxMiniGame onClose={() => setActiveGame(null)} />
      )}

      {activeGame === 'Minecraft' && (
        <DiamondRushMiniGame
          onClose={() => setActiveGame(null)}
        />
      )}

      {activeGame === 'Free Fire' && (
        <FreeFireMiniGame onClose={() => setActiveGame(null)} />
      )}


      {activeGame === 'Angry Birds' && (
  <AngryBirdsMiniGame
    onClose={() => setActiveGame(null)}
  />
)}


{activeGame === 'Subway Surfers' && (
  <SubwaySurfersMiniGame
    onClose={() => setActiveGame(null)}
  />
)}


    </main>

    <footer><div className="container footer-top"><a className="brand" href="#home"><span className="brand-icon">V</span><span>VELOOP<small>PLAY • EARN • REDEEM</small></span></a><div className="footer-links"><a href="#home">Home</a><a href="#games">Games</a><a href="#play---earn">Play & Earn</a><a href="#rewards">Rewards</a><a href="#leaderboard">Leaderboard</a><a href="#events">Events</a></div><div className="social"><i className="bi bi-discord" /><i className="bi bi-instagram" /><i className="bi bi-youtube" /><i className="bi bi-tiktok" /></div></div><div className="container footer-bottom"><span>© 2025 VELOOP. All rights reserved.</span><span><a href="#faq">Privacy Policy</a><a href="#faq">Terms & Conditions</a><a href="mailto:support@veloop.example">Contact Us</a><a href="#home">Back to top ↑</a></span></div></footer>
  </div>
}




function SimplePage({ page, goToPage }) {

  if (page === 'games') {
    const gamePageGames = [
      {
        name: 'Stumble Guys',
        type: 'Action RPG',
        players: '42K+ Players',
        img: 'https://i.pinimg.com/736x/e3/57/34/e357342f16e90b433b05ac1ecff86a29.jpg'
      },
      {
        name: 'Super Mario',
        type: 'Tactical FPS',
        players: '38K+ Players',
        img: 'https://i.pinimg.com/1200x/f8/a5/2f/f8a52fdc741c1102b18ac87fb160ffaf.jpg'
      },
      {
        name: 'Fortnite',
        type: 'Battle Royale',
        players: '35K+ Players',
        img: 'https://i.pinimg.com/736x/97/37/c5/9737c580b8821e5f5eafdd255a2e7640.jpg'
      },
      {
        name: 'Speed Drifters',
        type: 'Battle Royale',
        players: '31K+ Players',
        img: 'https://i.pinimg.com/736x/40/5a/9f/405a9f0036b1d27abfa9de3a9bf02b46.jpg'
      },
      {
        name: 'Power Rangers',
        type: 'Adventure',
        players: '29K+ Players',
        img: 'https://i.pinimg.com/736x/ab/45/c5/ab45c5be052fe7e8e080e462a747c5c2.jpg'
      },
      {
        name: 'Overwatch',
        type: 'FPS',
        players: '26K+ Players',
        img: 'https://i.pinimg.com/736x/b1/fd/8e/b1fd8ef3c9128343e9112b14884d14d2.jpg'
      }
    ];

    return (
      <div className="games-page">

        <section className="games-hero">
          <div className="container games-hero-inner">

            <div className="games-hero-copy">
              <span className="eyebrow">EXPLORE THE LIBRARY</span>

              <h1>
                Choose Your <em>Game</em>
              </h1>

              <p>
                Discover exciting games, jump into your favorite worlds
                and turn every gaming session into VCoins.
              </p>

              <div className="games-highlights">

                <div>
                  <i className="bi bi-controller" />
                  <span>
                    <strong>50+ Games</strong>
                    <small>Explore & Play</small>
                  </span>
                </div>

                <div>
                  <i className="bi bi-coin" />
                  <span>
                    <strong>Earn VCoins</strong>
                    <small>Real Rewards</small>
                  </span>
                </div>

                <div>
                  <i className="bi bi-lightning-charge-fill" />
                  <span>
                    <strong>Instant Missions</strong>
                    <small>Play & Earn</small>
                  </span>
                </div>

              </div>
            </div>

            <div className="games-hero-visual">

              <img
                src="https://i.pinimg.com/736x/2c/7c/46/2c7c469bda4b72c8aa987c251cff4f4a.jpg"
                alt="Gaming setup"
              />

              <div className="hero-game-badge">
                <i className="bi bi-fire" />
                TRENDING
              </div>

              <div className="hero-game-floating">
                <strong>+250 VC</strong>
                <small>Reward Available</small>
              </div>

            </div>

          </div>
        </section>


        <section className="games-library">
          <div className="container">

            <div className="games-library-head">

              <div>
                <span className="eyebrow">GAME COLLECTION</span>

                <h2>
                  Find Your Next <em>Adventure</em>
                </h2>
              </div>

              <div className="game-filters">
                <button className="active">All</button>
                <button>FPS</button>
                <button>Battle Royale</button>
                <button>RPG</button>
              </div>

            </div>


            <div className="games-page-grid">

              {gamePageGames.map((game, index) => (
                <article
                  className="games-page-card"
                  key={game.name}
                >

                  <div className="games-card-image">

                    <img
                      src={game.img}
                      alt={game.name}
                    />

                    <div className="games-card-overlay" />

                    <span className="game-number">
                      0{index + 1}
                    </span>

                    <span className="game-type">
                      {game.type}
                    </span>

                    <button className="game-play-btn">
                      <i className="bi bi-arrow-up-right" />
                    </button>

                  </div>

                  <div className="games-card-info">

                    <div>
                      <h3>{game.name}</h3>

                      <span>
                        <i className="bi bi-people-fill" />
                        {game.players}
                      </span>
                    </div>

                    <button onClick={() => setActiveGame(g.name)}>
                      Play Now <i className="bi bi-arrow-right" />
                    </button>

                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>

      </div>
    );
  }




  /* =========================
     🎮 GAMES PAGE
  ========================= */




  if (page === 'games') {
    return (
      <div className="games-page">

        {/* SECTION 1 */}
        <section className="games-showcase">
          <div className="container games-showcase-grid">

            <div className="games-showcase-content">
              <span className="eyebrow">🎮 VELOOP GAME HUB</span>

              <h1>
                Play More.
                <br />
                <em>Earn More.</em>
              </h1>

              <p>
                Discover popular games, jump into your favorite worlds
                and turn every gaming session into VCoins.
              </p>

              <div className="games-feature-meta">
                <span><i className="bi bi-controller" /> 50+ Games</span>
                <span><i className="bi bi-coin" /> Earn VCoins</span>
                <span><i className="bi bi-lightning-fill" /> Instant Missions</span>
              </div>

              <button
                className="btn btn-primary"
                onClick={() => goToPage('earn')}
              >
                Start Playing
                <i className="bi bi-arrow-right" />
              </button>
            </div>

            <div className="games-feature-image">
              <img
                src={games[0].img}
                alt={games[0].name}
              />

              <div className="games-image-overlay" />

              <div className="featured-game-info">
                <span>FEATURED GAME</span>
                <h2>{games[0].name}</h2>
                <p>{games[0].type}</p>

                <button>
                  Play Now
                  <i className="bi bi-play-fill" />
                </button>
              </div>

              <div className="game-floating-stat">
                <i className="bi bi-fire" />
                <div>
                  <strong>98%</strong>
                  <small>Players Love It</small>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 2 */}
        <section className="games-gallery">
          <div className="container">

            <div className="games-gallery-head">
              <div>
                <span className="eyebrow">EXPLORE THE LIBRARY</span>
                <h2>Choose Your <em>Game</em></h2>
              </div>

              <div className="game-filters">
                <button className="active">All</button>
                <button>FPS</button>
                <button>Battle Royale</button>
                <button>RPG</button>
              </div>
            </div>

            <div className="games-gallery-grid">
              {games.map((g, i) => (
                <article className="gallery-game-card" key={g.name}>

                  <div className="gallery-game-image">
                    <img src={g.img} alt={g.name} />

                    <span className="game-type">
                      {g.type}
                    </span>

                    <span className="game-rank">
                      #{String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="gallery-game-info">
                    <div>
                      <h3>{g.name}</h3>
                      <small>
                        <i className="bi bi-people-fill" />
                        25K+ Players
                      </small>
                    </div>

                    <button>
                      <i className="bi bi-arrow-up-right" />
                    </button>
                  </div>

                </article>
              ))}
            </div>

          </div>
        </section>

      </div>
    );
  }


  /* =========================
     ⚡ PLAY & EARN PAGE
  ========================= */
  if (page === 'earn') {
    return (
      <div className="earn-page">

        {/* SECTION 1 */}
        <section className="earn-dashboard">
          <div className="container">

            <div className="earn-dashboard-top">
              <div>
                <span className="eyebrow">⚡ PLAY & EARN</span>
                <h1>
                  Your Gaming.
                  <br />
                  <em>Your Earnings.</em>
                </h1>
                <p>
                  Complete missions, maintain your streak and
                  collect VCoins every day.
                </p>
              </div>

              <div className="earn-balance">
                <span>YOUR VCOIN BALANCE</span>
                <strong>12,450</strong>
                <small>
                  <i className="bi bi-coin" />
                  VCoins Available
                </small>
              </div>
            </div>

            <div className="earn-stats">
              <div>
                <i className="bi bi-fire" />
                <span>
                  <small>Daily Streak</small>
                  <strong>7 Days</strong>
                </span>
              </div>

              <div>
                <i className="bi bi-check2-circle" />
                <span>
                  <small>Missions Done</small>
                  <strong>24</strong>
                </span>
              </div>

              <div>
                <i className="bi bi-trophy-fill" />
                <span>
                  <small>Weekly Rank</small>
                  <strong>#18</strong>
                </span>
              </div>

              <div>
                <i className="bi bi-graph-up-arrow" />
                <span>
                  <small>This Week</small>
                  <strong>+2,850 VC</strong>
                </span>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 2 */}
        <section className="earn-missions">
          <div className="container">

            <div className="earn-missions-head">
              <div>
                <span className="eyebrow">TODAY'S CHALLENGES</span>
                <h2>Complete Missions</h2>
                <p>
                  Finish today's challenges and boost your VCoin balance.
                </p>
              </div>

              <div className="streak-badge">
                <i className="bi bi-fire" />
                <span>
                  <strong>7 DAY STREAK</strong>
                  <small>Keep it going!</small>
                </span>
              </div>
            </div>

            <div className="earn-mission-list">

              {missions.map((m, i) => (
                <article className="earn-mission" key={m[1]}>

                  <div className="earn-mission-icon">
                    <i className={'bi ' + m[0]} />
                  </div>

                  <div className="earn-mission-main">
                    <span>MISSION 0{i + 1}</span>
                    <h3>{m[1]}</h3>
                    <p>{m[2]}</p>

                    <div className="earn-progress">
                      <div className="earn-progress-top">
                        <small>Progress</small>
                        <strong>{m[4]}</strong>
                      </div>

                      <div className="earn-progress-track">
                        <div
                          style={{
                            width: i === 0 ? '66%' : i === 1 ? '15%' : '50%'
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="earn-mission-reward">
                    <small>REWARD</small>
                    <strong>{m[3]}</strong>
                    <button>
                      Claim
                      <i className="bi bi-arrow-right" />
                    </button>
                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>

      </div>
    );
  }


  /* =========================
     🎁 REWARDS PAGE
  ========================= */
  if (page === 'rewards') {
    return (
      <div className="rewards-page">

        {/* SECTION 1 */}
        <section className="rewards-hero">
          <div className="container rewards-hero-grid">

            <div className="rewards-hero-content">
              <span className="eyebrow">🎁 REWARD VAULT</span>

              <h1>
                Your VCoins.
                <br />
                <em>Your Rewards.</em>
              </h1>

              <p>
                Redeem your hard-earned VCoins for digital gift cards,
                gaming credits and real cash rewards.
              </p>

              <div className="reward-balance-box">
                <div className="reward-coin">
                  <i className="bi bi-coin" />
                </div>

                <div>
                  <small>AVAILABLE BALANCE</small>
                  <strong>12,450 <span>VC</span></strong>
                </div>

                <i className="bi bi-arrow-right" />
              </div>
            </div>

            <div className="reward-visual">
              <div className="reward-glow" />

              <div className="reward-card-visual main-reward">
                <i className="bi bi-gift-fill" />
                <span>REDEEM</span>
                <strong>V</strong>
              </div>

              <div className="reward-mini-card mini-google">
                <i className="bi bi-google-play" />
                <span>Google Play</span>
              </div>

              <div className="reward-mini-card mini-steam">
                <i className="bi bi-steam" />
                <span>Steam</span>
              </div>

              <div className="reward-mini-card mini-paypal">
                <i className="bi bi-paypal" />
                <span>PayPal</span>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 2 */}
        <section className="rewards-vault">
          <div className="container">

            <div className="rewards-vault-head">
              <div>
                <span className="eyebrow">AVAILABLE NOW</span>
                <h2>Choose Your Reward</h2>
              </div>

              <span className="vault-balance">
                <i className="bi bi-coin" />
                12,450 VC
              </span>
            </div>

            <div className="reward-vault-grid">

              {rewards.map((r, i) => (
                <article className="vault-card" key={r[1]}>

                  <div className="vault-card-top">
                    <span className="vault-icon">
                      <i className={'bi ' + r[0]} />
                    </span>

                    <span className="available">
                      AVAILABLE
                    </span>
                  </div>

                  <h3>{r[1]}</h3>

                  <p>
                    Redeem your VCoins for instant digital credit.
                  </p>

                  <div className="vault-price">
                    <strong>
                      {i === 0 ? '500' : i === 1 ? '1,000' : '1,000'} VC
                    </strong>
                    <span>{r[2]}</span>
                  </div>

                  <button>
                    Redeem Reward
                    <i className="bi bi-arrow-right" />
                  </button>

                </article>
              ))}

            </div>

          </div>
        </section>

      </div>
    );
  }


  /* =========================
     🏆 LEADERBOARD PAGE
  ========================= */
  if (page === 'leaderboard') {
    const players = [
      ['GamerX_99', '12,450', '+2'],
      ['PixelPrincess', '11,230', '+1'],
      ['ShadowKing', '10,870', '-1'],
      ['NovaPlayer', '9,640', '+3'],
      ['Shifa_Aamir', '8,950', '+5']
    ];

    return (
      <div className="leaderboard-page">

        {/* SECTION 1 */}
        <section className="podium-section">
          <div className="container">

            <div className="podium-heading">
              <span className="eyebrow">🏆 COMPETE & WIN</span>
              <h1>
                The Best Players
                <br />
                <em>Rise To The Top.</em>
              </h1>
              <p>
                Climb the rankings, beat your rivals and earn
                exclusive weekly rewards.
              </p>
            </div>

            <div className="podium">

              <div className="podium-player second">
                <div className="podium-avatar">P</div>
                <span className="podium-medal">2</span>
                <h3>PixelPrincess</h3>
                <strong>11,230 <small>VC</small></strong>
                <div className="podium-block">
                  <b>02</b>
                </div>
              </div>

              <div className="podium-player first">
                <div className="crown">
                  <i className="bi bi-award-fill" />
                </div>
                <div className="podium-avatar">G</div>
                <span className="podium-medal">1</span>
                <h3>GamerX_99</h3>
                <strong>12,450 <small>VC</small></strong>
                <div className="podium-block">
                  <b>01</b>
                </div>
              </div>

              <div className="podium-player third">
                <div className="podium-avatar">S</div>
                <span className="podium-medal">3</span>
                <h3>ShadowKing</h3>
                <strong>10,870 <small>VC</small></strong>
                <div className="podium-block">
                  <b>03</b>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* SECTION 2 */}
        <section className="ranking-section">
          <div className="container">

            <div className="ranking-head">
              <div>
                <span className="eyebrow">WEEKLY RANKINGS</span>
                <h2>Player Rankings</h2>
              </div>

              <div className="ranking-period">
                <button className="active">This Week</button>
                <button>This Month</button>
                <button>All Time</button>
              </div>
            </div>

            <div className="ranking-table">

              <div className="ranking-table-head">
                <span>RANK</span>
                <span>PLAYER</span>
                <span>VCOINS</span>
                <span>MOVEMENT</span>
              </div>

              {players.map((p, i) => (
                <div
                  className={
                    'ranking-row ' + (i === 4 ? 'my-rank' : '')
                  }
                  key={p[0]}
                >
                  <strong className="rank-number">
                    {String(i + 1).padStart(2, '0')}
                  </strong>

                  <div className="ranking-player">
                    <span>{p[0][0]}</span>
                    <div>
                      <strong>{p[0]}</strong>
                      {i === 4 && <small>YOU</small>}
                    </div>
                  </div>

                  <strong>{p[1]} <small>VC</small></strong>

                  <span className={
                    p[2].startsWith('-')
                      ? 'rank-down'
                      : 'rank-up'
                  }>
                    <i className={
                      p[2].startsWith('-')
                        ? 'bi bi-arrow-down'
                        : 'bi bi-arrow-up'
                    } />
                    {p[2].replace('+', '')}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </section>

      </div>
    );
  }


  /* =========================
     🏟️ EVENTS PAGE
  ========================= */
  if (page === 'events') {
    return (
      <div className="events-page">

        {/* SECTION 1 */}
        <section className="featured-event">

          <div className="featured-event-bg">
            <img
              src={trendingGames[1].img}
              alt="Featured gaming event"
            />
          </div>

          <div className="featured-event-overlay" />

          <div className="container featured-event-content">

            <div className="event-copy">
              <span className="event-live">
                <i className="bi bi-broadcast" />
                LIVE EVENT
              </span>

              <span className="eyebrow">
                🏟️ SUMMER GAMING FEST
              </span>

              <h1>
                Battle.
                <br />
                <em>Compete. Win.</em>
              </h1>

              <p>
                Join thousands of players in VELOOP's biggest
                gaming event and compete for exclusive rewards.
              </p>

              <div className="event-countdown">
                <div>
                  <strong>02</strong>
                  <small>DAYS</small>
                </div>
                <span>:</span>
                <div>
                  <strong>14</strong>
                  <small>HOURS</small>
                </div>
                <span>:</span>
                <div>
                  <strong>36</strong>
                  <small>MINS</small>
                </div>
              </div>

              <button className="btn btn-primary">
                Join Event
                <i className="bi bi-arrow-right" />
              </button>
            </div>

            <div className="event-prize">
              <span>PRIZE POOL</span>
              <strong>50,000</strong>
              <small>VCoins</small>

              <div className="prize-icon">
                <i className="bi bi-trophy-fill" />
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 2 */}
        <section className="event-timeline">
          <div className="container">

            <div className="event-timeline-head">
              <div>
                <span className="eyebrow">WHAT'S HAPPENING</span>
                <h2>Upcoming Events</h2>
                <p>
                  Don't miss the next challenge.
                </p>
              </div>

              <span className="events-count">
                04 EVENTS
              </span>
            </div>

            <div className="event-list">

              {[
                ['15', 'JUL', 'Summer Gaming Fest', '50,000 VC', 'LIVE'],
                ['20', 'JUL', 'Weekend Tournament', '25,000 VC', 'UPCOMING'],
                ['27', 'JUL', 'VCoins Rush', '10,000 VC', 'UPCOMING'],
                ['02', 'AUG', 'Community Challenge', '15,000 VC', 'UPCOMING']
              ].map((e, i) => (
                <article className="event-row" key={e[2]}>

                  <div className="event-date">
                    <strong>{e[0]}</strong>
                    <span>{e[1]}</span>
                  </div>

                  <div className="event-line">
                    <span />
                  </div>

                  <div className="event-row-info">
                    <span>{e[4]}</span>
                    <h3>{e[2]}</h3>
                    <p>
                      Compete with other gamers and earn rewards.
                    </p>
                  </div>

                  <div className="event-row-prize">
                    <small>PRIZE</small>
                    <strong>{e[3]}</strong>
                  </div>

                  <button>
                    View Event
                    <i className="bi bi-arrow-right" />
                  </button>

                </article>
              ))}

            </div>

          </div>
        </section>

      </div>
    );
  }

  return null;
}

function RobloxMiniGame({ onClose }) {
  const [player, setPlayer] = useState({ x: 50, y: 82 });
  const [coins, setCoins] = useState([
    { id: 1, x: 18, y: 68 },
    { id: 2, x: 38, y: 48 },
    { id: 3, x: 58, y: 68 },
    { id: 4, x: 78, y: 42 },
    { id: 5, x: 88, y: 72 },
  ]);

  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [gameStatus, setGameStatus] = useState('playing');

  const obstacles = [
    { x: 28, y: 72, w: 15, h: 7 },
    { x: 48, y: 52, w: 16, h: 7 },
    { x: 70, y: 68, w: 13, h: 7 },
  ];

  const movePlayer = (dx, dy) => {
    if (gameStatus !== 'playing') return;

    setPlayer(prev => {
      const newX = Math.max(5, Math.min(95, prev.x + dx));
      const newY = Math.max(8, Math.min(88, prev.y + dy));

      return { x: newX, y: newY };
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') {
        movePlayer(-4, 0);
      }

      if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') {
        movePlayer(4, 0);
      }

      if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') {
        movePlayer(0, -4);
      }

      if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') {
        movePlayer(0, 4);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameStatus]);

  useEffect(() => {
    if (gameStatus !== 'playing') return;

    const timer = setInterval(() => {
      setTime(prev => {
        if (prev <= 1) {
          setGameStatus('gameover');
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStatus]);

  useEffect(() => {
    if (gameStatus !== 'playing') return;

    setCoins(prevCoins => {
      const remaining = prevCoins.filter(coin => {
        const distance = Math.sqrt(
          Math.pow(player.x - coin.x, 2) +
          Math.pow(player.y - coin.y, 2)
        );

        if (distance < 6) {
          setScore(prev => prev + 100);
          return false;
        }

        return true;
      });

      return remaining;
    });
  }, [player, gameStatus]);

  useEffect(() => {
    if (coins.length === 0 && gameStatus === 'playing') {
      setGameStatus('won');
    }
  }, [coins, gameStatus]);

  const restartGame = () => {
    setPlayer({ x: 50, y: 82 });

    setCoins([
      { id: 1, x: 18, y: 68 },
      { id: 2, x: 38, y: 48 },
      { id: 3, x: 58, y: 68 },
      { id: 4, x: 78, y: 42 },
      { id: 5, x: 88, y: 72 },
    ]);

    setLives(3);
    setScore(0);
    setTime(60);
    setGameStatus('playing');
  };

  return (
    <div className="roblox-game-overlay">
      <div className="roblox-game">

        <div className="game-header">
          <div>
            <span className="game-label">VELOOP ADVENTURE</span>
            <h2>Coin Quest</h2>
          </div>

          <button className="game-close-btn" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="game-stats">
          <div>
            <i className="bi bi-coin"></i>
            <span>Score: {score}</span>
          </div>

          <div>
            <i className="bi bi-heart-fill"></i>
            <span>Lives: {lives}</span>
          </div>

          <div>
            <i className="bi bi-stopwatch-fill"></i>
            <span>Time: {time}s</span>
          </div>
        </div>

        <div className="roblox-world">

          <div className="game-sky"></div>

          <div className="game-cloud cloud-one"></div>
          <div className="game-cloud cloud-two"></div>

          <div className="game-ground"></div>

          {obstacles.map((obstacle, index) => (
            <div
              key={index}
              className="game-obstacle"
              style={{
                left: `${obstacle.x}%`,
                bottom: `${obstacle.y}%`,
                width: `${obstacle.w}%`,
                height: `${obstacle.h}%`
              }}
            >
              <span></span>
            </div>
          ))}

          {coins.map(coin => (
            <div
              key={coin.id}
              className="game-coin"
              style={{
                left: `${coin.x}%`,
                bottom: `${coin.y}%`
              }}
            >
              <i className="bi bi-coin"></i>
            </div>
          ))}

          <div className="finish-zone">
            <span>FINISH</span>
          </div>

          <div
            className="game-player"
            style={{
              left: `${player.x}%`,
              bottom: `${player.y}%`
            }}
          >
            <div className="player-head"></div>
            <div className="player-body"></div>
            <div className="player-leg left"></div>
            <div className="player-leg right"></div>
          </div>

          {gameStatus !== 'playing' && (
            <div className="game-result">

              {gameStatus === 'won' ? (
                <>
                  <div className="result-icon win">
                    <i className="bi bi-trophy-fill"></i>
                  </div>

                  <h2>YOU WON! 🎉</h2>

                  <p>
                    Amazing! You collected all the coins.
                  </p>

                  <div className="final-score">
                    +{score} VCoins
                  </div>
                </>
              ) : (
                <>
                  <div className="result-icon lose">
                    <i className="bi bi-controller"></i>
                  </div>

                  <h2>GAME OVER</h2>

                  <p>
                    Time's up! Try the adventure again.
                  </p>

                  <div className="final-score">
                    Score: {score}
                  </div>
                </>
              )}

              <div className="result-buttons">
                <button onClick={restartGame}>
                  <i className="bi bi-arrow-repeat"></i>
                  Play Again
                </button>

                <button onClick={onClose} className="secondary">
                  Back to Games
                </button>
              </div>

            </div>
          )}
        </div>

        <div className="game-controls">
          <div className="control-info">
            <strong>HOW TO PLAY</strong>
            <span>Collect every coin before time runs out!</span>
          </div>

          <div className="keyboard-controls">
            <div className="key-row">
              <button onClick={() => movePlayer(0, -4)}>↑</button>
            </div>

            <div className="key-row">
              <button onClick={() => movePlayer(-4, 0)}>←</button>
              <button onClick={() => movePlayer(0, 4)}>↓</button>
              <button onClick={() => movePlayer(4, 0)}>→</button>
            </div>
          </div>

          <div className="keyboard-text">
            Use <b>W A S D</b> or <b>Arrow Keys</b>
          </div>
        </div>

      </div>
    </div>
  );
}


function FreeFireMiniGame({ onClose }) {
  const [playerHP, setPlayerHP] = useState(100);
  const [ammo, setAmmo] = useState(12);
  const [score, setScore] = useState(0);
  const [kills, setKills] = useState(0);
  const [time, setTime] = useState(60);
  const [reloading, setReloading] = useState(false);
  const [status, setStatus] = useState('playing');

  const [enemies, setEnemies] = useState([
    { id: 1, x: 18, y: 30, hp: 2 },
    { id: 2, x: 70, y: 25, hp: 2 },
    { id: 3, x: 42, y: 55, hp: 2 },
  ]);

  const [hitId, setHitId] = useState(null);

  useEffect(() => {
    if (status !== 'playing') return;

    const timer = setInterval(() => {
      setTime(prev => {
        if (prev <= 1) {
          setStatus('won');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [status]);

  useEffect(() => {
    if (status !== 'playing') return;

    const enemyAttack = setInterval(() => {
      setPlayerHP(prev => {
        const damage = Math.floor(Math.random() * 9) + 4;
        const newHP = Math.max(0, prev - damage);

        if (newHP <= 0) {
          setStatus('gameover');
        }

        return newHP;
      });
    }, 2500);

    return () => clearInterval(enemyAttack);
  }, [status]);

  const shoot = (enemyId) => {
    if (status !== 'playing' || reloading || ammo <= 0) return;

    setAmmo(prev => prev - 1);
    setHitId(enemyId);

    setTimeout(() => {
      setHitId(null);
    }, 180);

    setEnemies(prev =>
      prev
        .map(enemy => {
          if (enemy.id !== enemyId) return enemy;

          const newHP = enemy.hp - 1;

          if (newHP <= 0) {
            setKills(k => k + 1);
            setScore(s => s + 100);
          }

          return {
            ...enemy,
            hp: newHP,
          };
        })
        .filter(enemy => enemy.hp > 0)
    );
  };

  useEffect(() => {
    if (enemies.length === 0 && status === 'playing') {
      setStatus('won');
    }
  }, [enemies, status]);

  const reload = () => {
    if (reloading || ammo === 12 || status !== 'playing') return;

    setReloading(true);

    setTimeout(() => {
      setAmmo(12);
      setReloading(false);
    }, 1200);
  };

  const restartGame = () => {
    setPlayerHP(100);
    setAmmo(12);
    setScore(0);
    setKills(0);
    setTime(60);
    setReloading(false);
    setStatus('playing');

    setEnemies([
      { id: 1, x: 18, y: 30, hp: 2 },
      { id: 2, x: 70, y: 25, hp: 2 },
      { id: 3, x: 42, y: 55, hp: 2 },
    ]);
  };

  return (
    <div className="freefire-overlay">
      <div className="freefire-game">

        {/* TOP BAR */}
        <div className="ff-topbar">

          <div className="ff-brand">
            <span>VELOOP</span>
            <strong>BATTLE ZONE</strong>
          </div>

          <div className="ff-stats">

            <div className="ff-stat">
              <i className="bi bi-crosshair"></i>
              <span>{kills} KILLS</span>
            </div>

            <div className="ff-stat">
              <i className="bi bi-trophy-fill"></i>
              <span>{score}</span>
            </div>

            <div className="ff-stat timer">
              <i className="bi bi-stopwatch-fill"></i>
              <span>{time}s</span>
            </div>

          </div>

          <button className="ff-close" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>

        </div>

        {/* BATTLEFIELD */}
        <div className="ff-battlefield">

          <div className="ff-sky"></div>

          <div className="ff-mountain mountain-one"></div>
          <div className="ff-mountain mountain-two"></div>

          <div className="ff-ground"></div>

          {/* COVER */}
          <div className="ff-cover cover-one"></div>
          <div className="ff-cover cover-two"></div>
          <div className="ff-cover cover-three"></div>

          {/* ENEMIES */}
          {enemies.map(enemy => (
            <button
              key={enemy.id}
              className={`ff-enemy ${hitId === enemy.id ? 'enemy-hit' : ''
                }`}
              style={{
                left: `${enemy.x}%`,
                top: `${enemy.y}%`
              }}
              onClick={() => shoot(enemy.id)}
            >
              <div className="enemy-health">
                <span
                  style={{
                    width: `${enemy.hp * 50}%`
                  }}
                ></span>
              </div>

              <div className="enemy-head"></div>
              <div className="enemy-body"></div>
              <div className="enemy-leg left"></div>
              <div className="enemy-leg right"></div>

              <div className="enemy-name">
                ENEMY
              </div>
            </button>
          ))}

          {/* PLAYER */}
          <div className="ff-player">

            <div className="player-gun">
              <span></span>
            </div>

            <div className="ff-player-head"></div>
            <div className="ff-player-body"></div>

            <div className="ff-player-leg left"></div>
            <div className="ff-player-leg right"></div>

          </div>

          {/* CROSSHAIR */}
          <div className="ff-crosshair">
            <span></span>
          </div>

          {/* RESULT */}
          {status !== 'playing' && (
            <div className="ff-result">

              <div className="ff-result-icon">
                <i
                  className={
                    status === 'won'
                      ? 'bi bi-trophy-fill'
                      : 'bi bi-skull-fill'
                  }
                ></i>
              </div>

              <h2>
                {status === 'won'
                  ? 'MISSION COMPLETE!'
                  : 'YOU WERE ELIMINATED'}
              </h2>

              <p>
                {status === 'won'
                  ? 'Excellent shooting! You cleared the battlefield.'
                  : 'The enemy got you. Jump back into battle!'}
              </p>

              <div className="ff-final-stats">
                <div>
                  <strong>{kills}</strong>
                  <span>KILLS</span>
                </div>

                <div>
                  <strong>{score}</strong>
                  <span>SCORE</span>
                </div>
              </div>

              <div className="ff-result-buttons">

                <button onClick={restartGame}>
                  <i className="bi bi-arrow-repeat"></i>
                  PLAY AGAIN
                </button>

                <button
                  className="back"
                  onClick={onClose}
                >
                  BACK TO GAMES
                </button>

              </div>

            </div>
          )}

        </div>

        {/* BOTTOM HUD */}
        <div className="ff-hud">

          <div className="ff-health">

            <div className="health-title">
              <i className="bi bi-heart-fill"></i>
              HEALTH
            </div>

            <div className="health-bar">
              <span
                style={{
                  width: `${playerHP}%`
                }}
              ></span>
            </div>

            <strong>{playerHP}</strong>

          </div>

          <div className="ff-ammo">

            <div className="ammo-number">
              {reloading ? '...' : ammo}
              <small>/ 12</small>
            </div>

            <button
              className="reload-btn"
              onClick={reload}
              disabled={reloading || ammo === 12}
            >
              <i className="bi bi-arrow-clockwise"></i>
              {reloading ? 'RELOADING' : 'RELOAD'}
            </button>

          </div>

          <button
            className="shoot-btn"
            onClick={() => {
              if (enemies.length > 0) {
                shoot(enemies[0].id);
              }
            }}
          >
            <i className="bi bi-crosshair"></i>
            FIRE
          </button>

        </div>

        <div className="ff-instructions">
          <i className="bi bi-mouse"></i>
          Click an enemy to aim & shoot
          <span>•</span>
          Eliminate all enemies before time runs out
        </div>

      </div>
    </div>
  );
}


function DiamondRushMiniGame({ onClose }) {
  const [time, setTime] = useState(30);
  const [score, setScore] = useState(0);
  const [diamonds, setDiamonds] = useState(0);
  const [combo, setCombo] = useState(0);
  const [status, setStatus] = useState('playing');
  const [message, setMessage] = useState('');
  const [blocks, setBlocks] = useState([]);

  const createBlocks = () => {
    const types = ['stone', 'stone', 'stone', 'diamond', 'tnt'];

    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      type: types[Math.floor(Math.random() * types.length)],
      broken: false
    }));
  };

  useEffect(() => {
    setBlocks(createBlocks());
  }, []);

  useEffect(() => {
    if (status !== 'playing') return;

    const timer = setInterval(() => {
      setTime(prev => {
        if (prev <= 1) {
          setStatus('won');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [status]);

  const mineBlock = (id) => {
    if (status !== 'playing') return;

    const block = blocks.find(b => b.id === id);

    if (!block || block.broken) return;

    setBlocks(prev =>
      prev.map(b =>
        b.id === id ? { ...b, broken: true } : b
      )
    );

    if (block.type === 'diamond') {
      const newCombo = combo + 1;

      let multiplier = 1;

      if (newCombo >= 7) multiplier = 4;
      else if (newCombo >= 4) multiplier = 3;
      else if (newCombo >= 2) multiplier = 2;

      const points = 50 * multiplier;

      setScore(prev => prev + points);
      setDiamonds(prev => prev + 1);
      setCombo(newCombo);

      setMessage(
        multiplier > 1
          ? `💎 DIAMOND! ${multiplier}X COMBO +${points}`
          : `💎 DIAMOND +${points}`
      );
    }

    if (block.type === 'stone') {
      setCombo(0);
      setScore(prev => prev + 5);
      setMessage('🪨 Stone +5');
    }

    if (block.type === 'tnt') {
      setCombo(0);
      setScore(prev => Math.max(0, prev - 20));
      setMessage('💣 TNT! -20');

      document.querySelector('.diamond-rush-game')
        ?.classList.add('tnt-shake');

      setTimeout(() => {
        document.querySelector('.diamond-rush-game')
          ?.classList.remove('tnt-shake');
      }, 350);
    }

    setTimeout(() => {
      setMessage('');
    }, 900);

    setTimeout(() => {
      setBlocks(prev =>
        prev.map(b =>
          b.id === id
            ? {
              ...b,
              broken: false,
              type: ['stone', 'stone', 'diamond', 'tnt'][
                Math.floor(Math.random() * 4)
              ]
            }
            : b
        )
      );
    }, 450);
  };

  const restartGame = () => {
    setTime(30);
    setScore(0);
    setDiamonds(0);
    setCombo(0);
    setMessage('');
    setStatus('playing');
    setBlocks(createBlocks());
  };

  return (
    <div className="diamond-rush-overlay">
      <div className="diamond-rush-game">

        {/* TOP BAR */}
        <div className="dr-topbar">

          <div className="dr-title">
            <span>⛏️</span>
            <div>
              <strong>DIAMOND RUSH</strong>
              <small>MINE SMART • SCORE BIG</small>
            </div>
          </div>

          <div className="dr-stats">

            <div className="dr-stat">
              <span>💎</span>
              <strong>{diamonds}</strong>
              <small>DIAMONDS</small>
            </div>

            <div className="dr-stat">
              <span>🏆</span>
              <strong>{score}</strong>
              <small>SCORE</small>
            </div>

            <div className={`dr-stat timer ${time <= 5 ? 'danger' : ''}`}>
              <span>⏱️</span>
              <strong>{time}s</strong>
              <small>TIME</small>
            </div>

          </div>

          <button className="dr-close" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>

        </div>

        {/* GAME AREA */}
        <div className="dr-mine">

          <div className="dr-mine-header">
            <div>
              <span>MINING ZONE</span>
              <strong>FIND THE DIAMONDS!</strong>
            </div>

            {combo >= 2 && (
              <div className="dr-combo">
                🔥 {combo}X COMBO
              </div>
            )}
          </div>

          {/* BLOCKS */}
          <div className="dr-block-grid">

            {blocks.map(block => (
              <button
                key={block.id}
                className={`dr-block ${block.type} ${block.broken ? 'broken' : ''
                  }`}
                onClick={() => mineBlock(block.id)}
              >
                {!block.broken && (
                  <>
                    {block.type === 'stone' && (
                      <>
                        <span className="block-crack">╱╲</span>
                        <span className="block-icon">🪨</span>
                      </>
                    )}

                    {block.type === 'diamond' && (
                      <>
                        <span className="block-spark">✦</span>
                        <span className="block-icon">💎</span>
                      </>
                    )}

                    {block.type === 'tnt' && (
                      <>
                        <span className="block-icon">💣</span>
                        <span className="tnt-label">TNT</span>
                      </>
                    )}
                  </>
                )}
              </button>
            ))}

          </div>

          {message && (
            <div className="dr-message">
              {message}
            </div>
          )}

          <div className="dr-tip">
            ⛏️ Click blocks to mine
            <span>•</span>
            💎 Find diamonds
            <span>•</span>
            💣 Avoid TNT
          </div>

          {/* RESULT */}
          {status !== 'playing' && (
            <div className="dr-result">

              <div className="dr-result-icon">
                💎
              </div>

              <h2>DIAMOND RUSH COMPLETE!</h2>

              <p>
                Great mining! Let's see what you collected.
              </p>

              <div className="dr-final-stats">

                <div>
                  <strong>{score}</strong>
                  <span>SCORE</span>
                </div>

                <div>
                  <strong>{diamonds}</strong>
                  <span>DIAMONDS</span>
                </div>

                <div>
                  <strong>{combo}X</strong>
                  <span>BEST COMBO</span>
                </div>

              </div>

              <div className="dr-result-buttons">

                <button onClick={restartGame}>
                  <i className="bi bi-arrow-repeat"></i>
                  PLAY AGAIN
                </button>

                <button
                  className="back"
                  onClick={onClose}
                >
                  BACK TO GAMES
                </button>

              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}


function AngryBirdsMiniGame({ onClose }) {
  const [score, setScore] = useState(0);
  const [shots, setShots] = useState(3);
  const [pigs, setPigs] = useState([
    { id: 1, x: 72, y: 35, type: 'normal', alive: true },
    { id: 2, x: 82, y: 48, type: 'normal', alive: true },
    { id: 3, x: 72, y: 61, type: 'gold', alive: true },
  ]);

  const [bird, setBird] = useState('red');
  const [message, setMessage] = useState('');
  const [launched, setLaunched] = useState(false);
  const [status, setStatus] = useState('playing');

  const [power, setPower] = useState(50);

  const remainingPigs = pigs.filter(pig => pig.alive).length;

  const launchBird = () => {
    if (launched || shots <= 0 || status !== 'playing') return;

    setLaunched(true);
    setShots(prev => prev - 1);

    setTimeout(() => {
      const alivePigs = pigs.filter(pig => pig.alive);

      if (alivePigs.length === 0) return;

      const target = alivePigs[Math.floor(Math.random() * alivePigs.length)];

      let points = target.type === 'gold' ? 500 : 100;

      if (bird === 'bomb') {
        points += 100;

        setPigs(prev =>
          prev.map(pig =>
            Math.abs(pig.x - target.x) < 15
              ? { ...pig, alive: false }
              : pig
          )
        );

        setMessage('💥 BOOM! CHAIN REACTION!');
      } else {
        setPigs(prev =>
          prev.map(pig =>
            pig.id === target.id
              ? { ...pig, alive: false }
              : pig
          )
        );

        if (target.type === 'gold') {
          setMessage('👑 GOLDEN PIG! +500');
        } else if (bird === 'yellow') {
          points += 50;
          setMessage('⚡ SPEED HIT! +150');
        } else {
          setMessage('🎯 DIRECT HIT! +100');
        }
      }

      setScore(prev => prev + points);

      setTimeout(() => {
        setLaunched(false);
        setMessage('');
        setBird('red');
      }, 900);
    }, 650);
  };

  useEffect(() => {
    if (remainingPigs === 0 && status === 'playing') {
      setTimeout(() => setStatus('won'), 500);
    } else if (shots === 0 && remainingPigs > 0) {
      setTimeout(() => setStatus('lost'), 800);
    }
  }, [remainingPigs, shots, status]);

  const restartGame = () => {
    setScore(0);
    setShots(3);
    setBird('red');
    setMessage('');
    setLaunched(false);
    setPower(50);
    setStatus('playing');

    setPigs([
      { id: 1, x: 72, y: 35, type: 'normal', alive: true },
      { id: 2, x: 82, y: 48, type: 'normal', alive: true },
      { id: 3, x: 72, y: 61, type: 'gold', alive: true },
    ]);
  };

  return (
    <div className="angry-overlay">
      <div className="angry-game">

        {/* TOP BAR */}
        <div className="angry-topbar">

          <div className="angry-brand">
            <span>🐦</span>
            <div>
              <strong>PIGGY SMASH</strong>
              <small>ONE SHOT CHALLENGE</small>
            </div>
          </div>

          <div className="angry-stats">

            <div>
              <span>🏆</span>
              <strong>{score}</strong>
              <small>SCORE</small>
            </div>

            <div>
              <span>🐷</span>
              <strong>{remainingPigs}</strong>
              <small>PIGS LEFT</small>
            </div>

            <div>
              <span>🐦</span>
              <strong>{shots}</strong>
              <small>SHOTS</small>
            </div>

          </div>

          <button className="angry-close" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>

        </div>

        {/* BATTLEFIELD */}
        <div className="angry-field">

          <div className="angry-cloud cloud-one"></div>
          <div className="angry-cloud cloud-two"></div>

          <div className="angry-mountain"></div>

          {/* WOOD STRUCTURES */}
          <div className="wood-block wood-one"></div>
          <div className="wood-block wood-two"></div>
          <div className="wood-block wood-three"></div>
          <div className="wood-block wood-four"></div>

          {/* PIGS */}
          {pigs.map(pig =>
            pig.alive ? (
              <button
                key={pig.id}
                className={`angry-pig ${
                  pig.type === 'gold' ? 'gold-pig' : ''
                }`}
                style={{
                  left: `${pig.x}%`,
                  top: `${pig.y}%`
                }}
              >
                <span className="pig-face">🐷</span>

                {pig.type === 'gold' && (
                  <span className="gold-crown">👑</span>
                )}
              </button>
            ) : null
          )}

          {/* SLINGSHOT */}
          <div className="slingshot">

            <div className="slingshot-stick left-stick"></div>
            <div className="slingshot-stick right-stick"></div>

            {!launched && (
              <div
                className={`angry-bird bird-${bird}`}
                onClick={launchBird}
              >
                {bird === 'red' && '🔴'}
                {bird === 'yellow' && '🟡'}
                {bird === 'bomb' && '⚫'}
              </div>
            )}

          </div>

          {/* AIM LINE */}
          {!launched && (
            <div
              className="aim-line"
              style={{
                width: `${power * 2}px`
              }}
            ></div>
          )}

          {/* FLYING BIRD */}
          {launched && (
            <div className="flying-bird">
              {bird === 'red' && '🔴'}
              {bird === 'yellow' && '🟡'}
              {bird === 'bomb' && '⚫'}
            </div>
          )}

          {/* MESSAGE */}
          {message && (
            <div className="angry-message">
              {message}
            </div>
          )}

          {/* RESULT */}
          {status !== 'playing' && (
            <div className="angry-result">

              <div className="result-bird">
                {status === 'won' ? '🏆' : '💥'}
              </div>

              <h2>
                {status === 'won'
                  ? 'PERFECT SMASH!'
                  : 'OUT OF BIRDS!'}
              </h2>

              <p>
                {status === 'won'
                  ? 'You destroyed every pig!'
                  : 'The pigs survived this round.'}
              </p>

              <div className="angry-final-stats">

                <div>
                  <strong>{score}</strong>
                  <span>SCORE</span>
                </div>

                <div>
                  <strong>{3 - shots}</strong>
                  <span>BIRDS USED</span>
                </div>

                <div>
                  <strong>{3 - remainingPigs}</strong>
                  <span>PIGS HIT</span>
                </div>

              </div>

              <div className="angry-buttons">

                <button onClick={restartGame}>
                  <i className="bi bi-arrow-repeat"></i>
                  PLAY AGAIN
                </button>

                <button
                  className="angry-back"
                  onClick={onClose}
                >
                  BACK TO GAMES
                </button>

              </div>

            </div>
          )}

        </div>

        {/* CONTROLS */}
        <div className="angry-controls">

          <div className="bird-selector">

            <span>CHOOSE YOUR BIRD</span>

            <button
              className={bird === 'red' ? 'selected' : ''}
              onClick={() => setBird('red')}
              disabled={launched}
            >
              🔴 RED
            </button>

            <button
              className={bird === 'yellow' ? 'selected' : ''}
              onClick={() => setBird('yellow')}
              disabled={launched}
            >
              🟡 SPEED
            </button>

            <button
              className={bird === 'bomb' ? 'selected' : ''}
              onClick={() => setBird('bomb')}
              disabled={launched}
            >
              ⚫ BOMB
            </button>

          </div>

          <button
            className="launch-btn"
            onClick={launchBird}
            disabled={launched || shots <= 0}
          >
            <i className="bi bi-send-fill"></i>
            LAUNCH!
          </button>

        </div>

      </div>
    </div>
  );
}



function SubwaySurfersMiniGame({ onClose }) {
  const [lane, setLane] = useState(1);
  const [time, setTime] = useState(30);
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState(0);
  const [chips, setChips] = useState(0);
  const [combo, setCombo] = useState(0);
  const [rush, setRush] = useState(0);
  const [shield, setShield] = useState(false);
  const [status, setStatus] = useState('playing');
  const [message, setMessage] = useState('');
  const [objects, setObjects] = useState([]);

  const createObjects = () => {
    const types = ['coin', 'coin', 'coin', 'chip', 'train', 'shield'];

    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      lane: Math.floor(Math.random() * 3),
      type: types[Math.floor(Math.random() * types.length)],
      top: -10 - Math.random() * 80
    }));
  };

  useEffect(() => {
    setObjects(createObjects());
  }, []);

  // TIMER
  useEffect(() => {
    if (status !== 'playing') return;

    const timer = setInterval(() => {
      setTime(prev => {
        if (prev <= 1) {
          setStatus('won');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [status]);

  // OBJECT MOVEMENT
  useEffect(() => {
    if (status !== 'playing') return;

    const movement = setInterval(() => {
      setObjects(prev =>
        prev.map(obj => {
          const newTop = obj.top + (rush >= 100 ? 4 : 2.5);

          if (newTop > 100) {
            return {
              ...obj,
              lane: Math.floor(Math.random() * 3),
              type: ['coin', 'coin', 'coin', 'chip', 'train', 'shield'][
                Math.floor(Math.random() * 6)
              ],
              top: -10
            };
          }

          return { ...obj, top: newTop };
        })
      );
    }, 80);

    return () => clearInterval(movement);
  }, [status, rush]);

  // COLLISION CHECK
  useEffect(() => {
    if (status !== 'playing') return;

    const collision = setInterval(() => {
      setObjects(prev =>
        prev.map(obj => {
          if (
            obj.lane === lane &&
            obj.top > 78 &&
            obj.top < 94
          ) {
            if (obj.type === 'coin') {
              collectCoin(obj);
              return { ...obj, top: -20 };
            }

            if (obj.type === 'chip') {
              collectChip(obj);
              return { ...obj, top: -20 };
            }

            if (obj.type === 'shield') {
              collectShield(obj);
              return { ...obj, top: -20 };
            }

            if (obj.type === 'train') {
              if (shield) {
                setShield(false);
                showMessage('🛡️ SHIELD SAVED YOU!');
                return { ...obj, top: -20 };
              }

              setStatus('lost');
            }
          }

          return obj;
        })
      );
    }, 100);

    return () => clearInterval(collision);
  }, [lane, shield, status]);

  const showMessage = text => {
    setMessage(text);
    setTimeout(() => setMessage(''), 700);
  };

  const collectCoin = () => {
    const newCombo = combo + 1;
    const multiplier = newCombo >= 5 ? 2 : 1;

    setCoins(prev => prev + 1);
    setCombo(newCombo);
    setScore(prev => prev + 10 * multiplier);

    setRush(prev => Math.min(100, prev + 12));

    if (newCombo >= 5) {
      showMessage('🔥 COMBO x2!');
    } else {
      showMessage('🪙 +10');
    }
  };

  const collectChip = () => {
    setChips(prev => prev + 1);
    setScore(prev => prev + 50);
    setRush(prev => Math.min(100, prev + 20));
    showMessage('💎 ENERGY CHIP +50');
  };

  const collectShield = () => {
    setShield(true);
    setScore(prev => prev + 25);
    showMessage('🛡️ SHIELD READY!');
  };

  const moveLeft = () => {
    if (status !== 'playing') return;
    setLane(prev => Math.max(0, prev - 1));
  };

  const moveRight = () => {
    if (status !== 'playing') return;
    setLane(prev => Math.min(2, prev + 1));
  };

  const activateRush = () => {
    if (rush < 100 || status !== 'playing') return;

    setRush(0);
    setScore(prev => prev + 200);
    showMessage('⚡ MEGA METRO RUSH! x2 SCORE!');
  };

  const restartGame = () => {
    setLane(1);
    setTime(30);
    setScore(0);
    setCoins(0);
    setChips(0);
    setCombo(0);
    setRush(0);
    setShield(false);
    setMessage('');
    setStatus('playing');
    setObjects(createObjects());
  };

  useEffect(() => {
    const handleKey = e => {
      if (e.key === 'ArrowLeft') moveLeft();
      if (e.key === 'ArrowRight') moveRight();
      if (e.key === ' ') activateRush();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  return (
    <div className="subway-game">

      <div className="subway-topbar">
        <button className="game-back-btn" onClick={onClose}>
          <i className="bi bi-arrow-left"></i> Back
        </button>

        <div className="subway-title">
          <span>🏃</span>
          METRO HEIST RUSH
        </div>

        <div className="subway-time">
          ⏱️ {time}s
        </div>
      </div>

      <div className="subway-stats">
        <div>
          <small>SCORE</small>
          <strong>{score}</strong>
        </div>

        <div>
          <small>COINS</small>
          <strong>🪙 {coins}</strong>
        </div>

        <div>
          <small>CHIPS</small>
          <strong>💎 {chips}</strong>
        </div>

        <div>
          <small>COMBO</small>
          <strong>🔥 x{combo}</strong>
        </div>
      </div>

      <div className="rush-wrapper">
        <span>⚡ RUSH</span>
        <div className="rush-bar">
          <div style={{ width: `${rush}%` }}></div>
        </div>

        <button
          className={rush >= 100 ? 'rush-btn ready' : 'rush-btn'}
          onClick={activateRush}
          disabled={rush < 100}
        >
          {rush >= 100 ? 'MEGA RUSH!' : `${rush}%`}
        </button>
      </div>

      <div className={rush >= 100 ? 'subway-track mega-rush' : 'subway-track'}>

        <div className="subway-city">
          <div className="building b1"></div>
          <div className="building b2"></div>
          <div className="building b3"></div>
          <div className="building b4"></div>
        </div>

        <div className="rail rail-left"></div>
        <div className="rail rail-right"></div>

        {objects.map(obj => (
          <div
            key={obj.id}
            className={`subway-object ${obj.type}`}
            style={{
              left: `${obj.lane * 33.33 + 16.66}%`,
              top: `${obj.top}%`
            }}
          >
            {obj.type === 'coin' && '🪙'}
            {obj.type === 'chip' && '💎'}
            {obj.type === 'train' && '🚆'}
            {obj.type === 'shield' && '🛡️'}
          </div>
        ))}

        <div
          className="runner"
          style={{
            left: `${lane * 33.33 + 16.66}%`
          }}
        >
          🏃
        </div>

        <div className="lane-lines">
          <span></span>
          <span></span>
        </div>

        {message && (
          <div className="subway-message">
            {message}
          </div>
        )}

        {shield && (
          <div className="shield-indicator">
            🛡️ SHIELD ACTIVE
          </div>
        )}

        {status !== 'playing' && (
          <div className="subway-result">

            <div className="result-icon">
              {status === 'won' ? '🏆' : '💥'}
            </div>

            <h2>
              {status === 'won'
                ? 'METRO RUSH COMPLETE!'
                : 'TRAIN CRASHED!'}
            </h2>

            <div className="final-score">
              {score}
            </div>

            <div className="result-details">
              <span>🪙 {coins} Coins</span>
              <span>💎 {chips} Chips</span>
              <span>🔥 x{combo} Combo</span>
            </div>

            <button
              className="play-again-btn"
              onClick={restartGame}
            >
              <i className="bi bi-arrow-repeat"></i>
              PLAY AGAIN
            </button>

            <button
              className="result-back-btn"
              onClick={onClose}
            >
              BACK TO GAMES
            </button>

          </div>
        )}
      </div>

      <div className="subway-controls">

        <button onClick={moveLeft}>
          <i className="bi bi-arrow-left"></i>
        </button>

        <div className="control-info">
          <span>
            ⬅️ ➡️ Move
          </span>

          <span>
            SPACE = Rush
          </span>
        </div>

        <button onClick={moveRight}>
          <i className="bi bi-arrow-right"></i>
        </button>

      </div>

    </div>
  );
}




function Stat({ icon, title, value, change }) { return <div className="stat"><span className="stat-icon"><i className={'bi ' + icon} /></span><div><small>{title}</small><strong>{value}</strong><em>{change}</em></div></div> }
function Step({ n, icon, title, text }) { return <article className="step"><span className="step-number">{n}</span><span className="step-icon"><i className={'bi ' + icon} /></span><h3>{title}</h3><p>{text}</p><i className="bi bi-arrow-right step-arrow" /></article> }
createRoot(document.getElementById('root')).render(<App />);

