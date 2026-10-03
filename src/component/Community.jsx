import React from 'react'
import "../../css/Community.css"

function Community() {
  return (
    <>
    <header className="community-header">
    <div className="container">

        <div className="eyebrow">Talk Movies</div>

        <h1>Movie Community</h1>

        <p>
            Join thousands of film lovers debating plots, ranking
            performances, and trading recommendations.
        </p>

    </div>
</header>

<section className="container">
  <div className="community-stats">
    <div className="stat-box"><div className="num">184K</div><div className="label">Members</div></div>
    <div className="stat-box"><div className="num">42K</div><div className="label">Discussions</div></div>
    <div className="stat-box"><div className="num">96K</div><div className="label">Reviews Posted</div></div>
    <div className="stat-box"><div className="num">1.2M</div><div className="label">Comments</div></div>
  </div>
</section>

<section className="container">
  <div className="community-layout">

    
    <div>
      <div className="section-head" style={{marginBottom:"20px"}}>
        <div><h2 style={{fontSize:"26px"}}>Popular Discussions</h2></div>
      </div>

      <article className="discussion-card">
        <div className="discussion-top">
          <span className="tag">Dune: Part Two</span>
          <span>2 hours ago</span>
        </div>
        <h3>Was Paul's arc a tragedy or a triumph?</h3>
        <p>Villeneuve seems to frame the ending as a warning rather than a victory lap. Curious how others read that final act.</p>
        <div className="discussion-foot">
          <div className="stats-inline"><span><i className="fa-regular fa-comment"></i> 312 replies</span><span><i className="fa-regular fa-heart"></i> 890 likes</span></div>
          <a href="#" className="btn btn-ghost btn-sm">Join Discussion</a>
        </div>
      </article>

      <article className="discussion-card">
        <div className="discussion-top">
          <span className="tag">Oppenheimer</span>
          <span>5 hours ago</span>
        </div>
        <h3>The Trinity test scene — sound design breakdown</h3>
        <p>The delayed shockwave audio is one of the boldest choices in a blockbuster this decade. Let's talk about how it lands in theaters.</p>
        <div className="discussion-foot">
          <div className="stats-inline"><span><i className="fa-regular fa-comment"></i> 201 replies</span><span><i className="fa-regular fa-heart"></i> 654 likes</span></div>
          <a href="#" className="btn btn-ghost btn-sm">Join Discussion</a>
        </div>
      </article>

      <article className="discussion-card">
        <div className="discussion-top">
          <span className="tag">The Dark Knight</span>
          <span>1 day ago</span>
        </div>
        <h3>Ranking Nolan's villains — where does the Joker land?</h3>
        <p>Building a tier list of Nolan antagonists across his filmography. Drop your top three and defend them.</p>
        <div className="discussion-foot">
          <div className="stats-inline"><span><i className="fa-regular fa-comment"></i> 478 replies</span><span><i className="fa-regular fa-heart"></i> 1.4K likes</span></div>
          <a href="#" className="btn btn-ghost btn-sm">Join Discussion</a>
        </div>
      </article>

      <div className="section-head" style={{margin: "40px 0 20px"}}>
        <div><h2 style={{fontSize:"26px"}}>Movie Reviews</h2></div>
      </div>

      <div className="review-card">
        <div className="review-head">
          <img src="https://picsum.photos/seed/user1/80/80" alt=""/>
          <div>
            <div className="name">Priya R.</div>
            <div className="stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i></div>
          </div>
        </div>
        <p>Interstellar still holds up as one of the most emotionally ambitious sci-fi films ever made — the docking sequence alone is worth the rewatch.</p>
      </div>

      <div className="review-card">
        <div className="review-head">
          <img src="https://picsum.photos/seed/user2/80/80" alt=""/>
          <div>
            <div className="name">Marcus T.</div>
            <div className="stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
          </div>
        </div>
        <p>Avatar: The Way of Water is a technical marvel. The story takes a backseat to spectacle, but what spectacle it is.</p>
      </div>

      <div className="review-card">
        <div className="review-head">
          <img src="https://picsum.photos/seed/user3/80/80" alt=""/>
          <div>
            <div className="name">Elena V.</div>
            <div className="stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
          </div>
        </div>
        <p>Oppenheimer earns every one of its three hours. Murphy's performance is quietly devastating from the first frame to the last.</p>
      </div>
    </div>

    
    <aside>
      <div className="sidebar-block">
        <h3>Trending Discussions</h3>
        <div className="trend-item"><span>#DuneSpoilers</span><span className="count">4.1K posts</span></div>
        <div className="trend-item"><span>#OppenheimerEdit</span><span className="count">2.8K posts</span></div>
        <div className="trend-item"><span>#BestBatman</span><span className="count">2.2K posts</span></div>
        <div className="trend-item"><span>#SciFiRankings</span><span className="count">1.6K posts</span></div>
        <div className="trend-item"><span>#UpcomingIn2027</span><span className="count">980 posts</span></div>
      </div>

      <div className="sidebar-block">
        <h3>Recent Comments</h3>
        <p style={{fontSize:"13.5px",color:"var(--text-muted)",marginBottom:"12px"}}><strong style={{color:"var(--text)"}}>Dev K.</strong> — "The Fremen war scenes redefine what a sequel can do."</p>
        <p style={{fontSize:"13.5px",color:"var(--text-muted)",marginBottom:"12px"}}><strong style={{color:"var(--text)"}}>Aisha M.</strong> — "Heath Ledger's Joker is still unmatched, fight me."</p>
        <p style={{fontSize:"13.5px",color:"var(--text-muted)"}}><strong style={{color:"var(--text)"}}>Owen P.</strong> — "Interstellar's score by Hans Zimmer carries half the emotion."</p>
      </div>

      <a href="#" className="btn btn-primary btn-block"><i className="fa-solid fa-plus"></i> Join Discussion</a>
    </aside>

  </div>
</section>
    </>
  )
}

export default Community