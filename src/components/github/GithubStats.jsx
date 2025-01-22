import React from "react";
import "./githubStats.css";
import githubContribution from "../../assets/contribution.png";

const GithubStats = () => {
  return (
    <section className="github-stats section" id="github-stats">
      <h2 className="section__title">My GitHub Contribution</h2>
      <span className="section__subtitle">Visualizing GitHub Stats</span>

      <div className="github-stats__container container">
        {/* Contribution Chart */}
        <div className="github-stats__contribution">
          <img
            src={githubContribution}
            alt="GitHub Contribution Chart"
            className="contribution-chart"
          />
        </div>

        {/* Stats and Languages Side by Side */}
        <div className="github-stats__grid">
          <div className="github-stats__card">
            <h3>GitHub Stats</h3>
            <img
              src="https://github-readme-stats.vercel.app/api?username=AryaKS01&include_all_commits=true&count_private=true&show_icons=true&line_height=20&title_color=7A7ADB&icon_color=2234AE&text_color=D3D3D3&bg_color=0,000000,130F40"
              alt="GitHub Stats"
              className="github-stats__image"
            />
          </div>
          <div className="github-stats__card">
            <h3>Most Used Languages</h3>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=AryaKS01&show_icons=true&locale=en&layout=compact&title_color=7A7ADB&icon_color=2234AE&text_color=D3D3D3&bg_color=0,000000,130F40"
              alt="Top Languages"
              className="github-stats__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
